import { connectToDatabase } from "@/lib/mongodb/connection";

export async function getCollections() {
	const client = await connectToDatabase();
	const db = client.db();

	return {
		userCollection: db.collection("users"),
		orderCollection: db.collection("orders"),
	};
}
