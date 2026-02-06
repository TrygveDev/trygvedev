import type { NextConfig } from "next";

import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/57544728",
      },
      {
        protocol: "https",
        hostname: "renow.no",
      },
      {
        protocol: "https",
        hostname: "feedfa.st",
      },
      {
        protocol: "https",
        hostname: "trygve.dev",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "livemd.trygve.dev",
      },
      {
        protocol: "https",
        hostname: "police2peer.politiet.no",
      },
    ],
  },
};

module.exports = withPlausibleProxy()(nextConfig);
