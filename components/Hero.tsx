import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
	title: string;
	subtitle: string;
	ctaText?: string;
	ctaLink?: string;
	showCta?: boolean;
}

export default function Hero({
	title,
	subtitle,
	ctaText = "Contactar por WhatsApp",
	ctaLink = "https://wa.me/573145532943",
	showCta = true,
}: HeroProps) {
	return (
		<section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-200"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-400"></div>
			</div>

			<div className="container-custom section-padding relative z-10">
				<div className="max-w-4xl mx-auto text-center space-y-5">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
						<Sparkles className="h-4 w-4 text-purple-600" />
						<span className="text-sm font-semibold text-gray-700">
							Formación de calidad para tu futuro
						</span>
					</div>

					{/* Title */}
					<h1 className="heading-1">{title}</h1>

					{/* Subtitle */}
					<p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
						{subtitle}
					</p>

					{/* CTA */}
					{showCta && (
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a
								href={ctaLink}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary inline-flex items-center gap-2 group"
							>
								{ctaText}
								<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</a>
							<a href="/cursos" className="btn-secondary">
								Ver Cursos
							</a>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
