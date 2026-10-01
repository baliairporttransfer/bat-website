import React from "react";
import Script from "next/script";

export default function Gallery() {
  return (
      <section className="py-16 bg-white" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                            {/* Teks Judul Bagian Galeri */}
                                    <div className="text-center mb-12">
                                              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                          Our Gallery
                                                                    </h2>
                                                                              <p className="mt-3 text-lg text-gray-600">
                                                                                          Momen perjalanan tak terlupakan bersama pelanggan kami.
                                                                                                    </p>
                                                                                                            </div>

                                                                                                                    {/* Script pemuat Elfsight (Dioptimalkan oleh Next.js) */}
                                                                                                                            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

                                                                                                                                    {/* Kontainer Widget Galeri Elfsight */}
                                                                                                                                            <div 
                                                                                                                                                      className="elfsight-app-56128e8b-9a84-4280-925e-e8ebefa40744" 
                                                                                                                                                                data-elfsight-app-lazy="true"
                                                                                                                                                                        ></div>

                                                                                                                                                                              </div>
                                                                                                                                                                                  </section>
                                                                                                                                                                                    );
                                                                                                                                                                                    }
                                                                                                                                                                                    