import { Metadata } from "next";
import Hero from "@/components/Hero";
import Badge from "@/components/Badge";
import { BookOpen, FileText, Package, Sparkles } from "lucide-react";

export const metadata: Metadata = {
	title: "Libros - Doria Academy",
	description:
		"Próximamente: venta de libros físicos y digitales (PDF). Material educativo de calidad para complementar tu formación.",
};

export default function LibrosPage() {
	return (
		<>
			<Hero
				title="Biblioteca Doria Academy"
				subtitle="Material educativo de calidad para complementar tu formación"
				showCta={false}
			/>

			{/* Coming Soon Section */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center">
						<Badge variant="warning" size="lg">
							🚧 Próximamente
						</Badge>

						<h2 className="heading-2 mt-8 mb-6">
							Estamos Preparando Nuestra Biblioteca
						</h2>

						<p className="text-xl text-gray-600 leading-relaxed mb-12">
							Muy pronto podrás acceder a una selección curada de libros físicos
							y digitales para complementar tu aprendizaje y profundizar en las
							áreas que más te interesan.
						</p>

						{/* Preview Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
							<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-left">
								<div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
									<Package className="h-7 w-7 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Libros Físicos
								</h3>
								<p className="text-gray-600 leading-relaxed mb-4">
									Recibí en tu domicilio libros cuidadosamente seleccionados por
									nuestros expertos. Material impreso de alta calidad para tu
									biblioteca personal.
								</p>
								<ul className="space-y-2 text-gray-600">
									<li className="flex items-center gap-2">
										<Sparkles className="h-4 w-4 text-blue-600" />
										<span>Envío a todo el país</span>
									</li>
									<li className="flex items-center gap-2">
										<Sparkles className="h-4 w-4 text-blue-600" />
										<span>Ediciones de calidad premium</span>
									</li>
									<li className="flex items-center gap-2">
										<Sparkles className="h-4 w-4 text-blue-600" />
										<span>Descuentos para estudiantes</span>
									</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-left">
								<div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
									<FileText className="h-7 w-7 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Libros Digitales (PDF)
								</h3>
								<p className="text-gray-600 leading-relaxed mb-4">
									Acceso instantáneo a contenido digital. Descargá y llevá tu
									biblioteca a donde vayas, disponible en todos tus
									dispositivos.
								</p>
								<ul className="space-y-2 text-gray-600">
									<li className="flex items-center gap-2">
										<Sparkles className="h-4 w-4 text-purple-600" />
										<span>Descarga inmediata</span>
									</li>
									<li className="flex items-center gap-2">
										<Sparkles className="h-4 w-4 text-purple-600" />
										<span>Acceso ilimitado</span>
									</li>
									<li className="flex items-center gap-2">
										<Sparkles className="h-4 w-4 text-purple-600" />
										<span>Precios accesibles</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Categories Preview */}
			<section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<h2 className="heading-2 text-center mb-12">
							Categorías que Encontrarás
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								"Desarrollo de Software",
								"Marketing Digital",
								"Diseño y UX",
								"Gestión de Proyectos",
								"Análisis de Datos",
								"Emprendimiento",
								"Liderazgo",
								"Productividad",
								"Tecnología",
							].map((category) => (
								<div
									key={category}
									className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group"
								>
									<BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
									<h3 className="font-semibold text-gray-900">{category}</h3>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Notification CTA */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-2xl text-center text-white">
						<h2 className="heading-3 text-white mb-4">
							¿Querés ser el primero en conocer nuestro catálogo?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Contactanos y te avisaremos cuando nuestra biblioteca esté
							disponible. Además, accedé a descuentos exclusivos de lanzamiento.
						</p>
						<a
							href="https://wa.me/XXXXXXXXXX"
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
