import React from "react";
import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Destinations & Transfers
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Pilih destinasi populer atau jelajahi semua rute perjalanan terbaik di Bali bersama kami.
          </p>
        </div>

        {/* Grid Container (Galeri Kotak) */}
        {/* Menggunakan grid: 1 kolom di HP, 2 kolom di tablet, 3-4 kolom di layar besar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100"
            >
              {/* Gambar Destinasi */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {destination.area}
                </span>
              </div>

              {/* Konten Teks & Informasi */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Estimasi Waktu: <span className="font-medium text-gray-700">{destination.travelTime}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Mulai dari</span>
                    <span className="text-base font-bold text-blue-600">
                      Rp {destination.price.toLocaleString("id-ID")}
                    </span>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3.5 py-2 rounded-lg transition-colors">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
