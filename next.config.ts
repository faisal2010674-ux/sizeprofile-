import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export for InfinityFree hosting */
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
