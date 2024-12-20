"use client";

import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { socialLinks } from "@/lib/data";

export function ConfettiButton() {
	const triggerConfetti = (e: React.MouseEvent<HTMLButtonElement>) => {
		// Get the button's position relative to the viewport
		const button = e.currentTarget;
		const rect = button.getBoundingClientRect();

		// Calculate the origin point (center of the button)
		const x = (rect.left + rect.width / 2) / window.innerWidth;
		const y = (rect.top + rect.height / 2) / window.innerHeight;

		confetti({
			particleCount: 100,
			spread: 70,
			origin: { x, y },
			colors: [
				"#ED2939", // Red
				"#00FF00", // Green
				"#1E90FF", // Blue
				"#FFD700", // Gold
				"#FF69B4", // Hot Pink
				"#4B0082", // Indigo
				"#FF4500", // Orange Red
				"#9400D3", // Violet
			],
			startVelocity: 30,
			gravity: 0.8,
			scalar: 0.7,
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				delay: (socialLinks.length + 1) * 0.1 + 0.5,
			}}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<Button
				variant="outline"
				size="icon"
				className="bg-background/50 backdrop-blur-sm"
				onClick={triggerConfetti}
			>
				<PartyPopper size={16} />
			</Button>
		</motion.div>
	);
}
