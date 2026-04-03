import { motion } from "motion/react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              AI Interior Design Platform. Redesign your space instantly with the power of artificial intelligence.
            </p>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-2">Products</h4>
            <a href="#" className="text-white/80 hover:text-white transition-colors">For E-commerce</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">For Real Estate</a>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-2">Tools</h4>
            <a href="#" className="text-white/80 hover:text-white transition-colors">AI Room Design</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Virtual Staging</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Exterior Design</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Commercial Spaces</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-2">Legal</h4>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm uppercase tracking-wider">
            muebly © 2026
          </p>
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
            <div className="w-5 h-5 bg-white/20 rounded-full" />
            <div className="w-5 h-5 bg-white/20 rounded-full" />
            <div className="w-5 h-5 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
