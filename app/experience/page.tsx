"use client";
import { Fade, Slide } from "react-awesome-reveal";
import { ExperienceCard } from "./ExperienceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Experience() {
	return (
		<div className="min-h-dvh w-full flex flex-col px-80 pt-[80px] h-full justify-center gap-6">
			<div className="w-full flex justify-between items-center flex-row">
				<Slide triggerOnce duration={1000}>
					<div>
						<h1 className="font-light text-[2rem]">
							My{" "}
							<span className="text-primary font-bold">
								Experience
							</span>
						</h1>
						<p className="text-sm text-muted-foreground">
							Here&apos;s a glimpse of some of my most notable
							experiences.
						</p>
					</div>
				</Slide>
				{/* <Slide direction="right" triggerOnce duration={1000}>
					<Button className="gap-2 ml-6" variant="secondary">
						Download my CV <Download />
					</Button>
				</Slide> */}
			</div>

			<div className="grid grid-cols-2 gap-6">
				<Fade cascade delay={500} duration={1000}>
					<ExperienceCard
						title="Full-stack Developer"
						company="Kripos"
						type="Full-time"
						startDate={new Date(2023, 9)}
						endDate={"Present"}
						description="Developed applications and systems for the Norwegian
						Police (Kripos), focusing on enhancing efficiency,
						security, and user experience. Utilized various modern
						frameworks built on React for frontend development,
						alongside Go for backend tasks. Worked predominantly on
						frontend projects while contributing to backend
						development as needed."
						image="/experience/kripos.png"
						skills={["React", "Go", "TypeScript", "UI/UX", "Git"]}
					/>
					<ExperienceCard
						title="CEO, Founder"
						company="Renow UB"
						type="Self-employed"
						startDate={new Date(2023, 9)}
						endDate={"Present"}
						description="Founder and CEO of Renow UB, a company dedicated to delivering high-quality websites with a focus on sustainability and environmental responsibility. As part of the Norwegian Ungt Entreprenørskap program, we are committed to reducing the digital industry's carbon footprint through eco-friendly practices, such as using renewable energy hosting and optimizing websites for lower energy consumption."
						image="/experience/renow.svg"
						skills={[
							"NextJS",
							"Git",
							"Leadership",
							"SEO",
							"Business",
						]}
					/>
					<ExperienceCard
						title="Intern Developer"
						company="Kripos"
						type="Internship"
						startDate={new Date(2023, 2)}
						endDate={new Date(2023, 4)}
						description="Worked on developing smaller-scale applications and in-house solutions for the Norwegian Police (Kripos). Focused on improving efficiency, security, and user experience by utilizing modern frameworks built on React for frontend tasks and Express for backend support. Gained hands-on experience with various tools and technologies while collaborating on both frontend and backend development."
						image="/experience/kripos.png"
						skills={[
							"React",
							"Express",
							"TypeScript",
							"Authentication",
							"Git",
						]}
					/>
					<ExperienceCard
						title="High School / Videregående Skole"
						company="Drømtorp VGS"
						type="Full-time"
						startDate={new Date(2021, 7)}
						endDate={new Date(2024, 5)}
						description="Completed a two-year IT program focusing on web development and programming fundamentals. In the third year, pursued påbygg for further education, which included advanced studies in subjects such as Norwegian, English, mathematics, and social studies. Gained a well-rounded academic foundation and developed skills in research, writing, and critical thinking, preparing for higher education and future career opportunities."
						image="/experience/dromtorp.svg"
						skills={["HTML", "CSS", "JavaScript", "PHP"]}
					/>
				</Fade>
			</div>

			<Fade delay={2500}>
				<div className="w-full flex items-center justify-center flex-col gap-2">
					<p className="text-sm text-muted-foreground">
						Ready to check out my projects?
					</p>
					<Link href="/projects">
						<Button className="gap-2" variant="outline">
							Projects <ArrowRight />
						</Button>
					</Link>
				</div>
			</Fade>
		</div>
	);
}
