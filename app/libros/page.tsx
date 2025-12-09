import { Metadata } from "next";
import Hero from "@/components/Hero";
import Badge from "@/components/Badge";
import BooksCatalog from "@/components/BooksCatalog";
import { bookCollections, books } from "@/data/books";

export const metadata: Metadata = {
	title: "¿Qué hay pa' leer? - Doria Academy",
	description:
		"Próximamente: libros físicos y digitales (PDF). Material educativo para complementar tu formación. Sección de donaciones en preparación.",
};

export default function LibrosPage() {
	return (
		<>
			<Hero
				title="¿Qué hay pa' leer?"
				subtitle="Material educativo de calidad para complementar tu formación"
				showCta={false}
			/>

			{/* Catálogo por categorías */}
			<section className="section-padding bg-white">
				<div className="container-custom space-y-12">
					<div className="max-w-3xl mx-auto text-center space-y-4">
						<Badge variant="info" size="lg">📚 Próximamente</Badge>
						<h2 className="heading-2">Un catálogo organizado por categorías</h2>
						<p className="text-lg text-gray-600">
							Explora los títulos por colección. El botón de compra estará disponible pronto.
						</p>
					</div>

					<BooksCatalog items={books} collections={bookCollections} />
				</div>
			</section>

			{/* Notification CTA */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-2xl text-center text-white">
						<h2 className="heading-3 text-white mb-4">
							¿Quieres ser el primero en conocer nuestro catálogo?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Contáctanos y te avisaremos cuando nuestra biblioteca esté
							disponible. Además, accede a descuentos exclusivos de lanzamiento.
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

			{/* Donaciones */}
			<section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center space-y-6">
						<Badge variant="info" size="lg">💙 Sección de donaciones (próximamente)</Badge>
						<h2 className="heading-2">Apoya nuestra misión educativa</h2>
						<p className="text-lg text-gray-700 leading-relaxed">
							Preparando un botón para recibir aportes desde cualquier país, compatible con PayPal, tarjeta o pago local según tu ubicación.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<button
								type="button"
								disabled
								className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-300 text-gray-600 font-semibold shadow-inner cursor-not-allowed opacity-80"
							>
								Próximamente: Donar
							</button>
							<span className="text-sm text-gray-600">Aún no está activo, te avisaremos cuando lance.</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
