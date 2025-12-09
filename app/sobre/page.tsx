import { Metadata } from "next";
import Hero from "@/components/Hero";
import {
	Target,
	Eye,
	Heart,
	Zap,
	Users,
	Award,
	BookOpen,
	TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
	title: "¿Quiénes Somos? - Doria Academy",
	description:
		"Conocé la historia, misión, visión y valores de Doria Academy. Educación accesible, innovación y profesionalismo.",
};

export default function SobrePage() {
	return (
		<>
			<Hero
				title="¿Quiénes Somos?"
				subtitle="Aprende, crece y transforma tu presente y futuro."
				showCta={false}
			/>

			{/* Quiénes Somos */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="heading-2 mb-6">¿Quiénes Somos?</h2>
							<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
						</div>
						<div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
							<p className="text-lg">
								<strong className="text-gray-900">Doria Academy</strong> es un espacio de formación y desarrollo dedicado a fortalecer el crecimiento personal, familiar, profesional y espiritual.
							</p>
							<p className="text-lg">
								Ofrecemos libros, capacitaciones, charlas y cursos presenciales y virtuales para transformar vidas mediante formación práctica y consciente.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Misión y Visión */}
			<section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
						{/* Misión */}
						<div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
							<div className="flex items-center gap-3 mb-6">
								<div className="bg-blue-100 p-3 rounded-xl">
									<Target className="h-8 w-8 text-blue-600" />
								</div>
								<h2 className="heading-3">Nuestra Misión</h2>
							</div>
							<p className="text-gray-600 leading-relaxed text-lg">
								Inspirar aprendizaje continuo y promover una vida más plena.
							</p>
						</div>

						{/* Visión */}
						<div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
							<div className="flex items-center gap-3 mb-6">
								<div className="bg-purple-100 p-3 rounded-xl">
									<Eye className="h-8 w-8 text-purple-600" />
								</div>
								<h2 className="heading-3">Nuestra Visión</h2>
							</div>
							<p className="text-gray-600 leading-relaxed text-lg">
								Ser un referente educativo que aporte valor en cualquier país.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Valores */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="text-center mb-16">
						<h2 className="heading-2 mb-4">Nuestros Valores</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Principios que guían nuestras acciones y decisiones
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300">
							<div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Heart className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Formación Accesible
							</h3>
							<p className="text-gray-600">
								Creemos que todos merecen acceso a formación de calidad, sin
								barreras.
							</p>
						</div>

						<div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-colors duration-300">
							<div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Zap className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Innovación
							</h3>
							<p className="text-gray-600">
								Adoptamos nuevas tecnologías y metodologías para mejorar
								continuamente.
							</p>
						</div>

						<div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors duration-300">
							<div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Award className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Profesionalismo
							</h3>
							<p className="text-gray-600">
								Mantenemos los más altos estándares en todo lo que hacemos.
							</p>
						</div>

						<div className="text-center p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300">
							<div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<TrendingUp className="h-8 w-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Aprendizaje Continuo
							</h3>
							<p className="text-gray-600">
								Fomentamos la mejora constante y el desarrollo permanente.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						<div>
							<Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
							<div className="text-4xl font-bold mb-2">500+</div>
							<div className="text-blue-100">Estudiantes Activos</div>
						</div>
						<div>
							<BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
							<div className="text-4xl font-bold mb-2">20+</div>
							<div className="text-blue-100">Cursos Disponibles</div>
						</div>
						<div>
							<Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
							<div className="text-4xl font-bold mb-2">95%</div>
							<div className="text-blue-100">Satisfacción</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
