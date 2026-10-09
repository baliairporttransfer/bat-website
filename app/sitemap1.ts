import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://transferbali.com";

  // 1. Destinasi Airport Transfer (yang sudah Anda punya)
  const airportDestinations = [
    "munduk",
    "lovina",
    "sidemen",
    "amed",
    "ubud",
    "uluwatu",
    "seminyak",
    "nusa-dua",
    "sanur",
    "canggu",
    "tanah-lot",
    "tegallalang",
    "padangbai",
    "bedugul",
    "pemuteran",
  ];

  // 2. Destinasi Rute Harbour Transfer (Harbour to Destination)
  const harbourRoutes = [
    // Padangbai Routes
    "padangbai-to-canggu",
    "padangbai-to-kuta",
    "padangbai-to-sanur",
    "padangbai-to-padangbai",
    "padangbai-to-gilimanuk",
    "padangbai-to-munduk",
    "padangbai-to-lovina",
    "padangbai-to-amed",
    "padangbai-to-sidemen",
    "padangbai-to-airport",
    "padangbai-to-uluwatu",
    "padangbai-to-jimbaran",
    "padangbai-to-nusa-dua",
    "padangbai-to-ubud",
    "padangbai-to-tegallalang",
    "padangbai-to-pemuteran",
    "padangbai-to-jatiluwih",

    // Sanur Routes
    "sanur-to-canggu",
    "sanur-to-kuta",
    "sanur-to-sanur",
    "sanur-to-padangbai",
    "sanur-to-gilimanuk",
    "sanur-to-munduk",
    "sanur-to-lovina",
    "sanur-to-amed",
    "sanur-to-sidemen",
    "sanur-to-airport",
    "sanur-to-uluwatu",
    "sanur-to-jimbaran",
    "sanur-to-nusa-dua",
    "sanur-to-ubud",
    "sanur-to-tegallalang",
    "sanur-to-pemuteran",
    "sanur-to-jatiluwih",

    // Gilimanuk Routes
    "gilimanuk-to-canggu",
    "gilimanuk-to-kuta",
    "gilimanuk-to-sanur",
    "gilimanuk-to-padangbai",
    "gilimanuk-to-gilimanuk",
    "gilimanuk-to-munduk",
    "gilimanuk-to-lovina",
    "gilimanuk-to-amed",
    "gilimanuk-to-sidemen",
    "gilimanuk-to-airport",
    "gilimanuk-to-uluwatu",
    "gilimanuk-to-jimbaran",
    "gilimanuk-to-nusa-dua",
    "gilimanuk-to-ubud",
    "gilimanuk-to-tegallalang",
    "gilimanuk-to-pemuteran",
    "gilimanuk-to-jatiluwih",
  ];

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // Harbour Transfer Main Page
    {
      url: `${baseUrl}/harbour-transfer`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    // Airport Transfer Pages (Existing)
    ...airportDestinations.map((destination) => ({
      url: `${baseUrl}/airport-transfer-${destination}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Harbour Transfer Detail Routes (New)
    ...harbourRoutes.map((slug) => ({
      url: `${baseUrl}/harbour-transfer/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}