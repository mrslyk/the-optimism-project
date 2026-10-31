import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { tsconfigPath: "tsconfig.netlify.json" },
  // Netlify provides the site's production origin during builds.
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.URL ||
      "https://optimism-project.netlify.app",
  },
};

export default nextConfig;
