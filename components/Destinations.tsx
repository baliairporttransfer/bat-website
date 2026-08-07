import React from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

const destinationRoutes: Record<string, string> = {
  munduk: "/airport-transfer-munduk",
  lovina: "/airport-transfer-lovina",
  sidemen: "/airport-transfer-sidemen",
  amed: "/airport-transfer-amed-lempuyang",
  ubud: "/airport-transfer-ubud",
  uluwatu: "/airport-transfer-uluwatu",
  seminyak: "/airport-transfer-kuta-seminyak-kerobokan",
  "nusa-dua": "/airport-transfer-nusa-dua-jimbaran",
  sanur: "/airport-transfer-sanur-denpasar",
  canggu: "/airport-transfer-canggu-pererenan-mengwi",
  "tanah-lot": "/airport-transfer-tanah-lot-tabanan",
  tegallalang: "/airport-transfer-payangan-tegallalang-pejeng",
  padangbai: "/airport-transfer-padangbai",
  bedugul: "/airport-transfer-bedugul",
  pemuteran: "/airport-transfer-sumberkima-pemuteran-menjangan",
};

export default function Destinations() {
  return (
    <section
      className="py-12 sm:py-16 bg-gray-50"
      id="prices"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Popular Destinations & Transfers
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comfortable private airport transfers to popular destinations
            across Bali.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">

          {destinations.map((destination) => {
            const route = destinationRoutes[destination.id];

            return (
              <Link
                key={destination.id}
                href={route || "#"}
                className="group block"
              >
                <article
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    border border-gray-200
                    shadow-sm
                    hover:shadow-lg
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                    h-full
                    flex
                    flex-col
                  "
                >

                  {/* Image */}
                  <div className="relative h-36 sm:h-48 w-full overflow-hidden bg-gray-200">

                    <Image
                      src={destination.image}
                      alt={`Airport transfer to ${destination.name}, Bali`}
                      fill
                      sizes="
                        (max-width: 640px) 50vw,
                        (max-width: 1024px) 33vw,
                        25vw
                      "
                      className="
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-500
                      "
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Destination name */}
                    <div className="absolute bottom-3 left-3 right-2">

                      <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                        {destination.name}
                      </h3>

                      <p className="mt-1 text-xs sm:text-base text-white/90">
                        {destination.area}
                      </p>

                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-5 flex flex-col flex-grow">

                    {/* Travel information */}
                    <div className="flex items-center justify-between gap-2 text-gray-600">

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-xl">
                          🕐
                        </span>

                        <span className="text-xs sm:text-base leading-tight">
                          {destination.travelTime}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-xl">
                          👥
                        </span>

                        <span className="text-xs sm:text-base">
                          1–4 Pax
                        </span>
                      </div>

                    </div>

                    {/* Description */}
                    <p className="mt-3 sm:mt-5 text-xs sm:text-base text-gray-600 leading-relaxed line-clamp-2">
                      {getDestinationDescription(destination.id)}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mt-4 sm:mt-6 pt-3 sm:pt-4" />

                    {/* Price */}
                    <div className="mt-auto">

                      <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
                        Starting from
                      </span>

                      <div className="mt-0.5 sm:mt-1">
                        <span className="text-[10px] sm:text-sm font-medium text-blue-600">
                          IDR
                        </span>

                        <div className="text-xl sm:text-3xl font-extrabold text-blue-600 leading-tight">
                          {destination.price.toLocaleString("id-ID")}
                        </div>
                      </div>

                      {/* View details */}
                      <div className="
                        mt-2 sm:mt-3
                        text-xs sm:text-sm
                        font-medium
                        text-gray-500
                        group-hover:text-blue-600
                        transition-colors
                      ">
                        View details
                        <span className="ml-1">→</span>
                      </div>

                    </div>

                  </div>
                </article>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}

function getDestinationDescription(id: string): string {
  const descriptions: Record<string, string> = {
    munduk:
      "Mountain village with waterfalls, rainforest and peaceful scenery.",

    lovina:
      "Famous for dolphin watching, calm beaches and relaxing coastal views.",

    sidemen:
      "Peaceful rice terraces, traditional villages and beautiful mountain views.",

    amed:
      "Best destination for diving, snorkeling and exploring East Bali.",

    ubud:
      "Cultural heart of Bali with temples, rice terraces, art and jungle scenery.",

    uluwatu:
      "Beautiful southern Bali destination famous for cliffs, beaches and sunset views.",

    seminyak:
      "Popular beach area with restaurants, resorts, shopping and nightlife.",

    "nusa-dua":
      "Luxury resort area with beautiful beaches and easy access to southern Bali.",

    sanur:
      "Relaxed coastal area with beaches, resorts and convenient access to Denpasar.",

    canggu:
      "Popular Bali destination with beaches, cafes, villas and a vibrant atmosphere.",

    "tanah-lot":
      "Famous coastal destination featuring the iconic Tanah Lot temple and ocean views.",

    tegallalang:
      "Scenic central Bali area known for rice terraces, villages and countryside.",

    padangbai:
      "East Bali coastal destination and gateway to nearby islands and beaches.",

    bedugul:
      "Cool mountain region with lakes, temples, gardens and scenic countryside.",

    pemuteran:
      "Peaceful northwest Bali destination near Menjangan, beaches and coral reefs.",
  };

  return (
    descriptions[id] ||
    "Comfortable private airport transfer to this destination in Bali."
  );
}