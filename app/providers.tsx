'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { ChatWidget } from '@/components/ui/ChatWidget';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <CookieBanner />
      <ChatWidget />
    </LanguageProvider>
  );
}
