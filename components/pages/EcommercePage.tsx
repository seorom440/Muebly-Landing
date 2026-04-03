'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, ShoppingCart, BarChart3, Users, FileText, Zap, MonitorSmartphone, Store, Image as ImageIcon, MessageSquare, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

import { EcommerceMobileAppPreview } from "@/components/ui/EcommerceMobileAppPreview";
import { EcommerceHowItWorksMobile } from "@/components/ui/EcommerceHowItWorksMobile";

export function EcommercePage() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  // Interactive Pricing State
  const [teamFeatures, setTeamFeatures] = useState<boolean[]>([false, false, false, false, false]);
  const featurePrices = [100, 100, 50, 25, 25];
  const baseTeamPrice = 199;
  
  const priceValue = useMotionValue(baseTeamPrice);
  const displayPrice = useTransform(priceValue, (latest) => `€${Math.round(latest)}`);

  useEffect(() => {
    const targetPrice = baseTeamPrice + teamFeatures.reduce((acc, isChecked, idx) => acc + (isChecked ? featurePrices[idx] : 0), 0);
    animate(priceValue, targetPrice, { duration: 0.5, ease: "easeOut" });
  }, [teamFeatures, priceValue]);

  const toggleTeamFeature = (index: number) => {
    const newFeatures = [...teamFeatures];
    newFeatures[index] = !newFeatures[index];
    setTeamFeatures(newFeatures);
  };

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
        <section className="relative pt-12 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0 z-30">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-black"
              >
                {t('ecHeroTitle1')} <span className="text-gray-400 italic">{t('ecHeroTitle2')}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                {t('ecHeroDesc')}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                  {t('ecHeroBtn1')}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  {t('ecHeroBtn2')}
                </button>
              </motion.div>
            </div>

            {/* Right Content - Mobile App Preview */}
            <div className="flex justify-center items-center relative h-[600px] sm:h-[650px] lg:h-[700px] w-full mt-8 lg:mt-0">
               <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-20 scale-90 sm:scale-100"
              >
                <EcommerceMobileAppPreview />
              </motion.div>

              {/* Decorative Elements behind phone */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/20 rounded-full blur-[80px] sm:blur-[100px] -z-10"
              />
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 border-y border-gray-100 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { stat: "40%", label: t('ecStat1'), icon: <TrendingUp className="w-8 h-8 text-emerald-500 mb-4 mx-auto" /> },
                { stat: "3x", label: t('ecStat2'), icon: <Clock className="w-8 h-8 text-emerald-500 mb-4 mx-auto" /> },
                { stat: "68%", label: t('ecStat3'), icon: <ShoppingCart className="w-8 h-8 text-emerald-500 mb-4 mx-auto" /> },
                { stat: "2min", label: t('ecStat4'), icon: <Zap className="w-8 h-8 text-emerald-500 mb-4 mx-auto" /> }
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

        {/* Section 2 — How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-emerald-600 font-medium mb-3 text-sm tracking-wide uppercase">{t('ecHowTag')}</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">
                {t('ecHowTitle')}
              </h2>
              <p className="text-gray-600">
                {t('ecHowDesc')}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12 lg:gap-8">
              {/* Left Side: Steps */}
              <div className="w-full lg:w-1/2 space-y-6">
                {[0, 1, 2].map((stepIndex) => (
                  <div 
                    key={stepIndex}
                    onClick={() => setActiveStep(stepIndex)}
                    className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border-2 ${
                      activeStep === stepIndex 
                        ? 'bg-emerald-50 border-emerald-500 shadow-md' 
                        : 'border-transparent hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${
                        activeStep === stepIndex 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {stepIndex + 1}
                      </div>
                      <h3 className={`text-xl font-bold ${
                        activeStep === stepIndex ? 'text-emerald-900' : 'text-gray-900'
                      }`}>
                        {stepIndex === 0 ? t('ecStep1Title') : stepIndex === 1 ? t('ecStep2Title') : t('ecStep3Title')}
                      </h3>
                    </div>
                    <p className={`pl-14 text-sm md:text-base leading-relaxed ${
                      activeStep === stepIndex ? 'text-emerald-800' : 'text-gray-600'
                    }`}>
                      {stepIndex === 0 ? t('ecStep1Desc') : stepIndex === 1 ? t('ecStep2Desc') : t('ecStep3Desc')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Side: Mobile Animation */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <EcommerceHowItWorksMobile activeStep={activeStep} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — What You Get */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-emerald-600 font-medium mb-4">{t('ecWhatTag')}</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
                {t('ecWhatTitle')}
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:w-1/2 w-full space-y-3">
                {[
                  { icon: <Store className="w-5 h-5" />, title: t('ecWhat1Title'), desc: t('ecWhat1Desc') },
                  { icon: <ImageIcon className="w-5 h-5" />, title: t('ecWhat2Title'), desc: t('ecWhat2Desc') },
                  { icon: <Users className="w-5 h-5" />, title: t('ecWhat3Title'), desc: t('ecWhat3Desc') },
                  { icon: <BarChart3 className="w-5 h-5" />, title: t('ecWhat4Title'), desc: t('ecWhat4Desc') },
                  { icon: <FileText className="w-5 h-5" />, title: t('ecWhat5Title'), desc: t('ecWhat5Desc') },
                  { icon: <Zap className="w-5 h-5" />, title: t('ecWhat6Title'), desc: t('ecWhat6Desc') }
                ].map((item, i) => (
                  <div 
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border-2 ${activeFeature === i ? 'bg-white border-emerald-500 shadow-md' : 'border-transparent hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2.5 rounded-xl ${activeFeature === i ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-200 text-gray-500'}`}>
                        {item.icon}
                      </div>
                      <h3 className={`text-xl font-bold ${activeFeature === i ? 'text-black' : 'text-gray-500'}`}>{item.title}</h3>
                    </div>
                    <AnimatePresence>
                      {activeFeature === i && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-600 pl-[3.25rem] leading-relaxed"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeFeature}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      src={[
                        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop"
                      ][activeFeature]}
                      alt="Feature visualization"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — The Workflow In Detail */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-emerald-600 font-medium mb-4">{t('ecWorkTag')}</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
                {t('ecWorkTitle')}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-2 border-emerald-100 ml-4 md:ml-0 pl-8 md:pl-0">
                {[
                  t('ecWorkStep1'),
                  t('ecWorkStep2'),
                  t('ecWorkStep3'),
                  t('ecWorkStep4'),
                  t('ecWorkStep5'),
                  t('ecWorkStep6'),
                  t('ecWorkStep7')
                ].map((step, i) => (
                  <div key={i} className="mb-10 relative md:flex items-center gap-8">
                    <div className="absolute -left-[41px] md:static md:w-12 md:h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-lg shrink-0 w-8 h-8">
                      {i + 1}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full">
                      <p className="text-gray-700 text-lg">
                        {step.split('—').map((part, idx) => (
                          idx === 0 ? <strong key={idx} className="text-black">{part}</strong> : <span key={idx}>—{part}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                <p className="text-lg text-emerald-900 font-medium">
                  {t('ecWorkFooter')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Who It's For */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-emerald-600 font-medium mb-4">{t('ecWhoTag')}</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
                {t('ecWhoTitle')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: t('ecWho1Title'),
                  desc: t('ecWho1Desc')
                },
                {
                  title: t('ecWho2Title'),
                  desc: t('ecWho2Desc')
                },
                {
                  title: t('ecWho3Title'),
                  desc: t('ecWho3Desc')
                },
                {
                  title: t('ecWho4Title'),
                  desc: t('ecWho4Desc')
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-black mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Pricing */}
        <section id="pricing" className="py-24 bg-dark text-white relative overflow-hidden">
          {/* Background Gradient/Image Placeholder */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter mb-4 sm:mb-6">{t('ecPriceTitle')}</h2>
              <p className="text-white/60 text-base sm:text-lg">
                {t('ecPriceDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: t('ecPlan1Name'),
                  price: t('ecPlan1Price'),
                  period: t('ecPlan1Period'),
                  variant: "outline",
                  details: [t('ecPlan1Detail1'), t('ecPlan1Detail2'), t('ecPlan1Detail3'), t('ecPlan1Detail4'), t('ecPlan1Detail5')]
                },
                {
                  name: t('ecPlan2Name'),
                  price: t('ecPlan2Price'),
                  period: t('ecPlan2Period'),
                  variant: "primary",
                  details: [t('ecPlan2Detail1'), t('ecPlan2Detail2'), t('ecPlan2Detail3'), t('ecPlan2Detail4'), t('ecPlan2Detail5')]
                }
              ].map((plan, i) => (
                <div 
                  key={i}
                  className={`relative rounded-3xl p-8 flex flex-col h-full border backdrop-blur-md ${
                    plan.variant === 'primary' 
                      ? 'bg-accent text-black border-transparent' 
                      : 'bg-white/5 border-white/10 text-white'
                  }`}
                >
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-medium">{plan.name}</h3>
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-1">
                      {i === 1 ? (
                        <motion.span className="text-5xl font-medium tracking-tighter">{displayPrice}</motion.span>
                      ) : (
                        <span className="text-5xl font-medium tracking-tighter">{plan.price}</span>
                      )}
                    </div>
                    <p className={`text-lg font-medium ${plan.variant === 'primary' ? 'text-black/60' : 'text-white/60'}`}>
                      {plan.period}
                    </p>
                  </div>

                  <div className="mb-8">
                    <Button 
                      className={`w-full h-auto min-h-[48px] py-3 px-4 text-sm sm:text-base font-medium uppercase tracking-wide whitespace-normal ${
                        plan.variant === 'primary' 
                          ? 'bg-black text-white hover:bg-black/90' 
                          : 'bg-accent text-black hover:bg-accent/90'
                      }`}
                    >
                      {t('ecPriceBtn')}
                    </Button>
                  </div>

                  <div className={`h-px w-full mb-8 ${plan.variant === 'primary' ? 'bg-black/10' : 'bg-white/10'}`} />

                  <ul className="space-y-4 flex-1">
                    {plan.details.map((detail, j) => (
                      <li 
                        key={j} 
                        className={`flex items-center gap-3 ${i === 1 ? 'cursor-pointer group' : ''}`}
                        onClick={() => i === 1 && toggleTeamFeature(j)}
                      >
                        {i === 1 ? (
                          <div className={`flex items-center justify-center w-5 h-5 rounded-full border transition-colors shrink-0 ${
                            teamFeatures[j] 
                              ? 'bg-black border-black text-accent' 
                              : 'border-black/30 text-transparent group-hover:border-black/50'
                          }`}>
                            <Check size={12} strokeWidth={3} />
                          </div>
                        ) : (
                          <Check className={`shrink-0 ${plan.variant === 'primary' ? 'text-black' : 'text-white'}`} size={18} />
                        )}
                        <span className={`font-medium transition-colors flex-1 ${
                          i === 1 && !teamFeatures[j] ? 'text-black/60' : ''
                        }`}>
                          {detail}
                        </span>
                        {i === 1 && (
                          <span className={`text-sm font-medium transition-colors ${
                            teamFeatures[j] ? 'text-black' : 'text-black/40'
                          }`}>
                            +€{featurePrices[j]}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center mt-12 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <p className="text-white/80 font-medium mb-2">{t('ecPriceOverages')}</p>
              <p className="text-white/60">{t('ecPriceOveragesDesc')}</p>
            </div>
          </div>
        </section>

        {/* Section 7 — Onboarding Flow (B2B Gate) */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-12 text-center">
                {t('ecOnbTitle')}
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 text-center">
                {t('ecOnbDesc')}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {[
                  t('ecOnbStep1'),
                  t('ecOnbStep2'),
                  t('ecOnbStep3'),
                  t('ecOnbStep4'),
                  t('ecOnbStep5'),
                  t('ecOnbStep6')
                ].map((step, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div className="text-emerald-400 font-bold mb-2">Step {i + 1}</div>
                    <p className="text-gray-200">{step}</p>
                  </div>
                ))}
              </div>

              <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-lg text-gray-400 leading-relaxed">
                  {t('ecOnbFooter')}
                </p>
              </div>

              <div className="text-center">
                <button className="px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors inline-flex items-center gap-2">
                  {t('ecOnbBtn')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — Testimonials */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 mb-16 text-center">
            <div className="text-emerald-600 font-medium mb-4">{t('ecTestiTag')}</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black">
              {t('ecTestiTitle')}
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
                  text: t('ecTesti1Text'),
                  name: t('ecTesti1Name'),
                  role: t('ecTesti1Role'),
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('ecTesti2Text'),
                  name: t('ecTesti2Name'),
                  role: t('ecTesti2Role'),
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('ecTesti3Text'),
                  name: t('ecTesti3Name'),
                  role: t('ecTesti3Role'),
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
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
                  text: t('ecTesti1Text'),
                  name: t('ecTesti1Name'),
                  role: t('ecTesti1Role'),
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('ecTesti2Text'),
                  name: t('ecTesti2Name'),
                  role: t('ecTesti2Role'),
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
                },
                {
                  text: t('ecTesti3Text'),
                  name: t('ecTesti3Name'),
                  role: t('ecTesti3Role'),
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
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

        {/* Section 9 — FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-black">
                {t('ecFaqTitle')}
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: t('ecFaqQ1'),
                  a: t('ecFaqA1')
                },
                {
                  q: t('ecFaqQ2'),
                  a: t('ecFaqA2')
                },
                {
                  q: t('ecFaqQ3'),
                  a: t('ecFaqA3')
                },
                {
                  q: t('ecFaqQ4'),
                  a: t('ecFaqA4')
                },
                {
                  q: t('ecFaqQ5'),
                  a: t('ecFaqA5')
                },
                {
                  q: t('ecFaqQ6'),
                  a: t('ecFaqA6')
                }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold text-black mb-3 flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-emerald-600 text-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
              {t('ecCtaTitle')}
            </h2>
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              {t('ecCtaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-600 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                {t('ecCtaBtn1')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-colors">
                {t('ecCtaBtn2')}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
