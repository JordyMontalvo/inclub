export const WHATSAPP_NUMBER = "51999999999"; // Reemplazar con el número real
export const WHATSAPP_MESSAGE = "Hola, me interesa conocer más sobre las membresías de InResorts y Ribera del Río.";

export const PORTFOLIO_PROJECTS = [
  {
    id: "ribera",
    title: "Ribera del Río Club Resort",
    location: "Cieneguilla, Lima",
    status: "100% Operativo",
    description: "Club campestre con sol todo el año, piscinas, restaurantes y amplias áreas verdes. Ideal para disfrutar en familia cerca de Lima.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "lajoya",
    title: "La Joya Park Resort",
    location: "Arequipa",
    status: "En desarrollo",
    description: "El primer mega parque temático acuático y resort del sur del país, con múltiples atracciones y un diseño exclusivo.",
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "playa",
    title: "Playa Hermosa",
    location: "Tumbes",
    status: "En expansión",
    description: "Nuestro próximo destino de playa en el norte del Perú, diseñado para ofrecer una experiencia paradisíaca y de alta rentabilidad.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
  }
];

export const MEMBERSHIPS = [
  {
    id: "basica",
    name: "Vitalicia Básica",
    description: "Ideal para parejas o familias pequeñas",
    beneficiaries: "Titular + 1 beneficiario",
    benefits: ["Acceso 365 días", "Descuentos en servicios (20-30%)", "Participación de utilidades"],
    price: "$ 4,500",
    numericPrice: 4500,
    defaultInitial: 500,
    cuotas: "Desde $100 / mes",
    color: "emerald"
  },
  {
    id: "family",
    name: "Vitalicia Family",
    description: "La mejor opción para familias",
    beneficiaries: "Titular + 3 beneficiarios",
    benefits: ["Acceso 365 días", "Descuentos en servicios", "Intercambio vacacional RCI", "Mayor participación de utilidades"],
    price: "$ 6,600",
    numericPrice: 6600,
    defaultInitial: 600,
    cuotas: "Desde $100 / mes",
    color: "amber",
    popular: true
  },
  {
    id: "premium",
    name: "Vitalicia Family Premium",
    description: "Exclusividad total y altos beneficios",
    beneficiaries: "Titular + 5 beneficiarios",
    benefits: ["Acceso 365 días", "Descuentos máximos", "Intercambio vacacional RCI (2 semanas)", "Mayor paquete accionario"],
    price: "$ 13,200",
    numericPrice: 13200,
    defaultInitial: 1200,
    cuotas: "Desde $200 / mes",
    color: "emerald"
  }
];

export const COMPARISON_FEATURES = [
  {
    feature: "Inversión / Costo de Ingreso",
    inclub: "Desde $4,500 USD (Financiado)",
    traditionalClub: "$25,000 - $60,000 USD (Al contado)",
    commercialHotels: "$150 - $350 USD por noche cada viaje",
    highlight: true,
  },
  {
    feature: "Facilidad de Pago",
    inclub: "Hasta 60 cuotas sin bancos ni Infocorp",
    traditionalClub: "Pago al contado o crédito bancario estricto",
    commercialHotels: "Gasto de bolsillo no reembolsable",
    highlight: false,
  },
  {
    feature: "¿Genera Utilidades / Acciones?",
    inclub: "SÍ (Socio copropietario con títulos)",
    traditionalClub: "NO (Membresía social sin retorno)",
    commercialHotels: "NO (100% gasto de consumo)",
    highlight: true,
  },
  {
    feature: "Mantenimiento Mensual",
    inclub: "Mantenimiento justo y flexible",
    traditionalClub: "Obligatorio mensual de por vida ($150-$400/mes)",
    commercialHotels: "Tarifas dinámicas y recargos de temporada",
    highlight: false,
  },
  {
    feature: "Destinos Internacionales",
    inclub: "Alianza RCI (+4,300 resorts en 110 países)",
    traditionalClub: "Limitado únicamente a la sede local",
    commercialHotels: "Pagando cada reserva a precio de mercado",
    highlight: true,
  },
  {
    feature: "Patrimonio Heredable y Transferible",
    inclub: "SÍ, 100% vitalicia y heredable a tus hijos",
    traditionalClub: "Trámites engorrosos de traspaso y cuotas extra",
    commercialHotels: "No genera ningún activo acumulable",
    highlight: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: "¿Cómo está legalmente respaldada mi inversión y la posesión de acciones?",
    answer: "Cada socio adquiere un paquete de acciones de la empresa propietaria del desarrollo hotelero y resort (InResorts / Ribera del Río). Toda la operación se formaliza mediante contrato legal de compraventa de acciones con respaldo registral y entrega de certificado accionario, convirtiéndote en copropietario del activo inmobiliario.",
  },
  {
    question: "¿La membresía es vitalicia y heredable a mis hijos o familiares?",
    answer: "Sí. A diferencia de un club tradicional o un simple paquete vacacional temporal, tu membresía Inclub es un activo patrimonial permanente. Tiene vigencia vitalicia y puede ser transferida, vendida o heredada legalmente a tus descendientes en cualquier momento.",
  },
  {
    question: "¿El financiamiento directo requiere evaluación crediticia en Infocorp o bancos?",
    answer: "No. El financiamiento es 100% directo con la compañía Inclub. No requerimos historial bancario, avales hipotecarios ni consultas a centrales de riesgo (Infocorp). Puedes elegir plazos desde 12 hasta 60 meses con cuotas fijas accesibles desde $100 al mes.",
  },
  {
    question: "¿Cómo funciona el intercambio vacacional internacional con la red RCI?",
    answer: "A través del convenio con RCI (Resort Condominiums International), la red de intercambio vacacional más grande del mundo, puedes intercambiar tus semanas vacacionales por estadías en más de 4,300 resorts afiliados en más de 110 países (incluyendo Orlando, Cancún, Punta Cana, Europa y el Caribe).",
  },
  {
    question: "¿Qué sucede si no utilizo mis semanas de hospedaje en el resort?",
    answer: "Si un año decides no hacer uso de tus semanas vacacionales, puedes ingresarlas al pool de rentas administrado por la cadena hotelera para monetizarlas o cederlas a familiares y amigos autorizados, optimizando al máximo el valor de tu membresía.",
  },
  {
    question: "¿A partir de qué momento puedo empezar a usar las instalaciones de Cieneguilla?",
    answer: "Ribera del Río Club Resort en Cieneguilla se encuentra 100% operativo en su primera fase. Puedes empezar a disfrutar de sus piscinas, restaurante, áreas verdes e instalaciones recreativas desde el pago de tu cuota inicial y firma de contrato.",
  },
];

