"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navigation = [
	{ name: "Inicio", href: "/" },
	{ name: "¿Quiénes Somos?", href: "/sobre" },
	{ name: "Cursos", href: "/cursos" },
	{ name: "Campus Virtual", href: "/campus" },
	{ name: "¿Qué hay pa' leer?", href: "/libros" },
	{ name: "Contacto", href: "/contacto" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
			<nav className="container-custom" aria-label="Global">
				<div className="flex items-center justify-between py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 group">
						<Image src="/logo.jpg" alt="Doria Academy Logo" width={144} height={144} className="w-36 h-36" />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex lg:gap-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
							>
								{item.name}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
							</Link>
						))}
					</div>

					{/* CTA Button Desktop */}
					<div className="hidden lg:flex">
						<a
							href="https://wa.me/573145532943"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary text-sm"
						>
							Contactar
						</a>
					</div>

					{/* Mobile menu button */}
					<button
						type="button"
						className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<span className="sr-only">Abrir menú</span>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div className="lg:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top duration-300">
						<div className="space-y-2">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block px-4 py-2 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<div className="px-4 pt-2">
								<a
									href="https://wa.me/573145532943"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-primary w-full text-center block text-sm"
								>
									Contactar por WhatsApp
								</a>
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
