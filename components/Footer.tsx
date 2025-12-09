import Link from "next/link";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Instagram,
	Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="container-custom section-padding">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					{/* Brand */}
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<Image src="/logo.jpg" alt="Doria Academy Logo" width={144} height={144} className="w-36 h-36" />
						</div>
						<p className="text-sm text-gray-400 leading-relaxed mb-3">
							Transformando vidas a través de la educación profesional de
							calidad. Cursos, capacitaciones y contenido académico para tu
							futuro.
						</p>
						<p className="text-sm font-semibold text-blue-400 italic leading-relaxed">
							"Aprende, crece y transforma tu presente y futuro."
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
								aria-label="Facebook"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white font-semibold text-lg mb-4">
							Enlaces Rápidos
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/sobre"
									className="text-sm hover:text-blue-400 transition-colors"
								>
									¿Quiénes Somos?
								</Link>
							</li>
							<li>
								<Link
									href="/cursos"
									className="text-sm hover:text-blue-400 transition-colors"
								>
									Cursos
								</Link>
							</li>
							<li>
								<Link
									href="/campus"
									className="text-sm hover:text-blue-400 transition-colors"
								>
									Campus Virtual
								</Link>
							</li>
							<li>
								<Link
									href="/libros"
									className="text-sm hover:text-blue-400 transition-colors"
								>
									Libros
								</Link>
							</li>
							<li>
								<Link
									href="/contacto"
									className="text-sm hover:text-blue-400 transition-colors"
								>
									Contacto
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-white font-semibold text-lg mb-4">Servicios</h3>
						<ul className="space-y-2">
							<li className="text-sm">Cursos Online</li>
							<li className="text-sm">Capacitaciones</li>
							<li className="text-sm">Certificaciones</li>
							<li className="text-sm">Material Educativo</li>
							<li className="text-sm">Asesoramiento</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-2 text-sm">
								<Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
								<span>info@doriaacademy.com</span>
							</li>
							<li className="flex items-start gap-2 text-sm">
								<Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
								<span>+54 XXX XXX XXXX</span>
							</li>
							<li className="flex items-start gap-2 text-sm">
								<MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
								<span>Buenos Aires, Argentina</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-gray-400" suppressHydrationWarning>
							© {new Date().getFullYear()} Doria Academy. Todos los derechos
							reservados.
						</p>
						<div className="flex gap-6 text-sm">
							<Link href="#" className="hover:text-blue-400 transition-colors">
								Términos y Condiciones
							</Link>
							<Link href="#" className="hover:text-blue-400 transition-colors">
								Política de Privacidad
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
