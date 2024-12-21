export interface SocialLink {
	url: string;
	icon: string;
}

export interface WorkExperience {
	title: string;
	company: string;
	startDate: Date;
	endDate?: Date;
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
	startDate: Date;
	endDate?: Date;
	description: string;
	logo: string;
}

export interface Skill {
	name: string;
	icon: string;
	category: "Expert" | "Advanced" | "Intermediate" | "Learning";
	description?: string;
}

export interface TechStack {
	name: string;
	description: string;
	logo: string;
	url: string;
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
		title: "Compulsory Military Service",
		company: "Norwegian Armed Forces",
		startDate: new Date("2025-01-01"),
		endDate: new Date("2026-01-01"),
		description:
			"A 12-month compulsory military service in the Royal Norwegian Air Force.",
		logo: "/images/norwegian-air-force-logo.png",
	},
	{
		title: "IT Developer",
		company: "Kripos",
		startDate: new Date("2023-10-01"),
		description:
			"Development of various in-house solutions using modern web technologies including TypeScript and Next.js.",
		logo: "/images/kripos-logo.png",
	},
	{
		title: "CEO, Co-Founder",
		company: "Renow AS",
		startDate: new Date("2023-10-01"),
		description:
			"Co-founder of Renow AS. Leading company direction, making strategic decisions, and ensuring company growth. Actively involved in daily IT development operations.",
		logo: "/images/renow-logo.png",
	},
	{
		title: "Training Assistant",
		company: "McDonald's",
		startDate: new Date("2021-09-01"),
		endDate: new Date("2024-04-01"),
		description:
			"Responsible for training and guiding new employees, demonstrating proper food preparation, teaching customer service routines, safety, and hygiene protocols.",
		logo: "/images/mcdonalds-logo.png",
	},
	{
		title: "IT Developer Intern",
		company: "Kripos",
		startDate: new Date("2023-03-01"),
		endDate: new Date("2023-04-01"),
		description:
			"Developed various in-house solutions using JavaScript and React.js during internship period.",
		logo: "/images/kripos-logo.png",
	},
];

export const education: Education[] = [
	{
		degree: "Bachelor of Computer Science",
		school: "OsloMet",
		startDate: new Date("2027"),
		endDate: new Date("2030"),
		description:
			"The Computer Engineering program provides you with a broad and vocational education in information technology, particularly focused on programming and software, and system and application development.",
		logo: "/images/oslomet-logo.png",
	},
	{
		degree: "Preparatory course for engineering education",
		school: "OsloMet",
		startDate: new Date("2026"),
		endDate: new Date("2027"),
		description:
			"Preparatory course for engineering education, focusing on mathematics, physics, and computer science.",
		logo: "/images/oslomet-logo.png",
	},
	{
		degree: "Information Technology",
		school: "Drømtorp Videregående Skole",
		startDate: new Date("2021-08"),
		endDate: new Date("2023-06"),
		description:
			"Learned basic programming, web development, and computer science.",
		logo: "/images/dromtorp-logo.png",
	},
];

export const skills: Skill[] = [
	{
		name: "Next.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		category: "Expert",
	},
	{
		name: "React",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		category: "Expert",
	},
	{
		name: "TypeScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		category: "Expert",
	},
	{
		name: "JavaScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		category: "Expert",
	},
	{
		name: "TailwindCSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		category: "Advanced",
	},
	{
		name: "Node.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		category: "Advanced",
	},
	{
		name: "PostgreSQL",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		category: "Advanced",
	},
	{
		name: "Docker",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
		category: "Intermediate",
	},
	{
		name: "Git",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		category: "Advanced",
	},
	{
		name: "Kubernetes",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
		category: "Learning",
	},
	{
		name: "Linux",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
		category: "Learning",
	},
	{
		name: "Vite",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
		category: "Expert",
	},
];

export const projects: Project[] = [
	{
		title: "Live Markdown Editor",
		description:
			"A live markdown editor with syntax highlighting, built with Next.js, TailwindCSS, and TypeScript.",
		githubUrl: "https://github.com/TrygveDev/livemd",
		liveUrl: "https://livemd.trygve.dev",
		image: "https://livemd.trygve.dev/og-image.png",
	},
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

export const techStack: TechStack[] = [
	{
		name: "Next.js",
		description:
			"A React framework, providing hybrid static & server rendering, TypeScript support, smart bundling, and more.",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		url: "https://nextjs.org",
	},
	{
		name: "shadcn/ui",
		description:
			"Beautifully designed components built with Radix UI and Tailwind CSS, offering accessibility and customization.",
		logo: "/images/shadcn-logo.png",
		url: "https://ui.shadcn.com",
	},
	{
		name: "Clerk",
		description:
			"Complete user management and authentication solution, with pre-built components and APIs.",
		logo: "/images/clerk-logo.png",
		url: "https://clerk.com",
	},
	{
		name: "Convex",
		description:
			"Backend application platform with real-time state management and automatic API generation.",
		logo: "/images/convex-logo.png",
		url: "https://convex.dev",
	},
	{
		name: "Cursor",
		description:
			"AI-first code editor that helps you write better code faster with built-in AI capabilities.",
		logo: "/images/cursor-logo.png",
		url: "https://cursor.com",
	},
];
