import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

const env = process.env.NODE_ENV || "development";
const envPath = path.resolve(__dirname, `../../../../.env.${env}`);

dotenv.config({ path: envPath });

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      detectSessionInUrl: true, // OAuth 인증 정보를 URL에서 제거
      flowType: "pkce",
    },
  },
);
