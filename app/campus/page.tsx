import { Metadata } from "next";
import Hero from "@/components/Hero";
import Badge from "@/components/Badge";
import {
	Monitor,
	BookOpen,
	Award,
	Users,
	Video,
	FileText,
	CheckCircle2,
	Clock,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Campus Virtual - Doria Academy",
	description:
		"Nuestra plataforma educativa online está en desarrollo. Pronto podrás acceder a clases, materiales y certificados.",
};

export default function CampusPage() {
	return (
		<>
			<Hero
				title="Campus Virtual Doria Academy"
				subtitle="Tu espacio de aprendizaje online está en camino"
				showCta={false}
			/>

			{/* Status Section */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<Badge variant="warning" size="lg">
								🚧 Próximamente
							</Badge>
							<h2 className="heading-2 mt-6 mb-4">
								Estamos Construyendo Algo Increíble
							</h2>
							<p className="text-xl text-gray-600 leading-relaxed">
								Estamos desarrollando nuestra plataforma educativa online donde
								podrás acceder a clases, materiales, evaluaciones y certificados
								desde cualquier lugar y en cualquier momento.
							</p>
						</div>

						{/* Features Preview */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
							<div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
								<div className="flex-shrink-0">
									<div className="bg-blue-600 p-3 rounded-lg">
										<Video className="h-6 w-6 text-white" />
									</div>
								</div>
								<div>
									<h3 className="font-bold text-gray-900 mb-2">
										Clases en Video
									</h3>
									<p className="text-gray-600 text-sm">
										Contenido audiovisual de alta calidad disponible 24/7
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
								<div className="flex-shrink-0">
									<div className="bg-purple-600 p-3 rounded-lg">
										<FileText className="h-6 w-6 text-white" />
									</div>
								</div>
								<div>
									<h3 className="font-bold text-gray-900 mb-2">
										Material Descargable
									</h3>
									<p className="text-gray-600 text-sm">
										PDFs, presentaciones y recursos complementarios
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
								<div className="flex-shrink-0">
									<div className="bg-green-600 p-3 rounded-lg">
										<CheckCircle2 className="h-6 w-6 text-white" />
									</div>
								</div>
								<div>
									<h3 className="font-bold text-gray-900 mb-2">Evaluaciones</h3>
									<p className="text-gray-600 text-sm">
										Quizzes y exámenes para validar tu aprendizaje
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
								<div className="flex-shrink-0">
									<div className="bg-orange-600 p-3 rounded-lg">
										<Award className="h-6 w-6 text-white" />
									</div>
								</div>
								<div>
									<h3 className="font-bold text-gray-900 mb-2">Certificados</h3>
									<p className="text-gray-600 text-sm">
										Certificación digital al completar tus cursos
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What to Expect */}
			<section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<h2 className="heading-2 text-center mb-12">
							¿Qué Podrás Hacer en el Campus Virtual?
						</h2>

						<div className="space-y-6">
							<div className="bg-white p-8 rounded-xl shadow-md">
								<div className="flex items-start gap-4">
									<div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
										<Monitor className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											Acceso Total a tus Cursos
										</h3>
										<p className="text-gray-600 leading-relaxed">
											Ingresa a todos tus cursos activos desde un solo lugar.
											Sigue tu progreso, retoma donde lo dejaste y organiza tu
											aprendizaje.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white p-8 rounded-xl shadow-md">
								<div className="flex items-start gap-4">
									<div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
										<BookOpen className="h-6 w-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											Biblioteca de Recursos
										</h3>
										<p className="text-gray-600 leading-relaxed">
											Accede a una biblioteca completa con materiales
											complementarios, lecturas recomendadas y recursos
											adicionales para profundizar tu conocimiento.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white p-8 rounded-xl shadow-md">
								<div className="flex items-start gap-4">
									<div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
										<Users className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											Comunidad de Participantes
										</h3>
										<p className="text-gray-600 leading-relaxed">
											Conecta con otros participantes, comparte experiencias, haz
											preguntas y colabora en proyectos grupales.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white p-8 rounded-xl shadow-md">
								<div className="flex items-start gap-4">
									<div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
										<Clock className="h-6 w-6 text-orange-600" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											Aprende a tu Ritmo
										</h3>
										<p className="text-gray-600 leading-relaxed">
											Sin horarios fijos. Estudia cuando quieras, desde donde
											quieras, con acceso ilimitado a todo el contenido del
											curso.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<h2 className="heading-2 text-white">
							¿Quieres ser de los primeros en acceder?
						</h2>
						<p className="text-xl text-blue-100">
							Contactanos para recibir notificaciones cuando el campus virtual
							esté disponible y accede a beneficios exclusivos de lanzamiento.
						</p>
						<a
							href="https://wa.me/573145532943"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							Contactar por WhatsApp
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
