"use client";

import { useMemo, useState } from "react";
import { BookOpen, ShoppingBag } from "lucide-react";
import Badge from "./Badge";
import { BookCollectionKey, BookItem } from "@/data/books";

interface BooksCatalogProps {
	items: BookItem[];
	collections: BookCollectionKey[];
}

export default function BooksCatalog({ items, collections }: BooksCatalogProps) {
	const tabs = useMemo(() => ["Todos", ...collections], [collections]);
	const [selected, setSelected] = useState<string>(tabs[0]);

	const filtered = useMemo(
		() =>
			selected === "Todos"
				? items
				: items.filter((book) => book.collection === selected),
		[selected, items],
	);

	return (
		<div className="space-y-8">
			<div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin pr-1">
				{tabs.map((tab) => {
					const active = tab === selected;
					return (
						<button
							key={tab}
							onClick={() => setSelected(tab)}
							className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
								active
									? "bg-blue-600 text-white border-blue-600 shadow-md"
									: "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-700"
							}`}
						>
							{tab}
						</button>
					);
				})}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filtered.map((book) => (
					<BookCard key={book.id} book={book} />
				))}
			</div>
		</div>
	);
}

interface BookCardProps {
	book: BookItem;
}

function BookCard({ book }: BookCardProps) {
	return (
		<div className="card h-full flex flex-col justify-between gap-4">
			<div className="space-y-4">
				<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="bg-white rounded-lg p-3 shadow-sm">
							<BookOpen className="h-6 w-6 text-blue-600" />
						</div>
						<div>
							<p className="text-sm font-medium text-blue-700">Portada</p>
							<p className="text-xs text-gray-500">Próximamente</p>
						</div>
					</div>
					<Badge variant="info" size="sm">
						Próximamente
					</Badge>
				</div>

				<div className="space-y-2">
					<h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
					<p className="text-gray-600 text-sm leading-relaxed">{book.description}</p>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<span className="text-sm font-semibold text-gray-700">
					{book.price ?? "Precio: Próximamente"}
				</span>
				<button
					type="button"
					disabled
					className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-600 font-semibold cursor-not-allowed opacity-80"
				>
					<ShoppingBag className="h-4 w-4" />
					Próximamente
				</button>
			</div>
		</div>
	);
}

