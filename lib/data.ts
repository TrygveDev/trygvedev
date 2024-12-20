export interface SocialLink {
	url: string;
	icon: string;
}

export interface WorkExperience {
	title: string;
	company: string;
	period: string;
	description: string;
	logo: string;
}

export interface Project {
	title: string;
	description: string;
	githubUrl: string;
	liveUrl: string;
	image: string;
}

export interface Education {
	degree: string;
	school: string;
	year: string;
	description: string;
	logo: string;
}

export interface Skill {
	name: string;
	icon: string;
	level: number;
}

export const socialLinks: SocialLink[] = [
	{
		url: "https://x.com/trygvedev",
		icon: "/icons/x.svg",
	},
	{
		url: "https://github.com/trygvedev",
		icon: "/icons/github.svg",
	},
	{
		url: "https://www.linkedin.com/in/trygve-melvold-666a96174/",
		icon: "/icons/linkedin.svg",
	},
];

export const workExperience: WorkExperience[] = [
	{
		title: "IT Developer",
		company: "Kripos",
		period: "Oct 2023 - Present",
		description:
			"Development of various in-house solutions using modern web technologies including TypeScript and Next.js.",
		logo: "/images/kripos-logo.png",
	},
	{
		title: "CEO, Co-Founder",
		company: "Renow AS",
		period: "Oct 2023 - Present",
		description:
			"Co-founder of Renow AS. Leading company direction, making strategic decisions, and ensuring company growth. Actively involved in daily IT development operations.",
		logo: "/images/renow-logo.png",
	},
	{
		title: "Training Assistant",
		company: "McDonald's",
		period: "Sep 2021 - Apr 2024",
		description:
			"Responsible for training and guiding new employees, demonstrating proper food preparation, teaching customer service routines, safety, and hygiene protocols.",
		logo: "/images/mcdonalds-logo.png",
	},
	{
		title: "IT Developer Intern",
		company: "Kripos",
		period: "Mar 2023 - Apr 2023",
		description:
			"Developed various in-house solutions using JavaScript and React.js during internship period.",
		logo: "/images/kripos-logo.png",
	},
];

export const education: Education[] = [
	{
		degree: "Information Technology",
		school: "Drømtorp Videregående Skole",
		year: "2021 - 2023",
		description:
			"Learned basic programming, web development, and computer science.",
		logo: "/images/dromtorp-logo.png",
	},
];

export const skills: Skill[] = [
	{
		name: "Next.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		level: 100,
	},
	{
		name: "React",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		level: 100,
	},
	{
		name: "TypeScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		level: 100,
	},
	{
		name: "JavaScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		level: 100,
	},
	{
		name: "TailwindCSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		level: 100,
	},
	{
		name: "Node.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		level: 100,
	},
	{
		name: "PostgreSQL",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		level: 80,
	},
	{
		name: "Docker",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
		level: 65,
	},
	{
		name: "Git",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		level: 100,
	},
];

export const projects: Project[] = [
	{
		title: "Feedfa.st",
		description:
			"A tool for developers to collect user feedback on their projects, built with Next.js, TailwindCSS, and TypeScript.",
		githubUrl: "https://github.com/TrygveDev",
		liveUrl: "https://feedfa.st",
		image: "https://feedfa.st/og-image.png",
	},
	{
		title: "Renow AS Website",
		description:
			"Developed a sustainable and energy-efficient website solution for Renow AS using Next.js and modern web technologies.",
		githubUrl: "https://github.com/TrygveDev",
		liveUrl: "https://renow.no",
		image: "https://www.renow.no/opengraph-image.png",
	},
	{
		title: "Personal Portfolio",
		description:
			"Built a modern portfolio website using Next.js, TypeScript, and TailwindCSS to showcase my projects and experience.",
		githubUrl: "https://github.com/TrygveDev",
		liveUrl: "https://trygve.dev",
		image: "https://trygve.dev/og-image.png",
	},
];
