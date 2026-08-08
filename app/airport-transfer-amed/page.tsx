import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bali Airport Transfer to Amed | Private Taxi & Car Transfer | Transfer Bali',
  description:
    'Book a reliable private airport transfer from Ngurah Rai International Airport to Amed. Fixed price IDR 750k, professional English-speaking driver, private air-conditioned car and 24/7 service.',
  alternates: {
    canonical: 'https://transferbali.com/airport-transfer-amed',
  },
  openGraph: {
    title: 'Bali Airport Transfer to Amed | Private Taxi & Car Transfer',
    description:
      'Private airport transfer from Bali Airport to Amed with fixed pricing, professional drivers and comfortable private vehicles.',
    url: 'https://transferbali.com/airport-transfer-amed',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/image/fleet/Destinations2/amed.jpeg',
        width: 1200,
        height: 630,
        alt: 'Private airport transfer from Bali Airport to Amed',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Airport Transfer to Amed | Transfer Bali',
    description:
      'Book a private airport transfer from Ngurah Rai International Airport to Amed with a professional English-speaking driver.',
    images: ['https://transferbali.com/image/fleet/Destinations2/amed.jpeg'],
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
        name: 'Amed, Bali',
      },
      description:
        'Private airport transfer from Ngurah Rai International Airport to Amed, Bali with meet and greet service, luggage assistance and comfortable air-conditioned vehicles.',
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

      {/* Breadcrumb */}
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
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

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
            the beautiful coastal village of Amed in East Bali. Enjoy a
            private airport transfer with an experienced English-speaking
            driver, comfortable air-conditioned vehicle and fixed pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={whatsappUrl}
              aria-label="Book airport transfer to Amed via WhatsApp"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.05-.371-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
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

        {/* HERO IMAGE */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100">
            <Image
              src="/image/fleet/Destinations2/amed.jpeg"
              alt="Private airport transfer from Bali Airport to Amed East Bali"
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
                Flight Monitoring
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
                Meet &amp; Greet Service
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* PRICING */}
      <section
        id="pricing"
        className="bg-slate-50 py-20 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Fixed Price Bali Airport Transfer to Amed
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Enjoy a private and comfortable transfer from Ngurah Rai
              International Airport to Amed with a clear fixed price and
              no hidden charges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Private Vehicle — Toyota Avanza / Innova
              </h3>

              <p className="text-slate-500 mb-6">
                A comfortable private car with air conditioning,
                professional driver and enough space for passengers and
                standard luggage.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">
                    Distance
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    ~ 100 km
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
                    Up to 4 Suitcases
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  'Meet & Greet inside Arrivals Hall',
                  'Complimentary Flight Monitoring',
                  'Fuel & Road Fees Included',
                  'Air-Conditioned Private Vehicle',
                  'Professional English-Speaking Driver',
                  'Direct Hotel or Villa Drop-Off in Amed',
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
                <span className="text-xl mr-1">
                  IDR
                </span>

                <span className="text-5xl font-bold tracking-tight">
                  750k
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-8">
                Per vehicle, all inclusive
              </p>

              <Link
                href={whatsappUrl}
                aria-label="Book your Amed airport transfer via WhatsApp"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
            Travel from Bali Airport to East Bali with a private transfer
            designed for comfort, reliability and a stress-free journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Real-Time Flight Monitoring',
              desc: 'We monitor your arrival flight so your driver can adjust the pickup time if your flight is delayed.',
              icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0z',
            },
            {
              title: 'Fixed Transparent Price',
              desc: 'Pay a clear fixed price of IDR 750k per vehicle without worrying about surge pricing or unexpected charges.',
              icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0z',
            },
            {
              title: 'Airport Meet & Greet',
              desc: 'Your professional driver will meet you inside the airport arrival area with a clear name sign.',
              icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5',
            },
            {
              title: 'Comfortable Private Fleet',
              desc: 'Travel in a clean, well-maintained and fully air-conditioned private vehicle throughout the journey.',
              icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
            },
            {
              title: 'Experienced Bali Drivers',
              desc: 'Our drivers know the roads to Amed and provide a safe, comfortable and professional transfer experience.',
              icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
            },
            {
              title: '24/7 WhatsApp Support',
              desc: 'Contact our team anytime before your trip if you need help with your airport pickup or booking.',
              icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
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
                    d={feature.icon}
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
              Enjoy a simple and stress-free journey from Ngurah Rai
              International Airport to Amed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div
              className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0"
              aria-hidden="true"
            ></div>

            {[
              {
                step: '01',
                title: 'Flight Lands',
                desc: 'Arrive at Ngurah Rai International Airport, complete immigration and collect your luggage.',
              },
              {
                step: '02',
                title: 'Meet Your Driver',
                desc: 'Enter the arrival hall and look for your professional driver holding your name sign.',
              },
              {
                step: '03',
                title: 'Luggage Assistance',
                desc: 'Your driver will assist with your luggage and escort you to your private air-conditioned vehicle.',
              },
              {
                step: '04',
                title: 'Drive to Amed',
                desc: 'Relax and enjoy the scenic journey from Bali Airport through the beautiful landscapes of East Bali.',
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

      {/* SEO CONTENT */}
      <article className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-emerald-600 w-full">
        <h2 className="text-4xl text-center mb-12">
          Bali Airport Transfer to Amed: Private East Bali Transportation
        </h2>

        <p>
          Amed is one of Bali's most beautiful coastal destinations,
          located on the eastern side of the island. Known for its
          peaceful beaches, traditional fishing villages, coral reefs
          and spectacular views of Mount Agung, Amed is an excellent
          destination for travelers looking for a quieter side of Bali.
        </p>

        <p>
          Booking a private{' '}
          <Link
            href="/airport-transfer-amed"
            title="Bali Airport Transfer to Amed"
          >
            Bali airport transfer to Amed
          </Link>{' '}
          is one of the easiest ways to travel from Ngurah Rai
          International Airport directly to your hotel, villa or
          beachfront accommodation.
        </p>

        <p>
          With Transfer Bali, you can enjoy a comfortable private
          vehicle, an experienced English-speaking driver and a fixed
          price of <strong>IDR 750k per vehicle</strong>. There is no
          need to wait for a shared shuttle or negotiate with taxi
          drivers after landing.
        </p>

        <h3>Why Visit Amed in East Bali?</h3>

        <p>
          Amed offers a completely different atmosphere from the busy
          southern areas of Bali. The area is famous for its relaxed
          coastal villages, traditional salt farming, beautiful
          underwater scenery and dramatic views of Mount Agung.
        </p>

        <p>
          Amed is also popular with travelers interested in snorkeling
          and diving. Several locations along the coast provide easy
          access to colorful coral reefs and marine life.
        </p>

        <div className="not-prose my-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Traveling from Bali Airport to Amed?
          </h3>

          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Reserve your private airport transfer and enjoy a
            comfortable journey to East Bali with a professional
            driver.
          </p>

          <Link
            href={whatsappUrl}
            aria-label="Book airport transfer from Bali Airport to Amed"
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-md"
          >
            Book Amed Airport Transfer — IDR 750k
          </Link>
        </div>

        <h3>Popular Places and Experiences Around Amed</h3>

        <p>
          Amed and the surrounding East Bali region offer many
          interesting places to visit. Some popular attractions include:
        </p>

        <ol>
          <li>
            <strong>Amed Beach:</strong> Enjoy the peaceful coastline,
            traditional fishing boats and beautiful sunrise views.
          </li>

          <li>
            <strong>Jemeluk Bay:</strong> A popular snorkeling and diving
            location with colorful coral reefs and clear water.
          </li>

          <li>
            <strong>Japanese Shipwreck:</strong> Explore a historic
            underwater wreck that has become a popular diving site.
          </li>

          <li>
            <strong>USS Liberty Shipwreck:</strong> Located near
            Tulamben, this world-famous diving site is easily accessible
            from Amed.
          </li>

          <li>
            <strong>Lempuyang Temple:</strong> Visit the famous temple
            complex known for its spectacular mountain views.
          </li>

          <li>
            <strong>Tirta Gangga:</strong> Explore the beautiful royal
            water palace surrounded by gardens, ponds and fountains.
          </li>

          <li>
            <strong>Sidemen:</strong> Discover traditional villages,
            rice terraces and peaceful countryside landscapes nearby.
          </li>

          <li>
            <strong>Mount Agung:</strong> Enjoy spectacular views of
            Bali's highest mountain from many locations around East
            Bali.
          </li>
        </ol>

        <h3>Travel Tips for Your Amed Airport Transfer</h3>

        <p>
          The journey from Bali Airport to Amed is considerably longer
          than transfers to southern Bali destinations. Booking a
          private vehicle makes the journey more comfortable,
          particularly for travelers carrying several suitcases.
        </p>

        <ul>
          <li>
            <strong>Book in advance:</strong> Reserve your transfer
            before arriving in Bali to secure your preferred pickup
            time.
          </li>

          <li>
            <strong>Bring comfortable clothing:</strong> Amed has a
            warm tropical climate, especially during the daytime.
          </li>

          <li>
            <strong>Allow enough travel time:</strong> The journey can
            take approximately 2.5 to 3.5 hours depending on traffic,
            road conditions and your exact destination.
          </li>

          <li>
            <strong>Choose a private transfer:</strong> A private car
            gives you a direct door-to-door journey without additional
            passenger stops.
          </li>
        </ul>
      </article>

      {/* FAQ */}
      <section className="bg-slate-50 py-24 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions About Amed Airport Transfer
            </h2>

            <p className="text-slate-600">
              Everything you need to know about travelling from Bali
              Airport to Amed.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How far is Amed from Bali Airport?',
                a: 'Amed is approximately 95 to 110 kilometers from Ngurah Rai International Airport depending on the exact destination. The journey usually takes around 2.5 to 3.5 hours depending on traffic and road conditions.',
              },
              {
                q: 'How much is a private taxi from Bali Airport to Amed?',
                a: 'Our private airport transfer from Bali Airport to Amed is IDR 750,000 per vehicle. The price is fixed and designed for up to 4 passengers with standard luggage.',
              },
              {
                q: 'Is the Bali Airport to Amed transfer available 24/7?',
                a: 'Yes. Our private airport transfer service operates 24/7, including early morning and late-night flight arrivals.',
              },
              {
                q: 'Will the driver wait if my flight is delayed?',
                a: 'Yes. We monitor your flight information so the driver can adjust the pickup time when your flight is delayed.',
              },
              {
                q: 'Where will I meet my driver at Bali Airport?',
                a: 'Your driver will meet you in the main arrival area after you have completed immigration and collected your luggage. The driver will hold a sign with your name.',
              },
              {
                q: 'Can you take us directly to our hotel in Amed?',
                a: 'Yes. We provide direct door-to-door transportation to hotels, villas, resorts and other accommodations throughout the Amed area.',
              },
              {
                q: 'How many passengers can travel in the private car?',
                a: 'Our standard private vehicle can accommodate up to 4 passengers with standard luggage.',
              },
              {
                q: 'Do you use air-conditioned vehicles?',
                a: 'Yes. All private airport transfers use clean, comfortable and fully air-conditioned vehicles.',
              },
              {
                q: 'Do I need to pay a deposit?',
                a: 'No advance payment is required for standard bookings. You can arrange your booking through WhatsApp and pay the driver according to the agreed payment method.',
              },
              {
                q: 'How early should I book my Amed airport transfer?',
                a: 'We recommend booking 12 to 24 hours before your arrival whenever possible. Earlier bookings are recommended during busy travel periods.',
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
              Explore other private airport transfer routes from
              Ngurah Rai International Airport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Amed',
                price: 'IDR 750,000',
                time: '2.5-3.5 hours',
                href: '/airport-transfer-amed',
                image: '/image/fleet/Destinations2/amed.jpeg',
              },
              {
                name: 'Bedugul',
                price: 'IDR 550,000',
                time: '90-120 mins',
                href: '/airport-transfer-bedugul',
                image: '/image/fleet/Destinations2/bedugul.jpeg',
              },
              {
                name: 'Ubud',
                price: 'IDR 350,000',
                time: '60-90 mins',
                href: '/airport-transfer-ubud',
                image: '/image/fleet/Destinations2/ubud.jpeg',
              },
              {
                name: 'Padangbai',
                price: 'IDR 500,000',
                time: '75-90 mins',
                href: '/airport-transfer-padangbai',
                image: '/image/fleet/Destinations2/padangbai.jpeg',
              },
            ].map((dest, i) => (
              <Link
                key={i}
                href={dest.href}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={dest.image}
                    alt={`Private airport transfer to ${dest.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />

                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {dest.price}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1">
                      {dest.name}
                    </h3>

                    <p className="text-sm text-slate-500 mb-4">
                      Duration: {dest.time}
                    </p>
                  </div>

                  <span className="inline-flex items-center text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    View Transfer Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">
              Explore More Routes:
            </span>

            <Link
              href="/"
              className="hover:text-emerald-600 underline underline-offset-2"
            >
              Home
            </Link>

            <span>•</span>

            <Link
              href="/airport-transfer-amed"
              className="hover:text-emerald-600 underline underline-offset-2"
            >
              Amed
            </Link>

            <span>•</span>

            <Link
              href="/airport-transfer-bedugul"
              className="hover:text-emerald-600 underline underline-offset-2"
            >
              Bedugul
            </Link>

            <span>•</span>

            <Link
              href="/airport-transfer-padangbai"
              className="hover:text-emerald-600 underline underline-offset-2"
            >
              Padangbai
            </Link>

            <span>•</span>

            <Link
              href="/airport-transfer-ubud"
              className="hover:text-emerald-600 underline underline-offset-2"
            >
              Ubud
            </Link>

            <span>•</span>

            <Link
              href="/airport-transfer-canggu"
              className="hover:text-emerald-600 underline underline-offset-2"
            >
              Canggu
            </Link>

            <span>•</span>

            <Link
              href="/airport-transfer-seminyak"
              className="hover:text-emerald-600 underline underline-offset-2"
            >
              Seminyak
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 py-20 text-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            Ready for Your Journey to Amed?
          </h2>

          <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Book your private airport transfer from Bali Airport to Amed
            today. Enjoy a fixed price of IDR 750k, a comfortable
            private vehicle and a professional driver.
          </p>

          <div className="pt-4">
            <Link
              href={whatsappUrl}
              aria-label="Book your Amed airport transfer via WhatsApp"
              className="inline-flex justify-center items-center gap-2 px-10 py-5 bg-white hover:bg-emerald-50 text-slate-900 rounded-2xl font-bold transition-all shadow-2xl text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413" />
              </svg>

              Book via WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-2xl font-bold text-white tracking-tight">
              Transfer Bali
            </span>

            <p className="text-sm text-slate-400 max-w-sm">
              Your trusted partner for safe, reliable and fixed-price
              private airport transfers throughout Bali.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              href="/airport-transfer-amed"
              className="hover:text-white transition-colors"
            >
              Amed
            </Link>

            <Link
              href="/airport-transfer-bedugul"
              className="hover:text-white transition-colors"
            >
              Bedugul
            </Link>

            <Link
              href="/airport-transfer-padangbai"
              className="hover:text-white transition-colors"
            >
              Padangbai
            </Link>

            <Link
              href="/airport-transfer-ubud"
              className="hover:text-white transition-colors"
            >
              Ubud
            </Link>

            <Link
              href={whatsappUrl}
              className="hover:text-white transition-colors"
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
              Ngurah Rai International Airport Transfer Specialists
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}