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
        url: 'https://transferbali.com/images/fleet/Destinations2/bedugul.jpeg',
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
    images: ['https://transferbali.com/images/fleet/Destinations2/bedugul.jpeg'],
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
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://transferbali.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Destinations",
          "item": "https://transferbali.com/destinations"
        },
        {
          "@type": "ListItem",
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

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 w-full">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm">
              Home
            </Link>
          </li>
          <li><span className="mx-2" aria-hidden="true">/</span></li>
          <li>
            <Link href="/destinations" className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm">
              Destinations
            </Link>
          </li>
          <li><span className="mx-2" aria-hidden="true">/</span></li>
          <li aria-current="page" className="text-slate-900 font-medium">
            Bedugul
          </li>
        </ol>
      </nav>

      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="w-full lg:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide">
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
            <Link href="/airport-transfer-bedugul" className="text-emerald-700 underline underline-offset-2">
              airport transfer bedugul
            </Link>{" "}
            directly from Ngurah Rai International Airport. Enjoy a comfortable private vehicle, experienced mountain drivers, and fixed pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={whatsappUrl}
              aria-label="Book airport transfer to Bedugul via WhatsApp"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-emerald-200"
            >
              Book via WhatsApp
            </Link>

            <Link
              href="#pricing"
              className="inline-flex justify-center items-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-semibold transition-all shadow-sm ring-1 ring-slate-200"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100">
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
                ✓
              </div>
              <p className="text-sm font-semibold text-slate-900">Fixed Price Guarantee</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <p className="text-sm font-semibold text-slate-900">Live Flight Tracking</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <p className="text-sm font-semibold text-slate-900">Meet & Greet Service</p>
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
              Experience a comfortable long-distance mountain transfer service with absolute cost clarity and zero hidden surcharges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Private Vehicle (Toyota Avanza / Innova)
              </h3>

              <p className="text-slate-500 mb-6">
                Optimized for mountain climbing, offering powerful performance, comfortable air conditioning, and generous luggage capacity.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Distance</p>
                  <p className="text-lg font-semibold text-slate-900">~ 55 - 60 km</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-lg font-semibold text-slate-900">90 - 120 Mins</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Passengers</p>
                  <p className="text-lg font-semibold text-slate-900">Up to 4 Pax</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Luggage</p>
                  <p className="text-lg font-semibold text-slate-900">4 Suitcases</p>
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
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <span className="text-emerald-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
              <p className="text-slate-300 font-medium mb-2">Fixed Rate</p>

              <div className="text-white mb-6 flex items-baseline justify-center">
                <span className="text-xl mr-1">IDR</span>
                <span className="text-5xl font-bold tracking-tight">550k</span>
              </div>

              <p className="text-slate-400 text-sm mb-8">
                Per vehicle, all inclusive
              </p>

              <Link
                href={whatsappUrl}
                aria-label="Book your Bedugul transfer via WhatsApp"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors text-lg"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Transfer Bali for Your Bedugul Route
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover why travelers heading to the cool mountain sanctuary of Bedugul prefer our premier bali airport transfer bedugul service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Real-Time Flight Tracking',
              desc: 'We monitor your flight status continuously so your driver can adjust pickup times seamlessly for delayed arrivals.'
            },
            {
              title: 'Fixed Transparent Rates',
              desc: 'Lock in a secure flat rate with zero unexpected surcharges, hidden fees, or surge pricing worries.'
            },
            {
              title: 'VIP Meet & Greet',
              desc: 'Skip the airport chaos. Your professional chauffeur greets you inside the main arrival hall with a personalized name board.'
            },
            {
              title: 'Comfortable Mountain Fleet',
              desc: 'Travel safely through steep winding roads inside fully air-conditioned, meticulously maintained, and sanitized vehicles.'
            },
            {
              title: 'Expert Mountain Drivers',
              desc: 'Our skilled English speaking chauffeurs possess extensive experience navigating central highland terrains safely and efficiently.'
            },
            {
              title: 'Dedicated 24/7 Support',
              desc: 'Have questions or need to modify your schedule? Our customer support group is available around-the-clock via WhatsApp.'
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 text-xl">
                ✓
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Your Airport Pickup Works
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Arriving at DPS airport is smooth and stress-free when you follow our clear transfer procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Flight Land & Customs',
                desc: 'Exit your aircraft, pass through passport control smoothly, and collect your luggage.'
              },
              {
                step: '02',
                title: 'Meet Your Driver',
                desc: 'Walk into the main arrival hall where your private chauffeur holds a signboard with your name.'
              },
              {
                step: '03',
                title: 'Luggage Assistance',
                desc: 'Your driver handles your bags and guides you securely to the air-conditioned vehicle.'
              },
              {
                step: '04',
                title: 'Mountain Ride to Bedugul',
                desc: 'Settle back and enjoy a scenic journey northward toward the central highlands.'
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-400 mb-6 shadow-xl">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
                  'Professional Mountain-Experienced Driver',
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
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors text-lg text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Transfer Bali for Your Bedugul Route
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover why travelers heading to the cool mountain sanctuary of
            Bedugul prefer our premier airport transfer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Real-Time Flight Tracking',
              desc: 'We monitor your flight status continuously so your driver can adjust pickup times seamlessly for delayed arrivals.',
            },
            {
              title: 'Fixed Transparent Rates',
              desc: 'Lock in a secure flat rate with zero unexpected surcharges, hidden fees, or surge pricing worries.',
            },
            {
              title: 'VIP Meet & Greet',
              desc: 'Skip the airport chaos. Your professional chauffeur greets you inside the main arrival hall with a personalized name board.',
            },
            {
              title: 'Comfortable Mountain Fleet',
              desc: 'Travel safely through steep winding roads inside fully air-conditioned, meticulously maintained, and sanitized vehicles.',
            },
            {
              title: 'Expert Mountain Drivers',
              desc: 'Our skilled English speaking chauffeurs possess extensive experience navigating central highland terrains safely and efficiently.',
            },
            {
              title: 'Dedicated 24/7 Support',
              desc: 'Have questions or need to modify your schedule? Our customer support group is available around-the-clock via WhatsApp.',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
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

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Your Airport Pickup Works
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Arriving at DPS airport is smooth and stress-free when you follow
              our clear transfer procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Flight Land & Customs',
                desc: 'Exit your aircraft, pass through passport control smoothly, and collect your luggage.',
              },
              {
                step: '02',
                title: 'Meet Your Driver',
                desc: 'Walk into the main arrival hall where your private chauffeur holds a signboard with your name.',
              },
              {
                step: '03',
                title: 'Luggage Assistance',
                desc: 'Your driver handles your bags and guides you securely to the air-conditioned vehicle.',
              },
              {
                step: '04',
                title: 'Mountain Ride to Bedugul',
                desc: 'Settle back and enjoy a scenic journey northward toward the central highlands.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-400 mb-6 shadow-xl">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 w-full">
        <h2 className="text-4xl text-center mb-12">
          The Ultimate Guide to Bedugul: Bali's Refreshing Mountain Sanctuary
        </h2>

        <p>
          Bedugul is a peaceful mountain lake resort destination located in
          the central highlands of Bali, famous for its cool climate, lush
          botanical gardens, and the iconic lakeside temple. Securing a
          dependable private airport transfer ensures you complete the
          mountain journey from Ngurah Rai International Airport safely,
          comfortably, and on time.
        </p>

        <p>
          The drive from the airport to Bedugul typically takes between 90 to
          120 minutes as you ascend northward through winding interior roads.
          Booking an expert airport transfer means your English speaking
          driver will track your flight schedule, greet you warmly upon
          arrival, and navigate mountain roadways directly to your hotel or
          villa.
        </p>

        <h3>Why Bedugul is a Must-Visit Highland Destination</h3>

        <p>
          Bedugul offers a dramatic contrast to Bali’s warm coastal beaches,
          featuring crisp mountain air, mist-covered hills, and fertile
          agricultural terraces. Reliable ground transportation is essential
          for families and nature lovers wanting a stress-free transition into
          the highlands.
        </p>

        <div className="not-prose my-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Planning a Mountain Getaway to Bedugul?
          </h3>

          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Ensure a seamless transit from the airport to the cool highlands.
            Reserve your private vehicle with a professional driver today.
          </p>

          <Link
            href={whatsappUrl}
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-md"
          >
            Book Airport Transfer to Bedugul (IDR 550k)
          </Link>
        </div>

        <h3>Top Experiences and Attractions Near Bedugul</h3>

        <ol>
          <li>
            <strong>Pura Ulun Danu Beratan:</strong> The famous water temple
            floating gracefully on the serene surface of Lake Beratan.
          </li>

          <li>
            <strong>Bali Botanic Garden:</strong> Indonesia's largest botanical
            garden featuring vast rainforests, orchid houses, and treetop
            adventure parks.
          </li>

          <li>
            <strong>Lake Beratan:</strong> A scenic crater lake offering water
            sports, boat rentals, and picturesque misty backdrops.
          </li>

          <li>
            <strong>Bedugul Traditional Market:</strong> A vibrant local market
            bustling with fresh highland strawberries, exotic fruits, and
            fresh flowers.
          </li>

          <li>
            <strong>Handara Gate:</strong> The iconic picturesque traditional
            Balinese gateway framed by lush green mountains and misty clouds.
          </li>

          <li>
            <strong>Lake Buyan and Lake Tamblingan:</strong> Twin lakes nestled
            within ancient volcanic craters.
          </li>

          <li>
            <strong>Jatiluwih Rice Terraces:</strong> UNESCO World Heritage
            cascading rice fields located just south of the main Bedugul area.
          </li>

          <li>
            <strong>Strawberry Farms:</strong> Local agritourism farms where
            visitors can pick fresh strawberries.
          </li>
        </ol>

        <h3>Travel & Transport Tips for Bedugul</h3>

        <ul>
          <li>
            <strong>Mountain Climate:</strong> Bring light jackets or sweaters
            because Bedugul is considerably cooler than Bali's coastal areas.
          </li>

          <li>
            <strong>Winding Roads:</strong> A reliable private vehicle with an
            experienced driver provides a safer and more comfortable journey.
          </li>

          <li>
            <strong>Luggage:</strong> Our private vehicles can accommodate
            standard suitcases without compromising passenger comfort.
          </li>

          <li>
            <strong>Experienced Drivers:</strong> Our drivers are familiar with
            Bali's winding mountain roads and highland routes.
          </li>
        </ul>
      </article>

      <section className="bg-slate-50 py-24 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-600">
              Everything you need to know about your Bali airport to Bedugul
              transfer.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How far is Bedugul from Bali Airport?',
                a: 'The driving distance from Ngurah Rai International Airport (DPS) to Bedugul is approximately 55 to 60 kilometers. A private car transfer typically takes around 90 to 120 minutes depending on traffic and weather.',
              },
              {
                q: 'How much is a taxi from Bali airport to Bedugul?',
                a: 'Our private airport transfer to Bedugul has a fixed, all-inclusive price of IDR 550,000 per vehicle for up to 4 passengers.',
              },
              {
                q: 'What happens if my flight is delayed?',
                a: 'We provide complimentary flight monitoring. If your flight is delayed, your driver will adjust the pickup schedule accordingly.',
              },
              {
                q: 'Where do I find my driver at Ngurah Rai Airport?',
                a: 'After collecting your luggage, enter the main arrival hall. Your driver will be waiting with a signboard showing your name.',
              },
              {
                q: 'Can you drop us directly at our hotel in Bedugul?',
                a: 'Yes. We provide direct door-to-door drop-off at hotels, resorts, villas, and attractions in the Bedugul area.',
              },
              {
                q: 'Are night-time airport transfers available?',
                a: 'Yes. Our airport transfer service operates 24/7.',
              },
              {
                q: 'Is a deposit required?',
                a: 'No advance payment is necessary. You can book through WhatsApp and pay the driver directly upon arrival.',
              },
              {
                q: 'What vehicles do you use?',
                a: 'We use well-maintained air-conditioned private vehicles such as Toyota Avanza and Toyota Innova.',
              },
              {
                q: 'When should I book?',
                a: 'We recommend booking at least 12 to 24 hours in advance to guarantee vehicle availability.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>

                <p className="text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED DESTINATIONS */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Related Destinations
            </h2>

            <p className="text-slate-600 max-w-xl mx-auto">
              Explore our other fixed-price private airport transfer routes
              across Bali from Ngurah Rai International Airport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* BEDUGUL */}
            <Link
              href="/airport-transfer-bedugul"
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/fleet/Destinations2/bedugul.jpeg"
                  alt="Private airport transfer to Bedugul"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="absolute top-3 right-3 bg-slate-900/85 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  IDR 550,000
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Bedugul
                </h3>

                <p className="text-sm text-slate-500 mb-4">
                  Duration: 90-120 mins
                </p>

                <span className="text-sm font-semibold text-emerald-600">
                  View Transfer Details →
                </span>
              </div>
            </Link>

            {/* PADANGBAI */}
            <Link
              href="/airport-transfer-padangbai"
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/fleet/Destinations2/padangbai.jpeg"
                  alt="Private airport transfer to Padangbai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="absolute top-3 right-3 bg-slate-900/85 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  IDR 500,000
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Padangbai
                </h3>

                <p className="text-sm text-slate-500 mb-4">
                  Duration: 75-90 mins
                </p>

                <span className="text-sm font-semibold text-emerald-600">
                  View Transfer Details →
                </span>
              </div>
            </Link>

            {/* UBUD */}
            <Link
              href="/airport-transfer-ubud"
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/fleet/Destinations2/ubud.jpeg"
                  alt="Private airport transfer to Ubud"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="absolute top-3 right-3 bg-slate-900/85 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  IDR 350,000
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Ubud
                </h3>

                <p className="text-sm text-slate-500 mb-4">
                  Duration: 60-90 mins
                </p>

                <span className="text-sm font-semibold text-emerald-600">
                  View Transfer Details →
                </span>
              </div>
            </Link>

            {/* CANGGU */}
            <Link
              href="/airport-transfer-canggu"
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/fleet/Destinations2/canggu.jpeg"
                  alt="Private airport transfer to Canggu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="absolute top-3 right-3 bg-slate-900/85 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  IDR 250,000
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Canggu
                </h3>

                <p className="text-sm text-slate-500 mb-4">
                  Duration: 45-60 mins
                </p>

                <span className="text-sm font-semibold text-emerald-600">
                  View Transfer Details →
                </span>
              </div>
            </Link>

          </div>

          <div className="mt-12 text-center flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">
              Explore More Routes:
            </span>

            <Link href="/" className="hover:text-emerald-600 underline">
              Home
            </Link>

            <Link
              href="/airport-transfer-bedugul"
              className="hover:text-emerald-600 underline"
            >
              Bedugul
            </Link>

            <Link
              href="/airport-transfer-padangbai"
              className="hover:text-emerald-600 underline"
            >
              Padangbai
            </Link>

            <Link
              href="/airport-transfer-ubud"
              className="hover:text-emerald-600 underline"
            >
              Ubud
            </Link>

            <Link
              href="/airport-transfer-canggu"
              className="hover:text-emerald-600 underline"
            >
              Canggu
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 py-20 text-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            Ready for Your Journey to Bedugul Highlands?
          </h2>

          <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Book your private airport transfer to Bedugul today. Enjoy a fixed
            price of IDR 550k including toll fees and an expert driver waiting
            right at Bali airport.
          </p>

          <div className="pt-4">
            <Link
              href={whatsappUrl}
              className="inline-flex justify-center items-center gap-2 px-10 py-5 bg-white hover:bg-emerald-50 text-slate-900 rounded-2xl font-bold transition-all shadow-2xl text-lg"
            >
              Book via WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="space-y-3 text-center md:text-left">
            <span className="text-2xl font-bold text-white tracking-tight">
              Transfer Bali
            </span>

            <p className="text-sm text-slate-400 max-w-sm">
              Your trusted partner for safe, reliable, and fixed-price private
              airport transfers throughout Bali.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link
              href="/airport-transfer-bedugul"
              className="hover:text-white"
            >
              Bedugul
            </Link>

            <Link
              href="/airport-transfer-padangbai"
              className="hover:text-white"
            >
              Padangbai
            </Link>

            <Link
              href="/airport-transfer-ubud"
              className="hover:text-white"
            >
              Ubud
            </Link>

            <Link
              href="/airport-transfer-canggu"
              className="hover:text-white"
            >
              Canggu
            </Link>

            <Link href={whatsappUrl} className="hover:text-white">
              Contact Support
            </Link>
          </div>

          <div className="text-sm text-slate-500 text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Transfer Bali. All rights
              reserved.
            </p>

            <p className="mt-1">
              Ngurah Rai International Airport Transfer Specialists
            </p>
          </div>

        </div>
      </footer>
    </main>
  );
}