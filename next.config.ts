import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/cv',   // GitHub Pages subpath
  images: {
    unoptimized: true,  // Required for static export
  },
};

export default nextConfig;
