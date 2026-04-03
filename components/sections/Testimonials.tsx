'use client';

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { text: t('testi1Text'), name: t('testi1Name'), role: t('testi1Role'), avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
    { text: t('testi2Text'), name: t('testi2Name'), role: t('testi2Role'), avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" },
    { text: t('testi3Text'), name: t('testi3Name'), role: t('testi3Role'), avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
    { text: t('testi4Text'), name: t('testi4Name'), role: t('testi4Role'), avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
    { text: t('testi5Text'), name: t('testi5Name'), role: t('testi5Role'), avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  ];

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black">{t('testimonialsTitle')}</h2>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div className="flex gap-6 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 40 }}>
          {duplicated.map((testimonial, idx) => (
            <div key={idx} className="w-[320px] sm:w-[400px] shrink-0 bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />)}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
