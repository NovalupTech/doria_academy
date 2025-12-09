// Mock data for courses
// In the future, this can be replaced with API calls or CMS integration

export interface Course {
	id: number;
	title: string;
	description: string;
	duration: string;
	students: string;
	level: string;
	status: "available" | "coming-soon";
	price?: number;
	category?: string;
	instructor?: string;
	image?: string;
}

export const courses: Course[] = [
	{
		id: 1,
		title: "Liderazgo y Estrategia Empresarial",
		description:
			"Domina planificación estratégica, finanzas básicas, modelos de negocio y liderazgo de equipos para escalar tu empresa.",
		duration: "12 semanas",
		students: "0",
		level: "Principiante a Avanzado",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 2,
		title: "Motivación y Mentalidad de Crecimiento",
		description:
			"Potencia tu enfoque personal con herramientas de motivación, hábitos, resiliencia y objetivos alcanzables para avanzar cada día.",
		duration: "10 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Motivacionales",
	},
	{
		id: 3,
		title: "Bienestar Espiritual y Mindfulness",
		description:
			"Explora prácticas de mindfulness, meditación y propósito de vida para cultivar paz interior y claridad espiritual.",
		duration: "8 semanas",
		students: "0",
		level: "Intermedio",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 4,
		title: "Finanzas y Gestión para Emprender",
		description:
			"Aprende flujo de caja, precios, costos, métricas clave y gestión operativa para lanzar y sostener tu emprendimiento.",
		duration: "14 semanas",
		students: "0",
		level: "Intermedio a Avanzado",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 5,
		title: "Comunicación y Dinámica Familiar",
		description:
			"Mejora la comunicación en casa, resolución de conflictos, crianza respetuosa y organización familiar para vínculos saludables.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Familiares",
	},
	{
		id: 6,
		title: "Programas Híbridos: Presenciales y Virtuales",
		description:
			"Combina talleres presenciales con clases online en vivo. Modalidad flexible con acompañamiento y prácticas guiadas.",
		duration: "10 semanas",
		students: "0",
		level: "Intermedio",
		status: "coming-soon",
		category: "Presenciales y virtuales",
	},
];

// Categories for filtering
export const categories = [
	"Todos",
	"Empresariales",
	"Familiares",
	"Motivacionales",
	"Espirituales",
	"Presenciales y virtuales",
];

// Levels for filtering
export const levels = [
	"Todos los niveles",
	"Principiante",
	"Intermedio",
	"Avanzado",
];
