import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
if (!URI) throw new Error("MongoDB URI is missing from the .env");

export const connectToDatabase = async () => {
	return await MongoClient.connect(URI);
};
