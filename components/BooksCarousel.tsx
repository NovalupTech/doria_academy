"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BooksCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalImages = 22;
	const images = Array.from({ length: totalImages }, (_, i) => i + 1);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % totalImages);
		}, 4000); // Cambia cada 4 segundos

		return () => clearInterval(interval);
	}, [totalImages]);

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % totalImages);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="relative w-full max-w-6xl mx-auto">
			{/* Carousel Container */}
			<div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{images.map((num) => (
						<div key={num} className="min-w-full flex-shrink-0">
							<div className="relative aspect-[16/9] w-full">
								<Image
									src={`/libros/${num}.jpg`}
									alt={`Portada del libro ${num}`}
									fill
									className="object-contain p-2"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
								/>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Arrows */}
				<button
					onClick={goToPrevious}
					className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
					aria-label="Imagen anterior"
				>
					<ChevronLeft className="h-6 w-6" />
				</button>
				<button
					onClick={goToNext}
					className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
					aria-label="Siguiente imagen"
				>
					<ChevronRight className="h-6 w-6" />
				</button>

				{/* Dots Indicator */}
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`h-2 rounded-full transition-all duration-300 ${
								index === currentIndex
									? "w-8 bg-white"
									: "w-2 bg-white/50 hover:bg-white/75"
							}`}
							aria-label={`Ir a imagen ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

