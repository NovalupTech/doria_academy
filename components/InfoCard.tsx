import { LucideIcon } from "lucide-react";

interface InfoCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	delay?: string;
}

export default function InfoCard({
	icon: Icon,
	title,
	description,
	delay = "",
}: InfoCardProps) {
	return (
		<div
			className={`card group hover:scale-105 transition-all duration-300 ${delay}`}
		>
			<div className="flex flex-col items-center text-center space-y-4">
				<div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-xl group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
					<Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
				</div>
				<h3 className="heading-3 text-xl">{title}</h3>
				<p className="text-gray-600 leading-relaxed">{description}</p>
			</div>
		</div>
	);
}
