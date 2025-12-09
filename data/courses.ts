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
		title: "Desarrollo Web Full Stack",
		description:
			"Aprendé a crear aplicaciones web completas desde cero. Dominá HTML, CSS, JavaScript, React, Node.js y bases de datos.",
		duration: "12 semanas",
		students: "0",
		level: "Principiante a Avanzado",
		status: "coming-soon",
		category: "Desarrollo",
	},
	{
		id: 2,
		title: "Marketing Digital Profesional",
		description:
			"Convertite en experto en marketing digital. SEO, SEM, redes sociales, email marketing y analítica web.",
		duration: "10 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Marketing",
	},
	{
		id: 3,
		title: "Diseño UX/UI",
		description:
			"Diseñá experiencias digitales excepcionales. Investigación de usuarios, wireframing, prototipado y testing.",
		duration: "8 semanas",
		students: "0",
		level: "Intermedio",
		status: "coming-soon",
		category: "Diseño",
	},
	{
		id: 4,
		title: "Data Science y Analytics",
		description:
			"Dominá el análisis de datos con Python, SQL, visualización de datos y machine learning básico.",
		duration: "14 semanas",
		students: "0",
		level: "Intermedio a Avanzado",
		status: "coming-soon",
		category: "Data",
	},
	{
		id: 5,
		title: "Gestión de Proyectos Ágiles",
		description:
			"Aprendé metodologías ágiles como Scrum y Kanban. Liderá equipos y proyectos de manera efectiva.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Gestión",
	},
	{
		id: 6,
		title: "Ciberseguridad Fundamental",
		description:
			"Introducción a la seguridad informática. Protección de sistemas, redes y datos contra amenazas digitales.",
		duration: "10 semanas",
		students: "0",
		level: "Intermedio",
		status: "coming-soon",
		category: "Seguridad",
	},
];

// Categories for filtering
export const categories = [
	"Todos",
	"Desarrollo",
	"Marketing",
	"Diseño",
	"Data",
	"Gestión",
	"Seguridad",
];

// Levels for filtering
export const levels = [
	"Todos los niveles",
	"Principiante",
	"Intermedio",
	"Avanzado",
];
