"use client";
import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
	return (
		<div className="w-full pt-12 h-36 flex flex-col gap-2 px-80 text-muted-foreground">
			<div className="border-t w-full h-full border-muted flex flex-row gap-3 items-center justify-evenly text-primary">
				<p>© {new Date().getFullYear()} trygve.dev</p>
				<Link
					href="https://github.com/TrygveDev/TrygveDev"
					target="_blank"
				>
					<Button variant="link" className="w-fit gap-2">
						<GitHubLogoIcon />
						View this page on GitHub
					</Button>
				</Link>
			</div>
		</div>
	);
};
