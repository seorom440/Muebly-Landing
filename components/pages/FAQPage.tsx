'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const faqDataKeys = [
  {
    categoryKey: "faqCatGeneral",
    questions: [
      { qKey: "faqQ1", aKey: "faqA1" },
      { qKey: "faqQ2", aKey: "faqA2" },
      { qKey: "faqQ3", aKey: "faqA3" },
      { qKey: "faqQ4", aKey: "faqA4" }
    ]
  },
  {
    categoryKey: "faqCatRealEstate",
    questions: [
      { qKey: "faqQ5", aKey: "faqA5" },
      { qKey: "faqQ6", aKey: "faqA6" },
      { qKey: "faqQ7", aKey: "faqA7" },
      { qKey: "faqQ8", aKey: "faqA8" }
    ]
  },
  {
    categoryKey: "faqCatPricing",
    questions: [
      { qKey: "faqQ9", aKey: "faqA9" },
      { qKey: "faqQ10", aKey: "faqA10" },
      { qKey: "faqQ11", aKey: "faqA11" },
      { qKey: "faqQ12", aKey: "faqA12" }
    ]
  },
  {
    categoryKey: "faqCatB2B",
    questions: [
      { qKey: "faqQ13", aKey: "faqA13" },
      { qKey: "faqQ14", aKey: "faqA14" },
      { qKey: "faqQ15", aKey: "faqA15" }
    ]
  },
  {
    categoryKey: "faqCatPrivacy",
    questions: [
      { qKey: "faqQ16", aKey: "faqA16" },
      { qKey: "faqQ17", aKey: "faqA17" }
    ]
  }
];

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-emerald-600 transition-colors pr-8">
          {question}
        </h3>
        <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-50 text-emerald-600' : 'text-gray-400'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPage() {
  const { t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-black"
              >
                {t('faqHeroTitle1')} <span className="text-gray-400 italic">{t('faqHeroTitle2')}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {t('faqHeroDesc')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative aspect-[21/9] mb-16"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern office space" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
              
              {/* Sidebar Navigation */}
              <div className="md:w-1/3 shrink-0">
                <div className="sticky top-32 flex flex-col gap-2">
                  {faqDataKeys.map((section, index) => (
                    <button
                      key={section.categoryKey}
                      onClick={() => setActiveCategoryIndex(index)}
                      className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                        activeCategoryIndex === index
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {t(section.categoryKey as any)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions List */}
              <div className="md:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategoryIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-semibold text-black mb-6">
                      {t(faqDataKeys[activeCategoryIndex].categoryKey as any)}
                    </h2>
                    <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                      {faqDataKeys[activeCategoryIndex].questions.map((q, i) => (
          <div key={i}>
            <AccordionItem question={t(q.qKey as any)} answer={t(q.aKey as any)} />
          </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-semibold tracking-tighter mb-4 text-black">
                {t('faqStillHaveQuestions')}
              </h3>
              <p className="text-lg text-gray-600 mb-10">
                {t('faqCantFindAnswer')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                  {t('reHeroBtn1')}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  {t('faqGetInTouch')}
                </button>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-4">{t('faqPeopleAlsoAsk')}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "faqTag1", "faqTag2", 
                    "faqTag3", "faqTag4", 
                    "faqTag5", "faqTag6", 
                    "faqTag7", "faqTag8"
                  ].map((tagKey, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600">
                      {t(tagKey as any)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
