'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Check, Download, Share, SlidersHorizontal, ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function MobileAppCarousel() {
  const [activeScreen, setActiveScreen] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen(prev => prev === 3 ? 1 : (prev + 1) as 1 | 2 | 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-[300px] h-[600px]">
      {/* iPhone 16 Frame */}
      <div className="absolute inset-0 bg-[#1e293b] rounded-[3rem] shadow-2xl border-[8px] border-[#1e293b] overflow-hidden z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-b-2xl z-30 flex justify-center items-center">
            <div className="w-16 h-4 bg-black rounded-full"></div>
        </div>
        
        <div className="w-full h-full bg-white relative flex flex-col overflow-hidden rounded-[2.5rem]">
            {/* Status Bar */}
            <div className="px-6 pt-3 flex justify-between items-center text-[10px] font-medium text-black z-30 relative bg-white/80 backdrop-blur-sm">
                <span>10:01</span>
                <div className="flex gap-1">
                    <div className="w-4 h-3 bg-black rounded-sm"></div>
                    <div className="w-4 h-3 bg-black rounded-sm"></div>
                </div>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeScreen === 1 && <Screen1 key="s1" />}
                {activeScreen === 2 && <Screen2 key="s2" />}
                {activeScreen === 3 && <Screen3 key="s3" />}
              </AnimatePresence>
            </div>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-gray-900 rounded-full z-40"></div>
        </div>
      </div>

      <div className="absolute top-24 -left-[10px] w-[10px] h-8 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-36 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-52 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-40 -right-[10px] w-[10px] h-20 bg-[#1e293b] rounded-r-md"></div>
    </div>
  );
}

function Screen1() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 pt-4 pb-8 flex flex-col bg-white"
    >
      <div className="px-4 pb-4 flex items-center gap-4 z-10 shrink-0">
        <ArrowLeft className="w-5 h-5 text-gray-800" />
        <h2 className="text-gray-900 font-bold text-lg">{t('macCreateDesign')}</h2>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar px-4">
        <p className="text-gray-600 text-xs mb-3">{t('macSelectStyle')}</p>
        <div className="bg-gray-100 rounded-xl p-1 flex mb-4">
            <button className="flex-1 text-gray-400 text-xs font-bold py-2.5 rounded-lg">{t('productsTab')}</button>
            <button className="flex-1 bg-white text-gray-800 text-xs font-bold py-2.5 rounded-lg shadow-sm">{t('stylesTab')}</button>
        </div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">{t('macStyleDesc')}</h3>
        <div className="border border-gray-200 rounded-xl p-3 mb-4 h-24">
          <p className="text-sm text-gray-800">{t('macModernClean')}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 pb-4">
          <StyleCard name={t('styleModern')} img="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=300&auto=format&fit=crop" selected />
          <StyleCard name={t('styleMinimalist')} img="https://images.unsplash.com/photo-1598928506311-c55dd5802427?q=80&w=300&auto=format&fit=crop" />
          <StyleCard name={t('styleIndustrial')} img="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=300&auto=format&fit=crop" />
          <StyleCard name={t('styleBohemian')} img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=300&auto=format&fit=crop" />
        </div>
      </div>
    </motion.div>
  );
}

function StyleCard({ name, img, selected }: { name: string, img: string, selected?: boolean }) {
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
      <img src={img} className="w-full h-full object-cover" alt={name} />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <span className="text-white font-bold text-xs">{name}</span>
      </div>
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
      )}
    </div>
  );
}

function Screen2() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 pt-4 pb-8 flex flex-col bg-white"
    >
      <div className="px-4 pb-4 flex items-center gap-4 z-10 shrink-0">
        <ArrowLeft className="w-5 h-5 text-gray-800" />
        <h2 className="text-gray-900 font-bold text-lg">{t('macCreateDesign')}</h2>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar px-4">
        <div className="relative h-48 rounded-2xl overflow-hidden mb-4 flex">
          <div className="w-1/2 h-full relative">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" />
            <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-[10px] font-bold">{t('before')}</div>
          </div>
          <div className="w-1/2 h-full relative">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-[10px] font-bold">{t('after')}</div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex flex-col gap-0.5">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-600"></div>
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-transparent border-t-gray-600"></div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50/50 rounded-2xl p-4 text-center mb-4">
          <h3 className="font-bold text-gray-900 text-sm mb-1">{t('macYourFirstFree')}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{t('macGetAccess')}</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-gray-100 text-gray-700 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5">
            <Download size={14} /> {t('macDownload')}
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5">
            <Share size={14} /> {t('macShare')}
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5">
            <SlidersHorizontal size={14} /> {t('macRefine')}
          </button>
        </div>

        <button className="w-full bg-[#459A85] text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 mb-6">
          {t('macPlaceOrder')} <ShoppingCart size={16} />
        </button>

        <h3 className="font-bold text-gray-900 text-sm mb-3">{t('macSimilarProducts')}</h3>
        <div className="grid grid-cols-2 gap-3 pb-4">
          <div className="bg-gray-100 rounded-xl aspect-square relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Heart size={12} className="text-gray-400" />
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl aspect-square relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Heart size={12} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Screen3() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 pt-4 flex flex-col bg-white"
    >
      <div className="px-4 pb-4 flex items-center gap-4 z-10 shrink-0">
        <ArrowLeft className="w-5 h-5 text-gray-800" />
        <h2 className="text-gray-900 font-bold text-lg mx-auto pr-9">{t('macProductDetails')}</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="bg-gray-50 pt-4 pb-6 px-4 rounded-b-3xl mb-4">
          <div className="aspect-[4/3] relative mb-4">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div className="flex justify-center gap-2">
            <div className="w-12 h-10 bg-white rounded-lg border-2 border-[#459A85] p-1">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm" />
            </div>
            <div className="w-12 h-10 bg-white rounded-lg border border-gray-200 p-1 opacity-60">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm grayscale" />
            </div>
            <div className="w-12 h-10 bg-white rounded-lg border border-gray-200 p-1 opacity-60">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm grayscale" />
            </div>
          </div>
        </div>

        <div className="px-4 pb-24">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-gray-900">{t('macModernFabricSofa')}</h3>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#459A85]">
              <Heart size={16} />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-xl font-bold text-[#459A85]">$899</p>
              <p className="text-xs text-gray-500">{t('macBrandNordic')}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500"><Minus size={12} /></button>
              <span className="text-sm font-medium">1</span>
              <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500"><Plus size={12} /></button>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 text-sm mb-2">{t('macDescription')}</h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {t('macDescText')}
          </p>

          <h4 className="font-semibold text-gray-900 text-sm mb-2">{t('macDimensions')}</h4>
          <p className="text-sm text-gray-600 whitespace-pre-line">{t('macDimText')}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-6 flex gap-3 rounded-b-[2.5rem] z-30">
        <button className="flex-1 bg-white border border-gray-200 text-gray-900 font-bold py-3 rounded-xl text-sm">
          {t('macSelectedProducts')}
        </button>
        <button className="flex-1 bg-[#459A85] text-white font-bold py-3 rounded-xl text-sm">
          {t('buyNow')}
        </button>
      </div>
    </motion.div>
  );
}
