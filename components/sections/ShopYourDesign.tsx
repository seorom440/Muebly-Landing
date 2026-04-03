'use client';
import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Sparkles, ShoppingBag, Settings2, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const retailers = ["Amazon", "IKEA", "Jysk", "Ashley", "Sklum", "Muebles Boom", "Kave Home", "Conforama"];

const productsKeys = [
  {
    id: 1,
    nameKey: "product1Name",
    brand: "IKEA",
    price: "$128",
    descKey: "product1Desc",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop",
    dotPosition: "left-[30%] bottom-[40%]",
  },
  {
    id: 2,
    nameKey: "product2Name",
    brand: "HÜGGE Living",
    price: "$189",
    descKey: "product2Desc",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop",
    dotPosition: "left-[45%] bottom-[25%]",
  },
  {
    id: 3,
    nameKey: "product3Name",
    brand: "Nest & Form",
    price: "$225",
    descKey: "product3Desc",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop",
    dotPosition: "right-[45%] bottom-[30%]",
  },
  {
    id: 4,
    nameKey: "product4Name",
    brand: "Conforama",
    price: "$89",
    descKey: "product4Desc",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop",
    dotPosition: "right-[25%] top-[40%]",
  },
  {
    id: 5,
    nameKey: "product5Name",
    brand: "Kave Home",
    price: "$150",
    descKey: "product5Desc",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=400&auto=format&fit=crop",
    dotPosition: "left-[55%] bottom-[15%]",
  },
  {
    id: 6,
    nameKey: "product6Name",
    brand: "Sklum",
    price: "$75",
    descKey: "product6Desc",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400&auto=format&fit=crop",
    dotPosition: "right-[10%] top-[30%]",
  }
];

export function ShopYourDesign() {
  const [activeRetailer, setActiveRetailer] = useState("Amazon");
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes scroll-y {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-y {
          animation: scroll-y 35s linear infinite;
        }
        .animate-scroll-y:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-black">
            {t('shopYourDesign')}
          </h2>
          <p className="text-lg text-gray-500">
            {t('ourAiRecommends')}
          </p>
        </div>

        {/* Retailer Marquee */}
        <div className="w-full overflow-hidden mb-12 relative flex items-center py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex gap-4 sm:gap-6 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...retailers, ...retailers].map((retailer, index) => (
              <button
                key={`${retailer}-${index}`}
                onClick={() => setActiveRetailer(retailer)}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shrink-0 border border-transparent ${
                  activeRetailer === retailer
                    ? "bg-black text-white shadow-md scale-105"
                    : "bg-[#F5F5F5] text-gray-600 hover:text-black hover:bg-gray-200 hover:border-gray-300"
                }`}
              >
                {retailer}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Interactive Image Area */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Main Room Image */}
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[16/9] bg-gray-100">
            <motion.img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
              alt="Modern Living Room" 
              className="w-full h-full object-cover scale-110"
              animate={{ 
                scale: [1.05, 1.1, 1.05],
                x: ["-1%", "1%", "-1%"],
                y: ["-1%", "1%", "-1%"]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Interactive Dots with Parallax */}
            {productsKeys.map((product) => (
              <motion.div
                key={`dot-${product.id}`}
                className={`absolute ${product.dotPosition} z-20 flex items-center justify-center`}
                animate={{ 
                  x: ["10%", "-10%", "10%"],
                  y: ["10%", "-10%", "10%"]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: product.id * 0.2
                }}
              >
                <motion.div
                  className="relative flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + product.id * 0.1 }}
                >
                  <span className="absolute inset-0 rounded-full bg-[#00F0B5] animate-ping opacity-75 duration-1000"></span>
                  <span className="relative block w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00F0B5] border-[3px] sm:border-[4px] border-white shadow-lg"></span>
                </motion.div>
              </motion.div>
            ))}

            {/* Floating Panel (Similar Items) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden lg:flex absolute top-6 right-6 bottom-6 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex-col z-30 border border-white/20"
            >
              {/* Panel Header */}
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white/50 shrink-0">
                <h3 className="font-semibold text-gray-900">{t('similarItems')}</h3>
                <div className="flex gap-1">
                  <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500 transition-colors"><Settings2 size={18}/></button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500 transition-colors"><X size={18}/></button>
                </div>
              </div>
              
              <div className="p-4 pb-2 text-xs text-gray-500 font-medium shrink-0">{t('recommendedBasedOn')}</div>
              
              {/* Product List - Vertical Marquee */}
              <div className="flex-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/95 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/95 to-transparent z-10 pointer-events-none"></div>
                
                <div className="animate-scroll-y flex flex-col gap-4 px-4 pt-2">
                  {[...productsKeys, ...productsKeys].map((product, idx) => (
                    <div key={`${product.id}-${idx}`} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow shrink-0">
                      <div className="flex gap-4 mb-3">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50 shrink-0 border border-gray-50 relative group">
                          <img src={product.image} alt={t(product.nameKey as any)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-sm text-gray-900 leading-tight pr-2">{t(product.nameKey as any)}</h4>
                            <button className="text-gray-300 hover:text-red-500 transition-colors"><Heart size={16} /></button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1.5">{product.brand} • <a href="#" className="underline hover:text-gray-800">{t('linkToProduct')}</a></p>
                          <p className="font-semibold text-sm text-gray-900 mt-1.5">{product.price}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
                        {t(product.descKey as any)}
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#E8EDE6] hover:bg-[#dce3d9] text-[#2C3E2D] text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                          <Sparkles size={14} />
                          {t('tryOnPhoto')}
                        </button>
                        <button className="w-10 h-10 bg-[#2C3E2D] hover:bg-[#1A251B] text-white rounded-lg flex items-center justify-center transition-colors shrink-0">
                          <ShoppingBag size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
