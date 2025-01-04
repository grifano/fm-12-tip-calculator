import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/<repository-name>", // Replace <repository-name> with your GitHub repo name
  trailingSlash: true, // Ensures all pages have a trailing slash for static hosting
};

export default nextConfig;
