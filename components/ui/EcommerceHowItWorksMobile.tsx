'use client';
import { motion, AnimatePresence } from "motion/react";
import { Upload, FileSpreadsheet, CheckCircle2, ShoppingBag, Camera, ArrowRight, CreditCard, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  activeStep: number;
}

export function EcommerceHowItWorksMobile({ activeStep }: Props) {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto w-[280px] h-[580px] sm:w-[300px] sm:h-[600px]">
      {/* iPhone 16 Frame */}
      <div className="absolute inset-0 bg-[#1e293b] rounded-[3rem] shadow-2xl border-[8px] border-[#1e293b] overflow-hidden z-20">
        {/* Dynamic Island / Notch Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-b-2xl z-30 flex justify-center items-center">
            <div className="w-16 h-4 bg-black rounded-full"></div>
        </div>
        
        {/* Screen Content */}
        <div className="w-full h-full bg-gray-50 relative flex flex-col overflow-hidden rounded-[2.5rem]">
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
                {activeStep === 0 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-white p-5 pt-12"
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">{t('ecMobUploadCat')}</h3>
                      <p className="text-xs text-gray-500 mt-1">{t('ecMobCsvSpread')}</p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: "products_q3.csv", size: "2.4 MB", status: "done" },
                        { name: "inventory_update.xlsx", size: "1.1 MB", status: "done" },
                        { name: "new_collection.csv", size: "3.8 MB", status: "uploading" }
                      ].map((file, i) => (
                        <div key={i} className="flex items-center p-3 border border-gray-100 rounded-xl bg-gray-50">
                          <FileSpreadsheet className="w-8 h-8 text-emerald-500 mr-3 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                            <p className="text-[10px] text-gray-500">{file.size}</p>
                          </div>
                          {file.status === "done" ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                      <p className="text-center text-xs text-gray-500 font-medium">{t('ecMobProcessing')}</p>
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-gray-50"
                  >
                    <div className="bg-white p-4 pt-8 pb-3 border-b border-gray-100 shadow-sm z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">YS</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-sm leading-tight">{t('ecMobYourStore')}</h3>
                            <p className="text-[10px] text-emerald-600">muebly.com/store/your-store</p>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-emerald-900">{t('ecMobVisualize')}</h4>
                          <p className="text-xs text-emerald-700 mt-1">{t('ecMobSeeHow')}</p>
                        </div>
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-md">
                          <Camera className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", name: "Modern Sofa", price: "$899" },
                          { img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", name: "Lounge Chair", price: "$349" },
                          { img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=400&auto=format&fit=crop", name: "Coffee Table", price: "$199" },
                          { img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop", name: "Floor Lamp", price: "$129" }
                        ].map((item, i) => (
                          <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                            <div className="h-24 bg-gray-100 relative">
                              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-2">
                              <p className="text-xs font-medium text-gray-900 truncate">{item.name}</p>
                              <p className="text-[10px] text-gray-500">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-white"
                  >
                    <div className="relative h-1/2 bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop" alt="Rendered Room" className="w-full h-full object-cover" />
                      
                      {/* Product Tag */}
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-white/50"
                      >
                        <div className="w-8 h-8 rounded-md overflow-hidden shrink-0">
                          <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=100&auto=format&fit=crop" alt="Chair" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-900">Lounge Chair</p>
                          <p className="text-[10px] text-emerald-600 font-medium">$349</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="flex-1 p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-xl text-gray-900">{t('ecMobCheckout')}</h3>
                        <span className="text-sm font-medium text-gray-500">{t('ecMobItem')}</span>
                      </div>

                      <div className="flex items-center p-3 border border-gray-100 rounded-xl mb-auto">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 mr-3">
                          <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=100&auto=format&fit=crop" alt="Chair" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 truncate">Lounge Chair</p>
                          <p className="text-xs text-gray-500">{t('ecMobColor')}</p>
                        </div>
                        <p className="font-bold text-gray-900">$349</p>
                      </div>

                      <div className="space-y-3 mt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">{t('ecMobSubtotal')}</span>
                          <span className="font-medium text-gray-900">$349.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">{t('ecMobShipping')}</span>
                          <span className="font-medium text-emerald-600">{t('ecMobFree')}</span>
                        </div>
                        <div className="pt-3 border-t border-gray-100 flex justify-between">
                          <span className="font-bold text-gray-900">{t('ecMobTotal')}</span>
                          <span className="font-bold text-xl text-gray-900">$349.00</span>
                        </div>
                      </div>

                      <button className="w-full mt-6 py-4 bg-black text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors shadow-lg shadow-black/10">
                        <CreditCard className="w-5 h-5" /> {t('ecMobPayNow')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-gray-900 rounded-full z-40"></div>
        </div>
      </div>

      {/* Hardware Buttons */}
      <div className="absolute top-24 -left-[10px] w-[10px] h-8 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-36 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-52 -left-[10px] w-[10px] h-14 bg-[#1e293b] rounded-l-md"></div>
      <div className="absolute top-40 -right-[10px] w-[10px] h-20 bg-[#1e293b] rounded-r-md"></div>
    </div>
  );
}
