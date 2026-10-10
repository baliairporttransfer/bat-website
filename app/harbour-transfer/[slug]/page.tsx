import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { harbourRoutesData, RouteDetail } from "@/data/harbourRoutes";

const WHATSAPP_NUMBER = "6285738217365";

// Fungsi helper untuk mengambil data rute dari file pusat / kalkulasi dinamis
function getRouteDetail(slug: string): RouteDetail {
  // 1. Ambil langsung jika slug ada di database pusat harbourRoutes.ts
  if (harbourRoutesData[slug]) {
    return harbourRoutesData[slug];
  }

  // 2. Fallback Kalkulator Otomatis berdasarkan patokan harga utama jika slug belum terdaftar
  const parts = slug.split("-to-");
  const rawFrom = parts[0] ? parts[0].toLowerCase() : "harbour";
  const rawTo = parts[1] ? parts[1].toLowerCase() : "destination";

  const fromName = rawFrom.charAt(0).toUpperCase() + rawFrom.slice(1);
  const toName = rawTo.charAt(0).toUpperCase() + rawTo.slice(1);

  let price = "IDR 400,000";
  let priceUSD = "approx. $26 USD";
  let duration = "1.5 - 2 Hours";
  let distance = "approx. 50 km";

  // Penyesuaian Patokan Harga Berdasarkan Asal Port
  if (rawFrom.includes("gilimanuk")) {
    if (rawTo.includes("pemuteran")) {
      price = "IDR 300,000"; priceUSD = "approx. $19 USD"; duration = "45 Mins"; distance = "30 km";
    } else if (rawTo.includes("lovin")) {
      price = "IDR 500,000"; priceUSD = "approx. $32 USD"; duration = "1.5 Hours"; distance = "78 km";
    } else if (rawTo.includes("ubud")) {
      price = "IDR 800,000"; priceUSD = "approx. $51 USD"; duration = "3.5 Hours"; distance = "130 km";
    } else {
      price = "IDR 750,000"; priceUSD = "approx. $48 USD"; duration = "3.5 - 4 Hours"; distance = "135 km";
    }
  } else if (rawFrom.includes("sanur")) {
    if (rawTo.includes("airport") || rawTo.includes("kuta")) {
      price = "IDR 250,000"; priceUSD = "approx. $16 USD"; duration = "30 - 45 Mins"; distance = "16 km";
    } else if (rawTo.includes("canggu") || rawTo.includes("ubud") || rawTo.includes("uluwatu")) {
      price = "IDR 350,000"; priceUSD = "approx. $23 USD"; duration = "1 Hour"; distance = "25 km";
    } else if (rawTo.includes("munduk") || rawTo.includes("lovin")) {
      price = "IDR 650,000"; priceUSD = "approx. $42 USD"; duration = "2.5 Hours"; distance = "85 km";
    }
  } else if (rawFrom.includes("padangbai")) {
    if (rawTo.includes("ubud")) {
      price = "IDR 350,000"; priceUSD = "approx. $23 USD"; duration = "1 Hour"; distance = "42 km";
    } else if (rawTo.includes("kuta")) {
      price = "IDR 400,000"; priceUSD = "approx. $26 USD"; duration = "1.5 Hours"; distance = "55 km";
    } else if (rawTo.includes("canggu") || rawTo.includes("amed")) {
      price = "IDR 450,000"; priceUSD = "approx. $29 USD"; duration = "1.5 - 2 Hours"; distance = "60 km";
    } else if (rawTo.includes("airport") || rawTo.includes("uluwatu")) {
      price = "IDR 500,000"; priceUSD = "approx. $32 USD"; duration = "1.5 - 2 Hours"; distance = "60 - 70 km";
    } else if (rawTo.includes("munduk")) {
      price = "IDR 650,000"; priceUSD = "approx. $42 USD"; duration = "2.5 - 3 Hours"; distance = "95 km";
    }
  }

  return {
    slug,
    title: `Private Transfer ${fromName} Harbour to ${toName}`,
    from: `${fromName} Harbour`,
    fromPortName: `${fromName} Fast Boat Port`,
    to: `${toName} Area`,
    price,
    priceUSD,
    duration,
    distance,
    description: `Need a reliable private driver from ${fromName} Harbour to ${toName}? TransferBali provides air-conditioned private vehicles with professional drivers at competitive transparent fixed rates.`,
    routeHighlights: [
      "100% Private vehicle - No sharing with strangers",
      "Air-conditioned MPV (Toyota Avanza / Suzuki APV)",
      "Direct door-to-door hotel pickup and drop-off",
      "All-inclusive fixed rate: Petrol, parking fees & driver included",
    ],
    pickupGuide: `Your driver will be waiting at the designated ${fromName} Harbour arrival exit holding a greeting sign with your name.`,
    faqs: [
      {
        question: "Is this price fixed or per person?",
        answer: `Our rate of ${price} is a fixed total price per private vehicle (up to 4 passengers with luggage), NOT per person.`,
      },
      {
        question: "What if our fast boat is delayed?",
        answer: "No worries! We monitor fast boat arrival times at the port. Your driver will wait without extra charges.",
      },
    ],
  };
}

// 1. DYNAMIC METADATA (SEO Otomatis)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteDetail(slug);

  const pageTitle = `${route.title} | Fixed Rate ${route.price}`;
  const pageDesc = `${route.description.substring(0, 150)}... Fixed rate ${route.price}. Air-conditioned car, English driver, direct pickup.`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [
      `${slug.replace("-to-", " to ")} transfer`,
      `private driver ${slug.replace("-to-", " to ")}`,
      `taxi ${slug.replace("-to-", " to ")} price`,
      `harbour transfer Bali`,
    ],
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: `https://transferbali.com/harbour-transfer/${slug}`,
      type: "website",
    },
  };
}

// 2. MAIN COMPONENT (Render Halaman Detail Rute)
export default async function DynamicRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteDetail(slug);

  const waText = `Hello TransferBali, I want to book private transfer: *${route.title}* (${route.price}). Please check availability for my date.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  // JSON-LD Schema Markup untuk Rich Results
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
    "description": route.description,
    "offers": {
      "@type": "Offer",
      "price": route.price.replace(/[^0-9]/g, "") || "0",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Container */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs text-slate-400 mb-4 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/harbour-transfer" className="hover:text-blue-400 transition-colors">Harbour Transfer</Link>
            <span>/</span>
            <span className="text-blue-400 font-semibold capitalize">{slug.replace(/-/g, " ")}</span>
          </nav>

          <span className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
            Official Harbour Transfer Service
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {route.title}
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {route.description}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Specifications & Price Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Summary Box */}
          <div className="md:col-span-2 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2">
              📊 Route Information & Specs
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[11px]">PICKUP LOCATION</span>
                <span className="font-bold text-white">{route.from}</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[11px]">DROP-OFF DESTINATION</span>
                <span className="font-bold text-white">{route.to}</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[11px]">EST. TRAVEL TIME</span>
                <span className="font-bold text-white">{route.duration}</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[11px]">APPROX. DISTANCE</span>
                <span className="font-bold text-white">{route.distance}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                Route Highlights:
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {route.routeHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing & Booking Box */}
          <div className="bg-gradient-to-b from-blue-950 to-slate-800 border border-blue-500/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                Fixed Private Price
              </span>
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">
                {route.price}
              </div>
              {route.priceUSD && (
                <span className="text-xs text-slate-400 block mb-4">{route.priceUSD}</span>
              )}

              <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 space-y-1.5 text-xs text-slate-300 mb-6">
                <div className="flex justify-between">
                  <span>Vehicle:</span>
                  <span className="font-bold text-white">Private MPV Car</span>
                </div>
                <div className="flex justify-between">
                  <span>Capacity:</span>
                  <span className="font-bold text-white">1 - 4 Passengers</span>
                </div>
                <div className="flex justify-between">
                  <span>Baggage:</span>
                  <span className="font-bold text-white">3-4 Suitcases</span>
                </div>
                <div className="flex justify-between">
                  <span>Inclusions:</span>
                  <span className="font-bold text-emerald-400">Petrol & Parking</span>
                </div>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-center text-sm transition-all block shadow-lg shadow-emerald-950/50 active:scale-[0.98]"
            >
              💬 Book via WhatsApp Now
            </a>
          </div>
        </div>

        {/* Pickup Guide Section */}
        <section className="bg-slate-800/50 border border-slate-700/80 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            📍 Pickup Guide at {route.from}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {route.pickupGuide}
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-800/50 border border-slate-700/80 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            ❓ Frequently Asked Questions ({route.from} to {route.to})
          </h2>

          <div className="space-y-4">
            {route.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-blue-400 text-sm mb-1">
                  Q: {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Footer */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-950 border border-slate-700 p-6 rounded-2xl text-center">
          <h3 className="text-base font-bold text-white mb-2">Heading to another harbor or destination?</h3>
          <p className="text-xs text-slate-400 mb-4">Explore our complete list of private transfers across Bali island.</p>
          <Link
            href="/harbour-transfer"
            className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-all border border-slate-600"
          >
            ← View All Harbour Transfer Routes
          </Link>
        </section>
      </div>
    </div>
  );
}
