'use client';

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('planFree'), price: "$0.00", period: "", credits: "30",
      features: [t('featAiDesign'), t('feat1k'), t('featAiChat'), t('featPrompts'), t('featBrowse'), t('featFurniture')],
      cta: t('startFree'), variant: "outline"
    },
    {
      name: t('planMonthly'), price: "$9.99", originalPrice: "$14.99", discount: "-33%", period: t('perMonth'), credits: "300",
      features: [t('featEverythingFree'), t('feat2k'), t('featPrivate'), t('featWatermark'), t('featToken')],
      cta: t('upgradeMonthly'), variant: "primary", isPopular: true
    },
    {
      name: t('planYearly'), price: "$49.99", originalPrice: "$119.99", discount: "-58%", period: t('perYear'), credits: "1 500",
      features: [t('featEverythingMonthly'), t('feat4k'), t('featCommercial'), t('featDiscounted')],
      cta: t('upgradeYearly'), variant: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter mb-4 sm:mb-6">{t('pricingTitle')}</h2>
          <p className="text-white/60 text-base sm:text-lg">{t('pricingSubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-3xl p-8 flex flex-col h-full border backdrop-blur-md ${plan.variant === 'primary' ? 'bg-accent text-black border-transparent' : 'bg-white/5 border-white/10 text-white'}`}>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-medium">{plan.name}</h3>
                  <div className={`text-sm font-medium ${plan.variant === 'primary' ? 'text-black/60' : 'text-white/60'}`}>
                    {t('credits')}: <span className={plan.variant === 'primary' ? 'text-black' : 'text-white'}>{plan.credits}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-medium tracking-tighter">{plan.price}</span>
                  {plan.originalPrice && <span className={`text-lg line-through ${plan.variant === 'primary' ? 'text-black/40' : 'text-white/40'}`}>{plan.originalPrice}</span>}
                  {plan.discount && <span className={`ml-auto px-3 py-1 rounded-full text-sm font-bold ${plan.variant === 'primary' ? 'bg-white text-black' : 'bg-accent/10 text-accent'}`}>{plan.discount}</span>}
                </div>
                <p className={`text-lg font-medium ${plan.variant === 'primary' ? 'text-black/60' : 'text-white/60'}`}>{plan.period}</p>
              </div>
              <div className="mb-8">
                <Button className={`w-full h-12 text-base font-medium uppercase tracking-wide ${plan.variant === 'primary' ? 'bg-black text-white hover:bg-black/90' : 'bg-accent text-black hover:bg-accent/90'}`}>{plan.cta}</Button>
                {plan.variant !== 'outline' && <p className="text-center text-xs mt-3 font-medium opacity-60">{t('noHiddenFees')}</p>}
              </div>
              <div className={`h-px w-full mb-8 ${plan.variant === 'primary' ? 'bg-black/10' : 'bg-white/10'}`} />
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 ${plan.variant === 'primary' ? 'text-black' : 'text-white'}`} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
