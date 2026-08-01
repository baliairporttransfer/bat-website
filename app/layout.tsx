import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: { default: "Bali Airport Transfer | Private Airport Pickup & Driver", template: `%s | ${SITE_CONFIG.name}` },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  alternates: { canonical: "/" },
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_CONFIG.name,
    title: "Private Airport Transfer Across Bali",
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.heroImage, width: 1200, height: 630, alt: "Bali Airport Transfer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Airport Transfer Across Bali",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.heroImage],
  },
  icons: { icon: "/logo/bat-logo.png", apple: "/logo/bat-logo.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08142B" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
