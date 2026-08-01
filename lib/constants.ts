export const SITE_CONFIG = {
  name: "Bali Airport Transfer",
  shortName: "BAT",
  description:
    "Premium private airport transfers and hourly chauffeur service across Bali with fixed prices, professional English-speaking drivers, and instant WhatsApp confirmation.",
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://bat-airport-transfer.vercel.app",
  email: "hello.baliairporttransfer@gmail.com",
  whatsappDisplay: "+62 857 3821 7365",
  whatsappNumber: "6285738217365",
  address: "Bali, Indonesia",
  heroImage:
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2200&q=85",
  keywords: [
    "Bali Airport Transfer",
    "Airport Taxi Bali",
    "Private Airport Transfer Bali",
    "Airport Pickup Bali",
    "Bali Driver",
    "Ngurah Rai Airport Transfer",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#prices" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
] as const;

export const AIRPORT_PICKUP = "I Gusti Ngurah Rai International Airport (DPS)";
export const CHILD_SEAT_PRICE = 75000;
export const HOURLY_CHARTER_RATE = 125000;
