import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import {
	Award,
	Users,
	Monitor,
	BookOpen,
	Target,
	Lightbulb,
} from "lucide-react";

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<Hero
				title="Transforma tu futuro con formación profesional"
				subtitle="Cursos, capacitaciones y contenido formativo de calidad en Doria Academy."
			/>

			{/* Features Section */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<InfoCard
							icon={Award}
							title="Formación Certificada"
							description="Obtén certificados reconocidos que avalan tu conocimiento y habilidades profesionales."
						/>
						<InfoCard
							icon={Users}
							title="Profesores Especialistas"
							description="Aprende de expertos con amplia experiencia en sus áreas de conocimiento."
							delay="animation-delay-200"
						/>
						<InfoCard
							icon={Monitor}
							title="Modalidad Online"
							description="Estudia desde donde estés, a tu ritmo y con acceso 24/7 a todo el contenido."
							delay="animation-delay-400"
						/>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="container-custom">
					<div className="text-center max-w-3xl mx-auto mb-8">
						<h2 className="heading-2 mb-3">¿Por qué elegir Doria Academy?</h2>
						<p className="text-lg text-gray-600">
							Nos comprometemos con tu crecimiento profesional a través de una
							formación de excelencia
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
							<div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
								<BookOpen className="h-6 w-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Contenido Actualizado
							</h3>
							<p className="text-gray-600">
								Contenido actualizado constantemente con las últimas
								tendencias y mejores prácticas del mercado.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
							<div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
								<Target className="h-6 w-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Enfoque Práctico
							</h3>
							<p className="text-gray-600">
								Aprendizaje basado en proyectos reales y casos de estudio que te
								preparan para el mundo laboral.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
							<div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
								<Lightbulb className="h-6 w-6 text-green-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Innovación Continua
							</h3>
							<p className="text-gray-600">
								Metodologías de enseñanza innovadoras que hacen del aprendizaje
								una experiencia efectiva y motivadora.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center space-y-4">
						<h2 className="heading-2 text-white">
							¿Listo para comenzar tu transformación?
						</h2>
						<p className="text-xl text-blue-100">
							Contáctanos hoy y conoce cómo podemos ayudarte a alcanzar tus
							objetivos profesionales.
						</p>
						<a
							href="https://wa.me/573145532943"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							👉 Contactar por WhatsApp
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
