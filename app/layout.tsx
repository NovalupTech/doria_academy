import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Doria Academy - Formación Profesional Online",
	description:
		"Cursos y capacitaciones de calidad. Transforma tu futuro con Doria Academy.",
	keywords: [
		"cursos online",
		"capacitaciones",
		"formación profesional",
		"formación",
		"certificaciones",
		"campus virtual",
	],
	authors: [{ name: "Doria Academy" }],
	openGraph: {
		title: "Doria Academy - Formación Profesional Online",
		description: "Cursos y capacitaciones de calidad.",
		type: "website",
		locale: "es_CO",
	},
	twitter: {
		card: "summary_large_image",
		title: "Doria Academy - Formación Profesional Online",
		description: "Cursos y capacitaciones de calidad.",
	},
	viewport: "width=device-width, initial-scale=1",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={inter.variable}>
			<body className="antialiased">
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
				<WhatsAppButton />
			</body>
		</html>
	);
}
