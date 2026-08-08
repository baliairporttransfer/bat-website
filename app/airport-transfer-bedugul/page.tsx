import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bali Airport Transfer to Bedugul | Private Mountain Taxi | Transfer Bali',
  description: 'Book a reliable private airport transfer from Ngurah Rai International Airport to Bedugul with professional English speaking drivers, fixed pricing (IDR 550k), and 24/7 service.',
  alternates: {
    canonical: 'https://transferbali.com/airport-transfer-bedugul',
  },
  openGraph: {
    title: 'Bali Airport Transfer to Bedugul | Private Mountain Taxi | Transfer Bali',
    description: 'Secure your private airport transfer from Ngurah Rai International Airport to Bedugul with professional English speaking drivers, fixed pricing (IDR 550k), and 24/7 support.',
    url: 'https://transferbali.com/airport-transfer-bedugul',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/images/bedugul-transfer-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Private airport transfer to Bedugul mountain resort and lake temple from Bali Airport',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Airport Transfer to Bedugul | Private Mountain Taxi | Transfer Bali',
    description: 'Secure your private airport transfer from Ngurah Rai International Airport to Bedugul with professional English speaking drivers, fixed pricing (IDR 550k), and 24/7 support.',
    images: ['https://transferbali.com/images/bedugul-transfer-og.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://transferbali.com/#localbusiness",
      "name": "Transfer Bali",
      "image": "https://transferbali.com/images/logo.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ngurah Rai International Airport",
        "addressLocality": "Tuban",
        "addressRegion": "Bali",
        "postalCode": "80362",
        "addressCountry": "ID"
      },
      "telephone": "+6285738217365",
      "url": "https://transferbali.com"
    },
    {
      "@type": "Service",
      "name": "Bali Airport Transfer to Bedugul",
      "provider": {
        "@id": "https://transferbali.com/#localbusiness"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Bedugul"
      },
      "description": "Reliable private airport transfer service from Ngurah Rai International Airport (DPS) to Bedugul mountain region. Includes meet and greet, luggage assistance, and air-conditioned vehicles.",
      "offers": {
        "@type": "Offer",
        "price": "550000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "url": "https://transferbali.com/airport-transfer-bedugul"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "position": 1,
          "name": "Home",
          "item": "https://transferbali.com"
        },
        {
          "position": 2,
          "name": "Destinations",
          "item": "https://transferbali.com/destinations"
        },
        {
          "position": 3,
          "name": "Airport Transfer to Bedugul"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Bedugul from Bali Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The driving distance from Ngurah Rai International Airport (DPS) to Bedugul is approximately 55 to 60 kilometers north through the central highland terrain. A private car transfer typically takes around 90 to 120 minutes depending on mountain traffic and weather conditions."
          }
        },
        {
          "@type": "Question",
          "name": "How much is a taxi from Bali airport to Bedugul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our private airport transfer to Bedugul has a fixed, all-inclusive price of IDR 550,000 per vehicle. This covers up to 4 passengers, standard luggage, fuel, toll fees, and professional mountain-experienced driver services with zero hidden costs."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my flight is delayed before heading to Bedugul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide complimentary live flight tracking. If your arrival at DPS Airport is delayed, your private English speaking driver will automatically adjust the pickup schedule and wait for you at no extra charge."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I find my driver at Ngurah Rai Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After clearing customs and collecting your luggage, enter the main arrival hall. Your chauffeur will be waiting there, holding a clear signboard with your name for an effortless meet and greet experience."
          }
        },
        {
          "@type": "Question",
          "name": "Can you drop us off directly at our mountain hotel or villa in Bedugul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide direct door-to-door drop-off right at your hotel, resort, villa, or tourist attraction in the Bedugul area at no extra charge."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide baby car seats for trips to Bedugul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we prioritize family safety during mountain journeys. Clean, certified baby or child car seats can be arranged for a small additional fee when booking via WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "Are night-time airport transfers available for traveling to Bedugul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our transfer service operates 24/7. Whether you arrive on an early morning flight or a late-night red-eye flight, our drivers are fully prepared for your airport pickup."
          }
        },
        {
          "@type": "Question",
          "name": "Is a deposit required for the booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No advance payment is necessary. You can book your airport taxi to Bedugul securely through WhatsApp and pay your driver directly in cash upon safe arrival at your destination."
          }
        },
        {
          "@type": "Question",
          "name": "What vehicles do you use for Bedugul trips?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deploy modern, well-maintained, fully air-conditioned private vehicles like the Toyota Avanza or Toyota Innova, equipped with powerful engines ideal for climbing Bali's steep mountain roads."
          }
        },
        {
          "@type": "Question",
          "name": "When should I book my transfer to Bedugul?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend booking at least 12 to 24 hours in advance to guarantee vehicle availability and secure your preferred pickup time for your mountain trip."
          }
        }
      ]
    }
  ]
};

export default function AirportTransferBedugulPage() {
  const whatsappUrl = "https://wa.me/6285738217365?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Airport%20Transfer%20to%20Bedugul.";

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 w-full"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm"
            >
              Home
            </Link>
          </li>

          <li>
            <span className="mx-2" aria-hidden="true">/</span>
          </li>

          <li>
            <Link
              href="/destinations"
              className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm"
            >
              Destinations
            </Link>
          </li>

          <li>
            <span className="mx-2" aria-hidden="true">/</span>
          </li>

          <li aria-current="page" className="text-slate-900 font-medium">
            Bedugul
          </li>
        </ol>
      </nav>

      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 w-full">

        <div className="w-full lg:w-1/2 space-y-8 z-10">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide">
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            Private Mountain Resort Airport Transfer
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bali Airport Transfer to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Bedugul
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Escape to the refreshing mountain highlands of Bali with a secure{" "}
            <Link
              href="/airport-transfer-bedugul"
              className="text-emerald-700 underline underline-offset-2"
            >
              airport transfer bedugul
            </Link>{" "}
            directly from Ngurah Rai International Airport. Enjoy a comfortable
            private vehicle, experienced mountain drivers, and fixed pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              href={whatsappUrl}
              aria-label="Book airport transfer to Bedugul via WhatsApp"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>

              Book via WhatsApp
            </Link>

            <Link
              href="#pricing"
              className="inline-flex justify-center items-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-semibold transition-all shadow-sm ring-1 ring-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              View Pricing
            </Link>

          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">

          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100">

            {/* BEDUGUL IMAGE PATH DIUBAH DI SINI */}
            <Image
              src="/images/fleet/Destinations2/bedugul.jpeg"
              alt="Private car airport transfer arriving in Bedugul Bali highlands"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />

          </div>

          <div className="absolute -bottom-8 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-3">

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-600"
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

              <p className="text-sm font-semibold text-slate-900">
                Fixed Price Guarantee
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-600"
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

              <p className="text-sm font-semibold text-slate-900">
                Live Flight Tracking
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-600"
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

              <p className="text-sm font-semibold text-slate-900">
                Meet & Greet Service
              </p>
            </div>

          </div>
        </div>

      </header>

      <section id="pricing" className="bg-slate-50 py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Transparent Fixed Pricing to Bedugul
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Experience a comfortable long-distance mountain transfer service
              with absolute cost clarity and zero hidden surcharges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">

            <div className="p-8 md:p-12 md:w-2/3">

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Private Vehicle (Toyota Avanza / Innova)
              </h3>

              <p className="text-slate-500 mb-6">
                Optimized for mountain climbing, offering powerful performance,
                comfortable air conditioning, and generous luggage capacity.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
                    Distance
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    ~ 55 - 60 km
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
                    Duration
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    90 - 120 Mins
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
                    Passengers
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    Up to 4 Pax
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
                    Luggage
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    4 Suitcases
                  </p>
                </div>

              </div>

              <ul className="space-y-3">
                {[
                  'Meet & Greet inside Arrivals Hall',
                  'Complimentary Flight Delay Monitoring',
                  'All Fuel & Toll Fees Included',
                  'Air-Conditioned Private Vehicle',
                  'Professional Mountain-Experienced Driver'
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-emerald-500 flex-shrink-0"
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

                    {item}
                  </li>
                ))}
              </ul>

            </div>

            <div className="bg-slate-900 p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center">

              <p className="text-slate-300 font-medium mb-2">
                Fixed Rate
              </p>

              <div className="text-white mb-6 flex items-baseline justify-center">
                <span className="text-xl mr-1">IDR</span>
                <span className="text-5xl font-bold tracking-tight">
                  550k
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-8">
                Per vehicle, all inclusive
              </p>

              <Link
                href={whatsappUrl}
                aria-label="Book your Bedugul transfer via WhatsApp"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Book Now
              </Link>

            </div>
          </div>

        </div>
      </section>