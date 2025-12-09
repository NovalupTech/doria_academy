"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactoPage() {
	const [formData, setFormData] = useState({
		nombre: "",
		email: "",
		mensaje: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Crear mensaje para WhatsApp
		const mensaje = `Hola! Mi nombre es ${formData.nombre}.%0A%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.mensaje}`;
	const whatsappUrl = `https://wa.me/573145532943?text=${mensaje}`;

		// Abrir WhatsApp
		window.open(whatsappUrl, "_blank");

		// Limpiar formulario
		setFormData({ nombre: "", email: "", mensaje: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="heading-1 mb-6">Contactanos</h1>
						<p className="text-xl text-gray-600">
							¿Tenés alguna consulta? Estamos acá para ayudarte. Envianos tu
							mensaje y te responderemos a la brevedad.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div>
							<div className="mb-8">
								<h2 className="heading-3 mb-4">Envianos un Mensaje</h2>
								<p className="text-gray-600">
									Completá el formulario y te contactaremos por WhatsApp
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="nombre"
										className="block text-sm font-semibold text-gray-700 mb-2"
									>
										Nombre Completo *
									</label>
									<input
										type="text"
										id="nombre"
										name="nombre"
										required
										value={formData.nombre}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
										placeholder="Juan Pérez"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-semibold text-gray-700 mb-2"
									>
										Email *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
										placeholder="juan@ejemplo.com"
									/>
								</div>

								<div>
									<label
										htmlFor="mensaje"
										className="block text-sm font-semibold text-gray-700 mb-2"
									>
										Mensaje *
									</label>
									<textarea
										id="mensaje"
										name="mensaje"
										required
										value={formData.mensaje}
										onChange={handleChange}
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
										placeholder="Contanos en qué podemos ayudarte..."
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
								>
									<MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
									Enviar por WhatsApp
								</button>

								<p className="text-sm text-gray-500 text-center">
									Al enviar, serás redirigido a WhatsApp con tu mensaje
									prellenado
								</p>
							</form>
						</div>

						{/* Contact Info */}
						<div>
							<div className="mb-8">
								<h2 className="heading-3 mb-4">Información de Contacto</h2>
								<p className="text-gray-600">
									También podés contactarnos directamente por estos medios
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
									<div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
										<Mail className="h-6 w-6 text-white" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Email</h3>
										<a
											href="mailto:info@doriaacademy.com"
											className="text-blue-600 hover:text-blue-700 transition-colors"
										>
											info@doriaacademy.com
										</a>
										<p className="text-sm text-gray-600 mt-1">
											Respondemos en 24-48 horas
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
									<div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
										<Phone className="h-6 w-6 text-white" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											WhatsApp
										</h3>
										<a
											href="https://wa.me/573145532943"
											target="_blank"
											rel="noopener noreferrer"
											className="text-green-600 hover:text-green-700 transition-colors"
										>
											+54 XXX XXX XXXX
										</a>
										<p className="text-sm text-gray-600 mt-1">
											Lun a Vie: 9:00 - 18:00 hs
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
									<div className="bg-purple-600 p-3 rounded-lg flex-shrink-0">
										<MapPin className="h-6 w-6 text-white" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											Ubicación
										</h3>
										<p className="text-gray-700">Buenos Aires, Argentina</p>
										<p className="text-sm text-gray-600 mt-1">
											Academia 100% online
										</p>
									</div>
								</div>
							</div>

							{/* FAQ Quick Links */}
							<div className="mt-8 p-6 bg-gray-50 rounded-xl">
								<h3 className="font-semibold text-gray-900 mb-4">
									Preguntas Frecuentes
								</h3>
								<ul className="space-y-3 text-sm text-gray-600">
									<li className="flex items-start gap-2">
										<Send className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
										<span>¿Cómo me inscribo a un curso?</span>
									</li>
									<li className="flex items-start gap-2">
										<Send className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
										<span>¿Cuáles son los métodos de pago?</span>
									</li>
									<li className="flex items-start gap-2">
										<Send className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
										<span>¿Los certificados tienen validez oficial?</span>
									</li>
									<li className="flex items-start gap-2">
										<Send className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
										<span>¿Ofrecen descuentos o becas?</span>
									</li>
								</ul>
								<a
									href="https://wa.me/573145532943"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-secondary w-full mt-4 text-center block"
								>
									Consultar por WhatsApp
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
