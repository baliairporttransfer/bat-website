import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Airport Transfer to Padangbai | Fixed Price IDR 500,000 | Transfer Bali',
  description: 'Book a private airport transfer from Ngurah Rai Airport to Padangbai Harbour starting at IDR 550,000. Enjoy a reliable, comfortable, and prompt ride with professional drivers.',
  keywords: ['airport transfer padangbai', 'bali airport to padangbai taxi', 'private driver bali airport padangbai', 'transfer bali'],
  openGraph: {
    title: 'Airport Transfer to Padangbai | Transfer Bali',
    description: 'Private airport transfer from Ngurah Rai Airport to Padangbai. Fixed price IDR 550,000.',
    url: 'https://transferbali.com/airport-transfer-padangbai',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/images/padangbai-transfer.jpg',
        width: 1200,
        height: 630,
        alt: 'Airport Transfer to Padangbai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PadangbaiTransferPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Transfer Bali',
    image: 'https://transferbali.com/images/logo.png',
    '@id': 'https://transferbali.com',
    url: 'https://transferbali.com',
    telephone: '+6285738217365',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ngurah Rai International Airport',
      addressLocality: 'Badung',
      addressRegion: 'Bali',
      postalCode: '80361',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.7482,
      longitude: 115.1672,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: ['https://www.facebook.com/transferbali', 'https://www.instagram.com/transferbali'],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much is the airport transfer from Bali Airport to Padangbai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The fixed price for a private airport transfer from Ngurah Rai Airport to Padangbai is IDR 550,000 with no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to travel from Bali Airport to Padangbai Harbour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The journey from Bali Airport to Padangbai typically takes around 1.5 to 2 hours depending on traffic conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where will I meet my driver at the airport?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our professional driver will be waiting at the arrival hall holding a clear sign with your name on it.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the driver drop me off directly at the fast boat counter or harbour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our driver will drop you off right at your designated fast boat office, ferry terminal, or hotel in Padangbai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the price per person or per car?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The price of IDR 550,000 is per car (up to 4-5 passengers with standard luggage), not per person.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to pay a deposit in advance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No advance deposit is required. You can pay securely directly to the driver upon arrival at Padangbai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are flight delays monitored?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we track your flight status in real-time to ensure our driver is ready when you land, even if your flight is delayed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What type of vehicles are used for the transfer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide modern, air-conditioned, clean, and well-maintained vehicles suitable for comfortable travel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is luggage space included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, standard luggage capacity is included in the fixed price. Please inform us if you carry large surfboards or extra gear.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I book my transfer to Padangbai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can easily book instantly via WhatsApp at +6285738217365 or through our online booking form.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-4 text-sm text-slate-500">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><span>/</span></li>
            <li><Link href="/airport-transfer" className="hover:text-blue-600">Airport Transfer</Link></li>
            <li><span>/</span></li>
            <li className="text-slate-800 font-medium" aria-current="page">Padangbai</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/padangbai-transfer.jpg"
              alt="Padangbai Harbour Bali"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Trusted Airport Transfer
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-4 mb-6">
              Ngurah Rai Airport to Padangbai Transfer
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto text-slate-300 mb-8">
              Seamless private car transfer from Bali Airport straight to Padangbai Harbour or your hotel. Fixed price, professional driver, perfect for your Gili Islands trip.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6285738217365?text=Hello%20Transfer%20Bali,%20I%20want%20to%20book%20an%20airport%20transfer%20to%20Padangbai%20for%20IDR%20550,000."
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <span>Book via WhatsApp (+62 857-3821-7365)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Fixed Price & Quick Details */}
        <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10 mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
              <span className="text-slate-400 text-sm block uppercase tracking-wider font-medium">Fixed Price</span>
              <span className="text-3xl font-extrabold text-blue-600">IDR 550,000</span>
              <span className="text-xs text-slate-500 block mt-1">Per car (All inclusive)</span>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
              <span className="text-slate-400 text-sm block uppercase tracking-wider font-medium">Distance</span>
              <span className="text-3xl font-extrabold text-slate-800">~55 km</span>
              <span className="text-xs text-slate-500 block mt-1">East Bali Route</span>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
              <span className="text-slate-400 text-sm block uppercase tracking-wider font-medium">Travel Time</span>
              <span className="text-3xl font-extrabold text-slate-800">1.5 - 2 Hours</span>
              <span className="text-xs text-slate-500 block mt-1">Depending on traffic</span>
            </div>
            <div>
              <span className="text-slate-400 text-sm block uppercase tracking-wider font-medium">Vehicle Capacity</span>
              <span className="text-3xl font-extrabold text-slate-800">1 - 5 Persons</span>
              <span className="text-xs text-slate-500 block mt-1">With standard luggage</span>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Transfer Bali for Your Padangbai Journey?</h2>
            <p className="text-slate-600">Whether you are catching a fast boat to Gili Trawangan, Lombok, or exploring East Bali, we ensure a punctual and comfortable ride.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Fixed Pricing</h3>
              <p className="text-slate-600 leading-relaxed">Our flat rate of IDR 550,000 covers highway tolls, parking fees, and fuel. No unexpected extra charges upon arrival.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Punctual & Reliable</h3>
              <p className="text-slate-600 leading-relaxed">Catching a morning fast boat requires precise timing. Our drivers ensure you arrive at Padangbai Harbour well ahead of your departure schedule.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flight Monitoring</h3>
              <p className="text-slate-600 leading-relaxed">We keep track of your incoming flight schedule live, adjusting pickup times seamlessly if your flight experiences delays.</p>
            </div>
          </div>
        </section>

        {/* Included Services */}
        <section className="bg-white py-16 border-y border-slate-100 my-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Included in Your Transfer</h2>
              <p className="text-slate-600">Everything needed for a smooth transition from Ngurah Rai Airport to Padangbai.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Private Air-Conditioned Car</h3>
                <p className="text-slate-600 text-sm">Clean, spacious, modern vehicle reserved exclusively for your booking.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Professional Driver</h3>
                <p className="text-slate-600 text-sm">English-speaking, licensed, and courteous driver ready to help.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">All Toll & Parking Fees</h3>
                <p className="text-slate-600 text-sm">Fully inclusive price with zero hidden fees for tolls or terminal entry.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Luggage Assistance</h3>
                <p className="text-slate-600 text-sm">Full assistance carrying bags from the arrival hall to the harbour office.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Pickup Process */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Airport Pickup Process</h2>
            <p className="text-slate-600">How we greet you at Bali Airport and guide you safely to your vehicle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">1</div>
              <h3 className="font-bold text-lg mb-2">Book via WhatsApp</h3>
              <p className="text-slate-600 text-sm">Send your flight number, arrival time, and fast boat name.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">2</div>
              <h3 className="font-bold text-lg mb-2">Meet at Arrivals</h3>
              <p className="text-slate-600 text-sm">Our driver holds a sign with your name inside the arrival terminal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">3</div>
              <h3 className="font-bold text-lg mb-2">Luggage Handled</h3>
              <p className="text-slate-600 text-sm">We assist with your luggage directly to the parked vehicle.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">4</div>
              <h3 className="font-bold text-lg mb-2">Safe Arrival</h3>
              <p className="text-slate-600 text-sm">Arrive at Padangbai Harbour and pay cash directly to the driver.</p>
            </div>
          </div>
        </section>

        {/* Popular Places in Padangbai */}
        <section className="bg-white py-16 border-y border-slate-100 my-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Discover Padangbai & Key Destinations</h2>
              <p className="text-slate-600">Padangbai is more than just a harbour; it is a charming coastal town with great beaches and diving spots.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="relative h-48 bg-slate-200">
                  <Image src="/images/padangbai-harbour.jpg" alt="Padangbai Harbour" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Padangbai Fast Boat Terminal</h3>
                  <p className="text-slate-600 text-sm">The primary gateway port connecting Bali to Gili Trawangan, Gili Meno, Gili Air, and Lombok via fast boat services.</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="relative h-48 bg-slate-200">
                  <Image src="/images/blue-lagoon-bali.jpg" alt="Blue Lagoon Beach" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Blue Lagoon Beach</h3>
                  <p className="text-slate-600 text-sm">A picturesque white-sand cove adjacent to Padangbai, famous for crystal-clear waters, snorkeling, and rich marine life.</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="relative h-48 bg-slate-200">
                  <Image src="/images/pura-silayukti.jpg" alt="Pura Silayukti" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pura Silayukti Temple</h3>
                  <p className="text-slate-600 text-sm">An ancient and historically significant cliffside Hindu temple overlooking the bay and offering panoramic ocean views.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="block text-3xl font-extrabold text-blue-600 mb-2">100%</span>
              <h3 className="font-bold text-slate-900 mb-1">Private Cars Only</h3>
              <p className="text-slate-600 text-sm">Clean, sanitized vehicles reserved strictly for your group.</p>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-blue-600 mb-2">0 IDR</span>
              <h3 className="font-bold text-slate-900 mb-1">Hidden Charges</h3>
              <p className="text-slate-600 text-sm">Transparent pricing with tolls and parking included.</p>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-blue-600 mb-2">24/7</span>
              <h3 className="font-bold text-slate-900 mb-1">Customer Care</h3>
              <p className="text-slate-600 text-sm">Always available to support you via WhatsApp anytime.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about your transfer from Bali Airport to Padangbai.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How much is the airport transfer from Bali Airport to Padangbai?',
                a: 'The fixed price for a private airport transfer from Ngurah Rai Airport to Padangbai is IDR 550,000 with no hidden fees.',
              },
              {
                q: 'How long does it take to travel from Bali Airport to Padangbai Harbour?',
                a: 'The journey from Bali Airport to Padangbai typically takes around 1.5 to 2 hours depending on traffic conditions.',
              },
              {
                q: 'Where will I meet my driver at the airport?',
                a: 'Our professional driver will be waiting at the arrival hall holding a clear sign with your name on it.',
              },
              {
                q: 'Can the driver drop me off directly at the fast boat counter or harbour?',
                a: 'Yes, our driver will drop you off right at your designated fast boat office, ferry terminal, or hotel in Padangbai.',
              },
              {
                q: 'Is the price per person or per car?',
                a: 'The price of IDR 550,000 is per car (up to 4-5 passengers with standard luggage), not per person.',
              },
              {
                q: 'Do I need to pay a deposit in advance?',
                a: 'No advance deposit is required. You can pay securely directly to the driver upon arrival at Padangbai.',
              },
              {
                q: 'Are flight delays monitored?',
                a: 'Yes, we track your flight status in real-time to ensure our driver is ready when you land, even if your flight is delayed.',
              },
              {
                q: 'What type of vehicles are used for the transfer?',
                a: 'We provide modern, air-conditioned, clean, and well-maintained vehicles suitable for comfortable travel.',
              },
              {
                q: 'Is luggage space included?',
                a: 'Yes, standard luggage capacity is included in the fixed price. Please inform us if you carry large surfboards or extra gear.',
              },
              {
                q: 'How can I book my transfer to Padangbai?',
                a: 'You can easily book instantly via WhatsApp at +6285738217365 or through our online booking form.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 group">
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-blue-600 transition group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16 my-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready for Your Fast Boat Trip from Padangbai?</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Book your private airport transfer now for IDR 550,000. Enjoy hassle-free scheduling and a comfortable ride to the harbour.
            </p>
            <a
              href="https://wa.me/6285738217365?text=Hello%20Transfer%20Bali,%20I%20want%20to%20book%20an%20airport%20transfer%20to%20Padangbai%20for%20IDR%20550,000."
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300"
            >
              Book via WhatsApp (+62 857-3821-7365)
            </a>
          </div>
        </section>

        {/* Professional Footer CTA */}
        <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Popular Routes</h4>
              <ul className="space-y-2 text-slate-600">
                <li><Link href="/airport-transfer-ubud" className="hover:text-blue-600">Ubud Transfer</Link></li>
                <li><Link href="/airport-transfer-canggu" className="hover:text-blue-600">Canggu Transfer</Link></li>
                <li><Link href="/airport-transfer-seminyak" className="hover:text-blue-600">Seminyak Transfer</Link></li>
                <li><Link href="/airport-transfer-uluwatu" className="hover:text-blue-600">Uluwatu Transfer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">North & East Bali</h4>
              <ul className="space-y-2 text-slate-600">
                <li><Link href="/airport-transfer-pemuteran" className="hover:text-blue-600">Pemuteran Transfer</Link></li>
                <li><Link href="/airport-transfer-lovina" className="hover:text-blue-600">Lovina Transfer</Link></li>
                <li><Link href="/airport-transfer-amed" className="hover:text-blue-600">Amed Transfer</Link></li>
                <li><Link href="/airport-transfer-padangbai" className="hover:text-blue-600">Padangbai Transfer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Central & Highlands</h4>
              <ul className="space-y-2 text-slate-600">
                <li><Link href="/airport-transfer-bedugul" className="hover:text-blue-600">Bedugul Transfer</Link></li>
                <li><Link href="/airport-transfer-kintamani" className="hover:text-blue-600">Kintamani Transfer</Link></li>
                <li><Link href="/airport-transfer-tegallalang" className="hover:text-blue-600">Tegallalang Transfer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Contact Us</h4>
              <p className="text-slate-600 mb-2">Ngurah Rai International Airport, Bali</p>
              <p className="text-slate-600 mb-2">WhatsApp: +62 857-3821-7365</p>
              <p className="text-slate-600">Email: booking@transferbali.com</p>
            </div>
          </div>
          <div className="text-center text-slate-400 text-sm pt-8 border-t border-slate-100">
            &copy; {new Date().getFullYear()} Transfer Bali. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
