import React from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section id="prices" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Airport Transfer Destinations
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
            Choose your destination in Bali and enjoy fixed pricing,
            professional English-speaking drivers, and comfortable private
            transfers from Bali Airport.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {destinations.map((destination) => (

            <Link
              key={destination.id}
              href={`/airport-transfer-${destination.id}`}
              className="group"
            >

              <article className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">

                {/* Image */}
                <div className="relative h-44 overflow-hidden">

                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">

                    <h3 className="text-white text-2xl font-bold leading-tight">
                      {destination.name}
                    </h3>

                    <p className="text-white/90 text-sm mt-1">
                      {destination.area}
                    </p>

                  </div>

                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">

                  {/* Info */}
                  <div className="flex justify-between text-slate-600 text-sm mb-5">

                    <div className="flex items-center gap-2">
                      <span>🕒</span>
                      <span>{destination.travelTime}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>👥</span>
                      <span>1–4 Pax</span>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-6 line-clamp-3 mb-6">
                    {destination.description}
                  </p>

                  <div className="mt-auto border-t border-slate-200 pt-5">
                    <div className="flex items-end justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          Starting from
                        </p>

                        <p className="text-2xl font-bold text-blue-600">
                          IDR {destination.price.toLocaleString("id-ID")}
                        </p>

                        <p className="mt-2 text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
                          View details →
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}