'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { CookieBanner } from '@/components/ui/CookieBanner';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <CookieBanner />
    </LanguageProvider>
  );
}
