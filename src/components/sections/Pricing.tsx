import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0.00",
    period: "",
    credits: "30",
    features: [
      "AI design generations",
      "1K exports",
      "AI chat guidance",
      "Suggested prompts",
      "Browse styles & ideas",
      "Real furniture recommendations"
    ],
    cta: "Start free",
    variant: "outline"
  },
  {
    name: "Weekly",
    price: "$6.99",
    originalPrice: "$13.99",
    discount: "-50%",
    period: "Per Week",
    credits: "300",
    features: [
      "Everything in Free, plus:",
      "2K exports",
      "Private mode",
      "Watermark-free",
      "Token top-ups"
    ],
    cta: "Upgrade to Weekly",
    variant: "primary",
    isPopular: true
  },
  {
    name: "Monthly",
    price: "$24.99",
    originalPrice: "$49.99",
    discount: "-50%",
    period: "Per Month",
    credits: "1 500",
    features: [
      "Everything in Weekly, plus:",
      "4K exports",
      "Commercial usage license",
      "Discounted token top-ups"
    ],
    cta: "Upgrade to Monthly",
    variant: "outline"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background Gradient/Image Placeholder */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter mb-4 sm:mb-6">Pricing</h2>
          <p className="text-white/60 text-base sm:text-lg">
            Start with a free AI interior design tool, then upgrade for more credits, higher-resolution exports, private mode and commercial usage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col h-full border backdrop-blur-md ${
                plan.variant === 'primary' 
                  ? 'bg-accent text-black border-transparent' 
                  : 'bg-white/5 border-white/10 text-white'
              }`}
            >
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-medium">{plan.name}</h3>
                  <div className={`text-sm font-medium ${plan.variant === 'primary' ? 'text-black/60' : 'text-white/60'}`}>
                    Credits: <span className={plan.variant === 'primary' ? 'text-black' : 'text-white'}>{plan.credits}</span>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-medium tracking-tighter">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className={`text-lg line-through ${plan.variant === 'primary' ? 'text-black/40' : 'text-white/40'}`}>
                      {plan.originalPrice}
                    </span>
                  )}
                  {plan.discount && (
                    <span className={`ml-auto px-3 py-1 rounded-full text-sm font-bold ${
                      plan.variant === 'primary' ? 'bg-white text-black' : 'bg-accent/10 text-accent'
                    }`}>
                      {plan.discount}
                    </span>
                  )}
                </div>
                <p className={`text-lg font-medium ${plan.variant === 'primary' ? 'text-black/60' : 'text-white/60'}`}>
                  {plan.period}
                </p>
              </div>

              <div className="mb-8">
                <Button 
                  className={`w-full h-12 text-base font-medium uppercase tracking-wide ${
                    plan.variant === 'primary' 
                      ? 'bg-black text-white hover:bg-black/90' 
                      : 'bg-accent text-black hover:bg-accent/90'
                  }`}
                >
                  {plan.cta}
                </Button>
                {plan.variant !== 'outline' && (
                  <p className="text-center text-xs mt-3 font-medium opacity-60">
                    No hidden fees, 3-days money-back guarantee
                  </p>
                )}
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
