"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
	title: string;
	description: string;
	icon: string;
};
export function ExperienceCard({ title, description, icon }: Props) {
	return (
		<Card>
			<CardSkeletonContainer>
				<Skeleton icon={icon} />
			</CardSkeletonContainer>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</Card>
	);
}

type SkeletonProps = {
	icon: string;
};
const Skeleton = ({ icon }: SkeletonProps) => {
	const scale = [1, 1.1, 1];
	const transform = [
		"translateY(0px)",
		"translateY(-4px)",
		"translateY(0px)",
	];
	const sequence = [
		[
			".circle-1",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
	];

	useEffect(() => {
		// @ts-ignore
		animate(sequence, {
			repeat: Infinity,
			repeatDelay: 1,
		});
	}, []);
	return (
		<div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
			<div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
				<Image
					className="z-50 invert"
					src={icon}
					alt=""
					width={160}
					height={160}
				/>
				<Sparkles />
			</div>
		</div>
	);
};
const Sparkles = () => {
	const randomMove = () => Math.random() * 2 - 1;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
	return (
		<div className="absolute inset-0">
			{[...Array(12)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.2, 0],
					}}
					transition={{
						duration: random() * 2 + 4,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: `2px`,
						height: `2px`,
						borderRadius: "50%",
						zIndex: 1,
					}}
					className="inline-block bg-white"
				></motion.span>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"max-w-sm w-full p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
				className
			)}
		>
			{children}
		</div>
	);
};

export const CardTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h3 className={cn("text-lg font-semibold text-white py-2", className)}>
			{children}
		</h3>
	);
};

export const CardDescription = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={cn(
				"text-sm font-normal text-neutral-400 max-w-sm",
				className
			)}
		>
			{children}
		</p>
	);
};

export const CardSkeletonContainer = ({
	className,
	children,
	showGradient = true,
}: {
	className?: string;
	children: React.ReactNode;
	showGradient?: boolean;
}) => {
	return (
		<div
			className={cn(
				"h-[15rem] md:h-[20rem] rounded-xl z-40",
				className,
				showGradient &&
					"bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
			)}
		>
			{children}
		</div>
	);
};

const Container = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				`h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
				className
			)}
		>
			{children}
		</div>
	);
};

export const ClaudeLogo = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			imageRendering="optimizeQuality"
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 512 512"
			className={className}
		>
			<rect
				fill="#CC9B7A"
				width="512"
				height="512"
				rx="104.187"
				ry="105.042"
			/>
			<path
				fill="#1F1F1E"
				fillRule="nonzero"
				d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
			/>
		</svg>
	);
};
