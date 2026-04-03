'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Scan, Check, Plus, ArrowRight, Camera } from "lucide-react";

export function EcommerceMobileAppPreview() {
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
                {activeScreen === 1 && (
                  <motion.div
                    key="screen1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-white"
                  >
                    <div className="p-5 pt-8 pb-4 border-b border-gray-100 flex justify-between items-center">
                      <h2 className="text-xl font-bold">Your Catalog</h2>
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto">
                      {[
                        { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop", name: "Modern Sofa", price: "$899" },
                        { img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop", name: "Lounge Chair", price: "$349" },
                        { img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=400&auto=format&fit=crop", name: "Coffee Table", price: "$199" },
                        { img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop", name: "Floor Lamp", price: "$129" }
                      ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                          <div className="h-24 bg-gray-100 relative">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                              <Plus className="w-3 h-3 text-gray-600" />
                            </div>
                          </div>
                          <div className="p-2">
                            <p className="text-xs font-medium text-gray-900 truncate">{item.name}</p>
                            <p className="text-[10px] text-gray-500">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto p-4 bg-white border-t border-gray-100">
                      <button className="w-full py-3 bg-black text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2">
                        <Camera className="w-4 h-4" /> Scan Room
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeScreen === 2 && (
                  <motion.div
                    key="screen2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-gray-900"
                  >
                    <div className="absolute inset-0">
                      <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" alt="Empty Room" className="w-full h-full object-cover opacity-80" />
                    </div>
                    
                    {/* Scanning overlay */}
                    <div className="absolute inset-0 bg-emerald-500/10 z-10">
                      <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                      />
                    </div>

                    <div className="relative z-20 mt-auto p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md mb-4">
                        <Scan className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-medium mb-1">Scanning Room...</h3>
                      <p className="text-white/70 text-xs">Analyzing dimensions and lighting</p>
                    </div>
                  </motion.div>
                )}

                {activeScreen === 3 && (
                  <motion.div
                    key="screen3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-white"
                  >
                    <div className="absolute inset-0">
                      <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" alt="Furnished Room" className="w-full h-full object-cover" />
                    </div>

                    {/* Hotspots */}
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
                      className="absolute top-[45%] left-[30%] z-20"
                    >
                      <div className="relative group">
                        <div className="w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          Modern Sofa • $899
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}
                      className="absolute top-[60%] left-[65%] z-20"
                    >
                      <div className="relative group">
                        <div className="w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          Coffee Table • $199
                        </div>
                      </div>
                    </motion.div>

                    <div className="relative z-20 mt-auto p-4 bg-gradient-to-t from-black/80 to-transparent pt-12">
                      <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500">Total Value</p>
                          <p className="text-lg font-bold text-gray-900">$1,098</p>
                        </div>
                        <button className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium flex items-center gap-2">
                          Add to Cart <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </div>
      </div>
    </div>
  );
}
