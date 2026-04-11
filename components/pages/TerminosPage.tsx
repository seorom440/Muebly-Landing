'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Términos y Condiciones del Servicio",
    lastUpdated: "Última actualización: abril 2026",
    sections: [
      {
        heading: "1. Partes del Contrato",
        body: "El presente documento constituye un acuerdo vinculante entre WeApp Bcn S.L (\"Muebly\", \"nosotros\") y la empresa o profesional que contrata el servicio (\"Cliente\"). El uso de la plataforma implica la aceptación de estos términos.",
      },
      {
        heading: "2. Descripción del Servicio",
        body: "Muebly es una plataforma SaaS de visualización de interiores con inteligencia artificial dirigida a retailers de muebles, agencias inmobiliarias y profesionales del diseño de interiores. Permite generar visualizaciones fotorrealistas de espacios amueblados a partir de fotografías.",
      },
      {
        heading: "3. Acceso y Cuentas",
        body: "El Cliente es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades realizadas desde su cuenta. Debe notificar inmediatamente cualquier uso no autorizado a hola@muebly.es.",
      },
      {
        heading: "4. Suscripción y Facturación",
        list: [
          "Las suscripciones son mensuales o anuales según el plan contratado.",
          "Los precios se facturan por adelantado y no son reembolsables salvo lo dispuesto por la normativa de consumidores (no aplicable a contratos B2B).",
          "Muebly se reserva el derecho a modificar precios con 30 días de preaviso.",
          "El impago puede resultar en la suspensión o cancelación del servicio.",
        ],
      },
      {
        heading: "5. Uso Aceptable",
        intro: "El Cliente se compromete a:",
        list: [
          "Usar el servicio únicamente para fines legítimos y conforme a la ley.",
          "No intentar acceder a sistemas no autorizados, realizar ingeniería inversa o reproducir el software.",
          "No subir contenido ilegal, difamatorio, pornográfico o que infrinja derechos de terceros.",
          "No usar el servicio para generar contenido engañoso o fraudulento.",
        ],
      },
      {
        heading: "6. Propiedad Intelectual",
        list: [
          "Muebly retiene todos los derechos sobre la plataforma, algoritmos, modelos de IA y software.",
          "Las visualizaciones generadas pertenecen al Cliente y pueden usarse para sus fines comerciales.",
          "Las imágenes subidas por el Cliente no serán usadas para entrenar modelos de IA sin consentimiento expreso.",
        ],
      },
      {
        heading: "7. Protección de Datos",
        body: "Muebly actúa como encargado del tratamiento de los datos que el Cliente introduzca en la plataforma. Ambas partes suscribirán un Acuerdo de Encargado de Tratamiento (DPA) conforme al RGPD. Ver Política de Privacidad para más detalles.",
      },
      {
        heading: "8. Garantías y Exclusión de Responsabilidad",
        list: [
          "El servicio se presta \"tal cual\". Muebly no garantiza disponibilidad ininterrumpida, aunque se compromete a mantener un SLA del 99,5% mensual.",
          "Muebly no será responsable de daños indirectos, pérdida de beneficios ni daños emergentes.",
          "La responsabilidad máxima de Muebly queda limitada al importe pagado por el Cliente en los últimos 12 meses.",
        ],
      },
      {
        heading: "9. Duración y Resolución",
        list: [
          "El contrato tiene la duración del plan contratado y se renueva automáticamente salvo cancelación.",
          "Cualquiera de las partes puede resolver el contrato con 30 días de preaviso.",
          "Muebly puede resolver de forma inmediata si el Cliente incumple estos términos.",
        ],
      },
      {
        heading: "10. Modificaciones",
        body: "Muebly podrá modificar estos términos notificando al Cliente con al menos 30 días de antelación. El uso continuado del servicio tras la notificación implica la aceptación de los cambios.",
      },
      {
        heading: "11. Legislación y Jurisdicción",
        body: "Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona, renunciando a cualquier otro fuero.",
      },
      {
        heading: "Contacto",
        body: "hola@muebly.es",
        isContact: true,
      },
    ],
  },
  en: {
    title: "Terms and Conditions of Service",
    lastUpdated: "Last updated: April 2026",
    sections: [
      {
        heading: "1. Parties to the Agreement",
        body: "This document constitutes a binding agreement between WeApp Bcn S.L (\"Muebly\", \"we\") and the company or professional subscribing to the service (\"Client\"). Use of the platform implies acceptance of these terms.",
      },
      {
        heading: "2. Description of Service",
        body: "Muebly is an AI-powered interior visualization SaaS platform aimed at furniture retailers, real estate agencies and interior design professionals. It allows generating photorealistic visualizations of furnished spaces from photographs.",
      },
      {
        heading: "3. Access and Accounts",
        body: "The Client is responsible for maintaining the confidentiality of their access credentials and all activities carried out from their account. Any unauthorized use must be reported immediately to hola@muebly.es.",
      },
      {
        heading: "4. Subscription and Billing",
        list: [
          "Subscriptions are monthly or annual depending on the contracted plan.",
          "Prices are billed in advance and are non-refundable except as required by consumer regulations (not applicable to B2B contracts).",
          "Muebly reserves the right to modify prices with 30 days' notice.",
          "Non-payment may result in suspension or cancellation of the service.",
        ],
      },
      {
        heading: "5. Acceptable Use",
        intro: "The Client agrees to:",
        list: [
          "Use the service only for legitimate and lawful purposes.",
          "Not attempt to access unauthorized systems, reverse engineer, or reproduce the software.",
          "Not upload illegal, defamatory, pornographic content or content that infringes third-party rights.",
          "Not use the service to generate misleading or fraudulent content.",
        ],
      },
      {
        heading: "6. Intellectual Property",
        list: [
          "Muebly retains all rights over the platform, algorithms, AI models and software.",
          "Generated visualizations belong to the Client and may be used for their commercial purposes.",
          "Images uploaded by the Client will not be used to train AI models without express consent.",
        ],
      },
      {
        heading: "7. Data Protection",
        body: "Muebly acts as data processor for the data the Client enters into the platform. Both parties shall sign a Data Processing Agreement (DPA) compliant with the GDPR. See Privacy Policy for more details.",
      },
      {
        heading: "8. Warranties and Limitation of Liability",
        list: [
          "The service is provided \"as is\". Muebly does not guarantee uninterrupted availability, though it commits to a monthly SLA of 99.5%.",
          "Muebly shall not be liable for indirect damages, loss of profits or consequential damages.",
          "Muebly's maximum liability is limited to the amount paid by the Client in the last 12 months.",
        ],
      },
      {
        heading: "9. Term and Termination",
        list: [
          "The contract lasts for the duration of the contracted plan and renews automatically unless cancelled.",
          "Either party may terminate the contract with 30 days' notice.",
          "Muebly may terminate immediately if the Client breaches these terms.",
        ],
      },
      {
        heading: "10. Modifications",
        body: "Muebly may modify these terms by notifying the Client at least 30 days in advance. Continued use of the service after notification implies acceptance of the changes.",
      },
      {
        heading: "11. Governing Law and Jurisdiction",
        body: "These terms are governed by Spanish law. For any dispute, the parties submit to the courts and tribunals of Barcelona, waiving any other jurisdiction.",
      },
      {
        heading: "Contact",
        body: "hola@muebly.es",
        isContact: true,
      },
    ],
  },
};

export function TerminosPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-[#191b1d] mb-2">{c.title}</h1>
          <p className="text-[#686a6c] text-sm mb-10">{c.lastUpdated}</p>
          {c.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-semibold text-[#191b1d] mt-8 mb-3">{section.heading}</h2>
              {section.body && !section.isContact && (
                <p className="text-[#686a6c] leading-relaxed">{section.body}</p>
              )}
              {section.body && section.isContact && (
                <p className="text-[#686a6c] leading-relaxed">
                  <a href="mailto:hola@muebly.es" className="text-[#00ffc3] hover:underline">
                    {section.body}
                  </a>
                </p>
              )}
              {section.intro && (
                <p className="text-[#686a6c] leading-relaxed mb-2">{section.intro}</p>
              )}
              {section.list && (
                <ul className="list-disc list-inside text-[#686a6c] leading-relaxed space-y-1">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
