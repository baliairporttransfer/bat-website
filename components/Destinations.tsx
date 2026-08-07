import React from "react";
import Image from "next/image";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="py-10 sm:py-16 bg-gray-50" id="prices">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-7 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Popular Destinations & Transfers
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-gray-600">
            Explore Bali's most popular destinations with our reliable
            private transfer service.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden
                         border border-gray-100
                         hover:shadow-lg transition-all duration-300
                         flex flex-col group"
            >

              {/* Image */}
              <div className="relative h-32 sm:h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={destination.image}
                  alt={`${destination.name} Bali airport transfer`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Area */}
                <span
                  className="absolute top-2 right-2 z-10
                             bg-black/55 backdrop-blur-sm
                             text-white text-[9px] sm:text-xs
                             font-medium px-2 py-1 rounded-full"
                >
                  {destination.area}
                </span>

                {/* Destination name */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg leading-tight">
                    {destination.name}
                  </h3>

                  <p className="text-xs sm:text-base text-white/90 mt-1">
                    {destination.area}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5 flex flex-col flex-grow">

                {/* Time + Pax */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">

                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-xl">🕐</span>
                    <span className="text-xs sm:text-base text-gray-600 leading-tight">
                      {destination.travelTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-xl">👥</span>
                    <span className="text-xs sm:text-base text-gray-600">
                      1–4 Pax
                    </span>
                  </div>

                </div>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm text-gray-600
                             leading-relaxed
                             line-clamp-2
                             mb-3 sm:mb-5"
                >
                  {destination.description ||
                    `Private airport transfer to ${destination.name}, Bali.`}
                </p>

                {/* Price */}
                <div className="border-t border-gray-100 pt-3 sm:pt-4 mt-auto">

                  <span className="text-[9px] sm:text-xs uppercase tracking-wide text-gray-400 block">
                    Starting from
                  </span>

                  <div className="text-xl sm:text-3xl font-extrabold text-blue-600 mt-0.5">
                    IDR {destination.price.toLocaleString("id-ID")}
                  </div>

                  {/* View Details */}
                  <a
                    href={`/destinations/${destination.id}`}
                    className="inline-block mt-2 text-xs sm:text-sm
                               font-medium text-gray-500
                               hover:text-blue-600
                               transition-colors"
                  >
                    View details →
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}