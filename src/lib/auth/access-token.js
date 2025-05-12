// @ts-nocheck


import {piClient} from "@/lib/pi-network/sdk";
import {onIncompletePaymentFound} from "@/lib/pi-network/payment";

export async function getAccessToken() {
	try {
		const scopes = ["username", "payments"];
		const { authenticate } = piClient();

		const auth = await authenticate(scopes, onIncompletePaymentFound);

		if (!auth) console.error("Error getting access token");

		return auth.accessToken;
	} catch (err) {
		console.error(err.message || err || "Could not get access token");
	}
}

export async function verifyAccessToken(accessToken) {
	try {
		const response = await fetch(`${process.env.PI_API_URL}/me`, {
			headers: { authorization: `Bearer ${accessToken}` },
		});

		if (!response.ok) {
			console.log(`Invalid token: ${accessToken}`);
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error("Token verification error:", error);
		return null;
	}
}
