import { Clock, Users, Award } from "lucide-react";

interface CourseCardProps {
	title: string;
	description: string;
	duration?: string;
	students?: string;
	level?: string;
	status?: "available" | "coming-soon";
}

export default function CourseCard({
	title,
	description,
	duration = "8 semanas",
	students = "0",
	level = "Todos los niveles",
	status = "coming-soon",
}: CourseCardProps) {
	return (
		<div className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden">
			{/* Status Badge */}
			{status === "coming-soon" && (
				<div className="absolute top-4 right-4 bg-purple-100 text-purple-700 px-3 rounded-full text-xs font-semibold">
					🚧 Próximamente
				</div>
			)}

			<div className="space-y-4">
				{/* Title */}
				<h3 className="heading-3 text-xl group-hover:text-blue-600 transition-colors">
					{title}
				</h3>

				{/* Description */}
				<p className="text-gray-600 leading-relaxed line-clamp-3">
					{description}
				</p>

				{/* Meta Info */}
				<div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-2 border-t border-gray-100">
					<div className="flex items-center gap-1">
						<Clock className="h-4 w-4" />
						<span>{duration}</span>
					</div>
					<div className="flex items-center gap-1">
						<Users className="h-4 w-4" />
						<span>{students} participantes</span>
					</div>
					<div className="flex items-center gap-1">
						<Award className="h-4 w-4" />
						<span>{level}</span>
					</div>
				</div>

				{/* CTA */}
				<a
					href="https://wa.me/573145532943"
					target="_blank"
					rel="noopener noreferrer"
					className="btn-secondary w-full text-center block mt-4"
				>
					Consultar por WhatsApp
				</a>
			</div>
		</div>
	);
}
