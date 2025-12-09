export interface BookItem {
	id: string;
	title: string;
	description: string;
	collection: BookCollectionKey;
	price?: string;
}

export type BookCollectionKey =
	| "Colección Desarrollo Personal"
	| "Colección Familia y Matrimonio"
	| "Colección Infantil"
	| "Colección Espiritual"
	| "Colección Salud y Nutrición"
	| "Colección Autoestima y Crecimiento";

export const bookCollections: BookCollectionKey[] = [
	"Colección Desarrollo Personal",
	"Colección Familia y Matrimonio",
	"Colección Infantil",
	"Colección Espiritual",
	"Colección Salud y Nutrición",
	"Colección Autoestima y Crecimiento",
];

export const books: BookItem[] = [
	// Desarrollo Personal
	{
		id: "mentalidad-triunfadora",
		title: "Una mentalidad triunfadora",
		description:
			"Aprende a desarrollar hábitos y pensamientos que impulsan el éxito en cualquier área de la vida.",
		collection: "Colección Desarrollo Personal",
	},
	{
		id: "vivir-para-triunfar",
		title: "Vivir para triunfar",
		description:
			"Convierte retos en oportunidades y diseña una vida con propósito.",
		collection: "Colección Desarrollo Personal",
	},
	{
		id: "saber-vivir",
		title: "Saber vivir",
		description:
			"Reflexiones prácticas para mejorar tu bienestar emocional, espiritual y social.",
		collection: "Colección Desarrollo Personal",
	},
	{
		id: "a-pesar-de-todo",
		title: "A pesar de todo… ¡qué linda es la vida!",
		description:
			"Historias y principios que fortalecen la gratitud, la resiliencia y la esperanza.",
		collection: "Colección Desarrollo Personal",
	},
	{
		id: "mente-positiva",
		title: "Mente positiva",
		description:
			"Técnicas sencillas para reprogramar tu mente hacia la felicidad y la productividad.",
		collection: "Colección Desarrollo Personal",
	},
	{
		id: "sientete-bien",
		title: "Siéntete bien (Bienestar integral y emocional)",
		description:
			"Consejos para mejorar tu salud emocional, autoestima y estabilidad mental.",
		collection: "Colección Desarrollo Personal",
	},
	{
		id: "corazon-tranquilo",
		title: "Un corazón tranquilo",
		description:
			"Guía para vencer la ansiedad y construir una vida emocionalmente libre y en paz.",
		collection: "Colección Desarrollo Personal",
	},

	// Familia y Matrimonio
	{
		id: "quien-manda",
		title: "En mi casa, ¿quién manda a quién?",
		description:
			"Cómo establecer límites, roles y disciplina saludable dentro del hogar.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "hijos-triunfadores",
		title: "Hijos triunfadores",
		description:
			"Principios para educar niños seguros, responsables y felices.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "lemas-matrimonios",
		title: "35 lemas para matrimonios felices",
		description:
			"Frases y valores prácticos para fortalecer la relación de pareja.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "novios-cosa-de-dos",
		title: "Novios: cosa de dos",
		description:
			"Consejos esenciales para parejas que desean construir un amor sano.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "enamorate-bien",
		title: "Enamórate bien",
		description:
			"Cómo elegir correctamente, evitar relaciones tóxicas y amar con inteligencia.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "matrimonio-cosa-de-dos",
		title: "Matrimonio: cosa de dos",
		description:
			"Claves para una vida en pareja estable, respetuosa y feliz.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "me-casaria-de-nuevo",
		title: "Me casaría de nuevo contigo",
		description:
			"Reflexiones para renovar el amor después de los años.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "querida-hija-hijo",
		title: "Querida hija / Querido hijo",
		description:
			"Mensajes de inspiración y valores para jóvenes y adolescentes.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "nuestros-ninos",
		title: "Nuestros niños: cómo educarlos en valores",
		description:
			"Guía práctica para formar niños respetuosos, seguros y responsables.",
		collection: "Colección Familia y Matrimonio",
	},
	{
		id: "oye-tengo-que-decirte",
		title: "Oye, tengo que decirte",
		description:
			"Cartas y reflexiones familiares llenas de valores, principios y cariño.",
		collection: "Colección Familia y Matrimonio",
	},

	// Infantil
	{
		id: "biblia-ninos",
		title: "El maravilloso mundo de la Biblia para niños",
		description:
			"Historias bíblicas ilustradas en lenguaje claro y atractivo.",
		collection: "Colección Infantil",
	},
	{
		id: "mejores-historias-ninos",
		title: "Las mejores historias para los niños",
		description:
			"Cuentos llenos de valores que enseñan respeto, gratitud y amistad.",
		collection: "Colección Infantil",
	},
	{
		id: "primeros-7-anos",
		title: "Los primeros 7 años",
		description:
			"Cómo formar el carácter y la inteligencia emocional desde la primera infancia.",
		collection: "Colección Infantil",
	},
	{
		id: "bellas-historias-biblia",
		title: "Las bellas historias de la Biblia",
		description:
			"Relatos bíblicos diseñados para fortalecer la fe desde la niñez.",
		collection: "Colección Infantil",
	},

	// Espiritual
	{
		id: "lenguaje-del-amor",
		title: "El lenguaje del amor: el arte de la comunicación",
		description:
			"Herramientas para conectarte emocional y espiritualmente con quienes amas.",
		collection: "Colección Espiritual",
	},
	{
		id: "misterio-profecia",
		title: "El misterio de la profecía",
		description:
			"Explicación clara de temas proféticos importantes para los tiempos actuales.",
		collection: "Colección Espiritual",
	},

	// Salud y Nutrición
	{
		id: "250-recetas",
		title: "250 recetas que previenen y curan",
		description:
			"Recetario para mejorar la salud desde la alimentación natural.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "jugos-batidos-bebidas",
		title: "Jugos, batidos y bebidas",
		description:
			"Combinaciones nutritivas para energía, desintoxicación y bienestar.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "jugos-batidos-tes",
		title: "Jugos, batidos y tés",
		description:
			"Mezclas saludables reforzadas con plantas medicinales.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "que-comemos-hoy",
		title: "¿Qué comemos hoy?",
		description:
			"Guía práctica para planear comidas saludables de forma simple.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "cocinando-con-ninos",
		title: "Cocinando con los niños",
		description:
			"Recetas fáciles para cocinar en familia y enseñar hábitos saludables.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "tes-plantas-medicinales",
		title: "Tés de plantas medicinales",
		description:
			"Preparaciones naturales para mejorar salud física y digestiva.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "salud-en-sus-manos",
		title: "Su salud en sus manos",
		description:
			"Manual completo de prevención y cuidado integral.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "poder-plantas",
		title: "El poder medicinal de las plantas",
		description:
			"Explicación científica y práctica de plantas curativas indispensables.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "nutricion-salud",
		title: "Nutrición y salud",
		description:
			"Todo lo que debes saber para alimentarte de forma correcta y equilibrada.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "poder-alimentos",
		title: "El poder medicinal de los alimentos",
		description:
			"Guía para aprovechar alimentos que curan y protegen el cuerpo.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "bebidas-saludables",
		title: "Bebidas saludables, nutritivas y deliciosas",
		description:
			"Preparaciones para mejorar vitalidad, digestión y energía.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "recetas-vegetarianas",
		title: "Recetas vegetarianas verdaderamente saludables",
		description:
			"Platos sabrosos, nutritivos y fáciles para una vida más ligera.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "plantas-medicinales-enciclopedia",
		title: "Plantas medicinales: conocimiento, utilidad y aplicación",
		description:
			"Manual detallado para usar plantas en el hogar con seguridad.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "primeros-auxilios",
		title: "Guía de primeros auxilios y emergencias",
		description:
			"Lo esencial para actuar correctamente ante accidentes o emergencias.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "reto-verde",
		title: "El reto verde – 28 días comiendo sano",
		description:
			"Programa práctico de alimentación natural para transformar tu salud.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "poder-jugos",
		title: "El poder medicinal de los jugos",
		description:
			"Combinaciones que fortalecen órganos, depuran y revitalizan.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "enciclopedia-ecologia-salud",
		title: "Enciclopedia de la ecología y la salud",
		description:
			"Cómo vivir de forma sostenible cuidando el planeta y tu salud.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "enciclopedia-plantas-medicinales",
		title: "Enciclopedia de las plantas medicinales",
		description:
			"Guía completa de plantas curativas, propiedades y usos.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "enciclopedia-alimentos",
		title: "Enciclopedia de los alimentos y su poder curativo",
		description:
			"Información profunda sobre cada alimento y su impacto en la salud.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "enciclopedia-salud-familia",
		title: "Enciclopedia salud y educación para la familia",
		description:
			"Manual integral sobre bienestar, crianza, salud y educación.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "placer-de-comer-bien",
		title: "El placer de comer bien",
		description:
			"Comidas sabrosas y saludables para prevenir enfermedades comunes.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "guia-enfermedades",
		title: "Diabetes / Depresión / Cáncer (guías prácticas)",
		description:
			"Cómo entender, prevenir y acompañar estas enfermedades.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "buen-provecho",
		title: "Buen provecho",
		description:
			"Platos nutritivos, coloridos y fáciles de preparar.",
		collection: "Colección Salud y Nutrición",
	},
	{
		id: "comer-sano",
		title: "Comer sano es natural",
		description:
			"Guía para disfrutar la vida con alimentación inteligente.",
		collection: "Colección Salud y Nutrición",
	},

	// Autoestima y Crecimiento
	{
		id: "descubre-tu-valor",
		title: "Descubre tu valor",
		description:
			"Cómo fortalecer la autoestima y reconocer tu propósito.",
		collection: "Colección Autoestima y Crecimiento",
	},
	{
		id: "disfruta-la-vida",
		title: "Disfruta la vida",
		description:
			"Guía práctica para vivir más y mejor cada día.",
		collection: "Colección Autoestima y Crecimiento",
	},
	{
		id: "poder-ejercicio",
		title: "El poder integral del ejercicio físico",
		description:
			"Ejercicios y rutinas para mantener el cuerpo sano y en forma.",
		collection: "Colección Autoestima y Crecimiento",
	},
	{
		id: "cuerpo-saludable",
		title: "Cuerpo saludable",
		description:
			"Consejos prácticos para el cuidado físico integral.",
		collection: "Colección Autoestima y Crecimiento",
	},
	{
		id: "saludablemente",
		title: "Saludablemente",
		description:
			"Cómo reconocer, prevenir y vencer la depresión.",
		collection: "Colección Autoestima y Crecimiento",
	},
	{
		id: "salud-por-naturaleza",
		title: "Salud por la naturaleza",
		description:
			"Métodos naturales para mejorar cuerpo, mente y bienestar.",
		collection: "Colección Autoestima y Crecimiento",
	},
	{
		id: "sanos-y-fuertes",
		title: "Sanos y fuertes",
		description:
			"Alimentación para niños, adolescentes y madres.",
		collection: "Colección Autoestima y Crecimiento",
	},
	{
		id: "sabores-del-mundo",
		title: "Sabores del mundo",
		description:
			"90 recetas vegetarianas de la cocina internacional — saludables y deliciosas.",
		collection: "Colección Autoestima y Crecimiento",
	},
];

