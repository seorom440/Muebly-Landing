'use client';

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Política de Cookies",
    lastUpdated: "Última actualización: abril 2026",
    whatAreTitle: "¿Qué son las cookies?",
    whatAreBody:
      "Las cookies son pequeños archivos de texto que los sitios web depositan en tu dispositivo cuando los visitas. Nos permiten recordar tus preferencias, analizar el uso y mejorar la experiencia.",
    tableTitle: "Cookies que utilizamos",
    tableHeaders: ["Nombre", "Tipo", "Finalidad", "Duración"],
    tableRows: [
      ["muebly-lang", "Técnica / Preferencia", "Guarda tu idioma preferido", "1 año"],
      ["muebly-cookie-consent", "Técnica / Preferencia", "Guarda tu elección sobre cookies", "1 año"],
      ["_ga, _gid", "Analítica (Google Analytics)", "Análisis de uso anónimo del sitio", "2 años / 24h"],
    ],
    typesTitle: "Tipos de cookies",
    types: [
      {
        name: "Cookies técnicas / estrictamente necesarias:",
        desc: "Imprescindibles para el funcionamiento del sitio. No requieren consentimiento.",
      },
      {
        name: "Cookies de preferencias:",
        desc: "Recuerdan tu idioma y configuración. Se activan si aceptas.",
      },
      {
        name: "Cookies analíticas:",
        desc: "Nos permiten entender cómo se usa el sitio (datos anonimizados). Se activan si aceptas.",
      },
      {
        name: "Cookies de marketing:",
        desc: "Actualmente no utilizamos cookies de publicidad comportamental.",
      },
    ],
    managementTitle: "Gestión de cookies",
    managementBody:
      "Puedes aceptar o rechazar las cookies no esenciales mediante el banner de consentimiento que aparece en tu primera visita. También puedes gestionar las cookies desde la configuración de tu navegador. Ten en cuenta que rechazar cookies puede afectar a algunas funcionalidades del sitio.",
    contactTitle: "Contacto",
    contactBody: "Para cualquier duda: ",
  },
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last updated: April 2026",
    whatAreTitle: "What are cookies?",
    whatAreBody:
      "Cookies are small text files that websites place on your device when you visit them. They allow us to remember your preferences, analyze usage, and improve the experience.",
    tableTitle: "Cookies we use",
    tableHeaders: ["Name", "Type", "Purpose", "Duration"],
    tableRows: [
      ["muebly-lang", "Technical / Preference", "Stores your preferred language", "1 year"],
      ["muebly-cookie-consent", "Technical / Preference", "Stores your cookie choice", "1 year"],
      ["_ga, _gid", "Analytics (Google Analytics)", "Anonymous site usage analysis", "2 years / 24h"],
    ],
    typesTitle: "Types of cookies",
    types: [
      {
        name: "Technical / strictly necessary cookies:",
        desc: "Essential for the website to function. Do not require consent.",
      },
      {
        name: "Preference cookies:",
        desc: "Remember your language and settings. Activated if you accept.",
      },
      {
        name: "Analytics cookies:",
        desc: "Allow us to understand how the site is used (anonymized data). Activated if you accept.",
      },
      {
        name: "Marketing cookies:",
        desc: "We currently do not use behavioral advertising cookies.",
      },
    ],
    managementTitle: "Cookie management",
    managementBody:
      "You can accept or reject non-essential cookies through the consent banner that appears on your first visit. You can also manage cookies from your browser settings. Please note that rejecting cookies may affect some functionality of the site.",
    contactTitle: "Contact",
    contactBody: "For any questions: ",
  },
};

export function CookiesPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-[#191b1d] mb-2">{c.title}</h1>
          <p className="text-[#686a6c] text-sm mb-10">{c.lastUpdated}</p>

          <h2 className="text-xl font-semibold text-[#191b1d] mt-8 mb-3">{c.whatAreTitle}</h2>
          <p className="text-[#686a6c] leading-relaxed">{c.whatAreBody}</p>

          <h2 className="text-xl font-semibold text-[#191b1d] mt-8 mb-3">{c.tableTitle}</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-[#686a6c] border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  {c.tableHeaders.map((header, i) => (
                    <th key={i} className="text-left py-2 pr-4 font-semibold text-[#191b1d]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    {row.map((cell, j) => (
                      <td key={j} className="py-2 pr-4 leading-relaxed">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-[#191b1d] mt-8 mb-3">{c.typesTitle}</h2>
          <ul className="space-y-3">
            {c.types.map((type, i) => (
              <li key={i} className="text-[#686a6c] leading-relaxed">
                <span className="font-medium text-[#191b1d]">{type.name}</span> {type.desc}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-[#191b1d] mt-8 mb-3">{c.managementTitle}</h2>
          <p className="text-[#686a6c] leading-relaxed">{c.managementBody}</p>

          <h2 className="text-xl font-semibold text-[#191b1d] mt-8 mb-3">{c.contactTitle}</h2>
          <p className="text-[#686a6c] leading-relaxed">
            {c.contactBody}
            <a href="mailto:hola@muebly.es" className="text-[#00ffc3] hover:underline">
              hola@muebly.es
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
