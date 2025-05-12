import { getCollections } from "@/lib/mongodb/collections";
import { NextResponse } from "next/server";
import {fetchServer} from "@/lib/pi-network/api/server-fetch";

export async function POST(request) {
	try {
		const { orderCollection } = await getCollections();
		const { paymentId, txid } = await request.json();

		const { transaction, from_address: customerWalletAddress } = await fetchServer(
			`/payments/${paymentId}/complete`,
			{
				method: "POST",
				body: { txid },
			}
		);

		const { txid: transactionId, _link: link, verified } = transaction;

		await orderCollection.findOneAndUpdate(
			{ "transaction.paymentId": paymentId },
			{
				$set: {
					status: "payment_completed",
					statusDetails: "Payment completed",
					updatedAt: new Date(),
					"transaction.txid": transactionId,
					"transaction.paid": true,
					"transaction.customerWalletAddress": customerWalletAddress,
					"transaction.isVerified": verified,
					"transaction.link": link,
				},
			}
		);

		return NextResponse.json({ message: "Transaction successful" }, {status: 200});
	} catch (error) {
		return NextResponse.json({ message: "Internal server error" }, {status: 500});
	}
}
