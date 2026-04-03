'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Home, Building2, Camera, User, TrendingUp, ArrowUpRight, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { useLanguage } from "@/contexts/LanguageContext";

export function RealEstatePage() {
  const { t } = useLanguage();
  const [showAfter, setShowAfter] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative pt-8 pb-12 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-black"
              >
                {t('reHeroTitle1')} <span className="text-gray-400 italic">{t('reHeroTitle2')}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                {t('reHeroDesc')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative aspect-[16/9]"
            >
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
                alt="Beautifully staged living room" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 border-y border-gray-100 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { stat: "73%", label: t('reStat1'), icon: <TrendingUp className="w-8 h-8 text-emerald-500 mb-4 mx-auto" /> },
                { stat: "10%", label: t('reStat2'), icon: <ArrowUpRight className="w-8 h-8 text-emerald-500 mb-4 mx-auto" /> },
                { stat: "10s", label: t('reStat4'), icon: <Zap className="w-8 h-8 text-emerald-500 mb-4 mx-auto" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center px-4 py-4 md:py-0"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">{item.stat}</div>
                  <div className="text-sm text-gray-500 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 — Visual Impact */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-emerald-600 font-medium mb-4">{t('reVisualTag')}</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
                {t('reVisualTitle')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('reVisualDesc')}
              </p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] max-w-5xl mx-auto bg-white cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
              {/* Before Image */}
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop" 
                alt="Empty room" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
              />
              
              {/* After Image & Hotspots */}
              <motion.div 
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: showAfter ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Staged room" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                
                {/* Hotspots */}
                {showAfter && (
                  <>
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="absolute top-[65%] left-[35%] group"
                    >
                      <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_0_4px_rgba(16,185,129,0.3)] animate-pulse" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Modern Coffee Table • $299
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.0, type: "spring" }}
                      className="absolute top-[55%] left-[75%] group"
                    >
                      <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_0_4px_rgba(16,185,129,0.3)] animate-pulse" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Velvet Sofa • $899
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="absolute top-[45%] left-[15%] group"
                    >
                      <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_0_4px_rgba(16,185,129,0.3)] animate-pulse" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Floor Lamp • $129
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>

              {/* Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur-md p-1.5 rounded-full z-10">
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowAfter(false); }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${!showAfter ? 'bg-white text-black' : 'text-white hover:text-gray-200'}`}
                >
                  Before
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowAfter(true); }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${showAfter ? 'bg-emerald-500 text-white' : 'text-white hover:text-gray-200'}`}
                >
                  After
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-emerald-600 font-medium mb-3 text-sm tracking-wide uppercase">{t('reHowTag')}</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">
                {t('reHowTitle')}
              </h2>
              <p className="text-gray-600">
                {t('reHowDesc')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
              <div className="flex gap-3 mb-8">
                {[0, 1, 2].map((i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === i ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={`Step ${i + 1}`}
                  />
                ))}
              </div>
              
              <div className="mb-10 min-h-[100px] max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-black">
                      {activeStep === 0 ? t('reStep1Title') : activeStep === 1 ? t('reStep2Title') : t('reStep3Title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {activeStep === 0 ? t('reStep1Desc') : activeStep === 1 ? t('reStep2Desc') : t('reStep3Desc')}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={
                      activeStep === 0 
                        ? "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1200&auto=format&fit=crop" 
                        : activeStep === 1
                        ? "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
                        : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                    }
                    alt={`Step ${activeStep + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Who Uses Muebly */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-emerald-600 font-medium mb-3 text-sm tracking-wide uppercase">{t('reWhoTag')}</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">
                {t('reWhoTitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop",
                  title: t('reWho1Title'),
                  desc: t('reWho1Desc')
                },
                {
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
                  title: t('reWho2Title'),
                  desc: t('reWho2Desc')
                },
                {
                  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
                  title: t('reWho3Title'),
                  desc: t('reWho3Desc')
                },
                {
                  img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
                  title: t('reWho4Title'),
                  desc: t('reWho4Desc')
                }
              ].map((card, i) => (
                <div key={i} className="group flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-5 rounded-full overflow-hidden bg-gray-200 shadow-sm border-2 border-white">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Pricing */}
        <Pricing />

        {/* Section 5 — Testimonials */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 mb-16 text-center">
            <div className="text-emerald-600 font-medium mb-4">{t('reTestiTag')}</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black">
              {t('reTestiTitle')}
            </h2>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
            >
              {[
                {
                  text: t('reTesti1Text'),
                  name: t('reTesti1Name'),
                  role: t('reTesti1Role'),
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('reTesti2Text'),
                  name: t('reTesti2Name'),
                  role: t('reTesti2Role'),
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('reTesti3Text'),
                  name: t('reTesti3Name'),
                  role: t('reTesti3Role'),
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                }
              ].map((testimonial, idx) => (
                <div 
                  key={idx} 
                  className="w-[320px] sm:w-[400px] shrink-0 bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for infinite scroll */}
              {[
                {
                  text: t('reTesti1Text'),
                  name: t('reTesti1Name'),
                  role: t('reTesti1Role'),
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('reTesti2Text'),
                  name: t('reTesti2Name'),
                  role: t('reTesti2Role'),
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('reTesti3Text'),
                  name: t('reTesti3Name'),
                  role: t('reTesti3Role'),
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                }
              ].map((testimonial, idx) => (
                <div 
                  key={`dup-${idx}`} 
                  className="w-[320px] sm:w-[400px] shrink-0 bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
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
      </main>
      <Footer />
    </div>
  );
}
