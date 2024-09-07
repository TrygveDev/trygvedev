import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	title: string;
	date: Date;
	description: string;
	image: string;
	stack: string[];
	link: string;
};

export const ProjectCard = ({
	title,
	date,
	description,
	image,
	stack,
	link,
}: Props) => {
	const getDate = (date: Date) => {
		return new Date(date).toLocaleDateString("en-US", {
			month: "short",
			year: "numeric",
		});
	};

	return (
		<Card className="w-full h-full">
			<CardHeader className="flex flex-col">
				<div className="flex flex-col space-y-1.5 w-full h-fit">
					<CardTitle>{title}</CardTitle>
					<CardDescription>{getDate(date)}</CardDescription>
				</div>
				<div className="w-full h-fit">
					<Image
						src={image}
						alt=""
						width={2000}
						height={2000}
						className="h-full w-fit rounded border"
					/>
				</div>
			</CardHeader>
			<CardContent className="font-light">{description}</CardContent>
			<CardFooter className="flex flex-col items-start gap-2">
				<div className="flex gap-2 flex-wrap">
					{stack.map((skill, i) => {
						return <Badge key={i}>{skill}</Badge>;
					})}
				</div>

				<Link href={link}>
					<Button
						variant="outline"
						className="h-6 text-xs gap-1 px-2"
					>
						View project <ExternalLink size={16} />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};
