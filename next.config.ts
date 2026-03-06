import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const normalizedBasePath = (process.env.BASE_PATH ?? "")
  .trim()
  .replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: isStaticExport && normalizedBasePath ? normalizedBasePath : undefined,
  assetPrefix: isStaticExport && normalizedBasePath ? `${normalizedBasePath}/` : undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
