import type { Metadata } from "next";
import { Inter, DM_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muebly.app"),
  title: {
    default: "Muebly — AI Interior Design App",
    template: "%s | Muebly",
  },
  description:
    "Redesign any room with AI in seconds. Upload a photo, choose a style, and get a photorealistic interior design — then shop the look instantly.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muebly.app",
    siteName: "Muebly",
    images: [
      {
        url: "https://muebly.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muebly — AI Interior Design App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mueblyapp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${openSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
