"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const getYearsSince = (startDate: string) => {
	const currentDate = new Date();
	const start = new Date(startDate);

	let yearsDifference = currentDate.getFullYear() - start.getFullYear();

	// Adjust if the current date has not yet reached the start date in the current year
	const hasNotReachedStartDateThisYear =
		currentDate.getMonth() < start.getMonth() ||
		(currentDate.getMonth() === start.getMonth() &&
			currentDate.getDate() < start.getDate());

	if (hasNotReachedStartDateThisYear) {
		yearsDifference--;
	}

	return yearsDifference;
};

export default function Home() {
	return (
		<div className="flex flex-col px-80 h-dvh justify-center gap-6 w-2/3">
			<div>
				<Slide triggerOnce duration={1000}>
					<Fade duration={1000}>
						<h1 className="font-light text-[3rem]">
							Hi, I&apos;m{" "}
							<span className="text-primary font-bold">
								Trygve👋
							</span>
						</h1>
					</Fade>
				</Slide>
				<Slide triggerOnce duration={1000} delay={500}>
					<Fade duration={1000} delay={500}>
						<p className="font-light text-muted-foreground text-balance">
							I am a{" "}
							<span className="text-primary font-medium">
								{getYearsSince("2005-08-16")}
							</span>
							-year-old web developer from Oslo, Norway,
							passionate about building sleek, modern web
							applications using the{" "}
							<span className="text-primary font-medium">
								latest frameworks
							</span>{" "}
							and tools.
						</p>
					</Fade>
				</Slide>
			</div>

			<Fade triggerOnce delay={1250} duration={1000}>
				<div className="flex flex-row gap-3">
					<Link href="/experience">
						<Button className="gap-2" variant="outline">
							Experience <ArrowRight />
						</Button>
					</Link>
					<Link href="/projects">
						<Button className="gap-2" variant="outline">
							Projects <ArrowRight />
						</Button>
					</Link>
					{/* <Button className="gap-2 ml-6" variant="secondary">
						Download my CV <Download />
					</Button> */}
				</div>
			</Fade>
		</div>
	);
}
