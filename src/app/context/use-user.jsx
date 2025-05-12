"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAccessToken } from "@/lib/auth/access-token";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const authenticateUser = async () => {
		setIsLoading(true);
		try {
			const accessToken = await getAccessToken();
			const response = await fetch("/api/user/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ accessToken }),
			});

			if (!response.ok) return null;

			return await response.json();
		} catch (error) {
			console.error("Authentication error:", error);
			return null;
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		let interval;
		let timeout;

		const waitForPi = () => {
			if (typeof window !== "undefined" && window.Pi) {
				clearInterval(interval);
				clearTimeout(timeout);

				authenticateUser().then((authenticatedUser) => {
					if (authenticatedUser) {
						setUser(authenticatedUser);
						sessionStorage.setItem("access_token", authenticatedUser.accessToken);
					} else {
						console.error("Failed to sign in.");
					}
				});
			}
		};

		interval = setInterval(waitForPi, 200);
		timeout = setTimeout(() => clearInterval(interval), 5000);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				isLoading,
				authenticateUser,
			}}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
