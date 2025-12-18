import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1", // <--- Use the IP here
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost", // Keep this just in case
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
