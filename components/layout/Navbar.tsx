'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('forRealEstate'), href: "/real-estate" },
    { name: t('forEcommerce'), href: "/ecommerce" },
    { name: t('pricing'), href: "/#pricing" },
    { name: t('blog'), href: "/blog" },
    { name: t('contacts'), href: "/faq" },
  ];

  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-dark/80 backdrop-blur-md py-4" : "bg-dark/90 lg:bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-white/80 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors whitespace-nowrap">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors mr-2">
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
        </div>

        <div className="xl:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors">
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
          <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-dark p-6 xl:hidden flex flex-col gap-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-white text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
