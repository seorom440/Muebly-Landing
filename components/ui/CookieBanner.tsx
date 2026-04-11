'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function CookieBanner() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('muebly-cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('muebly-cookie-consent', 'accepted');
    document.cookie = 'muebly-cookie-consent=accepted; max-age=31536000; path=/; SameSite=Lax';
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('muebly-cookie-consent', 'rejected');
    document.cookie = 'muebly-cookie-consent=rejected; max-age=31536000; path=/; SameSite=Lax';
    setVisible(false);
  };

  if (!visible) return null;

  const text = {
    en: {
      message: "We use cookies to improve your experience and analyze site traffic. You can accept all cookies or reject non-essential ones.",
      cookiePolicy: "Cookie Policy",
      accept: "Accept all",
      reject: "Reject non-essential",
    },
    es: {
      message: "Utilizamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Puedes aceptar todas las cookies o rechazar las no esenciales.",
      cookiePolicy: "Política de Cookies",
      accept: "Aceptar todas",
      reject: "Rechazar no esenciales",
    },
  }[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#191b1d] border-t border-white/10 px-4 py-4 md:py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-white/80 text-sm flex-1">
          {text.message}{' '}
          <Link href="/legal/cookies" className="text-[#00ffc3] underline underline-offset-2 hover:text-[#00ffc3]/80">
            {text.cookiePolicy}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm text-white/70 border border-white/20 rounded-lg hover:border-white/40 hover:text-white transition-colors"
          >
            {text.reject}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold bg-[#00ffc3] text-black rounded-lg hover:bg-[#00ffc3]/90 transition-colors"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
