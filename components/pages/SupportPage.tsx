'use client';

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    hero: {
      badge: "Centro de Ayuda",
      title: "Estamos aquí para ayudarte",
      subtitle: "Respuesta garantizada en menos de 24 horas.",
    },
    contact: {
      heading: "Contacto directo",
      email: "hola@muebly.es",
      web: "https://muebly.es",
      emailLabel: "Escríbenos",
      webLabel: "Visita la web",
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cómo subo una foto de mi habitación?",
          a: 'Abre la app y pulsa el botón "Nueva visualización". Selecciona una foto desde tu galería o toma una foto en ese momento. Para mejores resultados, usa una imagen bien iluminada y tomada desde la esquina de la habitación para capturar la mayor parte del espacio.',
        },
        {
          q: "¿Por qué no se genera el resultado de IA?",
          a: "Las causas más comunes son: imagen demasiado oscura o borrosa, formato no compatible (usa JPG o PNG) o conexión a internet inestable. Asegúrate de que la foto tenga buena iluminación y vuelve a intentarlo. Si el problema persiste, escríbenos a hola@muebly.es.",
        },
        {
          q: "¿Los muebles que aparecen son reales y se pueden comprar?",
          a: "Sí. Muebly está conectado a catálogos de muebles reales de retailers asociados. En la visualización puedes tocar cualquier mueble para ver su ficha de producto y, si te gusta, enlaza directamente a la tienda para comprarlo.",
        },
        {
          q: "¿Cómo comparo dos diseños distintos?",
          a: 'Después de generar una visualización, guárdala pulsando el icono de marcador. Genera una segunda visualización y usa la función "Comparar" (icono de dos cuadrados) para ver ambas en paralelo con un deslizador.',
        },
        {
          q: "¿La app es gratuita?",
          a: "Muebly ofrece un plan gratuito con visualizaciones limitadas al mes. Los planes de pago (mensual o anual) incluyen visualizaciones ilimitadas, acceso a más estilos y funcionalidades avanzadas. Puedes ver todos los planes en la sección de precios de la app.",
        },
        {
          q: "¿Cómo cancelo mi suscripción?",
          a: "Puedes cancelar en cualquier momento desde Ajustes > Suscripción > Cancelar plan. La suscripción permanece activa hasta el final del período pagado y no se realizan cargos adicionales. Si tienes problemas para cancelar, escríbenos a hola@muebly.es.",
        },
        {
          q: "¿Puedo usar Muebly si tengo una tienda de muebles?",
          a: "Absolutamente. Disponemos de un plan B2B especialmente diseñado para retailers de muebles y agencias inmobiliarias. Incluye integración de catálogo propio, acceso para múltiples usuarios y un panel de analítica. Contáctanos en hola@muebly.es para más información.",
        },
        {
          q: "¿Mis fotos están seguras? ¿Muebly las almacena?",
          a: "Tus fotos se procesan de forma segura y se almacenan únicamente para generar y mostrar tus visualizaciones. No las usamos para entrenar modelos de IA ni las compartimos con terceros. Puedes eliminar tus imágenes en cualquier momento desde Ajustes > Mis fotos. Consulta nuestra Política de Privacidad para más detalles.",
        },
        {
          q: "¿Muebly funciona en móvil y en ordenador?",
          a: "Sí. Muebly está disponible como app para iOS y Android, y también como versión web accesible desde cualquier navegador en ordenador o tablet. Todas tus visualizaciones se sincronizan automáticamente entre dispositivos.",
        },
        {
          q: "¿Qué estilos de decoración puedo explorar?",
          a: "Muebly incluye más de 20 estilos: nórdico, japandi, minimalista, industrial, mediterráneo, boho, clásico, contemporáneo y muchos más. Los planes de pago dan acceso a todos los estilos disponibles y a las novedades que añadimos cada mes.",
        },
      ],
    },
  },
  en: {
    hero: {
      badge: "Help Center",
      title: "We're here to help",
      subtitle: "Guaranteed response in under 24 hours.",
    },
    contact: {
      heading: "Get in touch",
      email: "hola@muebly.es",
      web: "https://muebly.es",
      emailLabel: "Email us",
      webLabel: "Visit website",
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How do I upload a room photo?",
          a: 'Open the app and tap "New visualization". Select a photo from your gallery or take one on the spot. For best results, use a well-lit image taken from a corner of the room to capture as much of the space as possible.',
        },
        {
          q: "Why isn't the AI result generating?",
          a: "The most common causes are: image too dark or blurry, unsupported format (use JPG or PNG), or an unstable internet connection. Make sure the photo is well lit and try again. If the problem persists, email us at hola@muebly.es.",
        },
        {
          q: "Is the furniture shown real and available to buy?",
          a: "Yes. Muebly is connected to real furniture catalogs from partner retailers. In the visualization you can tap any piece of furniture to view its product page and, if you like it, go directly to the store to purchase it.",
        },
        {
          q: "How do I compare two different designs?",
          a: 'After generating a visualization, save it by tapping the bookmark icon. Generate a second visualization and use the "Compare" function (two-squares icon) to view both side by side with a slider.',
        },
        {
          q: "Is the app free to use?",
          a: "Muebly offers a free plan with a limited number of visualizations per month. Paid plans (monthly or annual) include unlimited visualizations, access to more styles, and advanced features. You can see all plans in the app's pricing section.",
        },
        {
          q: "How do I cancel my subscription?",
          a: "You can cancel at any time from Settings > Subscription > Cancel plan. Your subscription remains active until the end of the paid period with no additional charges. If you have trouble cancelling, email us at hola@muebly.es.",
        },
        {
          q: "Can I use Muebly if I run a furniture store?",
          a: "Absolutely. We offer a B2B plan specifically designed for furniture retailers and real estate agencies. It includes your own catalog integration, multi-user access, and an analytics dashboard. Contact us at hola@muebly.es for more information.",
        },
        {
          q: "Are my photos safe? Does Muebly store them?",
          a: "Your photos are processed securely and stored only to generate and display your visualizations. We do not use them to train AI models or share them with third parties. You can delete your images at any time from Settings > My photos. See our Privacy Policy for full details.",
        },
        {
          q: "Does Muebly work on mobile and desktop?",
          a: "Yes. Muebly is available as an app for iOS and Android, and also as a web version accessible from any browser on desktop or tablet. All your visualizations sync automatically across devices.",
        },
        {
          q: "What decoration styles can I explore?",
          a: "Muebly includes over 20 styles: Scandinavian, Japandi, minimalist, industrial, Mediterranean, boho, classic, contemporary and many more. Paid plans give access to all available styles and new ones we add every month.",
        },
      ],
    },
  },
};

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#191b1d]/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-[#191b1d] font-medium group-hover:text-[#00ffc3] transition-colors">
          {question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-[#191b1d]/20 flex items-center justify-center transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="#191b1d" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-[#686a6c] leading-relaxed pb-5 pr-10">{answer}</p>
      )}
    </div>
  );
}

export function SupportPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-[#191b1d] pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[#00ffc3] text-sm font-semibold uppercase tracking-widest mb-4">
              {c.hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {c.hero.title}
            </h1>
            <p className="text-white/60 text-lg">{c.hero.subtitle}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Contact cards */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-[#191b1d] mb-6">{c.contact.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${c.contact.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-[#191b1d]/10 hover:border-[#00ffc3] hover:shadow-sm transition-all group"
              >
                <span className="w-10 h-10 bg-[#00ffc3]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00ffc3]/20 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ffc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#686a6c] mb-0.5">{c.contact.emailLabel}</p>
                  <p className="text-[#191b1d] font-medium text-sm">{c.contact.email}</p>
                </div>
              </a>
              <a
                href={c.contact.web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-[#191b1d]/10 hover:border-[#00ffc3] hover:shadow-sm transition-all group"
              >
                <span className="w-10 h-10 bg-[#00ffc3]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#00ffc3]/20 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ffc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#686a6c] mb-0.5">{c.contact.webLabel}</p>
                  <p className="text-[#191b1d] font-medium text-sm">muebly.es</p>
                </div>
              </a>
            </div>
          </section>

          {/* FAQ accordion */}
          <section>
            <h2 className="text-xl font-semibold text-[#191b1d] mb-6">{c.faq.heading}</h2>
            <div className="rounded-2xl border border-[#191b1d]/10 px-6">
              {c.faq.items.map((item, i) => (
                <AccordionItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-16 text-center p-10 rounded-2xl bg-[#191b1d]">
            <p className="text-white/60 text-sm mb-2">
              {language === "es" ? "¿No has encontrado lo que buscabas?" : "Didn't find what you were looking for?"}
            </p>
            <a
              href={`mailto:${c.contact.email}`}
              className="inline-flex items-center gap-2 bg-[#00ffc3] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#00ffc3]/90 transition-colors mt-2"
            >
              {language === "es" ? "Escríbenos directamente" : "Write to us directly"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
