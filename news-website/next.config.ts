import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable strict mode (optional)
  env: {
    SOME_KEY: process.env.SOME_KEY, // Add your environment variable here
  },
  {
  "routes": [
    { "src": "/_next/(.*)", "dest": "/_next/$1" }
  ]
}
};

export default nextConfig;
