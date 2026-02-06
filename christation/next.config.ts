import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      img-src 'self' https: http: data: blob:;
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
      style-src 'self' 'unsafe-inline' https:;
      connect-src 'self' https: http:;
      font-src 'self' https: data:;
      frame-ancestors 'none';
    `.replaceAll(/\s{2,}/g, " ").trim(),
  },
];



const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "christation.local",
      },
    ],
  }
};

export default nextConfig;
