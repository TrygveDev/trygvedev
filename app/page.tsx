import { ExperienceCard } from "@/components/blocks/ExperienceCard";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Home() {
	const products = [
		{
			title: "Moonbeam",
			link: "https://gomoonbeam.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
		},
		{
			title: "Cursor",
			link: "https://cursor.so",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/cursor.png",
		},
		{
			title: "Rogue",
			link: "https://userogue.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/rogue.png",
		},

		{
			title: "Editorially",
			link: "https://editorially.org",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/editorially.png",
		},
		{
			title: "Editrix AI",
			link: "https://editrix.ai",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/editrix.png",
		},
		{
			title: "Pixel Perfect",
			link: "https://app.pixelperfect.quest",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
		},

		{
			title: "Algochurn",
			link: "https://algochurn.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/algochurn.png",
		},
		{
			title: "Aceternity UI",
			link: "https://ui.aceternity.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
		},
		{
			title: "Tailwind Master Kit",
			link: "https://tailwindmasterkit.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
		},
		{
			title: "SmartBridge",
			link: "https://smartbridgetech.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
		},
		{
			title: "Renderwork Studio",
			link: "https://renderwork.studio",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/renderwork.png",
		},

		{
			title: "Creme Digital",
			link: "https://cremedigital.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
		},
		{
			title: "Golden Bells Academy",
			link: "https://goldenbellsacademy.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
		},
		{
			title: "Invoker Labs",
			link: "https://invoker.lol",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/invoker.png",
		},
		{
			title: "E Free Invoice",
			link: "https://efreeinvoice.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
		},
	];

	return (
		<main className="max-w-screen mb-24">
			<section>
				<HeroParallax products={products} />
			</section>
			<section>
				<h1 className="text-2xl md:text-7xl font-bold p-5 w-full">
					My experience
				</h1>
				<div className="flex gap-12 flex-row justify-center items-center">
					<ExperienceCard
						title="Kripos, Application Developer"
						description="Development of applications and systems for the Norwegain Police, Kripos."
						icon="https://www.vg.no/spesial/2017/samlok/img/112.png"
					/>
					<ExperienceCard
						title="Renow UB, CEO & CO-Founder"
						description="CEO and CO-Founder of Renow UB. We develop and design websites for businesses."
						icon="https://www.renow.no/logo.svg"
					/>
				</div>
			</section>
		</main>
	);
}
