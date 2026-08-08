import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bali Airport Transfer to Seminyak | Private Taxi from DPS",
  description:
    "Book a private Bali Airport Transfer to Seminyak from Ngurah Rai International Airport. Fixed price IDR 225,000, professional drivers, meet & greet and 24/7 support.",
  alternates: {
    canonical: "https://transferbali.com/airport-transfer-seminyak",
  },
  openGraph: {
    title: "Bali Airport Transfer to Seminyak | Transfer Bali",
    description:
      "Private airport transfer from Bali Airport to Seminyak with fixed pricing, professional drivers, meet & greet and 24/7 support.",
    url: "https://transferbali.com/airport-transfer-seminyak",
    siteName: "Transfer Bali",
    images: [
      {
        url: "https://transferbali.com/images/fleet/destinations2/seminyak-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Private Bali Airport Transfer to Seminyak",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Airport Transfer to Seminyak | Transfer Bali",
    description:
      "Private airport transfer from Bali Airport to Seminyak with fixed pricing and professional drivers.",
    images: [
      "https://transferbali.com/images/fleet/destinations2/seminyak-hero.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://transferbali.com/#localbusiness",
      name: "Transfer Bali",
      url: "https://transferbali.com",
      image:
        "https://transferbali.com/images/fleet/destinations2/seminyak-hero.jpg",
      telephone: "+6285738217365",
      priceRange: "IDR 225,000+",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tuban",
        addressRegion: "Bali",
        postalCode: "80362",
        addressCountry: "ID",
      },
    },
    {
      "@type": "Service",
      name: "Bali Airport Transfer to Seminyak",
      serviceType: "Airport Transfer",
      provider: {
        "@id": "https://transferbali.com/#localbusiness",
      },
      areaServed: {
        "@type": "City",
        name: "Seminyak",
      },
      description:
        "Private airport transfer from Ngurah Rai International Airport to Seminyak with professional drivers, meet and greet and fixed pricing.",
      offers: {
        "@type": "Offer",
        price: "225000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: "https://transferbali.com/airport-transfer-seminyak",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://transferbali.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Destinations",
          item: "https://transferbali.com/destinations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Airport Transfer to Seminyak",
          item: "https://transferbali.com/airport-transfer-seminyak",
        },
      ],
    },
  ],
};

const whatsappUrl =
  "https://wa.me/6285738217365?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Airport%20Transfer%20to%20Seminyak.";

export default function AirportTransferSeminyakPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <li>
            <Link
              href="/"
              className="hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li>
            <Link
              href="/destinations"
              className="hover:text-emerald-600 transition-colors"
            >
              Destinations
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li className="font-medium text-slate-800">
            Seminyak
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Hero Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-700 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Private Bali Airport Transfer
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Bali Airport Transfer to{" "}
                <span className="text-emerald-600">
                  Seminyak
                </span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-slate-600 max-w-xl">
                Enjoy a comfortable private transfer from
                Ngurah Rai International Airport (DPS) directly
                to your hotel or villa in Seminyak.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-500 max-w-xl">
                Fixed price, professional driver, airport meet
                and greet, and flight monitoring included.
              </p>

              {/* Price */}
              <div className="mt-7 flex items-center gap-5">
                <div>
                  <p className="text-sm text-slate-500">
                    Fixed price from
                  </p>

                  <p className="text-3xl font-extrabold text-slate-900">
                    IDR 225,000
                  </p>

                  <p className="text-sm text-slate-500">
                    per private vehicle
                  </p>
                </div>

                <div className="hidden sm:block h-12 w-px bg-slate-200" />

                <div className="hidden sm:block">
                  <p className="text-sm text-slate-500">
                    Travel time
                  </p>

                  <p className="font-bold text-slate-900">
                    25–40 minutes
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all"
                >
                  Book via WhatsApp
                </Link>

                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 hover:bg-slate-50 transition-all"
                >
                  View Price
                </Link>
              </div>

              {/* Trust points */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <p className="font-bold text-slate-900">
                    ✓ Fixed Price
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    No surprise fees
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    ✓ Meet & Greet
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Airport arrival hall
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    ✓ 24/7 Support
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    WhatsApp assistance
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl bg-slate-100">
                <Image
                  src="/images/fleet/destinations2/seminyak-hero.jpg"
                  alt="Private Bali Airport Transfer from Ngurah Rai Airport to Seminyak"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Info */}
              <div className="absolute left-4 right-4 -bottom-5 sm:left-6 sm:right-auto bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Airport → Seminyak
                    </p>

                    <p className="text-sm text-slate-500">
                      Private • Comfortable • Reliable
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">
                Route
              </p>

              <p className="mt-1 font-bold text-slate-900">
                Bali Airport → Seminyak
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">
                Distance
              </p>

              <p className="mt-1 font-bold text-slate-900">
                Approximately 10 km
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">
                Travel Time
              </p>

              <p className="mt-1 font-bold text-slate-900">
                25–40 minutes
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">
                Capacity
              </p>

              <p className="mt-1 font-bold text-slate-900">
                Up to 4 passengers
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="bg-slate-50 py-16 lg:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Simple & Transparent
            </p>

            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Airport Transfer Seminyak Price
            </h2>

            <p className="mt-4 text-slate-600">
              One fixed price for a comfortable private
              vehicle from Bali Airport to your accommodation
              in Seminyak.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl">

            <div className="grid md:grid-cols-2">

              {/* Details */}
              <div className="p-7 sm:p-9">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-emerald-600">
                      PRIVATE TRANSFER
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                      Bali Airport to Seminyak
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  A private air-conditioned vehicle with a
                  professional driver, suitable for couples,
                  families and small groups.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-5">

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Passengers
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      Up to 4
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Luggage
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      Up to 4 suitcases
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Duration
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      25–40 min
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Service
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      24/7
                    </p>
                  </div>

                </div>

                <ul className="mt-7 space-y-3 text-sm text-slate-600">

                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    Airport meet & greet
                  </li>

                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    Flight monitoring
                  </li>

                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    Air-conditioned vehicle
                  </li>

                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    Professional driver
                  </li>

                </ul>
              </div>

              {/* Price Box */}
              <div className="bg-slate-900 p-7 sm:p-9 flex flex-col justify-center">

                <p className="text-sm font-semibold text-emerald-400">
                  FIXED RATE
                </p>

                <div className="mt-2">
                  <span className="text-lg text-slate-400">
                    IDR
                  </span>

                  <span className="ml-2 text-5xl font-extrabold text-white">
                    225k
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                  Per private vehicle
                </p>

                <div className="mt-7 space-y-3">

                  <Link
                    href={whatsappUrl}
                    className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3.5 font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    Book This Transfer
                  </Link>

                  <p className="text-center text-xs text-slate-500">
                    No hidden airport transfer fees
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* =========================
          WHY CHOOSE US
      ========================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Transfer Bali
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              A Better Way to Travel from Bali Airport to Seminyak
            </h2>

            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Avoid airport taxi queues and complicated price negotiations.
              Enjoy a private, comfortable and reliable transfer directly to
              your hotel or villa in Seminyak.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Fixed Price",
                description:
                  "Know your transfer price before you arrive. No hidden fees or unexpected airport charges.",
                icon: "✓",
              },
              {
                title: "Flight Monitoring",
                description:
                  "We monitor your flight information so your driver can adjust to delays or changes in your arrival time.",
                icon: "✈",
              },
              {
                title: "Meet & Greet",
                description:
                  "Your professional driver will meet you at the airport arrival area and assist with your luggage.",
                icon: "👋",
              },
              {
                title: "Private Vehicle",
                description:
                  "Travel privately without sharing your vehicle with other passengers.",
                icon: "🚗",
              },
              {
                title: "English Speaking Driver",
                description:
                  "Communicate easily with a friendly local driver who understands international travelers.",
                icon: "💬",
              },
              {
                title: "24/7 Booking Support",
                description:
                  "Need help with your booking? Contact us anytime through WhatsApp.",
                icon: "24",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================
          HOW IT WORKS
      ========================== */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Simple Booking Process
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              How Your Bali Airport Transfer Works
            </h2>

            <p className="mt-4 text-slate-400 text-lg">
              Booking your private transfer from Ngurah Rai Airport to
              Seminyak is simple and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              {
                number: "01",
                title: "Book Your Transfer",
                description:
                  "Send us your arrival details through WhatsApp and receive your booking confirmation.",
              },
              {
                number: "02",
                title: "We Track Your Flight",
                description:
                  "Send us your flight number and we monitor your arrival schedule.",
              },
              {
                number: "03",
                title: "Meet Your Driver",
                description:
                  "Your driver will wait for you at the airport arrival area with your name sign.",
              },
              {
                number: "04",
                title: "Enjoy Your Journey",
                description:
                  "Relax in your private air-conditioned vehicle and travel directly to your hotel.",
              },
            ].map((step) => (
              <div key={step.number} className="relative text-center">

                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-emerald-900/30">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================
          SEMINYAK GUIDE
      ========================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <article className="prose prose-lg prose-slate max-w-none">

            <h2>
              Bali Airport Transfer to Seminyak – Complete Travel Guide
            </h2>

            <p>
              Seminyak is one of Bali's most popular destinations for
              international travelers. Located on the southwest coast of the
              island, the area is famous for its beautiful beaches, luxury
              villas, restaurants, beach clubs and vibrant nightlife.
            </p>

            <p>
              If you are arriving at Ngurah Rai International Airport (DPS),
              booking a private airport transfer to Seminyak is one of the
              easiest ways to begin your Bali holiday. Instead of waiting in
              a taxi queue, your private driver will meet you at the airport
              and take you directly to your hotel or villa.
            </p>

            <h3>
              How long is the journey from Bali Airport to Seminyak?
            </h3>

            <p>
              The distance between Bali Airport and Seminyak is approximately
              10 kilometers. Under normal traffic conditions, the journey
              usually takes around 25 to 40 minutes.
            </p>

            <p>
              Travel time can be longer during busy periods, especially in
              the afternoon and evening when traffic around Kuta, Legian and
              Seminyak becomes heavier.
            </p>

            <h3>
              Why book a private airport transfer?
            </h3>

            <p>
              A private transfer gives you a comfortable door-to-door journey
              without having to negotiate prices with airport taxi drivers.
              You also have the convenience of knowing your driver is waiting
              for you when you arrive.
            </p>

            <ul>
              <li>Private air-conditioned vehicle</li>
              <li>Professional local driver</li>
              <li>Meet and greet at Bali Airport</li>
              <li>Flight monitoring</li>
              <li>Fixed transparent pricing</li>
              <li>Direct hotel or villa drop-off</li>
            </ul>

            <h3>
              Popular places to visit in Seminyak
            </h3>

            <p>
              Seminyak offers a wide variety of experiences for visitors.
              Some of the most popular places include Petitenget Beach,
              Double Six Beach, Seminyak Beach, Jalan Kayu Aya and the many
              restaurants and beach clubs around the area.
            </p>

          </article>

        </div>
      </section>


      {/* =========================
          FAQ
      ========================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Bali Airport to Seminyak Transfer FAQ
            </h2>
          </div>

          <div className="space-y-4">

            {[
              {
                question: "How much is a private airport transfer to Seminyak?",
                answer:
                  "Our fixed price for a private airport transfer from Bali Airport to Seminyak starts from IDR 225,000 per vehicle.",
              },
              {
                question: "How long does Bali Airport to Seminyak take?",
                answer:
                  "The journey normally takes around 25–40 minutes depending on traffic and your exact hotel location.",
              },
              {
                question: "Will the driver wait if my flight is delayed?",
                answer:
                  "Yes. We monitor your flight information and adjust the pickup time according to your actual arrival.",
              },
              {
                question: "Where will I meet my driver?",
                answer:
                  "Your driver will meet you in the airport arrival area with a name sign and assist you with your luggage.",
              },
              {
                question: "Is the vehicle private?",
                answer:
                  "Yes. Your transfer is private, meaning you will not share the vehicle with other passengers.",
              },
              {
                question: "How can I book the transfer?",
                answer:
                  "You can contact us directly through WhatsApp. Simply provide your arrival date, flight number, passenger information and hotel address.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between gap-4">
                  <span>{faq.question}</span>

                  <span className="text-emerald-600 text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>


      {/* =========================
          RELATED DESTINATIONS
      ========================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Explore Bali
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Other Bali Airport Transfer Destinations
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Explore our other private airport transfer routes from Ngurah
              Rai International Airport.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

            {[
              {
                name: "Canggu",
                price: "IDR 325k",
                time: "45–75 min",
                href: "/airport-transfer-canggu",
                image: "/images/fleet/destinations2/canggu.jpeg",
              },
              {
                name: "Ubud",
                price: "IDR 350k",
                time: "60–90 min",
                href: "/airport-transfer-ubud",
                image: "/images/fleet/destinations2/ubud.jpeg",
              },
              {
                name: "Uluwatu",
                price: "IDR 350k",
                time: "45–70 min",
                href: "/airport-transfer-uluwatu",
                image: "/images/fleet/destinations2/uluwatu.jpeg",
              },
              {
                name: "Nusa Dua",
                price: "IDR 240k",
                time: "25–40 min",
                href: "/airport-transfer-nusa-dua",
                image: "/images/fleet/destinations2/nusa-dua.jpeg",
              },
            ].map((destination) => (

              <Link
                key={destination.name}
                href={destination.href}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={destination.image}
                    alt={`Bali Airport Transfer to ${destination.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  <div className="absolute top-3 right-3 bg-slate-950/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {destination.price}
                  </div>

                </div>

                <div className="p-4">

                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {destination.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    Airport transfer · {destination.time}
                  </p>

                  <span className="block mt-3 text-xs font-medium text-emerald-600">
                    View transfer details →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>


      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="py-20 bg-emerald-900 text-white">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Travel from Bali Airport to Seminyak?
          </h2>

          <p className="mt-5 text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Book your private airport transfer today and enjoy a comfortable,
            reliable journey directly to your hotel or villa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href={whatsappUrl}
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white text-emerald-900 font-bold hover:bg-emerald-50 transition-colors"
            >
              Book via WhatsApp
            </Link>

            <Link
              href="/"
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl border border-emerald-400 text-white font-semibold hover:bg-emerald-800 transition-colors"
            >
              Back to Transfer Bali
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-slate-950 text-slate-400 py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-bold text-white">
                Transfer Bali
              </h3>

              <p className="mt-3 text-sm leading-relaxed max-w-sm">
                Private Bali airport transfer service from Ngurah Rai
                International Airport to destinations throughout Bali.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">
                Popular Transfers
              </h3>

              <div className="space-y-2 text-sm">

                <Link
                  href="/airport-transfer-ubud"
                  className="block hover:text-white transition-colors"
                >
                  Bali Airport Transfer to Ubud
                </Link>

                <Link
                  href="/airport-transfer-canggu"
                  className="block hover:text-white transition-colors"
                >
                  Bali Airport Transfer to Canggu
                </Link>

                <Link
                  href="/airport-transfer-uluwatu"
                  className="block hover:text-white transition-colors"
                >
                  Bali Airport Transfer to Uluwatu
                </Link>

                <Link
                  href="/airport-transfer-munduk"
                  className="block hover:text-white transition-colors"
                >
                  Bali Airport Transfer to Munduk
                </Link>

                <Link
                  href="/airport-transfer-lovina"
                  className="block hover:text-white transition-colors"
                >
                  Bali Airport Transfer to Lovina
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">
                Contact
              </h3>

              <p className="text-sm">
                Ngurah Rai International Airport
                <br />
                Bali, Indonesia
              </p>

              <a
                href={whatsappUrl}
                className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                WhatsApp Booking →
              </a>
            </div>

          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm">
            © {new Date().getFullYear()} Transfer Bali. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}