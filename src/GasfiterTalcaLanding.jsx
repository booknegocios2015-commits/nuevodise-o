import React, { useState } from "react";
import {
  Phone,
  Radar,
  Flame,
  Wrench,
  CheckCircle2,
  MapPin,
  Clock,
  Mail,
  Star,
  X,
  MessageCircle,
} from "lucide-react";
import heroImage from "./assets/tecnico-hero.png";

/* =========================================================
   CONFIG — Edita esto para adaptar la plantilla a otro rubro
   ========================================================= */
const CONFIG = {
  brandName: "Gasfiter Talca",
  whatsappNumber: "56977226112", // sin "+" ni espacios
  whatsappMessage:
    "Hola, vengo desde la página web y me gustaría cotizar un servicio.",
  colors: {
    bg: "#F9FAFB",
    primary: "#1E3A8A", // Azul corporativo - confianza
    whatsapp: "#25D366", // Verde WhatsApp - conversión
  },
  hero: {
    badge: "📍 Servicio Técnico Autorizado en Talca y Alrededores",
    title:
      "¿Cuenta de agua muy alta o emergencia con tu calefón? Lo solucionamos hoy mismo",
    subtitle:
      "Técnicos calificados con certificación SEC. Detección de fugas con tecnología avanzada y reparación garantizada por escrito. Sin sorpresas ni cobros ocultos.",
    ctaText: "Cotizar por WhatsApp al Instante",
  },
  services: [
    {
      icon: Radar,
      title: "Detección de Fugas Ocultas",
      text: "Localizamos fugas de agua y gas mediante ultrasonido y gas trazador. Encontramos la raíz del problema sin romper innecesariamente tus pisos o paredes.",
    },
    {
      icon: Flame,
      title: "Instalación y Reparación de Calefón",
      text: "Técnicos certificados por la SEC. Mantención preventiva y reparación de urgencia para que tu hogar nunca se quede sin agua caliente.",
    },
    {
      icon: Wrench,
      title: "Destapes de Alcantarillado",
      text: "Solución rápida con maquinaria especializada para destapar lavaplatos, desagües, baños y ductos obstruidos.",
    },
  ],
  whyUs: [
    {
      title: "Certificación SEC Vigente",
      text: "Seguridad garantizada bajo la normativa legal chilena.",
    },
    {
      title: "Precios Transparentes",
      text: "Conoce el presupuesto cerrado antes de iniciar cualquier tipo de intervención.",
    },
    {
      title: "Atención en todos los sectores",
      text: "Cobertura rápida en Las Rastras, La Florida, Carlos Trupp, Centro de Talca y comunas cercanas.",
    },
    {
      title: "Garantía Real",
      text: "Entregamos boleta detallada y respaldo de garantía en cada trabajo realizado.",
    },
  ],
  testimonials: [
    {
      name: "Marcela R.",
      location: "Las Rastras, Talca",
      text: "Llegaron muy rápido a mi casa en Las Rastras y detectaron la fuga con su máquina de ultrasonido sin romper nada. Excelente servicio.",
    },
    {
      name: "Jorge P.",
      location: "Centro, Talca",
      text: "Muy profesionales con la mantención del calefón, me dieron boleta y el precio fue el acordado.",
    },
    {
      name: "Daniela S.",
      location: "Carlos Trupp, Talca",
      text: "Destaparon el alcantarillado de mi casa en menos de una hora. Llegaron puntuales y dejaron todo limpio.",
    },
  ],
  contact: {
    schedule: "Atención las 24 horas, todos los días",
    phone: "+56 9 7722 6112",
    email: "contacto@gasfitertalca.cl",
    coverage: ["Talca", "San Clemente", "Pencahue", "Maule"],
    address: "Calle 24 Pte. 853, Talca, Maule",
  },
  map: {
    // Coordenadas reales del negocio (Calle 24 Pte. 853, Talca)
    lat: -35.4418146,
    lng: -71.7032436,
  },
  legal: {
    policies: {
      title: "Políticas de Servicio",
      content:
        "Toda visita técnica considera una revisión diagnóstica previa al inicio del trabajo. El presupuesto final se entrega por escrito antes de ejecutar cualquier reparación, y solo se procede con la autorización del cliente. Las garantías cubren mano de obra y repuestos instalados por nuestro equipo, según el detalle especificado en la boleta de servicio. Las visitas fuera del radio habitual de cobertura pueden tener un costo adicional, el cual será informado previamente.",
    },
    privacy: {
      title: "Política de Privacidad",
      content:
        "Los datos de contacto que nos proporcionas (nombre, teléfono, dirección y correo electrónico) son utilizados exclusivamente para coordinar y ejecutar el servicio solicitado. No compartimos tu información con terceros ni la utilizamos con fines publicitarios externos. Puedes solicitar la eliminación de tus datos de nuestros registros en cualquier momento escribiéndonos por los canales de contacto disponibles en esta página.",
    },
    terms: {
      title: "Términos del Servicio",
      content:
        "Al solicitar una cotización o agendar una visita técnica, aceptas que el diagnóstico inicial puede generar un costo si no se concreta la contratación del servicio, el cual será informado de antemano. Los plazos de atención son referenciales y pueden variar según la disponibilidad técnica y la complejidad del trabajo. El cliente es responsable de facilitar el acceso al lugar donde se realizará la intervención.",
    },
  },
};

/* =========================================================
   HELPERS
   ========================================================= */
const waLink = (extraText = "") => {
  const msg = encodeURIComponent(
    extraText ? `${CONFIG.whatsappMessage} ${extraText}` : CONFIG.whatsappMessage
  );
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
};

/* =========================================================
   COMPONENTES MODULARES
   ========================================================= */

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div
          className="text-xl sm:text-2xl font-extrabold tracking-tight"
          style={{ color: CONFIG.colors.primary }}
        >
          {CONFIG.brandName}
        </div>
        <a
          href={`tel:${CONFIG.contact.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 transition-colors"
        >
          <Phone size={16} />
          Emergencias
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-20"
      style={{ backgroundColor: CONFIG.colors.bg }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium mb-5"
            style={{
              backgroundColor: "#E0E7FF",
              color: CONFIG.colors.primary,
            }}
          >
            {CONFIG.hero.badge}
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-5"
            style={{ color: CONFIG.colors.primary }}
          >
            {CONFIG.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            {CONFIG.hero.subtitle}
          </p>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-white font-bold text-base sm:text-lg shadow-lg shadow-green-200 transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{ backgroundColor: CONFIG.colors.whatsapp }}
          >
            <WhatsappIcon className="w-6 h-6 transition-transform group-hover:rotate-6" />
            {CONFIG.hero.ctaText}
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] lg:aspect-[3/4]">
            <img
              src={heroImage}
              alt="Técnico de gasfitería certificado en Talca"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: CONFIG.colors.primary }}
          >
            Servicios de Emergencia y Tecnología
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Atacamos los problemas más comunes que enfrentan los hogares y
            negocios de Talca, con tecnología y técnicos certificados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E0E7FF" }}
                >
                  <Icon size={24} style={{ color: CONFIG.colors.primary }} />
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: CONFIG.colors.primary }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section
      className="px-4 sm:px-6 py-14 sm:py-20"
      style={{ backgroundColor: CONFIG.colors.bg }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: CONFIG.colors.primary }}
          >
            Por qué elegirnos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confianza, transparencia y respaldo en cada visita técnica.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {CONFIG.whyUs.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <CheckCircle2
                size={24}
                className="shrink-0 mt-0.5"
                style={{ color: CONFIG.colors.whatsapp }}
              />
              <div>
                <h3
                  className="font-bold mb-1"
                  style={{ color: CONFIG.colors.primary }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={waLink("Quisiera hablar con un técnico SEC.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-white font-bold text-base sm:text-lg shadow-lg shadow-green-200 transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{ backgroundColor: CONFIG.colors.whatsapp }}
          >
            <WhatsappIcon className="w-6 h-6" />
            Hablar con un Técnico SEC por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: CONFIG.colors.primary }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600">
            Reseñas reales de vecinos de Talca y alrededores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md shadow-gray-100 border border-gray-50"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    fill="#FBBF24"
                    color="#FBBF24"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: CONFIG.colors.primary }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCoverage() {
  const c = CONFIG.contact;
  return (
    <section
      className="px-4 sm:px-6 py-14 sm:py-20"
      style={{ backgroundColor: CONFIG.colors.bg }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-6"
            style={{ color: CONFIG.colors.primary }}
          >
            Ubicación y Cobertura
          </h2>

          <div className="space-y-5">
            <div className="flex gap-3">
              <Clock size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Horario de atención</p>
                <p className="text-gray-600 text-sm">{c.schedule}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Teléfono</p>
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-gray-600 text-sm hover:underline">
                  {c.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Correo electrónico</p>
                <a href={`mailto:${c.email}`} className="text-gray-600 text-sm hover:underline">
                  {c.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">Dirección</p>
                <p className="text-gray-600 text-sm">{c.address}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">Comunas de cobertura</p>
                <div className="flex flex-wrap gap-2">
                  {c.coverage.map((com) => (
                    <span
                      key={com}
                      className="text-xs font-medium rounded-full px-3 py-1"
                      style={{ backgroundColor: "#E0E7FF", color: CONFIG.colors.primary }}
                    >
                      {com}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3]">
          <iframe
            title="Ubicación Gasfiter Talca"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${CONFIG.map.lat},${CONFIG.map.lng}&z=15&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}

function WhatsappIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.397.633 4.732 1.834 6.789L4 29l7.4-1.81A12.94 12.94 0 0 0 16 27.002C22.627 27.002 28 21.629 28 15.001 28 8.373 22.628 3 16.001 3Zm0 23.4a10.36 10.36 0 0 1-5.288-1.456l-.379-.224-4.39 1.073 1.119-4.276-.247-.39A10.357 10.357 0 0 1 5.6 15.001C5.6 9.26 10.26 4.6 16.001 4.6c5.74 0 10.4 4.66 10.4 10.401 0 5.74-4.66 10.399-10.4 10.399Zm5.7-7.795c-.31-.155-1.83-.903-2.114-1.006-.284-.103-.49-.155-.697.155-.207.31-.8 1.006-.98 1.213-.18.207-.362.232-.672.077-.31-.155-1.31-.483-2.494-1.539-.922-.823-1.545-1.84-1.726-2.15-.18-.31-.02-.477.135-.631.139-.138.31-.362.465-.543.155-.18.207-.31.31-.516.103-.207.052-.387-.026-.542-.078-.155-.697-1.68-.956-2.301-.252-.604-.508-.522-.697-.532-.18-.009-.387-.011-.594-.011-.207 0-.542.078-.826.387-.284.31-1.084 1.06-1.084 2.585 0 1.524 1.11 2.997 1.265 3.204.155.207 2.185 3.336 5.293 4.679.74.32 1.318.511 1.768.654.743.236 1.418.203 1.952.123.595-.089 1.83-.748 2.088-1.471.258-.723.258-1.343.18-1.471-.077-.129-.284-.207-.594-.362Z" />
    </svg>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-2xl animate-pulse hover:animate-none hover:scale-110 transition-transform"
      style={{ backgroundColor: CONFIG.colors.whatsapp }}
    >
      <WhatsappIcon className="w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  );
}

function LegalModal({ data, onClose }) {
  if (!data) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h3
            className="text-xl font-bold pr-4"
            style={{ color: CONFIG.colors.primary }}
          >
            {data.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={22} />
          </button>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{data.content}</p>
      </div>
    </div>
  );
}

function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-white font-bold text-lg mb-1">{CONFIG.brandName}</p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {CONFIG.brandName}. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <button onClick={() => onOpenLegal("policies")} className="hover:text-white transition-colors">
            Políticas de Servicio
          </button>
          <button onClick={() => onOpenLegal("privacy")} className="hover:text-white transition-colors">
            Política de Privacidad
          </button>
          <button onClick={() => onOpenLegal("terms")} className="hover:text-white transition-colors">
            Términos del Servicio
          </button>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   APP PRINCIPAL
   ========================================================= */
export default function GasfiterTalcaLanding() {
  const [legalOpen, setLegalOpen] = useState(null); // "policies" | "privacy" | "terms" | null

  return (
    <div className="font-sans antialiased text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <LocationCoverage />
      </main>
      <Footer onOpenLegal={setLegalOpen} />
      <FloatingWhatsapp />
      <LegalModal
        data={legalOpen ? CONFIG.legal[legalOpen] : null}
        onClose={() => setLegalOpen(null)}
      />
    </div>
  );
}
