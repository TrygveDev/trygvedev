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
				hostname: "www.renow.no",
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
		],
	},
};

module.exports = withPlausibleProxy()(nextConfig);
