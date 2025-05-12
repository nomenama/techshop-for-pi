import { getCollections } from "@/lib/mongodb/collections";
import {  NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth/access-token";

export async function POST(request) {
	try {
		const { accessToken } = await request.json();

		if (!accessToken) return NextResponse.json({ message: "Token is required" });

		const { userCollection } = await getCollections();

		const verifiedUser = await verifyAccessToken(accessToken);
		if (!verifiedUser) return NextResponse.json({ error: "Invalid access token" });

		const { uid, username } = verifiedUser;

		const updatedUser = await userCollection.findOneAndUpdate(
			{ uid },
			{
				$set: {
					username,
					lastLogin: new Date(),
				},
				$setOnInsert: {
					isBanned: false,
				},
			},
			{ upsert: true, returnDocument: "after" }
		);

		if (updatedUser.isBanned) return NextResponse.json({ error: "Not allowed" });

		return NextResponse.json({
			uid,
			username,
			accessToken
		});

	} catch (error) {
		return NextResponse.json({ error: "Internal server error" });
	}
}
