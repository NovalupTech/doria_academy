import { Metadata } from "next";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import { Filter } from "lucide-react";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
	title: "Cursos y Capacitaciones - Doria Academy",
	description:
		"Explorá nuestra oferta de cursos y capacitaciones profesionales. Formación certificada en diversas áreas.",
};

export default function CursosPage() {
	return (
		<>
			<Hero
				title="Cursos y Capacitaciones"
				subtitle="Descubrí nuestra oferta educativa diseñada para impulsar tu carrera profesional."
				showCta={false}
			/>

			{/* Filters Section - Preparado para futuro */}
			<section className="bg-white border-b border-gray-200">
				<div className="container-custom py-6">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
						<div>
							<p className="text-gray-600">
								<span className="font-semibold text-gray-900">
									{courses.length}
								</span>{" "}
								cursos disponibles
							</p>
						</div>
						<button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
							<Filter className="h-4 w-4" />
							<span className="text-sm font-medium">Filtrar</span>
						</button>
					</div>
				</div>
			</section>

			{/* Courses Grid */}
			<section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{courses.map((course) => (
							<CourseCard
								key={course.id}
								title={course.title}
								description={course.description}
								duration={course.duration}
								students={course.students}
								level={course.level}
								status={course.status}
							/>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-2xl">
						<h2 className="heading-3">¿No encontrás el curso que buscás?</h2>
						<p className="text-lg text-gray-600">
							Contactanos y contanos qué te gustaría aprender. Estamos
							constantemente expandiendo nuestra oferta educativa.
						</p>
						<a
							href="https://wa.me/XXXXXXXXXX"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary inline-block"
						>
							Consultar por WhatsApp
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
