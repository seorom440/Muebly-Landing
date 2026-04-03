'use client';

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MobileAppCarousel } from "@/components/ui/MobileAppCarousel";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
              {t('howItWorksTitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{t('howItWorksDesc')}</p>
            <div className="mt-8">
              <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" alt="Exterior design" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative h-[600px] sm:h-[650px] lg:h-[700px] w-full">
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-20 scale-90 sm:scale-100">
              <MobileAppCarousel />
            </motion.div>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] sm:blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
