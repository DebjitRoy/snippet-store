import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // prevents build from failing due to ESLint
  },
};

export default nextConfig;
