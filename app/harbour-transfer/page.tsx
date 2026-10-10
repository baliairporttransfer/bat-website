"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

// Admin WhatsApp Number
const WHATSAPP_NUMBER = "6285738217365";

interface RouteOption {
  slug: string;
  destination: string;
  region: string;
  duration: string;
  price: string;
  badge?: string;
}

interface Harbour {
  id: string;
  name: string;
  location: string;
  description: string;
  icon: string;
  routes: RouteOption[];
}

const harbourData: Harbour[] = [
  {
    id: "padangbai",
    name: "Padangbai Harbour",
    location: "Karangasem, East Bali",
    description: "Primary fast boat port for Gili Islands, Lombok, and Nusa Penida transfers.",
    icon: "🚢",
    routes: [
      { slug: "padangbai-to-airport", destination: "Ngurah Rai Airport (DPS)", region: "South Bali", duration: "1.5 - 2 Hours", price: "IDR 500,000", badge: "Popular" },
      { slug: "padangbai-to-kuta", destination: "Kuta / Legian", region: "South Bali", duration: "1.5 - 2 Hours", price: "IDR 400,000" },
      { slug: "padangbai-to-sanur", destination: "Sanur", region: "South East Bali", duration: "1 - 1.5 Hours", price: "IDR 350,000" },
      { slug: "padangbai-to-canggu", destination: "Canggu", region: "South West Bali", duration: "2 - 2.5 Hours", price: "IDR 450,000" },
      { slug: "padangbai-to-ubud", destination: "Ubud Centre", region: "Central Bali", duration: "1 - 1.5 Hours", price: "IDR 350,000", badge: "Top Choice" },
      { slug: "padangbai-to-uluwatu", destination: "Uluwatu / Ungasan", region: "South Bali", duration: "2 - 2.5 Hours", price: "IDR 500,000" },
      { slug: "padangbai-to-jimbaran", destination: "Jimbaran", region: "South Bali", duration: "1.5 - 2 Hours", price: "IDR 450,000" },
      { slug: "padangbai-to-nusa-dua", destination: "Nusa Dua", region: "South Bali", duration: "1.5 - 2 Hours", price: "IDR 450,000" },
      { slug: "padangbai-to-amed", destination: "Amed", region: "East Bali", duration: "1 - 1.5 Hours", price: "IDR 450,000" },
      { slug: "padangbai-to-sidemen", destination: "Sidemen", region: "East Bali", duration: "45 Mins - 1 Hour", price: "IDR 350,000" },
      { slug: "padangbai-to-munduk", destination: "Munduk", region: "North Bali", duration: "2.5 - 3 Hours", price: "IDR 650,000", badge: "Scenic Route" },
      { slug: "padangbai-to-lovina", destination: "Lovina", region: "North Bali", duration: "2.5 - 3 Hours", price: "IDR 700,000" },
      { slug: "padangbai-to-tegallalang", destination: "Tegallalang", region: "Central Bali", duration: "1.5 Hours", price: "IDR 400,000" },
      { slug: "padangbai-to-pemuteran", destination: "Pemuteran", region: "North West Bali", duration: "3.5 - 4 Hours", price: "IDR 850,000" },
      { slug: "padangbai-to-gilimanuk", destination: "Gilimanuk Harbour", region: "West Bali", duration: "4 - 4.5 Hours", price: "IDR 850,000" },
      { slug: "padangbai-to-padangbai", destination: "Padangbai Local Area", region: "East Bali", duration: "10 - 15 Mins", price: "IDR 150,000" },
    ],
  },
  {
    id: "sanur",
    name: "Sanur Harbour",
    location: "Denpasar, South East Bali",
    description: "Main harbor connecting mainland Bali to Nusa Penida and Nusa Lembongan.",
    icon: "🛥️",
    routes: [
      { slug: "sanur-to-airport", destination: "Ngurah Rai Airport (DPS)", region: "South Bali", duration: "30 - 45 Mins", price: "IDR 250,000", badge: "Most Popular" },
      { slug: "sanur-to-kuta", destination: "Kuta / Legian", region: "South Bali", duration: "30 - 45 Mins", price: "IDR 250,000" },
      { slug: "sanur-to-canggu", destination: "Canggu", region: "South West Bali", duration: "1 - 1.5 Hours", price: "IDR 350,000" },
      { slug: "sanur-to-ubud", destination: "Ubud Centre", region: "Central Bali", duration: "45 Mins - 1 Hour", price: "IDR 350,000", badge: "Best Seller" },
      { slug: "sanur-to-uluwatu", destination: "Uluwatu / Ungasan", region: "South Bali", duration: "1 - 1.5 Hours", price: "IDR 350,000" },
      { slug: "sanur-to-jimbaran", destination: "Jimbaran", region: "South Bali", duration: "45 Mins - 1 Hour", price: "IDR 300,000" },
      { slug: "sanur-to-nusa-dua", destination: "Nusa Dua", region: "South Bali", duration: "45 Mins - 1 Hour", price: "IDR 300,000" },
      { slug: "sanur-to-padangbai", destination: "Padangbai Harbour", region: "East Bali", duration: "1 - 1.5 Hours", price: "IDR 400,000" },
      { slug: "sanur-to-amed", destination: "Amed", region: "East Bali", duration: "2 - 2.5 Hours", price: "IDR 500,000" },
      { slug: "sanur-to-sidemen", destination: "Sidemen", region: "East Bali", duration: "1.5 Hours", price: "IDR 400,000" },
      { slug: "sanur-to-munduk", destination: "Munduk", region: "North Bali", duration: "2 - 2.5 Hours", price: "IDR 650,000" },
      { slug: "sanur-to-lovina", destination: "Lovina", region: "North Bali", duration: "2.5 - 3 Hours", price: "IDR 650,000" },
      { slug: "sanur-to-tegallalang", destination: "Tegallalang", region: "Central Bali", duration: "1.2 Hours", price: "IDR 350,000" },
      { slug: "sanur-to-pemuteran", destination: "Pemuteran", region: "North West Bali", duration: "3.5 - 4 Hours", price: "IDR 800,000" },
      { slug: "sanur-to-gilimanuk", destination: "Gilimanuk Harbour", region: "West Bali", duration: "3.5 - 4 Hours", price: "IDR 750,000" },
      { slug: "sanur-to-sanur", destination: "Sanur Local Area", region: "South East Bali", duration: "10 - 15 Mins", price: "IDR 150,000" },
    ],
  },
  {
    id: "gilimanuk",
    name: "Gilimanuk Harbour",
    location: "Jembrana, West Bali",
    description: "Ferry port connecting Java Island (Ketapang) to Bali.",
    icon: "🚢",
    routes: [
      { slug: "gilimanuk-to-airport", destination: "Ngurah Rai Airport (DPS)", region: "South Bali", duration: "3.5 - 4 Hours", price: "IDR 750,000", badge: "Long Distance" },
      { slug: "gilimanuk-to-kuta", destination: "Kuta / Seminyak", region: "South Bali", duration: "3.5 Hours", price: "IDR 750,000" },
      { slug: "gilimanuk-to-sanur", destination: "Sanur", region: "South East Bali", duration: "3.5 - 4 Hours", price: "IDR 750,000" },
      { slug: "gilimanuk-to-canggu", destination: "Canggu", region: "South West Bali", duration: "3 - 3.5 Hours", price: "IDR 750,000" },
      { slug: "gilimanuk-to-ubud", destination: "Ubud Centre", region: "Central Bali", duration: "3 - 3.5 Hours", price: "IDR 800,000" },
      { slug: "gilimanuk-to-pemuteran", destination: "Pemuteran", region: "North West Bali", duration: "30 - 45 Mins", price: "IDR 300,000", badge: "Nearby" },
      { slug: "gilimanuk-to-lovina", destination: "Lovina", region: "North Bali", duration: "1.5 - 2 Hours", price: "IDR 500,000" },
      { slug: "gilimanuk-to-munduk", destination: "Munduk", region: "North Bali", duration: "2 - 2.5 Hours", price: "IDR 600,000" },
      { slug: "gilimanuk-to-uluwatu", destination: "Uluwatu / Ungasan", region: "South Bali", duration: "4 Hours", price: "IDR 800,000" },
      { slug: "gilimanuk-to-jimbaran", destination: "Jimbaran", region: "South Bali", duration: "3.5 Hours", price: "IDR 750,000" },
      { slug: "gilimanuk-to-padangbai", destination: "Padangbai Harbour", region: "East Bali", duration: "4 - 4.5 Hours", price: "IDR 850,000" },
      { slug: "gilimanuk-to-amed", destination: "Amed", region: "East Bali", duration: "3.5 - 4 Hours", price: "IDR 850,000" },
      { slug: "gilimanuk-to-gilimanuk", destination: "Gilimanuk Local Area", region: "West Bali", duration: "10 - 15 Mins", price: "IDR 150,000" },
    ],
  },
];

export default function HarbourTransferPage() {
  const [selectedHarbourId, setSelectedHarbourId] = useState<string>("padangbai");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const currentHarbour = useMemo(() => {
    return harbourData.find((h) => h.id === selectedHarbourId) || harbourData[0];
  }, [selectedHarbourId]);

  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) return currentHarbour.routes;
    return currentHarbour.routes.filter(
      (r) =>
        r.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.region.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [currentHarbour, searchQuery]);

  const handleCustomRequestWA = () => {
    const text = `Hello TransferBali, I am looking for a private transfer from *${currentHarbour.name}* to a custom location. Could you please give me a price quote?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Official Bali Harbour Shuttle & Private Drivers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bali Harbour Private Transfers
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Select your port of arrival and find direct door-to-door private drivers to all popular destinations across Bali island.
          </p>
        </div>
      </div>

      {/* Harbour Selection Tabs */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-800/80 p-2 rounded-2xl border border-slate-700/60 backdrop-blur-md shadow-xl">
          {harbourData.map((harbour) => {
            const isActive = harbour.id === selectedHarbourId;
            return (
              <button
                key={harbour.id}
                onClick={() => {
                  setSelectedHarbourId(harbour.id);
                  setSearchQuery("");
                }}
                className={`py-4 px-5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <span className="text-lg">{harbour.icon} {harbour.name}</span>
                <span className={`text-xs ${isActive ? "text-blue-100" : "text-slate-500"}`}>
                  {harbour.location}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Harbour Info Banner & Search Filter */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{currentHarbour.icon}</span>
              <h2 className="text-2xl font-bold text-white">{currentHarbour.name} Destinations</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-xl">{currentHarbour.description}</p>
          </div>

          {/* Search Filter */}
          <div className="w-full md:w-72">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="max-w-5xl mx-auto px-4">
        {filteredRoutes.length === 0 ? (
          <div className="text-center py-12 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
            <p className="text-slate-400 text-base">No destination found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={handleCustomRequestWA}
              className="mt-3 text-blue-400 font-semibold hover:underline text-sm"
            >
              Request Custom Destination via WhatsApp ➔
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRoutes.map((route) => (
              <div
                key={route.slug}
                className="bg-slate-800/60 border border-slate-700/80 hover:border-blue-500/50 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                {route.badge && (
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-sm">
                    {route.badge}
                  </span>
                )}

                <div>
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    {currentHarbour.name.split(" ")[0]} ➔
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {route.destination}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">{route.region}</p>

                  <div className="bg-slate-900/60 rounded-xl p-3 mb-5 border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>⏱️ Est. Travel Time:</span>
                      <span className="font-semibold text-white">{route.duration}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>🚘 Service:</span>
                      <span className="font-semibold text-white">Private MPV & Driver</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-slate-400">Fixed Rate</span>
                    <span className="text-xl font-extrabold text-emerald-400">{route.price}</span>
                  </div>

                  {/* Dynamic Next.js Link to Route Detail Page */}
                  <Link
                    href={`/harbour-transfer/${route.slug}`}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 active:scale-[0.98]"
                  >
                    <span>View Details & Book ➔</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Custom Location Card */}
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/80 border border-blue-500/30 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1 block">
                  Custom Location
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  Other / Custom Destination
                </h3>
                <p className="text-xs text-slate-400 mb-4">Anywhere across Bali</p>

                <p className="text-xs text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-800 mb-5">
                  Heading to an unlisted villa, waterfall, or village? We provide direct private transfers across the entire island.
                </p>
              </div>

              <button
                onClick={handleCustomRequestWA}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 active:scale-[0.98]"
              >
                <span>💬 Request Custom Quote</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Helpline Footer */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-slate-800 via-slate-800 to-blue-950 border border-slate-700 p-6 rounded-2xl text-center md:flex items-center justify-between gap-4">
          <div className="text-left mb-4 md:mb-0">
            <h4 className="text-base font-bold text-white">Need instant booking assistance?</h4>
            <p className="text-xs text-slate-400">Our customer support admin is ready 24/7 on WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
          >
            <span>📱 Contact Admin (+62 857-3821-7365)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
