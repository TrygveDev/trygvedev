import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
	title: string;
	company: string;
	type: "Full-time" | "Part-time" | "Internship" | "Self-employed";
	startDate: Date;
	endDate: Date | "Present";
	description: string;
	image: string;
	skills: string[];
};

export const ExperienceCard = ({
	title,
	company,
	type,
	startDate,
	endDate,
	description,
	image,
	skills,
}: Props) => {
	const getEndDate = (date: Date | "Present") => {
		if (date === "Present") {
			return "Present";
		}

		return new Date(date).toLocaleDateString("en-US", {
			month: "short",
			year: "numeric",
		});
	};

	const getStartDate = (date: Date) => {
		return new Date(date).toLocaleDateString("en-US", {
			month: "short",
			year: "numeric",
		});
	};

	const getWorkLength = (start: Date, end: Date | "Present") => {
		const endDate = end === "Present" ? new Date() : end;
		const diff = endDate.getTime() - start.getTime();
		const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
		const months = Math.floor(
			(diff % (1000 * 60 * 60 * 24 * 365)) /
				(1000 * 60 * 60 * 24 * 30.4375)
		);

		if (years === 0) {
			return `${months} mo${months > 1 ? "s" : ""}`;
		}

		if (months === 0) {
			return `${years} yr${years > 1 ? "s" : ""}`;
		}

		return `${years} yr${years > 1 ? "s" : ""} ${months} mo${
			months > 1 ? "s" : ""
		}`;
	};

	return (
		<Card className="w-full h-full hover:scale-105 transition-all drop-shadow-md hover:drop-shadow-2xl">
			<CardHeader className="flex flex-row justify-between items-center">
				<div className="flex flex-col space-y-1.5 w-2/3 h-fit">
					<CardTitle>{title}</CardTitle>
					<CardDescription>
						{company} • {type} <br /> {getStartDate(startDate)} -{" "}
						{getEndDate(endDate)} •{" "}
						{getWorkLength(startDate, endDate)}
					</CardDescription>
				</div>
				<div className="w-1/3 h-fit">
					<Image
						src={image}
						alt=""
						width={256}
						height={256}
						className="h-full w-fit dark:invert"
					/>
				</div>
			</CardHeader>
			<CardContent className="font-light">{description}</CardContent>
			<CardFooter className="flex gap-2 flex-wrap">
				{skills.map((skill, i) => {
					return <Badge key={i}>{skill}</Badge>;
				})}
			</CardFooter>
		</Card>
	);
};
