"use client";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
	return (
		<div className="min-h-dvh w-full flex flex-col px-80 pt-[80px] justify-center gap-6">
			<div className="w-full flex justify-between items-center flex-row">
				<Slide triggerOnce duration={1000}>
					<div>
						<h1 className="font-light text-[2rem]">
							My{" "}
							<span className="text-primary font-bold">
								Projects
							</span>
						</h1>
						<p className="text-sm text-muted-foreground">
							This is some of my released and production ready
							projects.
						</p>
					</div>
				</Slide>
				<Slide direction="right" triggerOnce duration={1000}>
					<Link href="https://github.com/TrygveDev" target="_blank">
						<Button className="gap-2 ml-6" variant="secondary">
							<GitHubLogoIcon />
							Show on GitHub
						</Button>
					</Link>
				</Slide>
			</div>

			<div className="w-full">
				<Fade delay={500} duration={1000}>
					<Carousel>
						<CarouselContent className="w-1/2">
							<CarouselItem>
								<ProjectCard
									title="Renow UB - Homepage"
									date={new Date(2023, 9)}
									description="The official website for Renow UB, a company dedicated to delivering high-quality websites with a focus on sustainability and environmental responsibility."
									link="https://www.renow.no/"
									image="/projects/renow.png"
									stack={[
										"Next.js",
										"Tailwind CSS",
										"Vercel",
									]}
								/>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</Fade>
			</div>

			<Fade delay={1000}>
				<div className="w-full flex items-center justify-center flex-col gap-2">
					<p className="text-sm text-muted-foreground">
						Check out where i learned how to do this
					</p>
					<Link href="/experience">
						<Button className="gap-2" variant="outline">
							Experience <ArrowRight />
						</Button>
					</Link>
				</div>
			</Fade>
		</div>
	);
}
