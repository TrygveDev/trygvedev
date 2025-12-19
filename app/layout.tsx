import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PlausibleProvider from "next-plausible";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "trygve.dev",
	description:
		"Full Stack Developer specializing in Next.js, React, and TypeScript. View my portfolio, projects, and experience.",
	keywords:
		"Trygve, Full Stack Developer, Next.js, React, TypeScript, Web Development",
	authors: [{ name: "TrygveDev" }],
	creator: "TrygveDev",
	publisher: "TrygveDev",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://trygve.dev",
		siteName: "trygve.dev",
		title: "trygve.dev",
		description:
			"Full Stack Developer specializing in Next.js, React, and TypeScript. View my portfolio, projects, and experience.",
		images: [
			{
				url: "https://trygve.dev/og-image.png",
				width: 1200,
				height: 630,
				alt: "trygve.dev",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "trygve.dev",
		description:
			"Full Stack Developer specializing in Next.js, React, and TypeScript. View my portfolio, projects, and experience.",
		creator: "@trygvedev",
		images: ["https://trygve.dev/og-image.png"],
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},

	manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	themeColor: "#020817",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<PlausibleProvider domain="trygve.dev" selfHosted>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						forcedTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</PlausibleProvider>
			</body>
		</html>
	);
}
