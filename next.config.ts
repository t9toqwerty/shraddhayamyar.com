import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static export suitable for GitHub Pages
  output: "export",
  images: {
    // Disable Image Optimization for static export (no Node server on GitHub Pages)
    unoptimized: true,
  },
};

export default nextConfig;
