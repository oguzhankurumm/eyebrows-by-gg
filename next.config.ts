import type { NextConfig } from "next";
import { redirects } from "./data/redirects";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // unoptimized: true, // Commented out for production perfromance. Enable only if debugging local image issues.
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
