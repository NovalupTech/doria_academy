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
	// Empresariales
	{
		id: 1,
		title: "Ambiente laboral y comunicación asertiva",
		description:
			"Desarrolla habilidades para crear ambientes de trabajo positivos y comunicarte de manera clara, respetuosa y efectiva en el entorno profesional.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 2,
		title: "Trabajo en equipo",
		description:
			"Aprende estrategias para colaborar efectivamente, resolver conflictos grupales y maximizar el potencial de los equipos de trabajo.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 3,
		title: "Comunicación efectiva",
		description:
			"Domina técnicas de comunicación verbal y no verbal para transmitir mensajes claros, persuasivos y lograr objetivos profesionales.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 4,
		title: "Hablar en público",
		description:
			"Supera el miedo escénico y desarrolla habilidades de oratoria para presentaciones impactantes y comunicaciones persuasivas ante audiencias.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 5,
		title: "Oratoria Política",
		description:
			"Técnicas especializadas de comunicación política, discursos persuasivos y estrategias para liderar con elocuencia en el ámbito público.",
		duration: "10 semanas",
		students: "0",
		level: "Intermedio",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 6,
		title: "Neuro-Ventas",
		description:
			"Aplica principios de neurociencia para entender el comportamiento del consumidor y desarrollar estrategias de ventas más efectivas.",
		duration: "8 semanas",
		students: "0",
		level: "Intermedio",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 7,
		title: "Liderazgo servidor",
		description:
			"Desarrolla un estilo de liderazgo basado en el servicio, la empatía y el desarrollo de otros para crear equipos comprometidos y exitosos.",
		duration: "10 semanas",
		students: "0",
		level: "Intermedio",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 8,
		title: "Gestión ambiental",
		description:
			"Conoce estrategias para implementar prácticas sostenibles en organizaciones y contribuir al cuidado del medio ambiente desde el ámbito profesional.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 9,
		title: "Finanzas personales",
		description:
			"Aprende a gestionar tu dinero, crear presupuestos, ahorrar efectivamente y tomar decisiones financieras inteligentes para tu futuro.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 10,
		title: "SER Docente",
		description:
			"Capacitación integral para educadores que desean desarrollar habilidades pedagógicas, manejo de aula y metodologías de enseñanza innovadoras.",
		duration: "12 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	{
		id: 11,
		title: "El arte de escuchar",
		description:
			"Desarrolla habilidades de escucha activa para mejorar relaciones interpersonales, resolver conflictos y comunicarte de manera más empática.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
	},
	// Motivacionales
	{
		id: 12,
		title: "Motivación y superación (Las 4 leyes del éxito)",
		description:
			"Descubre los principios fundamentales para alcanzar el éxito personal y profesional mediante técnicas probadas de motivación y superación.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Motivacionales",
	},
	{
		id: 13,
		title: "Proyecto de vida",
		description:
			"Diseña un plan de vida claro y alcanzable que te permita definir objetivos, prioridades y estrategias para construir el futuro que deseas.",
		duration: "10 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Motivacionales",
	},
	{
		id: 14,
		title: "El valor de la vida",
		description:
			"Reflexiona sobre el propósito de la existencia, encuentra significado en tus acciones y desarrolla una perspectiva positiva y agradecida de la vida.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Motivacionales",
	},
	{
		id: 15,
		title: "Qué hacen las personas felices",
		description:
			"Conoce los hábitos, actitudes y prácticas que caracterizan a las personas felices y aprende a incorporarlos en tu vida diaria.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Motivacionales",
	},
	{
		id: 16,
		title: "El fracaso",
		description:
			"Aprende a ver el fracaso como una oportunidad de crecimiento, desarrolla resiliencia y transforma los obstáculos en aprendizajes valiosos.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Motivacionales",
	},
	// Familiares
	{
		id: 17,
		title: "Personas tóxicas y nutritivas",
		description:
			"Identifica relaciones tóxicas, establece límites saludables y aprende a rodearse de personas que aportan positivamente a tu vida.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Familiares",
	},
	{
		id: 18,
		title: "Comprendiendo los temperamentos",
		description:
			"Conoce los diferentes tipos de temperamento para mejorar la comunicación familiar, entender mejor a tus seres queridos y fortalecer relaciones.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Familiares",
	},
	// Salud y Bienestar (categoría Espirituales para enfoque holístico)
	{
		id: 19,
		title: "Salud física-emocional y autocuidado",
		description:
			"Integra prácticas de bienestar físico y emocional para mantener un equilibrio saludable y desarrollar hábitos de autocuidado sostenibles.",
		duration: "10 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 20,
		title: "Inteligencia emocional",
		description:
			"Desarrolla la capacidad de reconocer, entender y gestionar tus emociones y las de otros para mejorar tus relaciones y bienestar personal.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 21,
		title: "Salud mental",
		description:
			"Conoce estrategias para mantener y mejorar tu salud mental, identificar señales de alerta y desarrollar herramientas de bienestar psicológico.",
		duration: "10 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 22,
		title: "Hábitos inteligentes",
		description:
			"Aprende a crear y mantener hábitos positivos que transformen tu vida, utilizando técnicas basadas en ciencia del comportamiento.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 23,
		title: "El estrés y la ansiedad",
		description:
			"Identifica las causas del estrés y la ansiedad, y aprende técnicas prácticas para manejarlos y recuperar tu equilibrio emocional.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 24,
		title: "Soluciones para enfermedades comunes",
		description:
			"Conoce alternativas naturales y prácticas para prevenir y abordar enfermedades comunes, promoviendo un enfoque integral de la salud.",
		duration: "10 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 25,
		title: "Longevidad",
		description:
			"Descubre los secretos para vivir más y mejor, combinando hábitos saludables, alimentación consciente y prácticas de bienestar integral.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 26,
		title: "Los tres enemigos silenciosos",
		description:
			"Identifica y aprende a combatir los factores que afectan silenciosamente tu salud y bienestar para prevenir problemas a largo plazo.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	{
		id: 27,
		title: "Los ocho remedios naturales",
		description:
			"Conoce los ocho principios naturales fundamentales para mantener y restaurar la salud de manera holística y sostenible.",
		duration: "8 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Espirituales",
	},
	// Especializados
	{
		id: 28,
		title: "Derechos sexuales y reproductivos",
		description:
			"Capacitación sobre derechos sexuales y reproductivos, salud sexual responsable y toma de decisiones informadas en estos aspectos fundamentales.",
		duration: "6 semanas",
		students: "0",
		level: "Todos los niveles",
		status: "coming-soon",
		category: "Empresariales",
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
