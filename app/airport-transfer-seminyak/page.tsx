import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://transferbali.com";
const PAGE_URL = `${SITE_URL}/airport-transfer-seminyak`;
const WHATSAPP_NUMBER = "6285738217365";

const whatsappUrl =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hi, I would like to book a private airport transfer from Bali Airport to Seminyak."
  );

export const metadata: Metadata = {
  title: "Bali Airport Transfer to Seminyak | Private Transfer",
  description:
    "Book a private Bali Airport transfer to Seminyak from Ngurah Rai International Airport. Fixed IDR 225,000, professional driver, flight tracking and easy WhatsApp booking.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Bali Airport Transfer to Seminyak | Transfer Bali",
    description:
      "Private airport transfer from Bali Airport to Seminyak with fixed pricing, professional drivers and easy WhatsApp booking.",
    url: PAGE_URL,
    siteName: "Transfer Bali",
    images: [
      {
        url: `${SITE_URL}/images/seminyak-transfer-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Private Bali Airport transfer to Seminyak",
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
    images: [`${SITE_URL}/images/seminyak-transfer-og.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Bali Airport Transfer to Seminyak",
      serviceType: "Airport Transfer",
      description:
        "Private airport transfer service from Ngurah Rai International Airport to Seminyak, Bali.",
      provider: {
        "@type": "LocalBusiness",
        name: "Transfer Bali",
        url: SITE_URL,
        telephone: "+6285738217365",
      },
      areaServed: {
        "@type": "Place",
        name: "Seminyak, Bali, Indonesia",
      },
      offers: {
        "@type": "Offer",
        price: "225000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Destinations",
          item: `${SITE_URL}/destinations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Airport Transfer to Seminyak",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is a Bali Airport transfer to Seminyak?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Our private airport transfer from Bali Airport to Seminyak is IDR 225,000 per vehicle.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the transfer from Bali Airport to Seminyak take?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The journey usually takes around 25 to 40 minutes, depending on traffic and your exact hotel location.",
          },
        },
        {
          "@type": "Question",
          name: "Where will I meet my driver at Bali Airport?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your driver will meet you in the airport arrival area with a name sign after you complete immigration and collect your luggage.",
          },
        },
        {
          "@type": "Question",
          name: "Do you monitor delayed flights?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We use your flight number to monitor your arrival and adjust the pickup time when your flight is delayed.",
          },
        },
        {
          "@type": "Question",
          name: "How many passengers can travel in one vehicle?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Our standard private vehicle is suitable for up to 4 passengers with standard luggage.",
          },
        },
      ],
    },
  ],
};

export default function AirportTransferSeminyakPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-100 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-emerald-600"
              >
                Home
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li>
              <Link
                href="/destinations"
                className="transition-colors hover:text-emerald-600"
              >
                Destinations
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li
              aria-current="page"
              className="font-medium text-slate-900"
            >
              Seminyak
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Private Bali Airport Transfer
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Bali Airport Transfer to{" "}
                <span className="text-emerald-600">Seminyak</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Start your Bali holiday without the stress. Enjoy a private
                transfer from Ngurah Rai International Airport directly to
                your hotel or villa in Seminyak.
              </p>

              {/* Quick Info */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Price
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    IDR 225k
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Duration
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    25–40 min
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Passengers
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    Up to 4
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Service
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    24/7
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl"
                >
                  Book via WhatsApp
                </Link>

                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50"
                >
                  View Price
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                ✓ Fixed price &nbsp; ✓ Private vehicle &nbsp; ✓ Flight
                monitoring
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/seminyak-hero.jpg"
                  alt="Private airport transfer from Bali Airport to Seminyak"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:left-6 sm:right-auto sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Meet & Greet
                    </p>
                    <p className="text-sm text-slate-500">
                      Your driver will be waiting for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-100 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="px-4 text-center">
            <p className="font-bold text-slate-900">Fixed Price</p>
            <p className="mt-1 text-xs text-slate-500">
              No surprise charges
            </p>
          </div>

          <div className="px-4 text-center">
            <p className="font-bold text-slate-900">Private Car</p>
            <p className="mt-1 text-xs text-slate-500">
              No shared transfers
            </p>
          </div>

          <div className="px-4 pt-4 text-center md:pt-0">
            <p className="font-bold text-slate-900">Flight Tracking</p>
            <p className="mt-1 text-xs text-slate-500">
              We monitor your arrival
            </p>
          </div>

          <div className="px-4 pt-4 text-center md:pt-0">
            <p className="font-bold text-slate-900">WhatsApp Booking</p>
            <p className="mt-1 text-xs text-slate-500">
              Easy communication
            </p>
          </div>
        </div>
      </section>

      {/* PRICE SECTION */}
      <section
        id="pricing"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Simple & Transparent
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Seminyak Airport Transfer Price
            </h2>

            <p className="mt-4 text-slate-600">
              One private vehicle, one fixed price. No complicated pricing
              calculations.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Left */}
              <div className="p-7 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-emerald-600">
                      PRIVATE TRANSFER
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Bali Airport → Seminyak
                    </h3>
                  </div>

                  <div className="rounded-xl bg-emerald-50 px-3 py-2 text-center">
                    <p className="text-xs text-emerald-600">
                      FROM
                    </p>
                    <p className="font-bold text-emerald-700">
                      225k
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Distance
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      Approx. 10 km
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Travel Time
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      25–40 minutes
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Passengers
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      Up to 4 people
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Luggage
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      Standard luggage
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-3">
                      <span className="font-bold text-emerald-600">✓</span>
                      Meet & greet at the airport
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-emerald-600">✓</span>
                      Flight delay monitoring
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-emerald-600">✓</span>
                      Air-conditioned private vehicle
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-emerald-600">✓</span>
                      Professional local driver
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center bg-slate-900 p-7 text-center sm:p-10">
                <p className="text-sm font-medium text-slate-400">
                  Fixed transfer price
                </p>

                <div className="mt-3">
                  <span className="text-lg text-slate-400">
                    IDR
                  </span>

                  <span className="ml-2 text-5xl font-extrabold tracking-tight text-white">
                    225k
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  Per private vehicle
                </p>

                <Link
                  href={whatsappUrl}
                  className="mt-8 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-4 font-bold text-slate-950 transition-colors hover:bg-emerald-400"
                >
                  Book This Transfer
                </Link>

                <p className="mt-4 text-xs text-slate-500">
                  Contact us on WhatsApp to confirm availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              A Better Way to Arrive
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Transfer Bali?
            </h2>

            <p className="mt-4 text-slate-600">
              We make your journey from Bali Airport to Seminyak simple,
              comfortable and stress-free.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fixed & Clear Pricing",
                description:
                  "Know the price before you travel. Our Seminyak transfer has a clear fixed rate with no surprise surge pricing.",
                icon: "✓",
              },
              {
                title: "Professional Drivers",
                description:
                  "Travel with experienced local drivers who know Bali's roads and tourist areas well.",
                icon: "★",
              },
              {
                title: "Flight Monitoring",
                description:
                  "Send us your flight number and we can monitor your arrival time if your flight is delayed.",
                icon: "✈",
              },
              {
                title: "Meet & Greet",
                description:
                  "Your driver will meet you at the airport arrival area with a name sign, making your arrival easier.",
                icon: "✓",
              },
              {
                title: "Private Vehicle",
                description:
                  "Enjoy your own air-conditioned vehicle. There is no need to share the ride with other passengers.",
                icon: "🚗",
              },
              {
                title: "Easy WhatsApp Booking",
                description:
                  "No complicated booking process. Contact us directly through WhatsApp and confirm your transfer.",
                icon: "💬",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl text-emerald-600">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Simple Arrival
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              How Your Airport Transfer Works
            </h2>

            <p className="mt-4 text-slate-400">
              From landing at Bali Airport to arriving at your Seminyak hotel,
              the process is simple.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Book Your Transfer",
                text: "Send us your arrival details and hotel information through WhatsApp.",
              },
              {
                number: "02",
                title: "Land at Bali Airport",
                text: "Complete immigration, collect your luggage and walk into the arrival area.",
              },
              {
                number: "03",
                title: "Meet Your Driver",
                text: "Look for your driver holding a name sign in the agreed meeting area.",
              },
              {
                number: "04",
                title: "Relax & Enjoy",
                text: "Get comfortable in your private air-conditioned vehicle and enjoy the ride to Seminyak.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-xl font-extrabold text-emerald-400">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SEMINYAK */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              About Seminyak
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Arriving in Seminyak, Bali
            </h2>
          </div>

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
            <p>
              Seminyak is one of Bali's most popular areas for visitors looking
              for a combination of beaches, restaurants, cafes, boutique shops
              and stylish hotels and villas. It is located on the southwest
              coast of Bali, north of Kuta and Legian.
            </p>

            <p>
              After a long international flight, arranging your transportation
              before landing can make your arrival much easier. Instead of
              searching for a taxi at the airport, a pre-arranged private
              transfer takes you directly to your accommodation in Seminyak.
            </p>

            <p>
              The journey from Ngurah Rai International Airport to Seminyak is
              relatively short, but Bali traffic can vary considerably
              throughout the day. A typical journey takes around 25 to 40
              minutes, although busy periods can take longer.
            </p>

            <p>
              With Transfer Bali, you can arrange your pickup before your
              flight and provide your flight number so our team can follow your
              arrival. Your driver will then meet you at the airport and take
              you directly to your hotel or villa.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/seminyak-hero.jpg"
                  alt="Seminyak Bali private airport transfer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                Your Arrival
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What to Expect When You Arrive
              </h2>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "A clear meeting point",
                    text:
                      "Your driver will wait at the agreed airport meeting area with your name sign.",
                  },
                  {
                    title: "Help with your luggage",
                    text:
                      "Your driver can assist with your luggage and guide you to the vehicle.",
                  },
                  {
                    title: "Direct hotel transfer",
                    text:
                      "Travel directly to your Seminyak hotel or villa without changing vehicles.",
                  },
                  {
                    title: "Comfortable journey",
                    text:
                      "Relax in an air-conditioned private vehicle while your driver handles the route.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEMINYAK GUIDE */}
      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Travel Guide
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Things to Do in Seminyak
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Relax at Seminyak Beach
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Seminyak Beach is well known for its wide sandy shoreline and
                beautiful sunsets. It is an easy place to spend your first
                afternoon in Bali after checking into your hotel or villa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Explore Restaurants & Cafes
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Seminyak has a large selection of restaurants, cafes and bars,
                ranging from casual local food to international dining. Many
                popular venues are concentrated around the main streets of
                Seminyak.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Enjoy the Sunset
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Sunset is one of the most popular times of day in Seminyak.
                Beachfront restaurants and beach clubs offer relaxed places to
                enjoy the evening as the sun goes down over the Indian Ocean.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Discover Local Shopping
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Visitors can find boutiques, resort wear, local crafts and
                independent shops throughout the Seminyak area. The area is
                particularly popular with travelers looking for fashion and
                lifestyle products.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              FAQ
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Seminyak Airport Transfer FAQ
            </h2>

            <p className="mt-4 text-slate-600">
              Common questions about travelling from Bali Airport to Seminyak.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                question:
                  "How much is a Bali Airport transfer to Seminyak?",
                answer:
                  "Our private transfer from Bali Airport to Seminyak starts at IDR 225,000 per vehicle.",
              },
              {
                question:
                  "How long does Bali Airport to Seminyak take?",
                answer:
                  "The normal journey takes approximately 25 to 40 minutes. Travel time can be longer during busy traffic periods.",
              },
              {
                question:
                  "Where will I meet my driver at Bali Airport?",
                answer:
                  "Your driver will meet you in the agreed arrival area with a name sign after you have completed immigration and collected your luggage.",
              },
              {
                question:
                  "What happens if my flight is delayed?",
                answer:
                  "Provide your flight number when booking and we can monitor the arrival time. If the flight is delayed, the pickup can be adjusted accordingly.",
              },
              {
                question:
                  "How many passengers can travel in the private car?",
                answer:
                  "The standard private vehicle can accommodate up to 4 passengers with standard luggage. For larger groups or extra luggage, please contact us before booking.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <summary className="cursor-pointer list-none pr-6 font-bold text-slate-900 marker:hidden">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>

                    <span className="text-xl text-emerald-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED DESTINATIONS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              More Bali Routes
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Explore Other Airport Transfers
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Planning to stay somewhere else in Bali? Explore our other
              private airport transfer routes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                name: "Ubud",
                href: "/airport-transfer-ubud",
                image: "/images/ubud-hero.jpg",
              },
              {
                name: "Canggu",
                href: "/airport-transfer-canggu",
                image: "/images/canggu-hero.jpg",
              },
              {
                name: "Uluwatu",
                href: "/airport-transfer-uluwatu",
                image: "/images/uluwatu-hero.jpg",
              },
              {
                name: "Munduk",
                href: "/airport-transfer-munduk",
                image: "/images/munduk-hero.jpg",
              },
              {
                name: "Lovina",
                href: "/airport-transfer-lovina",
                image: "/images/lovina-hero.jpg",
              },
            ].map((destination) => (
              <Link
                key={destination.name}
                href={destination.href}
                className="group overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={`Bali Airport transfer to ${destination.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                    Airport Transfer {destination.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-emerald-600">
                    View details →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-emerald-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-200">
            Ready to Travel?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Start Your Bali Holiday Stress-Free
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-emerald-50">
            Reserve your private transfer from Bali Airport to Seminyak and
            have a professional driver ready for your arrival.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={whatsappUrl}
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50"
            >
              Book via WhatsApp
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-300 px-8 py-4 font-bold text-white transition-colors hover:bg-emerald-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Link
                href="/"
                className="text-2xl font-extrabold text-white"
              >
                Transfer Bali
              </Link>

              <p className="mt-3 max-w-sm text-sm leading-6">
                Private airport transfers from Ngurah Rai International
                Airport to popular destinations throughout Bali.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">
                Popular Transfers
              </h3>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link
                  href="/airport-transfer-ubud"
                  className="hover:text-white"
                >
                  Airport Transfer Ubud
                </Link>

                <Link
                  href="/airport-transfer-canggu"
                  className="hover:text-white"
                >
                  Airport Transfer Canggu
                </Link>

                <Link
                  href="/airport-transfer-uluwatu"
                  className="hover:text-white"
                >
                  Airport Transfer Uluwatu
                </Link>

                <Link
                  href="/airport-transfer-munduk"
                  className="hover:text-white"
                >
                  Airport Transfer Munduk
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white">
                Contact
              </h3>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link
                  href={whatsappUrl}
                  className="hover:text-white"
                >
                  WhatsApp Booking
                </Link>

                <Link
                  href="/"
                  className="hover:text-white"
                >
                  Transfer Bali
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Transfer Bali. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}