import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function handleFetchError(response) {
  let message = response.statusText;

  try {
    const errorBody = await response.json();
    message = errorBody?.message || errorBody?.error || message;
  } catch {
    // Silent fail
  }

  const error = new Error(message)
  error.status = response.status;
  throw error;
}
