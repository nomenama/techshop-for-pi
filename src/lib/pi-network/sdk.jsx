"use client";

import Script from "next/script";

export const PiScript = () => {
	return (
		<Script
			src="https://sdk.minepi.com/pi-sdk.js"
			strategy="afterInteractive"
			onLoad={() => {
				if (window.Pi) {
					window.Pi.init({
						version: "2.0",
						sandbox: process.env.NODE_ENV !== "production",
					});
				}
			}}
		/>
	);
};

export const piClient = () => {
	if (typeof window !== "undefined" && window.Pi) {
		const { authenticate, createPayment: createPiPayment } = window.Pi;
		return { authenticate, createPiPayment };
	}

	return null;
};
