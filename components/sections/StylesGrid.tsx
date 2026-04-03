'use client';
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

const stylesKeys = [
  {
    nameKey: "styleModern",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    popularity: "38%",
    generated: "18K",
    labelKey: "stylePopular"
  },
  {
    nameKey: "styleLoft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    popularity: "24%",
    generated: "12K",
    labelKey: "styleChosen"
  },
  {
    nameKey: "styleMinimalist",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop",
    popularity: "21%",
    generated: "15K",
    labelKey: "stylePreferred"
  },
  {
    nameKey: "styleOrganic",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
    popularityKey: "styleTrending",
    generatedKey: "styleTopTrend",
    labelKey: "styleTrending",
    isTrending: true
  }
];

export function StylesGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-8 sm:mb-12 tracking-tighter text-black">
          {t('tryPopularStyles')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stylesKeys.map((style, index) => (
            <motion.div 
              key={style.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={style.image} 
                alt={t(style.nameKey as any)} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                  {t(style.nameKey as any)}
                </span>
                {style.isTrending && (
                  <span className="bg-[#FF3B6C] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    {t('styleTrending')}
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-medium tracking-tighter mb-1">{style.popularityKey ? t(style.popularityKey as any) : style.popularity}</p>
                    <p className="text-sm opacity-80">{t(style.labelKey as any)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-medium tracking-tighter mb-1">{style.generatedKey ? t(style.generatedKey as any) : style.generated}</p>
                    <p className="text-sm opacity-80">{t('generated')}</p>
                  </div>
                </div>
                
                <div className="h-0 overflow-hidden group-hover:h-14 transition-all duration-300 mt-0 group-hover:mt-4">
                  <button className="w-full bg-accent text-black font-medium h-12 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors">
                    {t('tryStyle')} {t(style.nameKey as any)}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
