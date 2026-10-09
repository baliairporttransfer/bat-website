import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const WHATSAPP_NUMBER = "6285738217365";

interface RouteDetail {
  title: string;
  from: string;
  to: string;
  price: string;
  duration: string;
  distance: string;
  overview: string;
}

// Database Semua Rute (Kamu tinggal tambahkan rute lain di daftar ini)
const routesData: Record<string, RouteDetail> = {
  "padangbai-to-munduk": {
    title: "Padangbai Harbour to Munduk Private Transfer",
    from: "Padangbai Harbour (East Bali)",
    to: "Munduk Village & Lakes Region (North Bali)",
    price: "IDR 650,000",
    duration: "2.5 - 3 Hours",
    distance: "approx. 95 km",
    overview: "Direct private taxi transfer from Padangbai port to your hotel or villa in Munduk. Travel through Bali's scenic highlands comfortably.",
  },
  "padangbai-to-ubud": {
    title: "Padangbai Harbour to Ubud Private Transfer",
    from: "Padangbai Harbour (East Bali)",
    to: "Ubud Centre & Resort Area (Central Bali)",
    price: "IDR 350,000",
    duration: "1 - 1.5 Hours",
    distance: "approx. 42 km",
    overview: "Fastest private transfer from Padangbai Port to Ubud. Skip the crowded public shuttles and enjoy a direct door-to-door car service.",
  },
  "sanur-to-airport": {
    title: "Sanur Harbour to Ngurah Rai Airport Private Transfer",
    from: "Sanur Harbour (Denpasar)",
    to: "Ngurah Rai International Airport (DPS)",
    price: "IDR 250,000",
    duration: "30 - 45 Mins",
    distance: "approx. 18 km",
    overview: "Reliable airport shuttle from Sanur Port straight to DPS Airport terminal. Timely pickup aligned with your fast boat arrival.",
  },
  "gilimanuk-to-canggu": {
    title: "Gilimanuk Harbour to Canggu Private Transfer",
    from: "Gilimanuk Ferry Port (West Bali)",
    to: "Canggu Beach & Resort Area",
    price: "IDR 800,000",
    duration: "3 - 3.5 Hours",
    distance: "approx. 130 km",
    overview: "Long-distance private transfer from Gilimanuk ferry port in West Bali directly to your accommodation in Canggu.",
  },
};

// 1. DYNAMIC METADATA (SEO Otomatis per Rute)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = routesData[slug];

  if (!route) {
    return { title: "Route Not Found | TransferBali" };
  }

  return {
    title: `Private Transfer ${route.from} to ${route.to} | TransferBali`,
    description: `Book reliable private transfer from ${route.from} to ${route.to}. Fixed price ${route.price}, English-speaking driver, air-conditioned car, direct pickup.`,
    openGraph: {
      title: `Private Transfer ${route.from} to ${route.to}`,
      description: route.overview,
      url: `https://transferbali.com/harbour-transfer/${slug}`,
    },
  };
}

// 2. HALAMAN UTAMA (Render Dinamis)
export default async function DynamicRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routesData[slug] || {
    // Default Fallback jika slug belum terdaftar di database
    title: `${slug.replace(/-/g, " ").toUpperCase()} Private Transfer`,
    from: slug.split("-to-")[0]?.toUpperCase() || "Harbour",
    to: slug.split("-to-")[1]?.toUpperCase() || "Destination",
    price: "Contact for Rate",
    duration: "2 - 3 Hours",
    distance: "Varies",
    overview: `Private door-to-door transfer service from ${slug.replace("-to-", " to ")} with TransferBali.`,
  };

  const waText = `Hello TransferBali, I would like to book a private transfer: *${route.title}* (Rate: ${route.price}). Please check availability for my travel date.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  // JSON-LD Structured Data untuk Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": route.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TransferBali",
      "url": "https://transferbali.com",
      "telephone": `+${WHATSAPP_NUMBER}`,
    },
    "description": route.overview,
    "offers": {
      "@type": "Offer",
      "price": route.price.replace(/[^0-9]/g, ""),
      "priceCurrency": "IDR",
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-12 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-slate-400 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-blue-400">Home</a>
        <span>/</span>
        <a href="/harbour-transfer" className="hover:text-blue-400">Harbour Transfer</a>
        <span>/</span>
        <span className="text-blue-400 font-semibold capitalize">{slug.replace(/-/g, " ")}</span>
      </nav>

      {/* Main Header */}
      <header className="mb-8">
        <span className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Private Harbour Taxi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {route.title}
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          {route.overview}
        </p>
      </header>

      {/* Ringkasan Rute & Kartu Harga */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2">
            Transfer Specifications
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block">Pickup Location:</span>
              <span className="font-bold text-white">{route.from}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Drop-off Destination:</span>
              <span className="font-bold text-white">{route.to}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Est. Travel Time:</span>
              <span className="font-bold text-white">{route.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Approx. Distance:</span>
              <span className="font-bold text-white">{route.distance}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-950 to-slate-800 border border-blue-500/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              Fixed Private Rate
            </span>
            <div className="text-3xl font-extrabold text-emerald-400 mb-2">
              {route.price}
            </div>
            <p className="text-[11px] text-slate-400 mb-6">
              Includes Private MPV, English-speaking driver, fuel & parking.
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl text-center text-sm transition-all block shadow-lg shadow-emerald-950/50"
          >
            💬 Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Konten SEO On-Page */}
      <article className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl space-y-6 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-xl font-bold text-white">Why Book Your {route.from} Transfer With Us?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Boat Arrival Monitoring:</strong> We track fast boat schedules to handle ocean delays seamlessly.</li>
          <li><strong>Door-to-Door Service:</strong> Direct pickup right from the port exit gate straight to your resort or hotel lobby.</li>
          <li><strong>Transparent Flat Rates:</strong> No meter scams or hidden baggage extra fees.</li>
        </ul>
      </article>
    </div>
  );
}