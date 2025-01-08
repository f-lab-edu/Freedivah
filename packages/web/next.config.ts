import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import dotenv from "dotenv";
import type { NextConfig } from "next";
import path from "path";

const env = process.env.NODE_ENV || "development";
const envPath = path.resolve(__dirname, `../../.env.${env}`);
dotenv.config({ path: envPath });

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@shared": "@freedivah/shared",
    };
    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
