'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Aviso Legal",
    sections: [
      {
        heading: null,
        body: "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:",
      },
      {
        heading: "Titular del sitio web",
        body: null,
        list: [
          "Razón social: WeApp Bcn S.L",
          "Actividad: Plataforma de visualización de interiores con inteligencia artificial",
          "Correo electrónico: hola@muebly.es",
          "Sitio web: https://muebly.app",
        ],
      },
      {
        heading: "Objeto",
        body: "El presente aviso legal regula el uso del sitio web muebly.app, cuya titularidad corresponde a WeApp Bcn S.L. El acceso y uso de este sitio web implica la aceptación plena de las condiciones aquí establecidas.",
      },
      {
        heading: "Propiedad Intelectual e Industrial",
        body: "Todos los contenidos del sitio web (textos, imágenes, logotipos, software, código fuente, diseño) son propiedad de WeApp Bcn S.L o cuentan con las licencias pertinentes. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.",
      },
      {
        heading: "Responsabilidad",
        body: "WeApp Bcn S.L no garantiza la disponibilidad continua del servicio ni se responsabiliza de los daños derivados del uso o imposibilidad de uso del sitio web. Los enlaces a sitios de terceros son informativos y no implican respaldo de su contenido.",
      },
      {
        heading: "Legislación Aplicable",
        body: "Este aviso legal se rige por la legislación española. Para cualquier disputa, las partes se someten a los juzgados y tribunales de Barcelona, con renuncia a cualquier otro fuero.",
      },
    ],
  },
  en: {
    title: "Legal Notice",
    sections: [
      {
        heading: null,
        body: "In compliance with Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:",
      },
      {
        heading: "Website Owner",
        body: null,
        list: [
          "Company name: WeApp Bcn S.L",
          "Activity: AI-powered interior visualization platform",
          "Email: hola@muebly.es",
          "Website: https://muebly.app",
        ],
      },
      {
        heading: "Purpose",
        body: "This legal notice governs the use of the website muebly.app, owned by WeApp Bcn S.L. Accessing and using this website implies full acceptance of the conditions set forth herein.",
      },
      {
        heading: "Intellectual and Industrial Property",
        body: "All content on the website (texts, images, logos, software, source code, design) is the property of WeApp Bcn S.L or is duly licensed. Reproduction, distribution, public communication or transformation without express authorization is prohibited.",
      },
      {
        heading: "Liability",
        body: "WeApp Bcn S.L does not guarantee continuous availability of the service and is not liable for damages arising from the use or inability to use the website. Links to third-party sites are for informational purposes only and do not imply endorsement of their content.",
      },
      {
        heading: "Applicable Law",
        body: "This legal notice is governed by Spanish law. For any dispute, the parties submit to the courts and tribunals of Barcelona, waiving any other jurisdiction.",
      },
    ],
  },
};

export function AvisoLegalPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-[#191b1d] mb-10">{c.title}</h1>
          {c.sections.map((section, i) => (
            <div key={i} className="mb-8">
              {section.heading && (
                <h2 className="text-xl font-semibold text-[#191b1d] mt-8 mb-3">{section.heading}</h2>
              )}
              {section.body && (
                <p className="text-[#686a6c] leading-relaxed">{section.body}</p>
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
