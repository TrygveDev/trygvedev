import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Rubik } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const rubik = Rubik({
	subsets: ["latin"],
	variable: "--font-rubik",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "trygve.dev",
	description: "Hi, I'm Trygve👋",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={rubik.variable + " " + roboto.variable}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
