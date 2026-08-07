import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bali Airport Transfer to Ubud | Private Taxi | Transfer Bali',
  description: 'Book private airport transfer from Bali Airport to Ubud with professional English speaking drivers, fixed price, WhatsApp booking and 24/7 service.',
  alternates: {
    canonical: 'https://transferbali.com/airport-transfer-ubud',
  },
  openGraph: {
    title: 'Premium Bali Airport Transfer to Ubud | Transfer Bali',
    description: 'Book your luxury private airport transfer from Ngurah Rai Airport to Ubud. Fixed prices, VIP meet & greet, and zero hidden fees.',
    url: 'https://transferbali.com/airport-transfer-ubud',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/images/ubud-transfer-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Bali Airport Transfer to Ubud',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Airport Transfer to Ubud | Transfer Bali',
    description: 'Book your luxury private airport transfer from Ngurah Rai Airport to Ubud. Fixed prices, VIP meet & greet, and zero hidden fees.',
    images: ['https://transferbali.com/images/ubud-transfer-og.jpg'],
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
      "name": "Bali Airport Transfer to Ubud",
      "provider": {
        "@id": "https://transferbali.com/#localbusiness"
      },
      "areaServed": {
        "@type": "City",
        "name": "Ubud"
      },
      "description": "Premium private airport transfer service from Ngurah Rai International Airport (DPS) to Ubud, Bali. Includes meet and greet, luggage assistance, and air-conditioned vehicles.",
      "offers": {
        "@type": "Offer",
        "price": "350000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "url": "https://transferbali.com/airport-transfer-ubud"
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
          "name": "Airport Transfer to Ubud"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Ubud from Bali Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The distance from Ngurah Rai International Airport (DPS) to Ubud is approximately 37 kilometers (23 miles). The journey typically takes between 1.5 to 2 hours, depending on traffic conditions, especially around the Denpasar and Gianyar areas."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a taxi from Bali airport to Ubud cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our premium private bali airport transfer to Ubud costs a fixed price of IDR 350,000 per vehicle (up to 4 passengers with luggage). There are no hidden fees, toll charges, or parking costs added later."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my flight to Bali is delayed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We monitor all flight arrivals in real-time. If your flight is delayed, we automatically adjust your pickup time. Your driver will wait for you at no extra cost, ensuring a stress-free arrival in Bali."
          }
        }
      ]
    }
  ]
};

export default function AirportTransferUbudPage() {
  const whatsappUrl = "https://wa.me/6285738217365?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Airport%20Transfer%20to%20Ubud.";

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 w-full">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm">Home</Link></li>
          <li><span className="mx-2" aria-hidden="true">/</span></li>
          <li><Link href="/destinations" className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm">Destinations</Link></li>
          <li><span className="mx-2" aria-hidden="true">/</span></li>
          <li aria-current="page" className="text-slate-900 font-medium">Ubud</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="w-full lg:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide">
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            Premium Private Airport Transfer
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bali Airport Transfer to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Ubud</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Start your Bali journey with a stress-free, luxury private <Link href="/airport-transfer-ubud" className="text-emerald-700 underline underline-offset-2">airport transfer ubud</Link> from Ngurah Rai Airport. Professional English-speaking drivers, VIP meet & greet, and fixed transparent pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={whatsappUrl}
              aria-label="Book airport transfer to Ubud via WhatsApp"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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
            <Image 
              src="/images/ubud-hero.jpg" 
              alt="Luxury private airport transfer vehicle arriving in Ubud" 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Professional Verified Trust Badges */}
          <div className="absolute -bottom-8 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-semibold text-slate-900">Fixed Transparent Price</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-semibold text-slate-900">Free Flight Monitoring</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-semibold text-slate-900">VIP Meet & Greet</p>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Price Card Section */}
      <section id="pricing" className="bg-slate-50 py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Transparent, Fixed Pricing to Ubud</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">No hidden fees, no surge pricing, and no toll surprises. The price you see is the price you pay for your seamless journey with our bali airport taxi ubud service.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Minivan (Toyota Avanza/Innova)</h3>
              <p className="text-slate-500 mb-6">Perfect for couples and small families looking for a private bali airport transfer ubud.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Distance</p>
                  <p className="text-lg font-semibold text-slate-900">~ 37 km</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-lg font-semibold text-slate-900">1.5 - 2 Hours</p>
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
                {['VIP Meet & Greet at Arrivals', 'Free Waiting Time (up to 90 mins)', 'Airport Tolls & Parking Included', 'Air-Conditioned Private Vehicle', 'Professional English-Speaking Driver'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <svg aria-hidden="true" className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
              <p className="text-slate-300 font-medium mb-2">Fixed Price</p>
              <div className="text-white mb-6 flex items-baseline justify-center">
                <span className="text-xl mr-1">IDR</span>
                <span className="text-5xl font-bold tracking-tight">350k</span>
              </div>
              <p className="text-slate-400 text-sm mb-8">Per vehicle, not per person</p>
              <Link 
                href={whatsappUrl}
                aria-label="Book your Ubud transfer now via WhatsApp"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Transfer Bali for Your Ubud Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Experience the highest standard of taxi bali airport to ubud transportation. We prioritize your comfort, safety, and time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Flight Monitoring', desc: 'We track your flight in real-time. If you are delayed, we adjust the pickup time automatically at no extra cost.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { title: 'Fixed Transparent Rates', desc: 'The price you are quoted is the price you pay. No midnight surcharges, no haggling with airport drivers, no toll fees.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { title: 'VIP Meet & Greet', desc: 'Your driver will be waiting in the arrival hall holding a personalized sign with your name. We assist with all luggage.', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' },
            { title: 'Premium Vehicles', desc: 'Travel to Ubud in a meticulously clean, air-conditioned vehicle. We sanitize our cars after every single trip.', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
            { title: 'Local Expertise', desc: 'Our English-speaking drivers are local Balinese experts who can share cultural insights and recommendations along the way.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            { title: '24/7 Support', desc: 'Need to make a change? Our customer support team is available around the clock via WhatsApp to assist you instantly.', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Airport Pickup Process */}
      <section className="bg-slate-900 py-24 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Your Airport Pickup Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Arriving at Ngurah Rai International Airport can be overwhelming. We make your transition to Ubud seamless with our structured pickup process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0" aria-hidden="true"></div>
            {[
              { step: '01', title: 'Arrival & Immigration', desc: 'Disembark your flight, proceed through immigration, and collect your luggage.' },
              { step: '02', title: 'Spot Your Name', desc: 'Exit the customs area. Your driver will be waiting holding an iPad or sign with your name.' },
              { step: '03', title: 'Luggage Assistance', desc: 'Our driver will assist you with your heavy luggage and guide you to the VIP parking area.' },
              { step: '04', title: 'Relax & Enjoy', desc: 'Step into the cool AC, enjoy complimentary bottled water, and relax as we drive to Ubud.' }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-400 mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Destination Guide */}
      <article className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-emerald-600 w-full">
        <h2 className="text-4xl text-center mb-12">The Ultimate Guide to Ubud Transfers and Travel</h2>
        
        <p>Nestled in the lush, emerald highlands of central Bali, <strong>Ubud</strong> stands as the island's undisputed cultural and spiritual heart. Unlike the coastal areas of Seminyak or Canggu, which are celebrated for their surf breaks and beach clubs, Ubud offers a profound immersion into traditional Balinese artistry, holistic wellness, and breathtaking natural landscapes. When you book an <Link href="/airport-transfer-ubud" title="Bali Airport Transfer to Ubud">airport transfer ubud</Link>, you are not merely changing locations; you are ascending into an entirely different pace of life.</p>

        <p>The journey from Ngurah Rai International Airport (DPS) to Ubud is a mesmerizing transition. As your driver navigates away from the bustling south, the urban sprawl gradually gives way to traditional villages, stone carving workshops, and eventually, the iconic terraced rice paddies that define the region. Opting for a reliable <strong>bali airport transfer ubud</strong> ensures that this 1.5 to 2-hour drive is comfortable, allowing you to gaze out the window as the tropical landscape unfolds.</p>

        <h3>Why Ubud Captivates Travelers</h3>
        <p>Ubud's magnetism lies in its multifaceted appeal. For decades, it has attracted royalty, artists, writers, and seekers. Today, it beautifully balances its deeply rooted Hindu traditions with modern luxury. You can begin your morning with a silent meditation overlooking a jungle ravine, spend the afternoon observing master craftsmen carving intricate woodwork, and dine in a world-class, Michelin-recognized restaurant by evening.</p>

        <p>The town is surrounded by dense tropical jungles and carved by the Ayung and Petanu rivers. This geography has cultivated a haven for yoga retreats and wellness sanctuaries. The air is slightly cooler and fresher here than on the coast, making exploration on foot or bicycle highly enjoyable.</p>

        {/* Mid-Article Conversion CTA Banner */}
        <div className="not-prose my-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Planning Your Trip to Ubud?</h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">Skip the airport taxi lines. Reserve your private vehicle with a professional English-speaking driver today.</p>
          <Link 
            href={whatsappUrl}
            aria-label="Book your airport transfer to Ubud via WhatsApp"
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-md"
          >
            Book Airport Transfer to Ubud (IDR 350k)
          </Link>
        </div>

        <h3>Top 10 Essential Things to Do in Ubud</h3>
        <p>Whether you are staying for a weekend or a month, your itinerary should encompass the cultural, historical, and natural wonders of the area:</p>
        <ol>
          <li><strong>Sacred Monkey Forest Sanctuary:</strong> A dense jungle right in the town center, home to hundreds of long-tailed macaques and ancient temple ruins overgrown with banyan tree roots.</li>
          <li><strong>Tegallalang Rice Terrace:</strong> Famous for its dramatic, tiered landscapes and traditional <em>Subak</em> irrigation system. Arrive early for the best light and fewer crowds.</li>
          <li><strong>Campuhan Ridge Walk:</strong> A scenic, paved walking trail offering sweeping views of the lush valley. Perfect for a sunrise or sunset stroll.</li>
          <li><strong>Ubud Royal Palace (Puri Saren Agung):</strong> Located at the central intersection of Ubud, featuring stunning Balinese architecture and hosting traditional dance performances nightly.</li>
          <li><strong>Saraswati Temple (Water Palace):</strong> Known for its spectacular lotus pond and classical temple structures, situated just behind Cafe Lotus.</li>
          <li><strong>Traditional Art Market:</strong> A bustling labyrinth where you can haggle for hand-woven bags, silk scarves, statues, and traditional kites.</li>
          <li><strong>Goa Gajah (Elephant Cave):</strong> An archaeological site dating back to the 11th century, featuring a menacing entrance carved out of solid rock.</li>
          <li><strong>Tirta Empul Temple:</strong> A holy spring water temple where locals and visitors partake in a traditional purification ritual.</li>
          <li><strong>Neka Art Museum:</strong> Houses an outstanding collection of traditional and contemporary Balinese and Indonesian art.</li>
          <li><strong>Tegenungan Waterfall:</strong> A powerful and picturesque waterfall located just a short drive south of Ubud, perfect for a refreshing dip.</li>
        </ol>

        <h3>Travel & Transport Tips for Ubud</h3>
        <p>Navigating Ubud requires a bit of local know-how. The town center can experience heavy traffic, particularly along Jalan Raya Ubud and Jalan Monkey Forest. Here are some expert tips:</p>
        <ul>
          <li><strong>Getting There:</strong> The most reliable way to arrive is via a pre-booked <Link href="/airport-transfer-ubud" title="Ubud Airport Transfer">ubud airport transfer</Link>. Avoid the stress of haggling with airport touts by securing a fixed-price private car in advance.</li>
          <li><strong>Getting Around:</strong> Scooters are the most efficient way to navigate the narrow roads, but only rent one if you are an experienced rider. Alternatively, walking in the central area is highly recommended.</li>
          <li><strong>Respect the Culture:</strong> When visiting temples, you must wear a sarong and sash (often provided at the entrance). Always dress modestly outside of your hotel or resort.</li>
          <li><strong>Currency:</strong> While luxury hotels and large restaurants accept credit cards, cash (Indonesian Rupiah) is essential for local markets, warungs, and smaller entrance fees.</li>
        </ul>
      </article>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about your bali airport to ubud transfer.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How far is Ubud from Bali Airport?",
                a: "The distance from Ngurah Rai International Airport (DPS) to Ubud is approximately 37 kilometers (23 miles). The journey typically takes between 1.5 to 2 hours, depending on traffic conditions, especially around the Denpasar and Gianyar areas."
              },
              {
                q: "How much does a taxi from Bali airport to Ubud cost?",
                a: "Our premium private transfer from Bali Airport to Ubud costs a fixed price of IDR 350,000 per vehicle (up to 4 passengers with luggage). There are no hidden fees, toll charges, or parking costs added later."
              },
              {
                q: "What happens if my flight to Bali is delayed?",
                a: "We monitor all flight arrivals in real-time using your flight number. If your flight is delayed, we automatically adjust your pickup time. Your driver will wait for you at no extra cost, ensuring a stress-free arrival."
              },
              {
                q: "Where exactly will the driver meet me at DPS airport?",
                a: "After you clear customs and exit into the main arrival hall, look for our driver holding a personalized sign with your name on it. If you have trouble finding them, our 24/7 WhatsApp support is ready to assist."
              },
              {
                q: "Do you provide child seats or baby car seats?",
                a: "Yes, we prioritize safety. Baby car seats are available upon request for a small additional fee. Please mention this requirement when booking via WhatsApp so we can prepare the appropriate seat for your child's age and weight."
              },
              {
                q: "Can we stop at an ATM or convenience store on the way to Ubud?",
                a: "Absolutely. Our drivers are happy to make a short stop at a local ATM, money changer, or convenience store along the route to your accommodation in Ubud at no extra charge."
              },
              {
                q: "Is it safe to travel to Ubud at night?",
                a: "Yes, Bali is generally very safe, and our professional drivers are highly experienced in navigating the island's roads at all hours. We provide 24/7 airport transfer services, so late-night or early-morning arrivals are perfectly fine."
              },
              {
                q: "Do I need to tip the driver?",
                a: "Tipping is not mandatory in Bali, and our prices are fully inclusive. However, if you receive exceptional service, a tip (typically around IDR 20,000 - 50,000) is highly appreciated by the drivers."
              },
              {
                q: "What type of vehicles do you use?",
                a: "For standard transfers, we use well-maintained, air-conditioned MPVs like the Toyota Avanza or Toyota Innova, which comfortably seat up to 4 passengers with luggage. For larger groups, we also offer Toyota HiAce minibuses."
              },
              {
                q: "How far in advance should I book my transfer?",
                a: "While we can often accommodate last-minute requests, we highly recommend booking your Ubud airport transfer at least 24 hours in advance to guarantee vehicle availability and a seamless pickup experience."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Popular Alternative Destinations</h2>
        <nav aria-label="Alternative Destinations">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Canggu', path: 'canggu', distance: '1 Hour', price: 'IDR 325k' },
              { name: 'Seminyak', path: 'seminyak', distance: '45 Mins', price: 'IDR 175k' },
              { name: 'Uluwatu', path: 'uluwatu', distance: '1 Hour', price: 'IDR 350k' },
              { name: 'Nusa Dua', path: 'nusa-dua', distance: '30 Mins', price: 'IDR 190k' }
            ].map((dest, i) => (
              <Link 
                key={i} 
                href={`/airport-transfer-${dest.path}`} 
                title={`Transfer from Bali Airport to ${dest.name}`}
                className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-600">{dest.name}</h3>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>{dest.distance}</span>
                  <span className="font-medium">{dest.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </section>

      {/* Internal Links Hub Section */}
      <section className="bg-slate-100 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Explore Other Bali Airport Transfer Routes</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-600 shadow-sm transition-colors">Home</Link>
            <Link href="/airport-transfer-canggu" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-600 shadow-sm transition-colors">Canggu</Link>
            <Link href="/airport-transfer-seminyak" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-600 shadow-sm transition-colors">Seminyak</Link>
            <Link href="/airport-transfer-uluwatu" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-600 shadow-sm transition-colors">Uluwatu</Link>
            <Link href="/airport-transfer-lovina" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-600 shadow-sm transition-colors">Lovina</Link>
            <Link href="/airport-transfer-munduk" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-600 shadow-sm transition-colors">Munduk</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Footer Section */}
      <section className="bg-emerald-900 py-20 relative overflow-hidden w-full">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 L0,100 Z M50,50 L50,100 L100,100 Z" fill="currentColor"/></svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready for a Seamless Arrival in Ubud?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Skip the long taxi queues and hidden fees. Book your private transfer today and start your Bali holiday the right way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={whatsappUrl}
              aria-label="Book your Ubud transfer now via WhatsApp"
              className="px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl font-bold transition-colors shadow-lg text-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
            >
              <svg aria-hidden="true" className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Book Now via WhatsApp
            </Link>
          </div>
          <p className="mt-8 text-emerald-200/60 text-sm">Instant confirmation • No credit card required • Free cancellation</p>
        </div>
      </section>
    </main>
  );
}
