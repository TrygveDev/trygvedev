import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
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
		],
	},
};

export default nextConfig;
