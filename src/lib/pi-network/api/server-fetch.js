import { handleFetchError } from "@/lib/utils";

export const fetchServer = async (endpoint, data) => {
    const BASE_URL = process.env.PI_API_URL;
    const key = process.env.PI_API_KEY;
    if (!BASE_URL || !key) throw new Error("PI_API_URL and PI_API_KEY must be set in .env");

    const { method = "GET", headers = {}, body } = data;

    const config = {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Key ${key}`,
            ...headers,
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
    };

    const response = await fetch(`${BASE_URL}/${endpoint}`, config);

    if (!response.ok) await handleFetchError(response);

    return response.json();
};
