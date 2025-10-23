import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // this includes files from the monorepo base two directories up
  transpilePackages: ['three'],
  outputFileTracingRoot: path.join(__dirname, '../../'),
  /* config options here */
  images: {
    remotePatterns: [ 
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      }
    ],
  }
};

export default nextConfig;
