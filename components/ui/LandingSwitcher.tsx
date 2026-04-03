'use client';

import { Home, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LandingSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isEcommerce = pathname === '/ecommerce';
  const currentLabel = isEcommerce ? t('forEcommerce') : t('forRealEstate');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-flex items-center gap-2 mb-8 z-50" ref={ref}>
      <Link href="/" className="text-gray-500 hover:text-black transition-colors">
        <Home className="w-5 h-5" />
      </Link>
      <span className="text-gray-400 text-lg">/</span>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 text-lg font-medium text-black hover:text-gray-600 transition-colors">
        {currentLabel}
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-8 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-1 text-left">
          <button onClick={() => { router.push('/real-estate'); setIsOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${!isEcommerce ? 'font-bold text-emerald-600' : 'text-gray-700'}`}>
            {t('forRealEstate')}
          </button>
          <button onClick={() => { router.push('/ecommerce'); setIsOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${isEcommerce ? 'font-bold text-emerald-600' : 'text-gray-700'}`}>
            {t('forEcommerce')}
          </button>
        </div>
      )}
    </div>
  );
}
