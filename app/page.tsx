"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Briefcase,
	CakeIcon,
	Code,
	ExternalLink,
	GraduationCap,
	InfoIcon,
	Lightbulb,
	MapPin,
	Sparkles,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
	education,
	getActiveEducation,
	getActiveWork,
	getRecentProjects,
	isOngoingEducation,
	projects,
	skills,
	socialLinks,
	techStack,
	workExperience,
	type Project,
} from "@/lib/data";
import { motion, useReducedMotion } from "motion/react";
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

function formatRoleDates(startDate: Date, endDate?: Date) {
	return (
		<>
			{format(startDate, "MMM yyyy")} -{" "}
			{endDate ? format(endDate, "MMM yyyy") : "Present"} •{" "}
			{formatDistance(startDate, endDate ?? new Date())}
		</>
	);
}

function ProjectActions({ project }: { project: Project }) {
	return (
		<div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
			{project.moreInfoUrl && (
				<Button variant="outline" className="w-full sm:w-auto" asChild>
					<a
						href={project.moreInfoUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() =>
							trackProjectClick(project.title, "more_info")
						}
					>
						<InfoIcon className="mr-2 h-4 w-4" />
						More Info
					</a>
				</Button>
			)}
			{project.githubUrl && (
				<Button variant="outline" className="w-full sm:w-auto" asChild>
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() =>
							trackProjectClick(project.title, "view_code")
						}
					>
						<Image
							src="/icons/github.svg"
							alt="GitHub"
							width={16}
							height={16}
							className="mr-2"
						/>
						View Code
					</a>
				</Button>
			)}
			{project.liveUrl && (
				<Button variant="outline" className="w-full sm:w-auto" asChild>
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() =>
							trackProjectClick(project.title, "view_project")
						}
					>
						<ExternalLink className="mr-2 h-4 w-4" />
						View Project
					</a>
				</Button>
			)}
		</div>
	);
}

export default function Home() {
	const reduceMotion = useReducedMotion();
	const activeWork = getActiveWork();
	const activeEducation = getActiveEducation();
	const recentProjects = getRecentProjects(3);

	const enter = (delay = 0) =>
		reduceMotion
			? { initial: false as const, animate: { opacity: 1 } }
			: {
					initial: { opacity: 0, y: 16 },
					animate: { opacity: 1, y: 0 },
					transition: { duration: 0.4, delay },
				};

	const hoverScale = reduceMotion ? undefined : { scale: 1.015 };

	return (
		<div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 overflow-x-hidden px-4 py-8 sm:gap-8 sm:px-8 sm:py-16">
			<header className="w-full">
				<div className="relative overflow-hidden rounded-xl border bg-gradient-to-b from-secondary/50 to-secondary p-4 backdrop-blur-sm sm:p-6">
					<div className="pointer-events-none absolute inset-0 bg-grid-white/10" />
					<motion.div {...enter(0)}>
						<div className="relative flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
							<motion.div
								{...(reduceMotion
									? {}
									: {
											initial: {
												scale: 0.92,
												opacity: 0,
											},
											animate: { scale: 1, opacity: 1 },
											transition: { duration: 0.45 },
										})}
								className="relative h-28 w-28 shrink-0 sm:h-40 sm:w-40"
							>
								<div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/15 to-primary/30 blur-xl" />
								<Image
									src="https://avatars.githubusercontent.com/u/57544728?v=4"
									alt="Profile Picture"
									fill
									sizes="(max-width: 640px) 112px, 160px"
									priority
									className="relative rounded-full border-2 border-border object-cover shadow-xl"
								/>
							</motion.div>
							<div className="space-y-3 text-center sm:space-y-4 sm:text-left">
								<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
									Trygve
								</h1>
								<p className="max-w-2xl text-base text-muted-foreground sm:text-xl">
									Hi there!{" "}
									{reduceMotion ? (
										<span>👋</span>
									) : (
										<motion.span
											animate={{
												rotate: [0, 15, -5, 15, -5, 0],
											}}
											transition={{
												duration: 1.5,
												ease: "easeInOut",
												times: [
													0, 0.2, 0.4, 0.6, 0.8, 1,
												],
												delay: 1.0,
											}}
											className="inline-block"
										>
											👋
										</motion.span>
									)}{" "}
									I&apos;m Trygve, a tech enthusiast who loves
									turning big ideas into simple, useful tools.
								</p>
								<p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground sm:justify-start sm:text-base">
									<span className="inline-flex items-center">
										<CakeIcon className="mr-1.5 h-4 w-4" />
										{new Date().getFullYear() - 2005} years
										old
									</span>
									<span className="inline-flex items-center">
										<MapPin className="mr-1.5 h-4 w-4" />
										Norway 🇳🇴
									</span>
								</p>
								<div className="flex justify-center gap-3 sm:justify-start sm:gap-4">
									{socialLinks.map((link, index) => (
										<motion.div
											key={link.url}
											{...(reduceMotion
												? {}
												: {
														initial: {
															opacity: 0,
															scale: 0.9,
														},
														animate: {
															opacity: 1,
															scale: 1,
														},
														transition: {
															duration: 0.3,
															delay:
																index * 0.08 +
																0.35,
														},
														whileHover: {
															scale: 1.08,
														},
														whileTap: {
															scale: 0.96,
														},
													})}
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
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</header>

			<motion.div {...enter(0.15)} className="w-full">
				<main>
					<Tabs defaultValue="now" className="space-y-5 sm:space-y-6">
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
							<div className="w-full overflow-x-auto overscroll-x-contain scrollbar-none sm:w-auto">
								<TabsList className="w-max min-w-full sm:min-w-0">
									<TabsTrigger value="now">
										<Sparkles className="h-4 w-4 sm:mr-2" />
										Now
									</TabsTrigger>
									<TabsTrigger value="experience">
										<Briefcase className="h-4 w-4 sm:mr-2" />
										<span className="sm:hidden">Work</span>
										<span className="hidden sm:inline">
											Experience
										</span>
									</TabsTrigger>
									<TabsTrigger value="projects">
										<Code className="h-4 w-4 sm:mr-2" />
										Projects
									</TabsTrigger>
									<TabsTrigger value="education">
										<GraduationCap className="h-4 w-4 sm:mr-2" />
										<span className="sm:hidden">Edu</span>
										<span className="hidden sm:inline">
											Education
										</span>
									</TabsTrigger>
									<TabsTrigger value="skills">
										<Lightbulb className="h-4 w-4 sm:mr-2" />
										Skills
									</TabsTrigger>
								</TabsList>
							</div>

							<div className="relative hidden h-10 w-full items-center overflow-x-auto whitespace-nowrap rounded-lg bg-gradient-to-b from-secondary/50 to-secondary text-muted-foreground backdrop-blur-sm scrollbar-none sm:flex sm:w-fit">
								<div className="pointer-events-none absolute inset-0 bg-grid-white/10" />
								<div className="relative flex flex-row items-center justify-start gap-2 px-3">
									<p className="text-sm font-medium">
										Favorite Tech Stack
									</p>
									<div className="flex flex-row">
										{techStack.map((tech) => (
											<div
												key={tech.name}
												className="flex h-9 w-9 items-center justify-center"
											>
												<TooltipProvider
													delayDuration={0}
												>
													<Tooltip>
														<TooltipTrigger asChild>
															<Button
																variant="outline"
																size="icon"
																className="h-7 w-7 bg-background/45 p-1.5 backdrop-blur-sm"
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
																		className="object-cover transition-transform hover:scale-110"
																	/>
																</Link>
															</Button>
														</TooltipTrigger>
														<TooltipContent className="max-w-[350px] space-y-1 bg-background/50 text-foreground backdrop-blur-sm">
															<p className="font-medium">
																{tech.name}
															</p>
															<p className="text-xs text-muted-foreground">
																{
																	tech.description
																}
															</p>
															<p className="flex items-center gap-1 text-xs text-muted-foreground">
																Click to read
																more
																<ExternalLink className="h-3 w-3" />
															</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Mobile tech stack — icons only */}
						<div className="flex items-center gap-2 overflow-x-auto scrollbar-none sm:hidden">
							<span className="shrink-0 text-xs text-muted-foreground">
								Stack
							</span>
							{techStack.map((tech) => (
								<Button
									key={tech.name}
									variant="outline"
									size="icon"
									className="h-8 w-8 shrink-0 bg-background/45 p-1.5"
									asChild
								>
									<Link href={tech.url} target="_blank">
										<Image
											src={tech.logo}
											alt={tech.name}
											width={20}
											height={20}
											className="object-cover"
										/>
									</Link>
								</Button>
							))}
						</div>

						<TabsContent value="now" asChild>
							<motion.div {...enter(0)} className="space-y-6">
								<section className="space-y-3">
									<h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
										Active
									</h2>
									<div className="grid gap-3">
										{activeEducation.map((edu) => (
											<MotionCard
												key={`${edu.school}-${edu.degree}`}
												whileHover={hoverScale}
												className="border border-primary/60"
											>
												<CardContent className="p-4 sm:p-5">
													<div className="flex flex-row items-start gap-3 text-left sm:gap-4">
														<Image
															src={edu.logo}
															alt={edu.school}
															width={64}
															height={64}
															className="h-12 w-12 shrink-0 rounded-lg border bg-secondary object-contain p-1.5 sm:h-14 sm:w-14"
														/>
														<div className="min-w-0 flex-1 space-y-1">
															<div className="flex flex-wrap items-center gap-2">
																<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
																	Education
																</p>
																{edu.startDate.getTime() >=
																	Date.now() && (
																	<Badge>
																		Not
																		started
																	</Badge>
																)}
															</div>
															<h3 className="text-base font-semibold sm:text-lg">
																{edu.degree}
															</h3>
															<p className="text-sm text-muted-foreground">
																{edu.school} •{" "}
																{formatRoleDates(
																	edu.startDate,
																	edu.endDate,
																)}
															</p>
														</div>
													</div>
												</CardContent>
											</MotionCard>
										))}
										{activeWork.map((job) => (
											<MotionCard
												key={`${job.company}-${job.title}`}
												whileHover={hoverScale}
												className="border border-primary/60"
											>
												<CardContent className="p-4 sm:p-5">
													<div className="flex flex-row items-start gap-3 text-left sm:gap-4">
														<Image
															src={job.logo}
															alt={job.company}
															width={64}
															height={64}
															className="h-12 w-12 shrink-0 rounded-lg border bg-secondary object-contain p-1.5 sm:h-14 sm:w-14"
														/>
														<div className="min-w-0 flex-1 space-y-1">
															<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
																Work
															</p>
															<h3 className="text-base font-semibold sm:text-lg">
																{job.title}
															</h3>
															<p className="text-sm text-muted-foreground">
																{job.company} •{" "}
																{formatRoleDates(
																	job.startDate,
																	job.endDate,
																)}
															</p>
														</div>
													</div>
												</CardContent>
											</MotionCard>
										))}
									</div>
								</section>

								<section className="space-y-3">
									<h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
										Latest projects
									</h2>
									<div className="grid gap-4 sm:grid-cols-3">
										{recentProjects.map((project) => (
											<MotionCard
												key={project.title}
												whileHover={
													reduceMotion
														? undefined
														: { scale: 1.02 }
												}
												className="flex flex-col overflow-hidden"
											>
												<CardContent className="flex flex-col gap-3 p-3 sm:p-4">
													<Image
														src={project.image}
														alt={project.title}
														width={600}
														height={320}
														className="aspect-[1.91/1] w-full rounded-lg border object-cover object-top"
													/>
													<div className="flex flex-col gap-2">
														<h3 className="text-base font-semibold sm:text-lg">
															{project.title}
														</h3>
														<p className="line-clamp-3 text-sm text-muted-foreground">
															{project.description}
														</p>
														<ProjectActions
															project={project}
														/>
													</div>
												</CardContent>
											</MotionCard>
										))}
									</div>
								</section>
							</motion.div>
						</TabsContent>

						<TabsContent value="experience" asChild>
							<motion.div {...enter(0)}>
								<div className="grid gap-4 sm:gap-6">
									{[...workExperience]
										.sort((a, b) => {
											const aIsPresent = !a.endDate;
											const bIsPresent = !b.endDate;
											if (aIsPresent && !bIsPresent)
												return -1;
											if (!aIsPresent && bIsPresent)
												return 1;
											return (
												b.startDate.getTime() -
												a.startDate.getTime()
											);
										})
										.map((job, index) => (
											<MotionCard
												key={`${job.company}-${job.title}-${index}`}
												whileHover={hoverScale}
												{...(reduceMotion
													? {}
													: {
															initial: {
																opacity: 0,
																y: 16,
															},
															animate: {
																opacity: 1,
																y: 0,
															},
															transition: {
																duration: 0.3,
																delay:
																	index *
																	0.06,
															},
														})}
												className={
													!job.endDate
														? "border border-primary/60"
														: ""
												}
											>
												<CardContent className="p-4 sm:p-6">
													<div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
														<Image
															src={job.logo}
															alt={job.company}
															width={200}
															height={200}
															className="h-16 w-16 rounded-lg border bg-secondary object-contain p-2 sm:h-24 sm:w-24"
														/>
														<div className="space-y-2">
															{job.startDate.getTime() >=
																Date.now() && (
																<Badge>
																	Not started
																</Badge>
															)}
															<h3 className="text-xl font-semibold">
																{job.title}
															</h3>
															<p className="text-muted-foreground">
																{job.company} •{" "}
																{formatRoleDates(
																	job.startDate,
																	job.endDate,
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
							<motion.div {...enter(0)}>
								<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
									{projects.map((project, index) => (
										<MotionCard
											key={project.title}
											whileHover={
												reduceMotion
													? undefined
													: {
															scale: 1.02,
															boxShadow:
																"0 10px 30px rgba(0,0,0,0.2)",
														}
											}
											{...(reduceMotion
												? {}
												: {
														initial: {
															opacity: 0,
															y: 16,
														},
														animate: {
															opacity: 1,
															y: 0,
														},
														transition: {
															duration: 0.3,
															delay: index * 0.06,
														},
													})}
											className="flex flex-col overflow-hidden"
										>
											<CardContent className="flex flex-col gap-4 p-4">
												<Image
													src={project.image}
													alt={project.title}
													width={600}
													height={320}
													className="aspect-[1.91/1] w-full rounded-lg border object-cover object-top"
												/>
												<div className="flex flex-col justify-center gap-2">
													<h3 className="text-xl font-semibold">
														{project.title}
													</h3>
													<p className="text-sm text-muted-foreground sm:text-base">
														{project.description}
													</p>
													<ProjectActions
														project={project}
													/>
												</div>
											</CardContent>
										</MotionCard>
									))}
								</div>
							</motion.div>
						</TabsContent>

						<TabsContent value="education" asChild>
							<motion.div {...enter(0)}>
								<div className="grid gap-4 sm:gap-6">
									{[...education]
										.sort((a, b) => {
											const aActive = isOngoingEducation(a);
											const bActive = isOngoingEducation(b);
											if (aActive && !bActive) return -1;
											if (!aActive && bActive) return 1;
											return (
												b.startDate.getTime() -
												a.startDate.getTime()
											);
										})
										.map((edu, index) => (
											<MotionCard
												key={`${edu.school}-${edu.degree}`}
												whileHover={hoverScale}
												{...(reduceMotion
													? {}
													: {
															initial: {
																opacity: 0,
																y: 16,
															},
															animate: {
																opacity: 1,
																y: 0,
															},
															transition: {
																duration: 0.3,
																delay:
																	index *
																	0.06,
															},
														})}
												className={
													isOngoingEducation(edu)
														? "border border-primary/60"
														: ""
												}
											>
												<CardContent className="p-4 sm:p-6">
													<div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
														<Image
															src={edu.logo}
															alt={edu.school}
															width={200}
															height={200}
															className="h-16 w-16 rounded-lg border bg-secondary object-contain p-2 sm:h-24 sm:w-24"
														/>
														<div className="space-y-2">
															{edu.startDate.getTime() >=
																Date.now() && (
																<Badge>
																	Not started
																</Badge>
															)}
															<h3 className="text-xl font-semibold">
																{edu.degree}
															</h3>
															<p className="text-muted-foreground">
																{edu.school} •{" "}
																{formatRoleDates(
																	edu.startDate,
																	edu.endDate,
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
							<motion.div {...enter(0)}>
								<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{[...skills]
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
												key={skill.name}
												whileHover={
													reduceMotion
														? undefined
														: { scale: 1.03 }
												}
												{...(reduceMotion
													? {}
													: {
															initial: {
																opacity: 0,
																y: 16,
															},
															animate: {
																opacity: 1,
																y: 0,
															},
															transition: {
																duration: 0.3,
																delay:
																	index *
																	0.05,
															},
														})}
											>
												<CardContent className="p-4 sm:p-6">
													<div className="flex flex-col gap-4">
														<div className="flex items-center justify-between gap-3">
															<div className="flex items-center gap-3 sm:gap-4">
																<Image
																	src={
																		skill.icon
																	}
																	alt={
																		skill.name
																	}
																	width={32}
																	height={32}
																	className="h-6 w-6 rounded sm:h-8 sm:w-8"
																/>
																<h3 className="text-base font-semibold sm:text-lg">
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
