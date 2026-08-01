import Script from "next/script";
import { Container } from "@/components/Container";

// Link Google Review resmi Taxi Bali Munduk
const GOOGLE_REVIEW_LINK = "https://g.page/r/CakT0QxjayQbEBE/review";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#08142B] py-20">
      {/* Memuat script Elfsight secara otomatis & optimal */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <Container>
        {/* Header Judul */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase">
            Guest Reviews
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Thoughtful service, clear communication, and a smooth journey in Bali. 
            Trusted by over <span className="font-bold text-white">183+ customers</span> on Google.
          </p>
        </div>

        {/* 🌟 WIDGET ELFSIGHT GOOGLE REVIEWS 🌟 */}
        <div className="my-8 min-h-[300px]">
          <div
            className="elfsight-app-d0389f3b-f4b6-4836-bd24-a35cc3041df6"
            data-elfsight-app-lazy
          />
        </div>

        {/* Tombol Tulis Review & Lihat Ulasan Langsung di Google Maps */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-[#08142B] transition hover:scale-105"
          >
            ⭐ Leave a Review on Google
          </a>
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            See All 183+ Reviews on Google Maps ↗
          </a>
        </div>
      </Container>
    </section>
  );
}
