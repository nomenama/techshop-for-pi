import { NextResponse } from "next/server";
import { getCollections } from "@/lib/mongodb/collections";

export async function POST(request) {
	const body = await request.json();
	const paymentId = body.paymentId;

	try {
		const { orderCollection } = await getCollections();

		await orderCollection.updateOne(
			{ "transaction.paymentId": paymentId },
			{
				$set: {
					updatedAt: new Date(),
					status: "cancelled",
					statusDetails: "Order cancelled by user",
					"transaction.cancelled": true,
				},
			}
		);

		return NextResponse.json({ message: "Order cancelled" }, {status: 200});
	} catch (error) {
		return NextResponse.json({ message: "Internal server error" }, {status: 500});
	}
}
