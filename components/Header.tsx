"use client";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();

	// Split the pathname into segments
	const pathSegments = pathname.split("/").filter((segment) => segment);
	return (
		<div className="w-full h-fit py-5 flex flex-row items-center justify-between fixed left-0 px-80 z-50 from-background via-background to-transparent bg-gradient-to-b">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">trygve.dev</BreadcrumbLink>
					</BreadcrumbItem>
					{pathSegments.map((segment, index) => {
						const href =
							"/" + pathSegments.slice(0, index + 1).join("/");
						const isLast = index === pathSegments.length - 1;
						return (
							<React.Fragment key={href}>
								<BreadcrumbSeparator />
								<BreadcrumbItem className="capitalize">
									{isLast ? (
										<BreadcrumbPage>
											{segment}
										</BreadcrumbPage>
									) : (
										<BreadcrumbLink href={href}>
											{segment}
										</BreadcrumbLink>
									)}
								</BreadcrumbItem>
							</React.Fragment>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
			<Button
				variant="outline"
				className="w-10 h-10 p-0"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
				{theme === "light" ? (
					<Sun className="animate-in animate-out" />
				) : (
					<Moon className="animate-in animate-out" />
				)}
			</Button>
		</div>
	);
};
