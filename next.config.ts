import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mrpp",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
