import React from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section id="prices" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-4 py-1 text-sm font-semibold">
            Popular Airport Routes
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Choose Your Destination
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Fixed prices, professional English-speaking drivers, and private
            airport transfers throughout Bali.
          </p>
        </div>

        {/* Mobile: 2 Columns */}
        {/* Desktop: 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={destination.id}
              href={`/airport-transfer-${destination.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(max-width:768px) 50vw,25vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Most Popular */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Area */}
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xl font-bold drop-shadow">
                    {destination.name}
                  </p>

                  <p className="text-xs text-white/90">
                    {destination.area}
                  </p>
                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    🕒
                    <span>{destination.travelTime}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    👥
                    <span>1-4 Pax</span>
                  </div>

                </div>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-5">
                  {destination.description}
                </p>
                <div className="flex items-end justify-between border-t border-slate-100 pt-4">

                  <div>

                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      From
                    </p>

                    <div className="mt-1">

                      <span className="text-2xl font-extrabold text-blue-600">
                        IDR {destination.price?.toLocaleString("id-ID")}
                      </span>

                    </div>

                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-blue-700">

                    View Details

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                  </div>

                </div>

              </div>

            </Link>

          ))}
        </div>

        {/* Bottom Features */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex items-start gap-4">

              <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                💰
              </div>

              <div>

                <h3 className="text-white font-bold text-lg">
                  Fixed Price
                </h3>

                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  No hidden fees, no surge pricing, and no surprises.
                  The price you see is exactly what you pay.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="h-14 w-14 rounded-2xl bg-sky-500/20 flex items-center justify-center text-2xl">
                🚗
              </div>

              <div>

                <h3 className="text-white font-bold text-lg">
                  Professional Drivers
                </h3>

                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Friendly English-speaking local drivers with clean,
                  air-conditioned private vehicles.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="h-14 w-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-2xl">
                ⭐
              </div>

              <div>

                <h3 className="text-white font-bold text-lg">
                  Trusted Service
                </h3>

                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Hundreds of happy travelers choose Transfer Bali
                  every year for reliable airport transfers.
                </p>

              </div>

            </div>

          </div>

        </div>
        {/* View All Destinations */}

        <div className="mt-12 text-center">

          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            View All Destinations

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

          </Link>

          <p className="mt-4 text-sm text-slate-500">
            Private Airport Transfers • Hotel Transfers • Day Tours • Available 24/7
          </p>

        </div>

      </div>
    </section>
  );
}