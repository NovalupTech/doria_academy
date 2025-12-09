"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/XXXXXXXXXX"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
			aria-label="Contactar por WhatsApp"
		>
			<MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
			<span className="absolute -top-1 -right-1 flex h-3 w-3">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
			</span>
		</a>
	);
}
