'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: abril 2026",
    sections: [
      {
        heading: "1. Responsable del Tratamiento",
        body: "WeApp Bcn S.L (en adelante, \"Muebly\")\nCorreo electrónico: hola@muebly.es",
      },
      {
        heading: "2. Datos que Recogemos",
        list: [
          "Datos de contacto: nombre, correo electrónico (al registrarse o contactarnos)",
          "Datos de uso: páginas visitadas, acciones dentro de la plataforma, imágenes subidas para visualización",
          "Datos técnicos: dirección IP, tipo de navegador, sistema operativo, cookies técnicas",
        ],
      },
      {
        heading: "3. Finalidad del Tratamiento",
        list: [
          "Prestar el servicio de visualización de interiores con IA",
          "Gestionar cuentas de usuario y suscripciones B2B",
          "Enviar comunicaciones comerciales (con consentimiento)",
          "Mejorar la plataforma mediante análisis de uso (interés legítimo)",
          "Cumplir obligaciones legales",
        ],
      },
      {
        heading: "4. Base Jurídica",
        list: [
          "Ejecución del contrato (art. 6.1.b RGPD): prestación del servicio",
          "Interés legítimo (art. 6.1.f RGPD): análisis interno, seguridad",
          "Consentimiento (art. 6.1.a RGPD): comunicaciones comerciales, cookies no esenciales",
        ],
      },
      {
        heading: "5. Conservación de Datos",
        body: "Los datos se conservan durante la vigencia de la relación contractual y, posteriormente, durante los plazos legalmente exigidos (máximo 6 años para obligaciones mercantiles).",
      },
      {
        heading: "6. Destinatarios",
        body: "No cedemos datos a terceros salvo obligación legal. Utilizamos proveedores técnicos (hosting, analítica) bajo contratos de encargado de tratamiento conformes al RGPD.",
      },
      {
        heading: "7. Derechos del Usuario",
        body: "Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a hola@muebly.es. También puede presentar reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
      },
      {
        heading: "8. Transferencias Internacionales",
        body: "Si utilizamos servicios con servidores fuera del EEE, nos aseguramos de que existan garantías adecuadas (cláusulas contractuales tipo de la Comisión Europea).",
      },
      {
        heading: "9. Cambios en esta Política",
        body: "Notificaremos cambios relevantes por correo electrónico o mediante aviso en la plataforma.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 2026",
    sections: [
      {
        heading: "1. Data Controller",
        body: "WeApp Bcn S.L (hereinafter, \"Muebly\")\nEmail: hola@muebly.es",
      },
      {
        heading: "2. Data We Collect",
        list: [
          "Contact data: name, email address (when registering or contacting us)",
          "Usage data: pages visited, actions within the platform, images uploaded for visualization",
          "Technical data: IP address, browser type, operating system, technical cookies",
        ],
      },
      {
        heading: "3. Purposes of Processing",
        list: [
          "Providing the AI interior visualization service",
          "Managing user accounts and B2B subscriptions",
          "Sending commercial communications (with consent)",
          "Improving the platform through usage analysis (legitimate interest)",
          "Fulfilling legal obligations",
        ],
      },
      {
        heading: "4. Legal Basis",
        list: [
          "Performance of a contract (Art. 6.1.b GDPR): provision of the service",
          "Legitimate interest (Art. 6.1.f GDPR): internal analysis, security",
          "Consent (Art. 6.1.a GDPR): commercial communications, non-essential cookies",
        ],
      },
      {
        heading: "5. Data Retention",
        body: "Data is retained for the duration of the contractual relationship and subsequently for the legally required periods (maximum 6 years for commercial obligations).",
      },
      {
        heading: "6. Recipients",
        body: "We do not share data with third parties except when legally required. We use technical service providers (hosting, analytics) under data processing agreements compliant with the GDPR.",
      },
      {
        heading: "7. User Rights",
        body: "You may exercise your rights of access, rectification, erasure, restriction, portability and objection by writing to hola@muebly.es. You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
      },
      {
        heading: "8. International Transfers",
        body: "If we use services with servers outside the EEA, we ensure that adequate safeguards are in place (standard contractual clauses of the European Commission).",
      },
      {
        heading: "9. Changes to this Policy",
        body: "We will notify you of significant changes by email or through a notice on the platform.",
      },
    ],
  },
};

export function PrivacidadPage() {
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
              {section.body && (
                <p className="text-[#686a6c] leading-relaxed whitespace-pre-line">{section.body}</p>
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
