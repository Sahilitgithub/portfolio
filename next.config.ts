import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // this includes files from the monorepo base two directories up
  transpilePackages: ['three'],
  outputFileTracingRoot: path.join(__dirname, '../../'),
 // Keep this official timeout for slow static page generation (if needed)
  staticPageGenerationTimeout: 60, // Default is 60 seconds. Increase only if build fails.
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
