'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell, Home, Heart, User, RotateCcw, Download, Camera, Search, SlidersHorizontal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function MobileAppPreview() {
  const { t } = useLanguage();
  const [activeScreen, setActiveScreen] = useState<1 | 2>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen(prev => prev === 1 ? 2 : 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-[300px] h-[600px]">
      {/* iPhone 16 Frame */}
      <div className="absolute inset-0 bg-[#1e293b] rounded-[3rem] shadow-2xl border-[8px] border-[#1e293b] overflow-hidden z-20">
        {/* Dynamic Island / Notch Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-b-2xl z-30 flex justify-center items-center">
            <div className="w-16 h-4 bg-black rounded-full"></div>
        </div>
        
        {/* Screen Content */}
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
              <AnimatePresence>
                {activeScreen === 1 ? (
                  <motion.div
                    key="screen1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 pt-4 pb-24 flex flex-col"
                  >
                    {/* App Header */}
                    <div className="px-6 pb-4 flex justify-between items-center z-10 shrink-0">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-gray-900 font-bold text-lg tracking-tight lowercase">muebly</span>
                        </div>
                        <Bell className="w-5 h-5 text-gray-500" />
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto no-scrollbar px-4">
                        {/* Greeting */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">{t('helloUser')}</p>
                                <h3 className="text-xl font-bold text-gray-900 leading-none">{t('goodMorning')}</h3>
                            </div>
                        </div>

                        {/* Hero Card */}
                        <div className="bg-[#459A85] rounded-3xl p-5 text-white mb-6 relative overflow-hidden shadow-lg">
                            <div className="relative z-10 w-[55%]">
                                <h4 className="font-semibold text-sm mb-3 leading-snug">
                                    {t('uploadPhotoDesc')}
                                </h4>
                                <Button size="sm" className="bg-white text-black hover:bg-gray-100 text-[10px] font-bold h-8 px-4 rounded-full gap-1.5 uppercase tracking-wide">
                                    <Camera size={12} />
                                    {t('uploadPhotoBtn')}
                                </Button>
                            </div>
                            
                            {/* Before/After Image Mockup */}
                            <div className="absolute top-2 right-2 bottom-2 w-[40%] rounded-2xl overflow-hidden flex shadow-md">
                                <div className="w-1/2 h-full relative">
                                    <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Before" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[1px] text-[6px] font-bold text-white text-center py-1 uppercase">{t('before')}</div>
                                </div>
                                <div className="w-1/2 h-full relative">
                                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="After" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[1px] text-[6px] font-bold text-white text-center py-1 uppercase">{t('after')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Designs */}
                        <div className="mb-4">
                            <h3 className="font-bold text-gray-900 mb-3 text-sm">{t('yourRedesigns')}</h3>
                            
                            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3">
                                <div className="flex gap-3">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Design" />
                                    </div>
                                    <div className="flex flex-col justify-center py-1">
                                        <h4 className="font-bold text-sm text-gray-900 leading-tight mb-1">{t('farmhouseRoom')}</h4>
                                        <p className="text-xs text-gray-400">{t('daysAgo')}</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                                        <RotateCcw size={14} />
                                        {t('redesign')}
                                    </button>
                                    <button className="w-10 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center transition-colors">
                                        <Download size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="screen2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 pt-4 pb-24 flex flex-col"
                  >
                    <div className="flex-1 overflow-y-auto no-scrollbar px-4">
                        <h2 className="text-gray-800 font-medium text-sm mb-4 leading-snug px-1">
                            {t('selectStyleAndProducts')}
                        </h2>
                        
                        {/* Toggle */}
                        <div className="bg-gray-100 rounded-xl p-1 flex mb-4">
                            <button className="flex-1 bg-[#459A85] text-white text-xs font-bold py-2.5 rounded-lg shadow-sm">
                                {t('productsTab')}
                            </button>
                            <button className="flex-1 text-gray-400 text-xs font-bold py-2.5 rounded-lg">
                                {t('stylesTab')}
                            </button>
                        </div>

                        {/* Search */}
                        <div className="flex gap-2 mb-4">
                            <div className="flex-1 bg-gray-100 rounded-xl px-3 flex items-center gap-2">
                                <Search className="w-4 h-4 text-gray-400" />
                                <input type="text" placeholder={t('searchPlaceholder')} className="bg-transparent text-xs outline-none w-full text-gray-600 placeholder:text-gray-400" readOnly />
                            </div>
                            <button className="bg-[#459A85] text-white p-3 rounded-xl shrink-0">
                                <SlidersHorizontal className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-2">
                            <div className="border border-[#459A85] bg-emerald-50 text-[#459A85] rounded-xl p-2 flex flex-col items-center gap-1 min-w-[56px] shrink-0">
                                <span className="text-lg">🌟</span>
                                <span className="text-[10px] font-medium">{t('catAll')}</span>
                            </div>
                            <div className="bg-gray-100 text-gray-500 rounded-xl p-2 flex flex-col items-center gap-1 min-w-[56px] shrink-0">
                                <span className="text-lg">🪑</span>
                                <span className="text-[10px] font-medium">{t('catTable')}</span>
                            </div>
                            <div className="bg-gray-100 text-gray-500 rounded-xl p-2 flex flex-col items-center gap-1 min-w-[56px] shrink-0">
                                <span className="text-lg">🛋️</span>
                                <span className="text-[10px] font-medium">{t('catCouch')}</span>
                            </div>
                            <div className="bg-gray-100 text-gray-500 rounded-xl p-2 flex flex-col items-center gap-1 min-w-[56px] shrink-0">
                                <span className="text-lg">🪑</span>
                                <span className="text-[10px] font-medium">{t('catChair')}</span>
                            </div>
                            <div className="bg-gray-100 text-gray-500 rounded-xl p-2 flex flex-col items-center gap-1 min-w-[56px] shrink-0">
                                <span className="text-lg">🛏️</span>
                                <span className="text-[10px] font-medium">{t('catBed')}</span>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-3 pb-4">
                            {/* Item 1 */}
                            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-2">
                                <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cabinet" />
                                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                </div>
                                <h4 className="text-[11px] font-medium text-gray-900 leading-tight mb-1 truncate">{t('mapModernStorage')}</h4>
                                <p className="text-xs font-bold text-emerald-600 mb-0.5">$899</p>
                                <p className="text-[9px] text-gray-500 truncate">{t('brandLabel')} UrbanNest</p>
                            </div>
                            {/* Item 2 */}
                            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-2">
                                <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Table" />
                                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                </div>
                                <h4 className="text-[11px] font-medium text-gray-900 leading-tight mb-1 truncate">{t('mapScandiDining')}</h4>
                                <p className="text-xs font-bold text-emerald-600 mb-0.5">$899</p>
                                <p className="text-[9px] text-gray-500 truncate">{t('brandLabel')} Oak & Co.</p>
                            </div>
                            {/* Item 3 */}
                            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-2">
                                <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sofa" />
                                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                </div>
                                <h4 className="text-[11px] font-medium text-gray-900 leading-tight mb-1 truncate">{t('mapModernFabric')}</h4>
                                <p className="text-xs font-bold text-emerald-600 mb-0.5">$1,299</p>
                                <p className="text-[9px] text-gray-500 truncate">{t('brandLabel')} ComfortPlus</p>
                            </div>
                            {/* Item 4 */}
                            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-2">
                                <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Chair" />
                                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-black/20 rounded-full border-2 border-white/80 flex items-center justify-center">
                                    </div>
                                </div>
                                <h4 className="text-[11px] font-medium text-gray-900 leading-tight mb-1 truncate">{t('mapMinimalLounge')}</h4>
                                <p className="text-xs font-bold text-emerald-600 mb-0.5">$450</p>
                                <p className="text-[9px] text-gray-500 truncate">{t('brandLabel')} NordicDesign</p>
                            </div>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 pb-8 flex justify-between items-center rounded-b-[2.5rem] z-30">
                <div className="flex flex-col items-center gap-1">
                    <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-full">
                        <Home size={20} fill="currentColor" className="text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600">{t('navHome')}</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="p-2.5">
                        <Heart size={20} />
                    </div>
                    <span className="text-[10px] font-medium">{t('navWishlist')}</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="p-2.5">
                        <User size={20} />
                    </div>
                    <span className="text-[10px] font-medium">{t('navProfile')}</span>
                </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-gray-900 rounded-full z-40"></div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="absolute top-24 -left-[10px] w-[10px] h-8 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-36 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-52 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-40 -right-[10px] w-[10px] h-20 bg-[#1e293b] rounded-r-md"></div>
    </div>
  );
}
