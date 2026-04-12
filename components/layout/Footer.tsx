'use client';

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{t('footerDesc')}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-2">{t('footerProducts')}</h4>
            <Link href="/ecommerce" className="text-white/80 hover:text-white transition-colors">{t('footerEcommerce')}</Link>
            <Link href="/real-estate" className="text-white/80 hover:text-white transition-colors">{t('footerRealEstate')}</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-2">{t('footerTools')}</h4>
            <Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
            <Link href="/support" className="text-white/80 hover:text-white transition-colors">{t('footerSupport')}</Link>
            <Link href="/#virtual-staging" className="text-white/80 hover:text-white transition-colors">{t('footerVirtualStaging')}</Link>
            <Link href="/#exterior" className="text-white/80 hover:text-white transition-colors">{t('footerExterior')}</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-2">{t('footerLegal')}</h4>
            <Link href="/legal/aviso-legal" className="text-white/80 hover:text-white transition-colors">{t('footerAvisoLegal')}</Link>
            <Link href="/legal/privacidad" className="text-white/80 hover:text-white transition-colors">{t('footerPrivacidad')}</Link>
            <Link href="/legal/cookies" className="text-white/80 hover:text-white transition-colors">{t('footerCookies')}</Link>
            <Link href="/legal/terminos" className="text-white/80 hover:text-white transition-colors">{t('footerTerminos')}</Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm uppercase tracking-wider">muebly © 2026</p>
          <div className="flex gap-6">
            <div className="w-5 h-5 bg-white/20 rounded-full" />
            <div className="w-5 h-5 bg-white/20 rounded-full" />
            <div className="w-5 h-5 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
