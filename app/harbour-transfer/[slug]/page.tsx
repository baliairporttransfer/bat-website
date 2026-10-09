import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP_NUMBER = "6285738217365";

interface RouteDetail {
  title: string;
  from: string;
  fromPortName: string;
  to: string;
  price: string;
  priceUSD: string;
  duration: string;
  distance: string;
  description: string;
  routeHighlights: string[];
  pickupGuide: string;
  faqs: { question: string; answer: string }[];
}

// Database Rute Lengkap & Detail
const routesData: Record<string, RouteDetail> = {
  "padangbai-to-munduk": {
    title: "Private Transfer Padangbai Harbour to Munduk Bali",
    from: "Padangbai Harbour",
    fromPortName: "Padangbai Fast Boat Port (East Bali)",
    to: "Munduk Village & Lake Region (North Bali)",
    price: "IDR 650,000",
    priceUSD: "approx. $42 USD",
    duration: "2.5 - 3 Hours",
    distance: "approx. 95 km",
    description:
      "Arriving at Padangbai Harbour after a fast boat journey from Gili Trawangan, Gili Air, Gili Meno, or Lombok? Avoid the hassle of negotiating with aggressive local port drivers or waiting for public shuttle buses. Our private transfer service from Padangbai to Munduk offers a smooth, air-conditioned, direct door-to-door journey through Bali's beautiful central highlands.",
    routeHighlights: [
      "Scenic drive through Sidemen valley or Bedugul highlands",
      "Pass by Lake Beratan and Twin Lakes (Buyan & Tamblingan)",
      "Cool mountain breeze as you elevate into North Bali",
      "Direct drop-off to your hotel, villa, or homestay anywhere in Munduk",
    ],
    pickupGuide:
      "Upon disembarking from your fast boat at Padangbai, walk towards the main arrival exit gate. Your driver will be waiting in the designated meeting area holding a greeting sign with your name clearly printed on it.",
    faqs: [
      {
        question: "How do I find my driver at Padangbai Harbour?",
        answer:
          "Your assigned driver will wait near the main exit arrival gate with a sign displaying your name. We will also share the driver's contact details via WhatsApp prior to your arrival.",
      },
      {
        question: "What if my fast boat from Gili or Lombok is delayed?",
        answer:
          "No worries! We monitor fast boat arrival times at Padangbai port. Your private driver will wait for you without extra charges if your boat experiences delay due to sea weather.",
      },
      {
        question: "Is the price fixed or per person?",
        answer:
          "Our rate of IDR 650,000 is a fixed total price per private vehicle (up to 4 passengers with luggage), NOT per person. It includes petrol, parking, and driver fees.",
      },
      {
        question: "Can we stop for lunch or ATM on the way?",
        answer:
          "Yes! Because it's a 100% private car, you can request brief stops for lunch, ATM withdrawal, or supermarket shopping at no additional charge.",
      },
    ],
  },
  "padangbai-to-ubud": {
    title: "Private Transfer Padangbai Harbour to Ubud Centre",
    from: "Padangbai Harbour",
    fromPortName: "Padangbai Fast Boat Port",
    to: "Ubud Centre & Surrounding Villages",
    price: "IDR 350,000",
    priceUSD: "approx. $23 USD",
    duration: "1 - 1.5 Hours",
    distance: "approx. 42 km",
    description:
      "Get a stress-free private driver from Padangbai Harbour directly to your villa in Ubud. Perfect for travelers coming back from the Gili Islands who want a quick, comfortable, and affordable ride to Bali's cultural heartland.",
    routeHighlights: [
      "Shortest drive route from East Bali to Central Bali",
      "Pass through traditional silver and woodcarving villages (Celuk & Mas)",
      "Direct drop-off to Ubud Centre, Tegallalang, Penestanan, or Sayan",
    ],
    pickupGuide:
      "Your driver will be waiting at the Padangbai Harbour arrival gate holding your name card.",
    faqs: [
      {
        question: "How long is the drive from Padangbai to Ubud?",
        answer:
          "Under normal traffic conditions, the drive takes around 60 to 90 minutes.",
      },
      {
        question: "Does the price cover hotel drop-off outside Ubud Centre?",
        answer:
          "Yes, drop-off in surrounding areas like Penestanan, Campuhan, Tegallalang, and Kedewatan is fully included.",
      },
    ],
  },
};

// 1. DYNAMIC METADATA (SEO Otomatis Berorientasi Kata Kunci)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = routesData[slug];

  const pageTitle = route
    ? `${route.title} | Fixed Rate ${route.price}`
    : `${slug.replace(/-/g, " ").toUpperCase()} Private Transfer | TransferBali`;

  const pageDesc = route
    ? `${route.description.substring(0, 150)}... Fixed rate ${route.price}. Air-conditioned car, English driver, direct pickup.`
    : `Book reliable private taxi transfer for ${slug.replace("-to-", " to ")} with TransferBali.`;

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

// 2. MAIN COMPONENT (Render Halaman SEO Lengkap)
export default async function DynamicRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fallback data jika slug belum ada di database
  const route = routesData[slug] || {
    title: `Private Transfer ${slug.replace("-to-", " to ").toUpperCase()}`,
    from: slug.split("-to-")[0]?.toUpperCase() || "Harbour Port",
    fromPortName: "Bali Harbor Port",
    to: slug.split("-to-")[1]?.toUpperCase() || "Destination",
    price: "Contact Admin for Best Price",
    priceUSD: "",
    duration: "2 - 3 Hours",
    distance: "Direct Route",
    description: `Need a reliable private driver from ${slug.split("-to-")[0]} to ${slug.split("-to-")[1]}? TransferBali provides air-conditioned private vehicles with professional drivers at competitive transparent rates.`,
    routeHighlights: [
      "100% Private vehicle - No sharing with strangers",
      "Air-conditioned MPV (Toyota Avanza / Suzuki APV)",
      "Direct door-to-door hotel pickup and drop-off",
      "All-inclusive rate: Petrol, parking fees & driver included",
    ],
    pickupGuide:
      "Your driver will be waiting at the designated arrival area with a name sign.",
    faqs: [
      {
        question: "Is booking in advance required?",
        answer:
          "Yes, we highly recommend booking at least 1 day in advance so our driver can be waiting at the port before your boat docks.",
      },
    ],
  };

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

        {/* FAQ Section (Crucial for Google SEO Rich Snippets) */}
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

        {/* Internal Link Footer for SEO Authority Flow */}
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