import { handleFetchError } from "@/lib/utils";

export const fetchClient = async (endpoint, method = "GET", data) => {
    const API_BASE_URL = typeof window !== "undefined" ? window.location.origin : "";
    const accessToken = sessionStorage.getItem("access_token");

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
    };

    const options = {
        method,
        headers,
        ...(method !== "GET" && data ? { body: JSON.stringify(data) } : {}),
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (!response.ok) await handleFetchError(response);

    return response.json();
};
