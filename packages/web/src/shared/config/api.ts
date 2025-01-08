import { createAxiosInstance } from "./axios";

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
}

export const api = createAxiosInstance(
  `${process.env.NEXT_PUBLIC_API_URL}/api`,
);
