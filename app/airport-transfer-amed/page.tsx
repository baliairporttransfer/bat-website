import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bali Airport Transfer to Amed | Private Amed Taxi | Transfer Bali',
  description:
    'Book a reliable private airport transfer from Ngurah Rai International Airport to Amed with professional English-speaking drivers, fixed pricing at IDR 750k, and 24/7 service.',
  alternates: {
    canonical: 'https://transferbali.com/airport-transfer-amed',
  },
  openGraph: {
    title: 'Bali Airport Transfer to Amed | Private Amed Taxi | Transfer Bali',
    description:
      'Book a private airport transfer from Bali Airport to Amed with professional drivers, fixed pricing, comfortable vehicles, and 24/7 support.',
    url: 'https://transferbali.com/airport-transfer-amed',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/images/fleet/Destinations2/amed.jpeg',
        width: 1200,
        height: 630,
        alt: 'Private airport transfer from Bali Airport to Amed Bali',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Airport Transfer to Amed | Private Amed Taxi | Transfer Bali',
    description:
      'Private airport transfer from Bali Airport to Amed with fixed pricing, professional drivers, and comfortable air-conditioned vehicles.',
    images: [
      'https://transferbali.com/images/fleet/Destinations2/amed.jpeg',
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://transferbali.com/#localbusiness',
      name: 'Transfer Bali',
      image: 'https://transferbali.com/images/logo.png',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ngurah Rai International Airport',
        addressLocality: 'Tuban',
        addressRegion: 'Bali',
        postalCode: '80362',
        addressCountry: 'ID',
      },
      telephone: '+6285738217365',
      url: 'https://transferbali.com',
    },
    {
      '@type': 'Service',
      name: 'Bali Airport Transfer to Amed',
      provider: {
        '@id': 'https://transferbali.com/#localbusiness',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Amed',
      },
      description:
        'Reliable private airport transfer service from Ngurah Rai International Airport (DPS) to Amed in East Bali. Includes meet and greet, luggage assistance, comfortable air-conditioned vehicle, and professional driver.',
      offers: {
        '@type': 'Offer',
        price: '750000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: 'https://transferbali.com/airport-transfer-amed',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://transferbali.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Destinations',
          item: 'https://transferbali.com/destinations',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Airport Transfer to Amed',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How far is Amed from Bali Airport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amed is approximately 95 to 110 kilometers from Ngurah Rai International Airport, depending on the exact location of your hotel. A private transfer usually takes around 2.5 to 3.5 hours depending on traffic and road conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much is a taxi from Bali Airport to Amed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our private airport transfer from Bali Airport to Amed has a fixed price of IDR 750,000 per vehicle. The price is for a private air-conditioned vehicle with a professional driver.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my flight is delayed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We monitor your flight arrival time. If your flight is delayed, we adjust the pickup time so your driver can meet you after you arrive at Bali Airport.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where will I meet my driver at Bali Airport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After collecting your luggage and exiting customs, your driver will meet you in the airport arrival area holding a signboard with your name.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you drop us directly at our hotel in Amed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide direct door-to-door transfer to hotels, villas, resorts, and guesthouses throughout the Amed area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are airport transfers to Amed available at night?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our private airport transfer service operates 24 hours a day, 7 days a week.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a deposit required to book the transfer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No advance deposit is required. You can book through WhatsApp and arrange payment directly with your driver.',
          },
        },
        {
          '@type': 'Question',
          name: 'What vehicles do you use for the Amed transfer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use comfortable, clean and air-conditioned private vehicles such as Toyota Avanza and Toyota Innova, depending on availability and passenger requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I book my Amed airport transfer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend booking 12 to 24 hours before your arrival to secure your preferred vehicle and pickup time.',
          },
        },
      ],
    },
  ],
};

export default function AirportTransferAmedPage() {
  const whatsappUrl =
    'https://wa.me/6285738217365?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Airport%20Transfer%20to%20Amed.';

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* BREADCRUMB */}
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
            <span className="mx-2" aria-hidden="true">
              /
            </span>
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
            <span className="mx-2" aria-hidden="true">
              /
            </span>
          </li>

          <li
            aria-current="page"
            className="text-slate-900 font-medium"
          >
            Amed
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="w-full lg:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide">
            Private East Bali Airport Transfer
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bali Airport Transfer to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Amed
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Travel comfortably from Ngurah Rai International Airport to
            beautiful Amed in East Bali with a reliable private airport
            transfer. Enjoy a professional driver, comfortable vehicle,
            direct hotel drop-off, and a fixed price of IDR 750k.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={whatsappUrl}
              aria-label="Book airport transfer to Amed via WhatsApp"
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
              src="/images/fleet/Destinations2/amed.jpeg"
              alt="Amed Bali private airport transfer destination"
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

              <p className="text-sm font-semibold text-slate-900">
                Fixed Price Guarantee
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                ✓
              </div>

              <p className="text-sm font-semibold text-slate-900">
                Flight Monitoring
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                ✓
              </div>

              <p className="text-sm font-semibold text-slate-900">
                Door-to-Door Service
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* PRICING */}
      <section id="pricing" className="bg-slate-50 py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Fixed Price Bali Airport to Amed
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Enjoy a private and comfortable journey to East Bali with a
              transparent fixed price and no hidden booking fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Private Vehicle – Toyota Avanza / Innova
              </h3>

              <p className="text-slate-500 mb-6">
                A comfortable private vehicle for couples, families and
                small groups travelling from Bali Airport to Amed.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
                    Distance
                  </p>

                  <p className="text-lg font-semibold text-slate-900">
                    ~95 - 110 km
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
                    Duration
                  </p>

                  <p className="text-lg font-semibold text-slate-900">
                    2.5 - 3.5 Hours
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
                    Standard Luggage
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  'Meet & Greet at Bali Airport',
                  'Flight Arrival Monitoring',
                  'Fuel & Road Costs Included',
                  'Air-Conditioned Private Vehicle',
                  'Professional English-Speaking Driver',
                  'Direct Hotel or Villa Drop-Off',
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
                  750k
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-8">
                Per vehicle
              </p>

              <Link
                href={whatsappUrl}
                aria-label="Book your Amed airport transfer via WhatsApp"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors text-lg text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Transfer Bali for Your Amed Transfer
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            A long journey to East Bali is more comfortable when you have a
            reliable private driver waiting for you at the airport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Flight Monitoring',
              desc: 'We monitor your flight arrival so your driver can adjust the pickup time if your flight is delayed.',
            },
            {
              title: 'Fixed Transparent Price',
              desc: 'Your Amed airport transfer is available at a clear fixed price of IDR 750k per vehicle.',
            },
            {
              title: 'Airport Meet & Greet',
              desc: 'Your driver will meet you at the airport arrival area with a name sign and assist you with your luggage.',
            },
            {
              title: 'Comfortable Private Vehicle',
              desc: 'Relax in a clean, fully air-conditioned private vehicle during your journey across Bali to Amed.',
            },
            {
              title: 'Experienced Drivers',
              desc: 'Our drivers are familiar with Bali roads and the long journey toward the East Bali coastline.',
            },
            {
              title: '24/7 Booking Support',
              desc: 'Contact us through WhatsApp anytime to arrange your airport pickup or ask about your transfer.',
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

      {/* HOW IT WORKS */}
      <section className="bg-slate-900 py-24 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Your Airport Transfer to Amed Works
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              From landing at Bali Airport to arriving at your Amed hotel,
              our private transfer service keeps the journey simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Land at Bali Airport',
                desc: 'Arrive at Ngurah Rai International Airport, pass immigration and collect your luggage.',
              },
              {
                step: '02',
                title: 'Meet Your Driver',
                desc: 'Enter the arrival area and meet your private driver holding a sign with your name.',
              },
              {
                step: '03',
                title: 'Relax & Travel',
                desc: 'Your driver helps with your luggage and takes you directly toward East Bali.',
              },
              {
                step: '04',
                title: 'Arrive in Amed',
                desc: 'Enjoy a direct drop-off at your hotel, villa, resort or guesthouse in Amed.',
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

      {/* AMED GUIDE */}
      <article className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 w-full">
        <h2 className="text-4xl text-center mb-12">
          Amed Bali Airport Transfer Guide
        </h2>

        <p>
          Amed is one of Bali's most beautiful coastal destinations in East
          Bali, known for its peaceful fishing villages, black volcanic
          beaches, clear waters, coral reefs, and spectacular views of Mount
          Agung. For travelers arriving at Ngurah Rai International Airport,
          a private airport transfer is one of the most comfortable ways to
          reach Amed.
        </p>

        <p>
          The journey from Bali Airport to Amed takes approximately 2.5 to
          3.5 hours depending on traffic, weather and your exact destination.
          With a private transfer, you can travel directly from the airport
          to your hotel without changing vehicles or waiting for other
          passengers.
        </p>

        <h3>
          Why Visit Amed in East Bali?
        </h3>

        <p>
          Amed offers a quieter side of Bali away from the busy southern
          tourist areas. The region is particularly popular with travelers
          looking for snorkeling, diving, beautiful ocean views, local
          villages and a relaxed tropical atmosphere.
        </p>

        <div className="not-prose my-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Planning Your Trip to Amed?
          </h3>

          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Start your East Bali holiday comfortably with a private airport
            transfer from Ngurah Rai International Airport.
          </p>

          <Link
            href={whatsappUrl}
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-md"
          >
            Book Airport Transfer to Amed – IDR 750k
          </Link>
        </div>

        <h3>
          Popular Places and Experiences Around Amed
        </h3>

        <ol>
          <li>
            <strong>Amed Beach:</strong> Enjoy beautiful coastal scenery,
            traditional fishing boats and peaceful black-sand beaches.
          </li>

          <li>
            <strong>Japanese Shipwreck:</strong> A popular snorkeling and
            diving location close to the Amed coastline.
          </li>

          <li>
            <strong>Jemeluk Bay:</strong> One of the best-known areas around
            Amed for snorkeling, diving and sunset views.
          </li>

          <li>
            <strong>Mount Agung Views:</strong> On clear mornings, visitors
            can enjoy impressive views of Bali's highest volcano.
          </li>

          <li>
            <strong>Tirta Gangga:</strong> A beautiful former royal water
            palace located in the Karangasem region near Amed.
          </li>

          <li>
            <strong>Lempuyang Temple:</strong> One of East Bali's most famous
            temples, known for its mountain views and iconic gate.
          </li>
        </ol>

        <h3>
          Travel Tips for Amed
        </h3>

        <ul>
          <li>
            <strong>Long Journey:</strong> The drive from Bali Airport to
            Amed is considerably longer than transfers to southern Bali.
          </li>

          <li>
            <strong>Private Transfer:</strong> A private car provides a
            more comfortable journey because you can travel directly to
            your accommodation.
          </li>

          <li>
            <strong>Snorkeling & Diving:</strong> Amed is well known for
            its clear water and marine activities.
          </li>

          <li>
            <strong>East Bali:</strong> Consider combining Amed with
            nearby attractions such as Tirta Gangga and Lempuyang.
          </li>
        </ul>
      </article>
      <article className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 w-full">
        <h2 className="text-4xl text-center mb-12">
          Complete Guide to Traveling from Bali Airport to Amed
        </h2>

        <p>
          Amed is one of Bali's most beautiful coastal destinations in the
          northeast, known for its quiet fishing villages, black volcanic
          beaches, clear waters, coral reefs, and spectacular views of Mount
          Agung. For travelers arriving at Ngurah Rai International Airport,
          a private airport transfer to Amed is the most comfortable way to
          begin your journey.
        </p>

        <p>
          The journey from Bali Airport to Amed takes longer than transfers to
          southern Bali destinations, but the scenic drive through Bali's
          eastern countryside makes it a memorable experience. With a private
          vehicle and an experienced driver, you can travel directly from the
          airport to your hotel, villa, or beachfront accommodation in Amed.
        </p>

        <h3>Why Choose a Private Airport Transfer to Amed?</h3>

        <p>
          Amed is located in northeastern Bali, away from the main tourist
          areas around Kuta, Seminyak, and Canggu. Public transportation can
          be inconvenient, especially when traveling with luggage after a
          flight. A private airport taxi provides a direct door-to-door
          journey without the need to change vehicles.
        </p>

        <p>
          Our Bali Airport to Amed transfer service includes a private
          air-conditioned vehicle, professional driver, airport meet and
          greet, and flight monitoring. The price is fixed at{" "}
          <strong>IDR 750,000 per vehicle</strong>.
        </p>

        <div className="not-prose my-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Traveling from Bali Airport to Amed?
          </h3>

          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Book a comfortable private airport transfer and travel directly
            to your hotel or villa in Amed for a fixed price of IDR 750k.
          </p>

          <Link
            href={whatsappUrl}
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-md"
          >
            Book Airport Transfer to Amed — IDR 750k
          </Link>
        </div>

        <h3>Top Things to Do in Amed</h3>

        <ol>
          <li>
            <strong>Snorkeling in Amed:</strong> Explore colorful coral reefs
            and tropical marine life directly from several beaches around
            Amed.
          </li>

          <li>
            <strong>Japanese Shipwreck:</strong> Discover the famous shallow
            underwater wreck that has become a popular snorkeling and diving
            location.
          </li>

          <li>
            <strong>Jemeluk Bay:</strong> Enjoy clear water, coral reefs, and
            beautiful coastal scenery at one of Amed's most popular snorkeling
            spots.
          </li>

          <li>
            <strong>Mount Agung Views:</strong> On clear mornings, Amed offers
            impressive views toward Mount Agung, Bali's highest mountain.
          </li>

          <li>
            <strong>Amed Salt Farming:</strong> See traditional Balinese salt
            farmers producing sea salt using traditional methods.
          </li>

          <li>
            <strong>Diving:</strong> Amed is an excellent base for scuba diving
            and exploring Bali's eastern underwater landscapes.
          </li>
        </ol>

        <h3>Travel Tips for Your Amed Airport Transfer</h3>

        <ul>
          <li>
            <strong>Travel Time:</strong> The journey from Ngurah Rai
            International Airport to Amed can take several hours depending on
            traffic and road conditions.
          </li>

          <li>
            <strong>Comfort:</strong> A private air-conditioned vehicle makes
            the long journey considerably more comfortable, especially after
            an international flight.
          </li>

          <li>
            <strong>Luggage:</strong> Please let us know in advance if you are
            traveling with large amounts of luggage or diving equipment.
          </li>

          <li>
            <strong>Direct Drop-Off:</strong> Your driver can take you directly
            to your hotel, villa, resort, or accommodation in the Amed area.
          </li>

          <li>
            <strong>Booking:</strong> We recommend booking your Amed airport
            transfer in advance, especially during Bali's busy travel season.
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
              Everything you need to know about your Bali Airport to Amed
              private transfer.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How far is Amed from Bali Airport?",
                a: "Amed is located in northeastern Bali. The journey from Ngurah Rai International Airport usually takes several hours depending on traffic, weather, and the exact location of your accommodation.",
              },
              {
                q: "How much is a taxi from Bali Airport to Amed?",
                a: "Our private airport transfer from Bali Airport to Amed costs IDR 750,000 per vehicle. The price is fixed and there are no hidden charges.",
              },
              {
                q: "Is the IDR 750,000 price per person?",
                a: "No. The IDR 750,000 rate is per private vehicle, not per person. The vehicle can accommodate up to 4 passengers with standard luggage.",
              },
              {
                q: "Do you provide airport pickup in Amed transfers?",
                a: "Yes. Your driver will monitor your flight and wait for you at Ngurah Rai International Airport with a name sign in the arrival area.",
              },
              {
                q: "What happens if my flight is delayed?",
                a: "We monitor your flight status so your driver can adjust the pickup time according to your actual arrival.",
              },
              {
                q: "Can you take us directly to our hotel in Amed?",
                a: "Yes. We provide door-to-door private transfers directly to hotels, villas, resorts, and other accommodations in the Amed area.",
              },
              {
                q: "Is the Amed airport transfer available at night?",
                a: "Yes. Airport transfers are available 24/7, including early morning and late-night flight arrivals.",
              },
              {
                q: "Do I need to pay a deposit?",
                a: "No advance payment is required. You can arrange your booking through WhatsApp and pay your driver directly according to the agreed booking arrangement.",
              },
              {
                q: "What vehicle will be used for the transfer?",
                a: "We use comfortable, well-maintained and air-conditioned private vehicles such as Toyota Avanza and Toyota Innova, depending on availability and passenger requirements.",
              },
              {
                q: "Should I book my Amed transfer in advance?",
                a: "Yes. Booking 12 to 24 hours in advance is recommended, particularly during weekends, holidays, and Bali's busy travel periods.",
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
              Related Bali Airport Transfer Destinations
            </h2>

            <p className="text-slate-600 max-w-xl mx-auto">
              Explore other popular private airport transfer routes from
              Ngurah Rai International Airport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* AMED */}
            <Link
              href="/airport-transfer-amed"
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/fleet/Destinations2/amed.jpeg"
                  alt="Private airport transfer from Bali Airport to Amed"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="absolute top-3 right-3 bg-slate-900/85 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  IDR 750,000
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Amed
                </h3>

                <p className="text-sm text-slate-500 mb-4">
                  Private airport transfer
                </p>

                <span className="text-sm font-semibold text-emerald-600">
                  View Transfer Details →
                </span>
              </div>
            </Link>

            {/* BEDUGUL */}
            <Link
              href="/airport-transfer-bedugul"
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/fleet/Destinations2/bedugul.jpeg"
                  alt="Private airport transfer from Bali Airport to Bedugul"
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
                  Private mountain transfer
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
                  alt="Private airport transfer from Bali Airport to Padangbai"
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
                  Private airport transfer
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
                  alt="Private airport transfer from Bali Airport to Ubud"
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
                  Private airport transfer
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

            <Link
              href="/"
              className="hover:text-emerald-600 underline"
            >
              Home
            </Link>

            <Link
              href="/airport-transfer-amed"
              className="hover:text-emerald-600 underline"
            >
              Amed
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
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 py-20 text-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            Ready for Your Journey to Amed?
          </h2>

          <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Book your private airport transfer from Bali Airport to Amed
            today. Enjoy a fixed price of IDR 750k, a comfortable private
            vehicle, and a professional driver waiting for you at the airport.
          </p>

          <div className="pt-4">
            <Link
              href={whatsappUrl}
              className="inline-flex justify-center items-center gap-2 px-10 py-5 bg-white hover:bg-emerald-50 text-slate-900 rounded-2xl font-bold transition-all shadow-2xl text-lg"
            >
              Book Amed Airport Transfer
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

            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/airport-transfer-amed"
              className="hover:text-white"
            >
              Amed
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
              href={whatsappUrl}
              className="hover:text-white"
            >
              Contact Support
            </Link>

          </div>

          <div className="text-sm text-slate-500 text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Transfer Bali. All rights
              reserved.
            </p>

            <p className="mt-1">
              Bali Airport to Amed Private Transfer Service
            </p>
          </div>

        </div>
      </footer>
    </main>
  );
}