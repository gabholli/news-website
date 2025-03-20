import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable strict mode (optional)
  env: {
    SOME_KEY: process.env.SOME_KEY, // Add your environment variable here
  },
  async rewrites() {
    return [
      { source: "/_next/(.*)", destination: "/_next/$1" }, // Correct keys for source and destination
    ];
  },
};

export default nextConfig;
