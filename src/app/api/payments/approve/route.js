import { getCollections } from "@/lib/mongodb/collections";
import {verifyAccessToken} from "@/lib/auth/access-token";
import {NextResponse} from "next/server";
import {fetchServer} from "@/lib/pi-network/api/server-fetch";

export async function POST(request) {
	const authHeader = request.headers.get("authorization");
	const token = authHeader.split(" ")[1];

	try {

		const verifiedUser = await verifyAccessToken(token);
		if (!verifiedUser) {
			return NextResponse.json(
				{ message: "Sign in required." }
			);
		}

		const body = await request.json();
		const { paymentId } = body;
		const { orderCollection } = await getCollections();
		const date = new Date()

		const payment = await fetchServer(`/payments/${paymentId}`, { method: "GET" });

		await orderCollection.insertOne({
			status: "merchant_approved",
			createdAt: date,
			updatedAt: date,
			product: payment.metadata.name,
			price: payment.metadata.price,
			"transaction.paymentId": paymentId,
			"transaction.txid": null,
			"transaction.paid": false,
			"transaction.cancelled": false,
		});

		await fetchServer(`/payments/${paymentId}/approve`, { method: "POST" });
		return NextResponse.json({ message: `Payment ${paymentId} approved.` });
	} catch (error) {
		return NextResponse.json({ message: error?.message || error || "Internal Server Error" });
	}
}
