import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "christation.local",
        pathname: "/wp-content/uploads/**",
      },
    ],
  }
};

export default nextConfig;