import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://transferbali.com";

  const destinations = [
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

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...destinations.map((destination) => ({
      url: `${baseUrl}/airport-transfer-${destination}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}