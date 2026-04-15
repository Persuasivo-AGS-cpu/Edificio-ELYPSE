"use client";

import { useState, useEffect } from "react";
import styles from "./FaqSection.module.css";

const categories = ["Todo", "Precios", "Domicilio Fiscal", "Ubicación", "Instalaciones", "Seguridad", "Contacto"];

const faqs = [
  // 📍 Ubicación
  {
    category: "Ubicación",
    q: "¿En dónde están ubicados exactamente?",
    a: "Estamos en el pasillo corporativo más prestigioso de San Pedro: San Alberto Ote. 301, Residencial Santa Bárbara. A tan solo 2 minutos de Fashion Drive. 👉 Usa el mapa visual para navegar.",
    tags: ["ubicacion", "ubicación", "donde", "dónde", "direccion", "dirección", "calle", "mapa"]
  },
  {
    category: "Ubicación",
    q: "¿Cómo llego al edificio?",
    a: "Tienes acceso inmediato por Av. Lázaro Cárdenas, ingresando hacia Residencial Santa Bárbara. Al subir, notarás la privacidad absoluta de la zona, aislada del tráfico denso. 👉 Agenda un recorrido para enviarte la ubicación exacta por WhatsApp.",
    tags: ["llegar", "llegada", "ruta", "camino", "vialidad", "trafico"]
  },

  // 💰 Precios
  {
    category: "Precios",
    q: "¿Cuál es el precio exacto de la renta mensual?",
    a: "Nuestras oficinas privadas mantienen un estándar directivo desde $12,500 MXN mensuales. Un formato All-Inclusive que elimina sorpresas administrativas. 👉 Da clic en el botón flotante de WhatsApp para consultar disponibilidad actual.",
    tags: ["precio", "costo", "cuota", "renta", "cobro", "mensualidad", "pagar", "dinero"]
  },
  {
    category: "Precios",
    q: "¿Qué incluye la cuota de $12,500 MXN exactamente?",
    a: "Lo incluye casi todo: Oficina 100% amueblada estilo ejecutivo, consumo de energía eléctrica comercial (CFE), agua, mantenimiento general y de áreas comunes, uso de 2 salas de junta y recepción.",
    tags: ["incluye", "inclusion", "beneficios", "servicios", "pago", "cfe", "luz", "agua"]
  },
  {
    category: "Precios",
    q: "¿Cuánto piden de depósito o meses por adelantado?",
    a: "Llevamos un proceso estándar y seguro para ambas partes. Requerimos únicamente un mes de depósito en garantía y el primer mes de renta corriente a la firma de tu contrato. 👉 Inicia tu pre-calificación arriba para recibir los formatos.",
    tags: ["deposito", "depósito", "adelanto", "garantia", "fianza", "enganche", "inicial"]
  },
  {
    category: "Precios",
    q: "¿Me obligan a firmar un contrato forzoso a largo plazo?",
    a: "No estrangulamos tus finanzas. Nos adaptamos a la velocidad de tu empresa ofreciendo esquemas de 6 a 12 meses, dándote estabilidad o flexibilidad según lo requieras para escalar.",
    tags: ["contrato", "forzoso", "plazos", "condiciones", "tiempo", "meses", "penalizacion", "amarrado"]
  },
  {
    category: "Precios",
    q: "¿Los precios incluyen el servicio eléctrico (CFE) y el agua?",
    a: "Definitivamente. Sabemos que las tarifas comerciales de CFE (DAC) en San Pedro pueden ser muy caras y fluctuantes. En Elypse nosotros absorbemos esos golpes, pagas una cuota fija sin sorpresas.",
    tags: ["cfe", "luz", "electricidad", "recibo", "pago", "agua", "ocultos", "mantenimiento"]
  },

  // 🏛 Domicilio Fiscal y SAT
  {
    category: "Domicilio Fiscal",
    q: "¿Puedo usar esta dirección como mi Domicilio Fiscal ante el SAT?",
    a: "Es nuestra mayor ventaja competitiva. Al firmar el contrato, obtienes el derecho y los comprobantes legítimos para domiciliar tu empresa o razón social aquí, dándote credibilidad inmediata. Contamos con guardias en recepción las 24 horas del día, los 7 días de la semana, que sirven para recibir correspondencia o notificaciones en el domicilio fiscal. 👉 Agenda una cita para iniciar tu alta.",
    tags: ["sat", "fiscal", "domicilio", "direccion", "dirección", "facturacion", "hacienda", "rfc", "alta"]
  },
  {
    category: "Domicilio Fiscal",
    q: "¿Reciben paquetería o cartas legales si yo no estoy presente?",
    a: "Estás blindado. Contamos con personal de Recepción y guardias que recibirán cualquier notificación física, citatorio SAT, envío de Amazon o contratos corporativos a tu nombre de forma segura y confidencial.",
    tags: ["paquetes", "paqueteria", "cartas", "mensajes", "recepcion", "amazon", "entrega"]
  },
  {
    category: "Domicilio Fiscal",
    q: "¿Qué documentos legales necesito para firmar hoy?",
    a: "Cero burocracia excesiva. Pedimos Identificación Oficial, Constancia de Situación Fiscal (si aplica), comprobante de domicilio personal y llenar nuestra solicitud interna. 👉 Llena el widget inicial para acelerar el proceso.",
    tags: ["documentos", "requisitos", "papeles", "firmar", "alta", "necesito", "ine"]
  },

  // 🪑 Oficinas Privadas e Instalaciones
  {
    category: "Instalaciones",
    q: "¿Las oficinas privadas ya se entregan amuebladas?",
    a: "Sí, olvídate de desgastarte comprando muebles. Te entregamos un espacio \"Llave en mano\" con escritorios funcionales y sillones directivos listos para que solo conectes tu laptop y operes.",
    tags: ["muebles", "amueblado", "vacía", "vacia", "sillas", "escritorio", "equipada"]
  },
  {
    category: "Instalaciones",
    q: "¿De qué tamaño son las oficinas y cuánta gente cabe?",
    a: "Son espacios diseñados para alto enfoque de 3.5 x 3.5 metros con espectaculares alturas libres de 3 metros, perfectos para un ejecutivo principal y hasta 2 visitas, o para ti y un socio.",
    tags: ["tamaño", "medidas", "metros", "espacio", "cabemos", "personas", "grande"]
  },
  {
    category: "Instalaciones",
    q: "¿Tienen salas de juntas para recibir a mis inversionistas?",
    a: "Por supuesto. El edificio cuenta con 2 Salas de Juntas completamente equipadas para proyectar el estatus que merecen tus reuniones, negociaciones y cierres de mes.",
    tags: ["salas", "juntas", "reuniones", "inversionistas", "clientes", "exposiciones", "proyector"]
  },
  {
    category: "Instalaciones",
    q: "¿El uso de la sala de juntas tiene un costo extra o limite?",
    a: "Está incluido en tus amenidades. Manejamos una agenda inteligente interna entre inquilinos para garantizar un uso equitativo y profesional sin costos ocultos por hora.",
    tags: ["costo", "extra", "pago", "adicional", "limite", "horas", "reservar"]
  },
  {
    category: "Instalaciones",
    q: "¿Puedo personalizar, pintar o agregar mi logo a mi oficina?",
    a: "Respetamos el diseño corporativo del pasillo, pero tu puerta está sujeta a revisión para discretos logotipos. El interior es tuyo para organizarlo de forma que fomente tu productividad extrema.",
    tags: ["Logo", "pintar", "remodelar", "modificar", "personalizar", "colgar", "cuadros"]
  },
  {
    category: "Instalaciones",
    q: "¿Tienen estacionamiento para mis visitas o clientes?",
    a: "Sí. Para ti, aseguramos 1 Cajón VIP Directivo exclusivo de pensión. Y para tus clientes o inversionistas, hay amplia disponibilidad y tranquilidad de estacionamiento exterior seguro. Ya no batallarán para verte.",
    tags: ["estacionamiento", "parqueo", "parking", "coche", "carro", "visitas", "cajon", "cajones"]
  },

  // 🛡 Privacidad, Seguridad y Tecnología
  {
    category: "Seguridad",
    q: "¿El servicio de internet y clima viene incluido?",
    a: "Sí, tu renta incluye todo lo necesario para operar sin rentas sombra: internet de alta velocidad, consumo de luz, clima de tu oficina privada, mantenimiento externo, un cajón de estacionamiento y acceso a salas de juntas.",
    tags: ["internet", "wifi", "conexion", "red", "fibra", "velocidad", "megas", "clima", "aire"]
  },
  {
    category: "Seguridad",
    q: "¿Tienen guardias de seguridad o monitoreo y está abierto 24/7?",
    a: "Totalmente. El acceso está controlado, hay sistema de circuito cerrado (CCTV) las 24 horas y guardias que resguardan la tranquilidad del pasillo directivo.",
    tags: ["seguridad", "camaras", "guardias", "noche", "horarios", "cctv", "robos"]
  },

  // 🚀 Cierres y Contacto Inmediato
  {
    category: "Contacto",
    q: "¿Cuál es su teléfono de contacto o WhatsApp directo?",
    a: "¡Estamos listos para atenderte! Haz clic en el círculo flotante de WhatsApp en la esquina de tu pantalla o utiliza el widget animado en la parte superior para comunicarte directamente con Ventas.",
    tags: ["telefono", "teléfono", "celular", "whatsapp", "llamar", "marcar", "numero", "contacto"]
  },
  {
    category: "Contacto",
    q: "¿Cómo puedo sacar una cita y agendar un recorrido presencial hoy?",
    a: "Es muy fácil. Responde las 3 preguntas del buscador rápido que está en la sección principal superior y un operador de perfilamiento te agendará hoy mismo para darte un recorrido VIP.",
    tags: ["cita", "recorrido", "agendar", "visitar", "ver", "ir", "hoy", "manana"]
  }
];

const placeholderPhrases = [
  "Ej. ¿Puedo usarlo de Domicilio Fiscal?",
  "Ej. ¿Cuál es su número de teléfono o WhatsApp?",
  "Ej. ¿El precio incluye el recibo de la luz?",
  "Ej. ¿Tienen estacionamiento para mis visitas?",
  "Ej. ¿Cómo puedo llegar a las oficinas?",
  "Ej. ¿Si no estoy, alguien recibe mi paquetería del SAT?"
];

// Eliminamos acentos y caracteres especiales para una búsqueda más inteligente
const normalizeText = (text: string) => {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Reordenar FAQS para que salgan las más críticas primero en la vista "Todo"
const topPriorityQuestions = [
  "¿Cuál es el precio exacto de la renta mensual?",
  "¿Qué incluye la cuota de $12,500 MXN exactamente?",
  "¿Puedo usar esta dirección como mi Domicilio Fiscal ante el SAT?",
  "¿Puedo usar la oficina únicamente como mi Domicilio Fiscal ante el SAT?", // legacy just in case
  "¿Me obligan a firmar un contrato forzoso a largo plazo?"
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todo");
  
  const [placeholder, setPlaceholder] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentPhrase = placeholderPhrases[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && placeholder === currentPhrase) {
      typingSpeed = 3000; // Pause at end of text
      const waitTimeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(waitTimeout);
    } else if (isDeleting && placeholder === "") {
      const waitTimeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % placeholderPhrases.length);
      }, 500);
      return () => clearTimeout(waitTimeout);
    }

    const timeout = setTimeout(() => {
      setPlaceholder(prev => 
        isDeleting 
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, phraseIndex]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchTerm(""); // Limpiamos búsqueda si hace click
    setOpenIndex(0); // Abre la primera
  };

  const normalizedSearch = normalizeText(searchTerm);

  // 1. Filtrar
  let filteredFaqs = faqs;
  
  if (searchTerm) {
    // Si busca, ignora categoría. Busca en TODO.
    filteredFaqs = faqs.filter(faq => {
      return (
        normalizeText(faq.q).includes(normalizedSearch) || 
        normalizeText(faq.a).includes(normalizedSearch) ||
        faq.tags.some(tag => normalizeText(tag).includes(normalizedSearch))
      );
    });
  } else {
    // Si no busca con texto, filtra por Categoría.
    if (activeCategory !== "Todo") {
      filteredFaqs = faqs.filter(faq => faq.category === activeCategory);
    } else {
      // Visión 'TODO' por defecto: Mostrar solo el Top 5 para no abrumar (Clean UX).
      filteredFaqs = faqs.filter(faq => topPriorityQuestions.includes(faq.q)).slice(0, 4);
      // Si la extracción del Top falla, agarrar los primeros 4 para evitar pared de texto.
      if (filteredFaqs.length === 0) filteredFaqs = faqs.slice(0, 4);
    }
  }

  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.premiumBadge}>Concierge Digital</div>
          <h2 className={styles.title}>Buscador Inteligente</h2>
          <p className={styles.subtitle}>Escribe tus dudas y encontraremos la respuesta exacta en milisegundos.</p>
        </div>

        <div className={styles.searchWrapper}>
          <div className={styles.searchInputContainer}>
            <svg className={styles.searchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveCategory("Todo"); // reset tabs visuals if manual search
                setOpenIndex(0); 
              }}
            />
          </div>
          
          {/* Glassmorphism Pills */}
          <div className={styles.categoryTabs}>
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`${styles.categoryPill} ${activeCategory === cat && !searchTerm ? styles.activePill : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.accordionList}>
          {filteredFaqs.length > 0 ? (
            <>
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className={styles.questionBanner}>
                      <h3 className={styles.questionText}>{faq.q}</h3>
                      <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                    </div>
                    <div 
                      className={styles.answerArea} 
                      style={{ height: isOpen ? 'auto' : '0px', opacity: isOpen ? 1 : 0, overflow: 'hidden' }}
                    >
                      <p className={styles.answerFormatted}>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
              {/* Fade out hint so they know there is more if they search */}
              {!searchTerm && activeCategory === "Todo" && (
                <div className={styles.moreHint}>
                  <p>Utiliza los filtros superiores o el buscador para ver más de 15 respuestas.</p>
                </div>
              )}
            </>
          ) : (
            <div className={styles.noResults}>
              <p>No encontramos una respuesta exacta para &quot;{searchTerm}&quot;.</p>
              <p className={styles.noResultsSub}>Usa nuestro widget inicial o contáctanos por WhatsApp para resolverlo de inmediato.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
