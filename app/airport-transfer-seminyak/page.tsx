import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bali Airport Transfer to Seminyak | Private Taxi | Transfer Bali",
  description:
    "Book a private Bali Airport transfer to Seminyak with a professional English-speaking driver. Fixed price, comfortable private vehicle, flight monitoring and easy WhatsApp booking.",
  alternates: {
    canonical: "https://transferbali.com/airport-transfer-seminyak",
  },
  openGraph: {
    title: "Bali Airport Transfer to Seminyak | Transfer Bali",
    description:
      "Private airport transfer from Ngurah Rai International Airport to Seminyak with fixed pricing and professional local drivers.",
    url: "https://transferbali.com/airport-transfer-seminyak",
    siteName: "Transfer Bali",
    images: [
      {
        url: "https://transferbali.com/images/fleet/Destinations2/seminyak.jpeg",
        width: 1200,
        height: 630,
        alt: "Bali Airport Transfer to Seminyak",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Airport Transfer to Seminyak | Transfer Bali",
    description:
      "Private airport transfer from Bali Airport to Seminyak with fixed pricing and professional local drivers.",
    images: [
      "https://transferbali.com/images/fleet/Destinations2/seminyak.jpeg",
    ],
  },
};

const whatsappUrl =
  "https://wa.me/6285738217365?text=Hi%2C%20I%20would%20like%20to%20book%20an%20airport%20transfer%20to%20Seminyak.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://transferbali.com/#localbusiness",
      name: "Transfer Bali",
      url: "https://transferbali.com",
      image:
        "https://transferbali.com/images/fleet/Destinations2/seminyak.jpeg",
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
      "@id": "https://transferbali.com/airport-transfer-seminyak#service",
      name: "Bali Airport Transfer to Seminyak",
      serviceType: "Airport Transfer",
      provider: {
        "@id": "https://transferbali.com/#localbusiness",
      },
      areaServed: {
        "@type": "Place",
        name: "Seminyak, Bali",
      },
      description:
        "Private airport transfer from Ngurah Rai International Airport to Seminyak with a professional driver and air-conditioned vehicle.",
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
      "@id":
        "https://transferbali.com/airport-transfer-seminyak#breadcrumb",
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
          name: "Airport Transfer Seminyak",
          item:
            "https://transferbali.com/airport-transfer-seminyak",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://transferbali.com/airport-transfer-seminyak#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is Seminyak from Bali Airport?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Seminyak is approximately 10 kilometres from Ngurah Rai International Airport. The journey normally takes around 25 to 40 minutes depending on traffic.",
          },
        },
        {
          "@type": "Question",
          name: "How much is a private airport transfer to Seminyak?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Our private Bali Airport transfer to Seminyak starts from IDR 225,000 per vehicle for up to 4 passengers with normal luggage.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book an airport transfer late at night?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Airport transfers can be arranged for early morning and late-night flights, subject to availability.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if my flight is delayed?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you provide your flight number, we can monitor your arrival information and coordinate your pickup accordingly.",
          },
        },
        {
          "@type": "Question",
          name: "Where will I meet my driver at Bali Airport?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your exact meeting point will be confirmed with your booking. We provide clear instructions so you can easily meet your driver after collecting your luggage.",
          },
        },
        {
          "@type": "Question",
          name: "How can I book a Bali Airport transfer to Seminyak?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The easiest way is through WhatsApp. Send your name, arrival date, flight number, number of passengers and hotel or villa address.",
          },
        },
      ],
    },
  ],
};

export default function AirportTransferSeminyakPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
      >
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

          <li
            aria-current="page"
            className="font-medium text-slate-900"
          >
            Airport Transfer Seminyak
          </li>
        </ol>
      </nav>

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              Private Bali Airport Transfer
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Bali Airport Transfer to{" "}
              <span className="text-emerald-600">Seminyak</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Start your Bali holiday comfortably with a private airport
              transfer from Ngurah Rai International Airport to your hotel
              or villa in Seminyak.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Enjoy a professional local driver, comfortable air-conditioned
              vehicle, fixed pricing and easy booking through WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700"
              >
                Book via WhatsApp
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-900 transition-colors hover:bg-slate-50"
              >
                View Price
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-7">
              <div>
                <p className="text-xl font-extrabold text-slate-900">
                  25–40
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Minutes
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-slate-900">
                  10 km
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Approx. distance
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-slate-900">
                  24/7
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Support
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
              <Image
                src="/images/fleet/Destinations2/seminyak.jpeg"
                alt="Bali Airport Transfer to Seminyak"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-6 sm:right-auto">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Fixed Price
                  </p>

                  <p className="text-sm text-slate-500">
                    From IDR 225,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Simple Fixed Pricing
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Bali Airport to Seminyak Transfer Price
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              One private vehicle for your journey from Ngurah Rai
              International Airport to Seminyak.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-7 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                  Private Vehicle
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  Airport → Seminyak
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Comfortable private transportation suitable for couples,
                  families and small groups.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Passengers
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      Up to 4
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Duration
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      25–40 min
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Distance
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      ~10 km
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Service
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      Private
                    </p>
                  </div>
                </div>

                <ul className="mt-8 space-y-3">
                  {[
                    "Private air-conditioned vehicle",
                    "Professional local driver",
                    "Direct hotel or villa transfer",
                    "Flight information monitoring",
                    "No shared vehicle",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                        ✓
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center bg-slate-950 p-8 text-center sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Fixed Price
                </p>

                <div className="mt-3">
                  <span className="text-lg text-slate-400">
                    IDR
                  </span>

                  <span className="ml-2 text-5xl font-extrabold text-white">
                    225k
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  Per private vehicle
                </p>

                <Link
                  href={whatsappUrl}
                  className="mt-8 w-full rounded-xl bg-emerald-500 px-6 py-4 font-bold text-slate-950 transition-colors hover:bg-emerald-400"
                >
                  Book This Transfer
                </Link>

                <p className="mt-4 text-xs text-slate-500">
                  Contact us to confirm availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A Comfortable Way to Start Your Bali Holiday
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We make the journey from Bali Airport to Seminyak simple,
              comfortable and stress-free.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fixed Price",
                text: "Know your transfer price before travelling with no need to negotiate with taxi drivers at the airport.",
              },
              {
                title: "Private Vehicle",
                text: "Travel directly to your accommodation without sharing the vehicle with other passengers.",
              },
              {
                title: "Professional Driver",
                text: "Travel with an experienced local driver who knows Bali's roads and tourist areas.",
              },
              {
                title: "Flight Monitoring",
                text: "Provide your flight number and we can use your arrival information to coordinate the pickup.",
              },
              {
                title: "Hotel Door-to-Door",
                text: "Your driver takes you directly from Bali Airport to your hotel, villa or accommodation in Seminyak.",
              },
              {
                title: "Easy WhatsApp Booking",
                text: "Booking is simple. Send your travel details through WhatsApp and we will confirm your transfer.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 font-bold text-emerald-600">
                  ✓
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Simple Arrival
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              How Your Airport Transfer Works
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Booking your private transfer to Seminyak is simple.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Send Details",
                text: "Send your name, arrival date, flight number and hotel details.",
              },
              {
                number: "02",
                title: "Booking Confirmed",
                text: "We confirm your transfer and fixed price through WhatsApp.",
              },
              {
                number: "03",
                title: "Meet Driver",
                text: "After collecting your luggage, follow the meeting instructions provided.",
              },
              {
                number: "04",
                title: "Relax & Enjoy",
                text: "Sit back and enjoy your private ride directly to Seminyak.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-xl font-extrabold text-slate-950">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Seminyak Airport Transfer
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Private Bali Airport Transfer to Seminyak
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Enjoy a comfortable and reliable private transfer from
              Ngurah Rai International Airport to your hotel or villa in
              Seminyak with a professional local driver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                25–40 Minutes
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Average travel time from Bali Airport to Seminyak,
                depending on traffic conditions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                IDR 225,000
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Fixed price per private vehicle with no hidden airport
                fees or late-night surcharge.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Private & Reliable
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Meet and greet service, flight monitoring and a clean
                air-conditioned vehicle included.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                Why Book With Us
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-6">
                A Simple and Stress-Free Way to Reach Seminyak
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8">
                After a long flight to Bali, the last thing you need is
                negotiating with taxi drivers or waiting in a crowded
                airport queue. Our private Bali airport transfer service
                takes you directly from Ngurah Rai International Airport
                to your hotel or villa in Seminyak.
              </p>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">1</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Easy Booking
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Send us your arrival details through WhatsApp and
                      receive a quick confirmation from our team.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">2</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Meet Your Driver
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Your driver will wait at the airport arrival area
                      with your name displayed clearly on a sign.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">3</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Relax on the Journey
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Sit back in a comfortable private vehicle while
                      your driver takes you directly to Seminyak.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative">

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/fleet/Destinations2/seminyak.jpeg"
                  alt="Private Bali airport transfer to Seminyak"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Fixed Price
                    </p>

                    <p className="font-bold text-slate-900">
                      IDR 225,000
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Explore Bali
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Other Popular Airport Transfer Routes
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Looking for another destination? Explore our other private
              airport transfer routes from Bali Airport.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

            {[
              {
                name: "Canggu",
                price: "IDR 325,000",
                time: "45–75 min",
                href: "/airport-transfer-canggu",
                image: "/images/fleet/Destinations2/canggu.jpeg",
              },
              {
                name: "Ubud",
                price: "IDR 350,000",
                time: "60–90 min",
                href: "/airport-transfer-ubud",
                image: "/images/fleet/Destinations2/ubud.jpeg",
              },
              {
                name: "Uluwatu",
                price: "IDR 350,000",
                time: "45–70 min",
                href: "/airport-transfer-uluwatu",
                image: "/images/fleet/Destinations2/uluwatu.jpeg",
              },
              {
                name: "Nusa Dua",
                price: "IDR 240,000",
                time: "25–40 min",
                href: "/airport-transfer-nusa-dua",
                image: "/images/fleet/Destinations2/nusa-dua.jpeg",
              },
            ].map((destination) => (
              <Link
                key={destination.name}
                href={destination.href}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all"
              >

                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-200">

                  <Image
                    src={destination.image}
                    alt={`Bali airport transfer to ${destination.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />

                  <div className="absolute top-2 right-2 bg-slate-900/80 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full">
                    {destination.price}
                  </div>

                </div>

                <div className="p-4">

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {destination.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {destination.time}
                  </p>

                  <span className="inline-block mt-3 text-xs sm:text-sm font-medium text-emerald-600">
                    View Transfer Details →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      <section className="bg-emerald-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-5">
            Ready to Book Your Seminyak Airport Transfer?
          </h2>

          <p className="text-emerald-100 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Reserve your private airport transfer from Bali Airport to
            Seminyak today and enjoy a comfortable journey with a fixed
            price and professional local driver.
          </p>

          <Link
            href={whatsappUrl}
            aria-label="Book Bali airport transfer to Seminyak via WhatsApp"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl font-bold shadow-xl transition-colors"
          >
            Book via WhatsApp
          </Link>

        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="text-center md:text-left">

              <p className="text-xl font-bold text-white">
                Transfer Bali
              </p>

              <p className="text-sm mt-2 max-w-sm">
                Reliable private Bali airport transfers with fixed prices
                and professional local drivers.
              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-5 text-sm">

              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href="/airport-transfer-canggu"
                className="hover:text-white transition-colors"
              >
                Canggu
              </Link>

              <Link
                href="/airport-transfer-ubud"
                className="hover:text-white transition-colors"
              >
                Ubud
              </Link>

              <Link
                href="/airport-transfer-uluwatu"
                className="hover:text-white transition-colors"
              >
                Uluwatu
              </Link>

              <Link
                href={whatsappUrl}
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </Link>

            </div>

          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Transfer Bali. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}