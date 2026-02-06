"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CakeIcon, ExternalLink, InfoIcon, MapPin } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, GraduationCap, Lightbulb } from "lucide-react";
import {
	education,
	projects,
	skills,
	socialLinks,
	techStack,
	workExperience,
} from "@/lib/data";
import { motion } from "motion/react";
import Link from "next/link";
import { ConfettiButton } from "@/components/confetti-button";
import { Badge } from "@/components/ui/badge";
import { format, formatDistance } from "date-fns";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const MotionCard = motion.create(Card);

function trackProjectClick(projectTitle: string, linkType: string) {
	void import("@plausible-analytics/tracker").then(({ track }) =>
		track("Project Click", {
			props: { project: projectTitle, link: linkType },
		}),
	);
}

export default function Home() {
	return (
		<div className="min-h-screen bg-background flex flex-col gap-6 py-8 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
			<header className="w-full">
				<div className="relative overflow-hidden rounded-xl border bg-gradient-to-b from-secondary/50 to-secondary p-4 sm:p-6 backdrop-blur-sm">
					<div className="absolute inset-0 bg-grid-white/10" />
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
							<motion.div
								initial={{ scale: 0.5, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="relative h-28 w-28 sm:h-40 sm:w-40 shrink-0"
							>
								<div className="absolute -inset-2 animate-pulse rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-xl" />
								<Image
									src="https://avatars.githubusercontent.com/u/57544728?v=4"
									alt="Profile Picture"
									fill
									className="relative rounded-full border-2 border-border object-cover shadow-xl"
								/>
							</motion.div>
							<div className="space-y-4 text-center sm:text-left">
								<motion.h1
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									className="text-3xl sm:text-4xl font-bold tracking-tight"
								>
									Trygve
								</motion.h1>
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
									className="max-w-2xl text-lg sm:text-xl text-muted-foreground"
								>
									Hi there!{" "}
									<motion.span
										animate={{
											rotate: [0, 15, -5, 15, -5, 0],
										}}
										transition={{
											duration: 1.5,
											ease: "easeInOut",
											times: [0, 0.2, 0.4, 0.6, 0.8, 1],
											delay: 1.0,
										}}
										className="inline-block"
									>
										👋
									</motion.span>{" "}
									I&apos;m Trygve, a tech enthusiast who loves
									turning big ideas into simple, useful tools.
								</motion.p>
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.5,
										delay: 0.4,
									}}
									className="w-full text-center justify-center sm:text-left text-sm sm:text-base text-muted-foreground flex sm:justify-start gap-4"
								>
									<span className="flex items-center">
										<CakeIcon className="h-4 w-4 mr-1.5 inline-block" />
										{new Date().getFullYear() - 2005} years
										old
									</span>
									<span className="flex items-center">
										<MapPin className="h-4 w-4 mr-1.5 inline-block" />
										Norway 🇳🇴
									</span>
								</motion.p>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
									className="flex justify-center sm:justify-start gap-4"
								>
									{socialLinks.map((link, index) => (
										<motion.div
											key={link.url}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{
												scale: {
													type: "spring",
													duration: 0.3,
												},
												opacity: {
													duration: 0.3,
													delay: index * 0.1 + 0.5,
												},
											}}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button
												variant="outline"
												size="icon"
												className="bg-background/50 backdrop-blur-sm"
												asChild
											>
												<Link
													href={link.url}
													target="_blank"
												>
													<Image
														src={link.icon}
														alt={link.url}
														width={20}
														height={20}
													/>
												</Link>
											</Button>
										</motion.div>
									))}
									<ConfettiButton />
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</header>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.25 }}
				className="w-full"
			>
				<main>
					<Tabs defaultValue="experience" className="space-y-6">
						<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
							<TabsList className="w-full sm:w-fit justify-start overflow-x-auto">
								<TabsTrigger
									value="experience"
									className="flex-grow sm:flex-grow-0"
								>
									<Briefcase className="h-4 w-4 mr-2" />
									Experience
								</TabsTrigger>
								<TabsTrigger
									value="projects"
									className="flex-grow sm:flex-grow-0"
								>
									<Code className="h-4 w-4 mr-2" />
									Projects
								</TabsTrigger>
								<TabsTrigger
									value="education"
									className="flex-grow sm:flex-grow-0"
								>
									<GraduationCap className="h-4 w-4 mr-2" />
									Education
								</TabsTrigger>
								<TabsTrigger
									value="skills"
									className="flex-grow sm:flex-grow-0"
								>
									<Lightbulb className="h-4 w-4 mr-2" />
									Skills
								</TabsTrigger>
							</TabsList>

							<div className="relative w-full sm:w-fit flex flex-row items-center justify-start rounded-lg bg-gradient-to-b from-secondary/50 to-secondary text-muted-foreground backdrop-blur-sm h-9 overflow-x-auto whitespace-nowrap">
								<div className="absolute inset-0 bg-grid-white/10" />
								<div className="relative flex flex-row gap-2 items-center justify-start px-3">
									<p className="text-sm font-medium">
										Favorite Tech Stack
									</p>
									<div className="flex flex-row">
										{techStack.map((tech, index) => (
											<motion.div
												key={tech.name}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													scale: {
														type: "spring",
														duration: 0.3,
													},
													opacity: {
														duration: 0.3,
														delay:
															index * 0.1 + 0.5,
													},
												}}
												className="h-9 w-9 flex items-center justify-center"
											>
												<TooltipProvider
													delayDuration={0}
												>
													<Tooltip>
														<TooltipTrigger asChild>
															<Button
																variant="outline"
																size="icon"
																className="h-7 w-7 p-1.5 bg-background/45 backdrop-blur-sm"
																asChild
															>
																<Link
																	href={
																		tech.url
																	}
																	target="_blank"
																>
																	<Image
																		src={
																			tech.logo
																		}
																		alt={
																			tech.name
																		}
																		width={
																			100
																		}
																		height={
																			100
																		}
																		className="transition-transform hover:scale-110 object-cover"
																	/>
																</Link>
															</Button>
														</TooltipTrigger>
														<TooltipContent className="bg-background/50 backdrop-blur-sm text-foreground max-w-[350px] space-y-1">
															<p className="font-medium">
																{tech.name}
															</p>
															<p className="text-xs text-muted-foreground">
																{
																	tech.description
																}
															</p>
															<p className="text-xs text-muted-foreground flex items-center gap-1">
																Click to read
																more
																<ExternalLink className="h-3 w-3" />
															</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</div>

						<TabsContent value="experience" asChild>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								exit={{ opacity: 0, y: -20 }}
							>
								<div className="grid gap-6">
									{[...workExperience]
										.sort((a, b) => {
											const aIsPresent = !a.endDate;
											const bIsPresent = !b.endDate;

											// Present items first
											if (aIsPresent && !bIsPresent) return -1;
											if (!aIsPresent && bIsPresent) return 1;

											// Then sort by startDate descending (latest first)
											return b.startDate.getTime() - a.startDate.getTime();
										})
										.map((job, index) => (
											<MotionCard
												key={index}
												whileHover={{
													scale: 1.02,
													transition: { duration: 0.2 },
												}}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.3,
													delay: index * 0.1,
												}}
												className={!job.endDate ? "border-2 border-primary" : ""}
											>
												<CardContent className="p-4 sm:p-6">
													<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-center sm:text-left">
														<Image
															src={job.logo}
															alt={job.company}
															width={200}
															height={200}
															className="rounded-lg aspect-square object-contain w-16 h-16 sm:w-24 sm:h-24 border bg-secondary p-2"
														/>
														<div className="space-y-2">
															{job.startDate.getTime() >=
																new Date().getTime() && (
																	<Badge className="ml-auto">
																		Not started
																	</Badge>
																)}
															<h3 className="text-xl font-semibold">
																{job.title}
															</h3>
															<p className="text-muted-foreground flex items-center justify-between">
																{job.company} •{" "}
																{format(
																	job.startDate,
																	"MMM yyyy"
																)}{" "}
																-{" "}
																{job.endDate
																	? format(
																		job.endDate,
																		"MMM yyyy"
																	)
																	: "Present"}{" "}
																•{" "}
																{formatDistance(
																	job.startDate,
																	job.endDate ??
																	new Date()
																)}
															</p>
															<p className="text-sm sm:text-base">
																{job.description}
															</p>
														</div>
													</div>
												</CardContent>
											</MotionCard>
										))}
								</div>
							</motion.div>
						</TabsContent>

						<TabsContent value="projects" asChild>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								exit={{ opacity: 0, y: -20 }}
							>
								<div className="grid gap-6 sm:grid-cols-2">
									{projects.map((project, index) => (
										<MotionCard
											key={index}
											whileHover={{
												scale: 1.03,
												boxShadow:
													"0 10px 30px rgba(0,0,0,0.2)",
												transition: { duration: 0.2 },
											}}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												duration: 0.3,
												delay: index * 0.1,
											}}
											className="flex flex-col overflow-hidden"
										>
											<CardContent className="p-4 flex flex-col gap-4">
												<Image
													src={project.image}
													alt={project.title}
													width={600}
													height={600}
													className="w-full rounded-lg border aspect-[1.91/1]"
												/>
												<div className="flex flex-col justify-center gap-2">
													<h3 className="text-xl font-semibold">
														{project.title}
													</h3>
													<p className="text-muted-foreground text-sm sm:text-base">
														{project.description}
													</p>
													<div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
														{project.moreInfoUrl && (
															<motion.div
																whileHover={{
																	scale: 1.05,
																}}
																className="w-full sm:w-auto"
															>
																<Button
																	variant="outline"
																	className="w-full sm:w-auto"
																	asChild
																>
																	<a
																		href={
																			project.moreInfoUrl
																		}
																		target="_blank"
																		rel="noopener noreferrer"
																		onClick={() =>
																			trackProjectClick(
																				project.title,
																				"more_info",
																			)
																		}
																	>
																		<InfoIcon className="h-4 w-4 mr-2" />
																		More Info
																	</a>
																</Button>
															</motion.div>
														)}
														{project.githubUrl && (
															<motion.div
																whileHover={{
																	scale: 1.05,
																}}
																className="w-full sm:w-auto"
															>
																<Button
																	variant="outline"
																	className="w-full sm:w-auto"
																	asChild
																>
																	<a
																		href={
																			project.githubUrl
																		}
																		target="_blank"
																		rel="noopener noreferrer"
																		onClick={() =>
																			trackProjectClick(
																				project.title,
																				"view_code",
																			)
																		}
																	>
																		<Image
																			src="/icons/github.svg"
																			alt="GitHub"
																			width={
																				16
																			}
																			height={
																				16
																			}
																			className="mr-2"
																		/>
																		View Code
																	</a>
																</Button>
															</motion.div>
														)}
														{project.liveUrl && (
															<motion.div
																whileHover={{
																	scale: 1.05,
																}}
																className="w-full sm:w-auto"
															>
																<Button
																	variant="outline"
																	className="w-full sm:w-auto"
																	asChild
																>
																	<a
																		href={
																			project.liveUrl
																		}
																		target="_blank"
																		rel="noopener noreferrer"
																		onClick={() =>
																			trackProjectClick(
																				project.title,
																				"view_project",
																			)
																		}
																	>
																		<ExternalLink className="h-4 w-4 mr-2" />
																		View Project
																	</a>
																</Button>
															</motion.div>
														)}
													</div>
												</div>
											</CardContent>
										</MotionCard>
									))}
								</div>
							</motion.div>
						</TabsContent>

						<TabsContent value="education" asChild>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								exit={{ opacity: 0, y: -20 }}
							>
								<div className="grid gap-6">
									{[...education]
										.sort((a, b) => {
											const aIsPresent = !a.endDate;
											const bIsPresent = !b.endDate;

											// Present items first
											if (aIsPresent && !bIsPresent) return -1;
											if (!aIsPresent && bIsPresent) return 1;

											// Then sort by startDate descending (latest first)
											return b.startDate.getTime() - a.startDate.getTime();
										})
										.map((edu, index) => (
											<MotionCard
												key={index}
												whileHover={{
													scale: 1.02,
													transition: { duration: 0.2 },
												}}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.3,
													delay: index * 0.1,
												}}
												className={!edu.endDate ? "border-2 border-primary" : ""}
											>
												<CardContent className="p-4 sm:p-6">
													<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-center sm:text-left">
														<Image
															src={edu.logo}
															alt={edu.school}
															width={200}
															height={200}
															className="rounded-lg aspect-square object-contain w-16 h-16 sm:w-24 sm:h-24 border bg-secondary p-2"
														/>
														<div className="space-y-2">
															{edu.startDate.getTime() >=
																new Date().getTime() && (
																	<Badge className="ml-auto">
																		Not started
																	</Badge>
																)}
															<h3 className="text-xl font-semibold">
																{edu.degree}
															</h3>
															<p className="text-muted-foreground flex items-center justify-between">
																{edu.school} •{" "}
																{format(
																	edu.startDate,
																	"MMM yyyy"
																)}{" "}
																-{" "}
																{edu.endDate
																	? format(
																		edu.endDate,
																		"MMM yyyy"
																	)
																	: "Present"}{" "}
																•{" "}
																{formatDistance(
																	edu.startDate,
																	edu.endDate ??
																	new Date()
																)}
															</p>
															<p className="text-sm sm:text-base">
																{edu.description}
															</p>
														</div>
													</div>
												</CardContent>
											</MotionCard>
										))}
								</div>
							</motion.div>
						</TabsContent>

						<TabsContent value="skills" asChild>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								exit={{ opacity: 0, y: -20 }}
							>
								<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{skills
										.sort((a, b) => {
											const order = {
												Expert: 1,
												Advanced: 2,
												Intermediate: 3,
												Learning: 4,
											};
											return (
												order[a.category] -
												order[b.category]
											);
										})
										.map((skill, index) => (
											<MotionCard
												key={index}
												whileHover={{
													scale: 1.05,
													transition: {
														duration: 0.2,
													},
												}}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													scale: {
														type: "spring",
														duration: 0.2,
													},
													opacity: {
														duration: 0.3,
														delay: index * 0.1,
													},
													y: {
														duration: 0.3,
														delay: index * 0.1,
													},
												}}
											>
												<CardContent className="p-4 sm:p-6">
													<div className="flex flex-col gap-4">
														<div className="flex items-center justify-between">
															<div className="flex items-center gap-4">
																<Image
																	src={
																		skill.icon
																	}
																	alt={
																		skill.name
																	}
																	width={32}
																	height={32}
																	className="rounded w-6 h-6 sm:w-8 sm:h-8"
																/>
																<h3 className="text-base sm:text-lg font-semibold">
																	{skill.name}
																</h3>
															</div>
															<Badge
																variant={
																	skill.category.toLowerCase() as
																	| "expert"
																	| "advanced"
																	| "intermediate"
																	| "learning"
																}
															>
																{skill.category}
															</Badge>
														</div>
														{skill.description && (
															<p className="text-sm text-muted-foreground">
																{
																	skill.description
																}
															</p>
														)}
													</div>
												</CardContent>
											</MotionCard>
										))}
								</div>
							</motion.div>
						</TabsContent>
					</Tabs>
				</main>
			</motion.div>
		</div>
	);
}
