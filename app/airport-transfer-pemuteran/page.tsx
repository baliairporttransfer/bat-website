import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Airport Transfer to Pemuteran | Fixed Price IDR 850,000 | Transfer Bali',
  description: 'Book a private airport transfer from Ngurah Rai Airport to Pemuteran starting at IDR 850,000. Enjoy a luxury, comfortable, and reliable ride with professional drivers.',
  keywords: ['airport transfer pemuteran', 'bali airport to pemuteran taxi', 'private driver bali airport pemuteran', 'transfer bali'],
  openGraph: {
    title: 'Airport Transfer to Pemuteran | Transfer Bali',
    description: 'Private airport transfer from Ngurah Rai Airport to Pemuteran. Fixed price IDR 850,000.',
    url: 'https://transferbali.com/airport-transfer-pemuteran',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/images/pemuteran-transfer.jpg',
        width: 1200,
        height: 630,
        alt: 'Airport Transfer to Pemuteran',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PemuteranTransferPage() {
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
        name: 'How much is the airport transfer from Bali Airport to Pemuteran?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The fixed price for a private airport transfer from Ngurah Rai Airport to Pemuteran is IDR 850,000 with no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to travel from Bali Airport to Pemuteran?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The journey from Bali Airport to Pemuteran typically takes around 3.5 to 4 hours depending on traffic conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where will I meet my driver at the airport?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our professional driver will be waiting at the arrival hall holding a sign with your name on it.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I make stops along the way to Pemuteran?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, customized stops such as temples or scenic viewpoints along the route can be arranged upon request.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the price per person or per car?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The price of IDR 850,000 is per car (up to 4-5 passengers with standard luggage), not per person.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to pay a deposit in advance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No advance deposit is required. You can pay securely directly to the driver upon arrival at your destination.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are flight delays monitored?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we track your flight status in real-time to ensure our driver is there when you land, even if your flight is delayed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What type of vehicles are used for the transfer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide modern, air-conditioned, clean, and well-maintained vehicles suitable for comfortable long-distance travel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is luggage space included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, standard luggage capacity is included in the fixed price. Please inform us if you have oversized equipment like scuba gear.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I book my transfer to Pemuteran?',
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
            <li className="text-slate-800 font-medium" aria-current="page">Pemuteran</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/pemuteran-transfer.jpg"
              alt="Pemuteran Bali Beach"
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
              Ngurah Rai Airport to Pemuteran Transfer
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto text-slate-300 mb-8">
              Experience absolute comfort with our private luxury car service from Bali Airport straight to the serene shores of Pemuteran. Fixed price, professional driver, zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6285738217365?text=Hello%20Transfer%20Bali,%20I%20want%20to%20book%20an%20airport%20transfer%20to%20Pemuteran%20for%20IDR%20850,000."
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
              <span className="text-3xl font-extrabold text-blue-600">IDR 850,000</span>
              <span className="text-xs text-slate-500 block mt-1">Per car (All inclusive)</span>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
              <span className="text-slate-400 text-sm block uppercase tracking-wider font-medium">Distance</span>
              <span className="text-3xl font-extrabold text-slate-800">~135 km</span>
              <span className="text-xs text-slate-500 block mt-1">Scenic North-West Route</span>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
              <span className="text-slate-400 text-sm block uppercase tracking-wider font-medium">Travel Time</span>
              <span className="text-3xl font-extrabold text-slate-800">3.5 - 4 Hours</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Transfer Bali for Your Pemuteran Trip?</h2>
            <p className="text-slate-600">Pemuteran is located in the far northwest of Bali. Long-distance travel requires reliable vehicles, expert drivers, and guaranteed comfort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No Hidden Fees</h3>
              <p className="text-slate-600 leading-relaxed">Our fixed price of IDR 850,000 covers toll fees, parking, petrol, and an experienced driver. You will never face surprise surcharges.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experienced Long-Distance Drivers</h3>
              <p className="text-slate-600 leading-relaxed">Navigating the winding mountain roads to Pemuteran requires professional skill. Our drivers are thoroughly trained, polite, and prioritize your safety.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flight Monitoring Included</h3>
              <p className="text-slate-600 leading-relaxed">We track your flight live. If your flight is delayed or arrives early, our driver will adjust their pickup time accordingly at no extra cost.</p>
            </div>
          </div>
        </section>

        {/* Included Services */}
        <section className="bg-white py-16 border-y border-slate-100 my-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Included in Your Transfer</h2>
              <p className="text-slate-600">Everything you need for a comfortable and stress-free journey from the airport to Pemuteran.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Private Air-Conditioned Car</h3>
                <p className="text-slate-600 text-sm">Clean, spacious, and modern vehicle reserved exclusively for your party.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Professional Driver</h3>
                <p className="text-slate-600 text-sm">English-speaking, licensed, and polite driver to assist you along the way.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">All Toll & Parking Fees</h3>
                <p className="text-slate-600 text-sm">No extra charges for highway tolls, airport parking, or roadside halts.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Luggage Assistance</h3>
                <p className="text-slate-600 text-sm">Full assistance with your bags from the arrival gate to your destination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Pickup Process */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Airport Pickup Process</h2>
            <p className="text-slate-600">We make meeting your driver at Ngurah Rai International Airport seamless and stress-free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">1</div>
              <h3 className="font-bold text-lg mb-2">Book via WhatsApp</h3>
              <p className="text-slate-600 text-sm">Send us your flight details and drop-off hotel in Pemuteran.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">2</div>
              <h3 className="font-bold text-lg mb-2">Landing & Welcome</h3>
              <p className="text-slate-600 text-sm">Clear immigration and customs. Your driver waits at arrivals with a name sign.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">3</div>
              <h3 className="font-bold text-lg mb-2">Luggage Assistance</h3>
              <p className="text-slate-600 text-sm">Our driver helps with your bags and escorts you directly to the air-conditioned car.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">4</div>
              <h3 className="font-bold text-lg mb-2">Relaxed Journey</h3>
              <p className="text-slate-600 text-sm">Enjoy a smooth ride to Pemuteran and pay cash directly to the driver upon arrival.</p>
            </div>
          </div>
        </section>

        {/* Popular Places in Pemuteran */}
        <section className="bg-white py-16 border-y border-slate-100 my-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Discover Pemuteran & Surrounding Attractions</h2>
              <p className="text-slate-600">Pemuteran is a tranquil coastal village renowned for quiet beaches, coral reef restoration projects, and gateway access to West Bali National Park.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="relative h-48 bg-slate-200">
                  <Image src="/images/pemuteran-reef.jpg" alt="Pemuteran Reef" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pemuteran Bio-Rock Reef</h3>
                  <p className="text-slate-600 text-sm">Home to the world's largest coral reef restoration project using electrical currents. Perfect for snorkeling and scuba diving.</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="relative h-48 bg-slate-200">
                  <Image src="/images/menjangan-island.jpg" alt="Menjangan Island" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Menjangan Island</h3>
                  <p className="text-slate-600 text-sm">Located nearby in West Bali National Park, offering world-class wall diving, pristine coral gardens, and wild deer roaming beaches.</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="relative h-48 bg-slate-200">
                  <Image src="/images/pura-pulaki.jpg" alt="Pura Pulaki" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pura Pulaki Temple</h3>
                  <p className="text-slate-600 text-sm">A famous cliffside sea temple inhabited by hundreds of wild monkeys, overlooking the stunning northern coastline of Bali.</p>
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
              <h3 className="font-bold text-slate-900 mb-1">Reliable Private Cars</h3>
              <p className="text-slate-600 text-sm">Clean, sanitized vehicles ready for long-distance travel.</p>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-blue-600 mb-2">0 IDR</span>
              <h3 className="font-bold text-slate-900 mb-1">Hidden Surcharges</h3>
              <p className="text-slate-600 text-sm">Transparent fixed pricing with everything included.</p>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-blue-600 mb-2">24/7</span>
              <h3 className="font-bold text-slate-900 mb-1">Customer Support</h3>
              <p className="text-slate-600 text-sm">Always ready to assist via WhatsApp anytime you need.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about your airport transfer from Bali Airport to Pemuteran.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How much is the airport transfer from Bali Airport to Pemuteran?',
                a: 'The fixed price for a private airport transfer from Ngurah Rai Airport to Pemuteran is IDR 850,000 with no hidden fees.',
              },
              {
                q: 'How long does it take to travel from Bali Airport to Pemuteran?',
                a: 'The journey from Bali Airport to Pemuteran typically takes around 3.5 to 4 hours depending on traffic conditions.',
              },
              {
                q: 'Where will I meet my driver at the airport?',
                a: 'Our professional driver will be waiting at the arrival hall holding a sign with your name on it.',
              },
              {
                q: 'Can I make stops along the way to Pemuteran?',
                a: 'Yes, customized stops such as temples or scenic viewpoints along the route can be arranged upon request.',
              },
              {
                q: 'Is the price per person or per car?',
                a: 'The price of IDR 850,000 is per car (up to 4-5 passengers with standard luggage), not per person.',
              },
              {
                q: 'Do I need to pay a deposit in advance?',
                a: 'No advance deposit is required. You can pay securely directly to the driver upon arrival at your destination.',
              },
              {
                q: 'Are flight delays monitored?',
                a: 'Yes, we track your flight status in real-time to ensure our driver is there when you land, even if your flight is delayed.',
              },
              {
                q: 'What type of vehicles are used for the transfer?',
                a: 'We provide modern, air-conditioned, clean, and well-maintained vehicles suitable for comfortable long-distance travel.',
              },
              {
                q: 'Is luggage space included?',
                a: 'Yes, standard luggage capacity is included in the fixed price. Please inform us if you have oversized equipment like scuba gear.',
              },
              {
                q: 'How can I book my transfer to Pemuteran?',
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready for Your Trip to Pemuteran?</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Book your private transfer now for IDR 850,000. Fast response, reliable service, and professional drivers guaranteed.
            </p>
            <a
              href="https://wa.me/6285738217365?text=Hello%20Transfer%20Bali,%20I%20want%20to%20book%20an%20airport%20transfer%20to%20Pemuteran%20for%20IDR%20850,000."
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
