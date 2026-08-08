import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bali Airport Transfer to Padangbai | Private Taxi from DPS | Transfer Bali',
  description:
    'Book a reliable private Bali Airport Transfer to Padangbai from Ngurah Rai International Airport. Fixed price IDR 500k, professional English-speaking driver, flight monitoring and door-to-door service.',
  alternates: {
    canonical: 'https://transferbali.com/airport-transfer-padangbai',
  },
  openGraph: {
    title: 'Bali Airport Transfer to Padangbai | Private Taxi from DPS',
    description:
      'Private airport transfer from Bali Airport to Padangbai with fixed pricing, professional drivers, flight monitoring and comfortable air-conditioned vehicles.',
    url: 'https://transferbali.com/airport-transfer-padangbai',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/images/fleet/Destinations2/padangbai.jpeg',
        width: 1200,
        height: 800,
        alt: 'Private Bali Airport Transfer to Padangbai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Airport Transfer to Padangbai | Private Taxi from DPS',
    description:
      'Book a private airport transfer from Ngurah Rai Airport to Padangbai with a professional English-speaking driver.',
    images: [
      'https://transferbali.com/images/fleet/Destinations2/padangbai.jpeg',
    ],
  },
};

const whatsappUrl =
  'https://wa.me/6285738217365?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Airport%20Transfer%20to%20Padangbai.';

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
      name: 'Bali Airport Transfer to Padangbai',
      serviceType: 'Private Airport Transfer',
      provider: {
        '@id': 'https://transferbali.com/#localbusiness',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Padangbai',
      },
      description:
        'Private airport transfer from Ngurah Rai International Airport to Padangbai, Bali, with professional English-speaking drivers, flight monitoring and door-to-door service.',
      offers: {
        '@type': 'Offer',
        price: '500000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: 'https://transferbali.com/airport-transfer-padangbai',
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
          name: 'Airport Transfer to Padangbai',
          item: 'https://transferbali.com/airport-transfer-padangbai',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How far is Padangbai from Bali Airport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Padangbai is approximately 55 to 65 kilometers from Ngurah Rai International Airport. The journey usually takes around 90 to 120 minutes depending on traffic and road conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much is a taxi from Bali Airport to Padangbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Our private Bali Airport Transfer to Padangbai costs IDR 500,000 per vehicle. The price is fixed and includes the private vehicle, professional driver, fuel and airport pickup service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide airport pickup in Padangbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Your driver will meet you at the designated airport arrival area with a name sign and assist with your luggage before taking you directly to Padangbai.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my flight is delayed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'We monitor your flight schedule so the driver can adjust the pickup time when your flight is delayed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you take us directly to our hotel in Padangbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Our private airport transfer provides door-to-door service to hotels, villas, guesthouses and other accommodations in the Padangbai area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you operate Bali Airport transfers at night?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Airport transfers are available 24 hours a day, subject to vehicle availability.',
          },
        },
        {
          '@type': 'Question',
          name: 'What vehicles are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'We use comfortable, air-conditioned private vehicles such as Toyota Avanza and Toyota Innova depending on passenger and luggage requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to pay a deposit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'No advance deposit is normally required. Booking can be arranged through WhatsApp and payment can be made directly to the driver.',
          },
        },
      ],
    },
  ],
};

export default function AirportTransferPadangbaiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-7xl px-4 py-4 text-sm text-slate-500 sm:px-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-2">
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
            Padangbai
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-16">
        <div className="z-10 w-full space-y-7 lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Private Bali Airport Transfer
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Bali Airport Transfer to{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Padangbai
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            Travel comfortably from Ngurah Rai International Airport (DPS)
            to Padangbai with a reliable private airport transfer. Enjoy
            fixed pricing, professional English-speaking drivers and
            convenient door-to-door service.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={whatsappUrl}
              aria-label="Book Bali Airport Transfer to Padangbai via WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Book via WhatsApp
            </Link>

            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50"
            >
              View Fixed Price
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Fixed Price
              </p>
              <p className="mt-1 text-xs text-slate-500">
                No hidden fees
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Flight Monitoring
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Pickup adjustment
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Door-to-Door
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Direct hotel drop-off
              </p>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
            <Image
              src="/images/fleet/Destinations2/padangbai.jpeg"
              alt="Bali Airport Transfer to Padangbai private car service"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:left-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Fixed Airport Rate
            </p>

            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-slate-500">
                IDR
              </span>
              <span className="text-3xl font-extrabold text-slate-900">
                500k
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Private vehicle
            </p>
          </div>
        </div>
      </header>

      {/* PRICING */}
      <section
        id="pricing"
        className="w-full bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Simple & Transparent
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Fixed Price Bali Airport to Padangbai
            </h2>

            <p className="mt-4 text-slate-600">
              One private vehicle, one clear price and a comfortable
              door-to-door transfer from DPS Airport to Padangbai.
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl md:flex-row">
            <div className="p-8 md:w-2/3 md:p-12">
              <div className="mb-7">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  Private Airport Transfer
                </p>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  Bali Airport → Padangbai
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  A comfortable private transfer for couples, families and
                  small groups travelling from Ngurah Rai International
                  Airport to Padangbai.
                </p>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Distance
                  </p>
                  <p className="mt-2 font-bold text-slate-900">
                    ~55–65 km
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Journey
                  </p>
                  <p className="mt-2 font-bold text-slate-900">
                    90–120 mins
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Passengers
                  </p>
                  <p className="mt-2 font-bold text-slate-900">
                    Up to 4 Pax
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Service
                  </p>
                  <p className="mt-2 font-bold text-slate-900">
                    Private
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  'Airport meet & greet',
                  'Flight delay monitoring',
                  'Private air-conditioned vehicle',
                  'Professional English-speaking driver',
                  'Direct hotel or villa drop-off',
                  'Fuel included',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center bg-slate-950 p-8 text-center md:w-1/3 md:p-12">
              <p className="text-sm font-semibold text-slate-400">
                Fixed Rate
              </p>

              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-lg font-medium text-slate-400">
                  IDR
                </span>

                <span className="text-5xl font-extrabold tracking-tight text-white">
                  500k
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-400">
                per private vehicle
              </p>

              <Link
                href={whatsappUrl}
                className="mt-8 w-full rounded-xl bg-emerald-500 px-6 py-4 font-bold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                Book Padangbai Transfer
              </Link>

              <p className="mt-4 text-xs text-slate-500">
                No hidden booking fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Why Travel With Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A Better Way to Travel from Bali Airport to Padangbai
            </h2>

            <p className="mt-4 text-slate-600">
              Skip the uncertainty of finding transportation after your
              flight. Pre-book a private vehicle and travel directly to
              your destination.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Fixed Transparent Pricing',
                desc: 'Know your transfer price before you travel. No surge pricing or unexpected airport charges.',
              },
              {
                title: 'Flight Monitoring',
                desc: 'We monitor your flight information so your pickup can be adjusted when your arrival time changes.',
              },
              {
                title: 'Private Vehicle',
                desc: 'Travel privately with your own air-conditioned vehicle instead of sharing with other passengers.',
              },
              {
                title: 'Professional Driver',
                desc: 'Our local drivers know Bali roads and provide a comfortable and reliable journey to Padangbai.',
              },
              {
                title: 'Door-to-Door Service',
                desc: 'We take you directly from the airport to your hotel, villa or accommodation in Padangbai.',
              },
              {
                title: '24/7 Airport Service',
                desc: 'Early morning or late-night arrival? Airport pickup can be arranged around your flight schedule.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl font-bold text-emerald-600">
                  ✓
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PRICING */}
      <section id="pricing" className="bg-slate-50 py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
              Simple & Transparent Pricing
            </span>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Bali Airport Transfer to Padangbai
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Enjoy a comfortable private transfer from Ngurah Rai International
              Airport to Padangbai with a fixed price of IDR 500,000 per vehicle.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-3">

              <div className="lg:col-span-2 p-8 lg:p-12">

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Private Airport Transfer
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8">
                  Travel directly from Bali Airport to Padangbai without sharing
                  the vehicle with other passengers. Your professional driver
                  will meet you at the airport and take you directly to your
                  hotel, villa, guesthouse or Padangbai harbour.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Distance
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      ~55 km
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Duration
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      75–90 mins
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Passengers
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      Up to 4
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Service
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                      Private
                    </p>
                  </div>

                </div>

                <div className="space-y-4">

                  {[
                    "Meet & greet at Bali Airport arrivals",
                    "Private air-conditioned vehicle",
                    "Professional English-speaking driver",
                    "Flight delay monitoring",
                    "Direct hotel or harbour drop-off",
                    "Fuel and parking costs included"
                  ].map((item, index) => (

                    <div key={index} className="flex items-center gap-3">

                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-slate-600">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              <div className="bg-slate-900 p-8 lg:p-10 flex flex-col justify-center items-center text-center">

                <p className="text-slate-400 font-medium mb-2">
                  Fixed Price
                </p>

                <div className="text-white flex items-baseline mb-2">
                  <span className="text-xl mr-2">
                    IDR
                  </span>

                  <span className="text-5xl font-extrabold">
                    500k
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-8">
                  Per private vehicle
                </p>

                <Link
                  href={whatsappUrl}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all text-lg shadow-lg"
                >
                  Book Now
                </Link>

                <p className="text-xs text-slate-500 mt-4">
                  No hidden charges
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white w-full">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Private Airport Transfer
            </span>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Why Book Our Padangbai Airport Transfer?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A convenient and reliable way to travel from Bali Airport to
              Padangbai, especially for travellers continuing to the Gili Islands.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {[
              {
                title: "Meet & Greet",
                text: "Your driver will wait for you at the airport arrivals area with a clear name sign."
              },
              {
                title: "Fixed IDR 500k Price",
                text: "Know your transfer cost before travelling with a simple fixed price and no surprise surcharges."
              },
              {
                title: "Private Vehicle",
                text: "Enjoy the entire vehicle privately with your family, friends or travel companions."
              },
              {
                title: "Flight Monitoring",
                text: "We monitor your flight schedule so your driver can adjust the pickup time if your flight is delayed."
              },
              {
                title: "Direct to Padangbai",
                text: "Travel directly from Ngurah Rai Airport to your hotel, accommodation or Padangbai harbour."
              },
              {
                title: "Experienced Driver",
                text: "Our local drivers know Bali roads and can help make your journey comfortable and stress-free."
              }
            ].map((feature, index) => (

              <div
                key={index}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all"
              >

                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">

                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* PADANGBAI TRAVEL GUIDE */}
      <article className="py-24 bg-slate-50 w-full">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="prose prose-lg prose-slate max-w-none">

            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 text-center mb-10">
              Bali Airport to Padangbai: Complete Transfer Guide
            </h2>

            <p>
              Padangbai is one of the most important coastal ports in eastern
              Bali and a popular departure point for travellers heading to
              Lombok and the Gili Islands. For visitors arriving at Ngurah Rai
              International Airport, booking a private
              <strong> Bali Airport Transfer to Padangbai </strong>
              provides a convenient way to continue the journey without
              changing vehicles.
            </p>

            <p>
              The journey from Bali Airport to Padangbai usually takes around
              75 to 90 minutes, depending on traffic and road conditions.
              With a private transfer, you can travel directly to your
              accommodation or Padangbai harbour.
            </p>

            <h3>
              How far is Padangbai from Bali Airport?
            </h3>

            <p>
              Padangbai is approximately 55 kilometres from Ngurah Rai
              International Airport. Driving time normally takes around
              75 to 90 minutes, although actual travel time can vary depending
              on Bali traffic.
            </p>

            <h3>
              Why choose a private transfer to Padangbai?
            </h3>

            <p>
              A private airport transfer is particularly useful when you have
              luggage, are travelling with family or friends, or need to reach
              the harbour in time for a ferry or fast boat departure.
            </p>

            <p>
              Instead of arranging several different taxis or public
              transportation options, your private driver takes you directly
              from the airport to your destination.
            </p>

            <div className="not-prose my-12 rounded-3xl bg-emerald-900 p-8 lg:p-10 text-center">

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Going to Padangbai After Landing in Bali?
              </h3>

              <p className="text-emerald-100 max-w-2xl mx-auto mb-7">
                Reserve your private airport transfer in advance and enjoy a
                smooth journey from Ngurah Rai International Airport to
                Padangbai.
              </p>

              <Link
                href={whatsappUrl}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-emerald-50 transition-all"
              >
                Book Padangbai Transfer — IDR 500k
              </Link>

            </div>

            <h3>
              Padangbai and Gili Islands Connection
            </h3>

            <p>
              Many international visitors use Padangbai as a starting point
              for trips to the Gili Islands and Lombok. If you are arriving
              at Bali Airport and continuing by boat, a pre-booked private
              transfer can make the connection much easier.
            </p>

            <p>
              We recommend allowing enough time between your airport arrival
              and boat departure because traffic conditions in Bali can vary,
              particularly during busy travel periods.
            </p>

          </div>

        </div>

      </article>


      {/* HOW IT WORKS */}
      <section className="bg-slate-900 py-24 text-white w-full">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              How Your Padangbai Airport Transfer Works
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              From landing at Bali Airport to arriving safely in Padangbai,
              our simple process keeps your journey stress-free.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              {
                number: "01",
                title: "Book Online",
                text: "Send us your flight details, arrival time and destination."
              },
              {
                number: "02",
                title: "Land at DPS",
                text: "Collect your luggage and proceed to the airport arrival hall."
              },
              {
                number: "03",
                title: "Meet Your Driver",
                text: "Your driver will be waiting with your name sign."
              },
              {
                number: "04",
                title: "Enjoy the Ride",
                text: "Relax in your private air-conditioned vehicle to Padangbai."
              }
            ].map((step, index) => (

              <div key={index} className="text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center text-2xl font-extrabold mb-6">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FAQ */}
      <section className="py-24 bg-white w-full">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-600">
              Common questions about our Bali Airport to Padangbai transfer.
            </p>

          </div>

          <div className="space-y-5">

            {[
              {
                q: "How much is a private taxi from Bali Airport to Padangbai?",
                a: "Our fixed price for a private airport transfer from Ngurah Rai International Airport to Padangbai is IDR 500,000 per vehicle."
              },
              {
                q: "How long does Bali Airport to Padangbai take?",
                a: "The journey normally takes around 75 to 90 minutes, depending on traffic and road conditions."
              },
              {
                q: "Can you take us directly to Padangbai Harbour?",
                a: "Yes. We can take you directly from Bali Airport to Padangbai Harbour or to your hotel, villa or accommodation in the Padangbai area."
              },
              {
                q: "Do you monitor delayed flights?",
                a: "Yes. We can monitor your flight information so the driver can adjust the pickup time if your flight is delayed."
              },
              {
                q: "How many passengers can travel in one car?",
                a: "Our standard private vehicle is suitable for up to 4 passengers with standard luggage."
              },
              {
                q: "Is the transfer available at night?",
                a: "Yes. Airport transfers can be arranged 24 hours a day, subject to vehicle availability."
              },
              {
                q: "Do I need to pay a deposit?",
                a: "No advance deposit is normally required. Booking can be arranged through WhatsApp."
              }
            ].map((faq, index) => (

              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {faq.q}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* RELATED DESTINATIONS */}
      <section className="py-24 bg-slate-50 w-full">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Popular Bali Airport Transfer Routes
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore other private airport transfer destinations across Bali.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                name: "Bedugul",
                price: "IDR 550,000",
                href: "/airport-transfer-bedugul",
                image: "/images/fleet/Destinations2/bedugul.jpeg"
              },
              {
                name: "Ubud",
                price: "IDR 350,000",
                href: "/airport-transfer-ubud",
                image: "/images/fleet/Destinations2/ubud.jpeg"
              },
              {
                name: "Canggu",
                price: "IDR 250,000",
                href: "/airport-transfer-canggu",
                image: "/images/fleet/Destinations2/canggu.jpeg"
              }
            ].map((destination, index) => (

              <Link
                key={index}
                href={destination.href}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
              >

                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={destination.image}
                    alt={`Bali Airport Transfer to ${destination.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute top-4 right-4 bg-slate-900/90 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {destination.price}
                  </div>

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Airport Transfer to {destination.name}
                  </h3>

                  <span className="inline-block mt-4 text-emerald-600 font-semibold">
                    View Transfer Details →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 py-24 text-white w-full">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Ready to Travel from Bali Airport to Padangbai?
          </h2>

          <p className="text-emerald-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-9">
            Book your private airport transfer for only
            <strong className="text-white"> IDR 500,000 </strong>
            per vehicle and enjoy a comfortable journey with a local driver.
          </p>

          <Link
            href={whatsappUrl}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl"
          >
            Book via WhatsApp
          </Link>

          <p className="text-emerald-200 text-sm mt-5">
            Private • Reliable • Fixed Price • Airport Pickup
          </p>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-14 w-full">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div className="text-center md:text-left">

              <div className="text-2xl font-extrabold text-white mb-2">
                Transfer Bali
              </div>

              <p className="text-sm max-w-md">
                Private Bali airport transfers with professional local drivers,
                fixed prices and reliable airport pickup service.
              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">

              <Link href="/" className="hover:text-white transition-colors">
                Home
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
                href="/airport-transfer-canggu"
                className="hover:text-white transition-colors"
              >
                Canggu
              </Link>

              <Link
                href={whatsappUrl}
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </Link>

            </div>

          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Transfer Bali. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}