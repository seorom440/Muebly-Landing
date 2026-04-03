import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Muebly?",
    answer:
      "Muebly is an AI interior design app that lets you redesign any room instantly. Upload a photo of your space, choose a style — Modern, Minimalist, Loft, Organic, and more — and the AI generates a photorealistic redesign in seconds. You can also shop the exact furniture pieces shown in the result.",
  },
  {
    question: "How does the AI room redesign work?",
    answer:
      "You upload a photo of any room and select a design style (or type your own description). Muebly's generative AI analyzes your space and produces a full redesign that respects the room's structure and lighting. Results are ready in seconds.",
  },
  {
    question: "Is Muebly free to use?",
    answer:
      "Yes. The free plan includes 30 credits, unlimited AI design generations within your credits, and 1K image exports — no credit card required. Paid plans start at $6.99/week for more credits, higher-resolution exports, and private mode.",
  },
  {
    question: "Can I use Muebly for real estate virtual staging?",
    answer:
      "Absolutely. Muebly is widely used by real estate agents to virtually stage empty properties for listings. Upload a photo of an unfurnished room and get a fully staged, publication-ready image in seconds — at a fraction of the cost of traditional staging.",
  },
  {
    question: "Can I buy the furniture shown in the AI design?",
    answer:
      "Yes. Muebly's Shop Your Design feature detects the furniture and decor in your AI-generated room and links you to matching products on Amazon, IKEA, JYSK, Ashley, and other major retailers.",
  },
  {
    question: "Do I need design experience?",
    answer:
      "None at all. Muebly is built for everyone — homeowners, renters, real estate agents, and e-commerce sellers. If you can take a photo, you can use Muebly.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-dark py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60">
            Everything you need to know about Muebly.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-accent flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-white/40 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
