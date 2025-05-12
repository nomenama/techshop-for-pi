import { NextResponse } from "next/server";
import { getCollections } from "@/lib/mongodb/collections";
import {fetchServer} from "@/lib/pi-network/api/server-fetch";

export async function POST(request) {
	try {
		const { payment } = await request.json();
		const { identifier: paymentId, transaction } = payment;
		const { txid, _link: link } = transaction;

		const { orderCollection } = await getCollections();
		const order = await orderCollection.findOne({ "transaction.paymentId": paymentId });

		if (!order) {
			return NextResponse.json({ message: "Order not found" });
		}

		// Verify transaction on Pi blockchain
		const horizonRes = await fetch(link);
		const { memo: paymentIdFromBlockchain } = await horizonRes.json();

		if (paymentIdFromBlockchain !== paymentId) {
			return NextResponse.json({ message: "Payment ID doesn't match." }, {status: 400});
		}

		// Notify Pi server
		const { transaction: verifiedTransaction, from_address: customerWalletAddress } = await fetchServer(
			`/payments/${paymentId}/complete`,
			{
				method: "POST",
				body: { txid },
			}
		);

		await orderCollection.findOneAndUpdate(
			{ "transaction.paymentId": paymentId },
			{
				$set: {
					status: "payment_completed",
					statusDetails: "Payment completed",
					updatedAt: new Date(),
					"transaction.txid": verifiedTransaction.txid,
					"transaction.paid": true,
					"transaction.customerWalletAddress": customerWalletAddress,
					"transaction.isVerified": verifiedTransaction.verified,
					"transaction.link": verifiedTransaction.link,
				},
			},
			{ returnDocument: "after" }
		);

		return NextResponse.json({ message: "Incomplete Payment Completed" }, {status: 200});
	} catch (error) {
		return NextResponse.json({ message: error || error?.message || "Internal server error" }, {status: 500});
	}
}
