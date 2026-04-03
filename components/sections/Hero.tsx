'use client';

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import { MobileAppPreview } from "@/components/ui/MobileAppPreview";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white lg:bg-black text-black lg:text-white pt-20 pb-20 lg:pb-0">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2674&auto=format&fit=crop" alt="Modern Interior" className="w-full h-full object-cover opacity-10 lg:opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white lg:from-black/30 lg:via-transparent lg:to-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center h-full pt-10 lg:pt-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0 z-30">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6">
            {t('designAny')} <span className="text-accent">{t('interior')}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black/60 lg:text-white/80 mb-8 max-w-md">{t('startWithImage')}</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start items-center">
            <Button size="default" className="bg-black text-white lg:bg-white lg:text-black border border-transparent hover:bg-emerald-500 hover:text-white hover:border-emerald-500 rounded-full h-10 px-8 text-sm font-medium shadow-lg lg:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              {t('downloadApp')}
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center relative h-[600px] sm:h-[650px] lg:h-[700px] w-full mt-8 lg:mt-0">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-20 scale-90 sm:scale-100">
            <MobileAppPreview />
          </motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-accent/20 rounded-full blur-[80px] sm:blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
}
