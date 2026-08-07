import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bali Airport Transfer to Canggu | Private Taxi | Transfer Bali',
  description: 'Book private airport transfer from Bali Airport to Canggu with professional English speaking drivers, fixed price, WhatsApp booking and 24/7 service.',
  alternates: {
    canonical: 'https://transferbali.com/airport-transfer-canggu',
  },
  openGraph: {
    title: 'Premium Bali Airport Transfer to Canggu | Transfer Bali',
    description: 'Secure your private airport transfer from Ngurah Rai International Airport to Canggu with professional English speaking drivers, fixed transparent pricing, and 24/7 support.',
    url: 'https://transferbali.com/airport-transfer-canggu',
    siteName: 'Transfer Bali',
    images: [
      {
        url: 'https://transferbali.com/images/canggu-transfer-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Private airport transfer to Canggu from Bali Airport',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Airport Transfer to Canggu | Private Taxi | Transfer Bali',
    description: 'Secure your private airport transfer from Ngurah Rai International Airport to Canggu with professional English speaking drivers, fixed transparent pricing, and 24/7 support.',
    images: ['https://transferbali.com/images/canggu-transfer-og.jpg'],
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
      "name": "Bali Airport Transfer to Canggu",
      "provider": {
        "@id": "https://transferbali.com/#localbusiness"
      },
      "areaServed": {
        "@type": "City",
        "name": "Canggu"
      },
      "description": "Premium private airport transfer service from Ngurah Rai International Airport (DPS) to Canggu, Bali. Includes meet and greet, luggage assistance, and air-conditioned vehicles.",
      "offers": {
        "@type": "Offer",
        "price": "325000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "url": "https://transferbali.com/airport-transfer-canggu"
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
          "name": "Airport Transfer to Canggu"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Canggu from Bali Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The driving distance from Ngurah Rai International Airport (DPS) to Canggu is roughly 22 kilometers. Depending on traffic flow through Kuta and Seminyak, a comfortable hotel transfer usually takes between 45 to 60 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a taxi from Bali airport to Canggu cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our private airport transfer to Canggu features a guaranteed fixed price of IDR 325,000 per vehicle (accommodating up to 4 passengers with standard luggage). There are never any hidden fees or surge charges."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my flight to Bali is delayed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We utilize real-time flight tracking via your flight number. If your arrival is delayed, our team automatically reschedules your pickup time so your private driver is always waiting when you exit."
          }
        },
        {
          "@type": "Question",
          "name": "Where will I meet my driver at the airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After clearing customs at DPS Airport, proceed into the main arrival hall where your English speaking driver will greet you while holding a personalized name board for an effortless meet and greet."
          }
        },
        {
          "@type": "Question",
          "name": "Are child seats available for the transfer to Canggu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, certified baby and toddler car seats can be arranged upon request for a nominal additional charge. Simply let us know via WhatsApp when securing your booking."
          }
        },
        {
          "@type": "Question",
          "name": "Can we stop at an ATM or convenience store along the way?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Of course. Your private car chauffeur is happy to accommodate a quick, convenient stop at a local ATM, convenience store, or money changer during your journey to Canggu at no extra cost."
          }
        },
        {
          "@type": "Question",
          "name": "Is it safe to travel to Canggu late at night?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our private airport taxi service operates around the clock. Our professional drivers are highly experienced and fully equipped to manage late-night or early-morning flight arrivals safely."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to pay a deposit in advance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No advance payment or deposit is required for standard bookings. You can coordinate your airport pickup canggu via WhatsApp and pay your driver directly in cash upon arrival."
          }
        },
        {
          "@type": "Question",
          "name": "What type of vehicles are used for the transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We dispatch impeccably maintained, fully air-conditioned vehicles such as the Toyota Avanza or Toyota Innova, tailored for comfort and spacious luggage capacity."
          }
        },
        {
          "@type": "Question",
          "name": "How far in advance should I book my Canggu airport transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While last-minute requests are accommodated subject to availability, we strongly suggest booking at least 24 hours ahead to lock in your preferred vehicle and ensure a seamless greeting."
          }
        }
      ]
    }
  ]
};

export default function AirportTransferCangguPage() {
  const whatsappUrl = "https://wa.me/6285738217365?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Airport%20Transfer%20to%20Canggu.";

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 w-full">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm">Home</Link></li>
          <li><span className="mx-2" aria-hidden="true">/</span></li>
          <li><Link href="/destinations" className="hover:text-slate-900 transition-colors focus-visible:outline-emerald-600 rounded-sm">Destinations</Link></li>
          <li><span className="mx-2" aria-hidden="true">/</span></li>
          <li aria-current="page" className="text-slate-900 font-medium">Canggu</li>
        </ol>
      </nav>

      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="w-full lg:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide">
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            Premium Private Airport Transfer
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bali Airport Transfer to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Canggu</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Begin your tropical getaway smoothly with a private <Link href="/airport-transfer-canggu" className="text-emerald-700 underline underline-offset-2">airport transfer canggu</Link> straight from Ngurah Rai International Airport. Enjoy an English speaking driver, flight tracking, and fixed rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={whatsappUrl}
              aria-label="Book airport transfer to Canggu via WhatsApp"
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
              src="/images/canggu-hero.jpg" 
              alt="Private car airport transfer service arriving in Canggu" 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="absolute -bottom-8 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-semibold text-slate-900">Fixed Price Guarantee</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-semibold text-slate-900">Live Flight Tracking</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-semibold text-slate-900">Meet & Greet Service</p>
            </div>
          </div>
        </div>
      </header>

      <section id="pricing" className="bg-slate-50 py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Transparent Fixed Pricing to Canggu</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Experience a hassle-free airport taxi canggu service with absolute cost clarity. Enjoy guaranteed pricing with zero surprise toll costs or late-night surcharges.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Private Vehicle (Toyota Avanza / Innova)</h3>
              <p className="text-slate-500 mb-6">Designed for solo travelers, couples, or small groups seeking a comfortable private airport transfer canggu.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Distance</p>
                  <p className="text-lg font-semibold text-slate-900">~ 22 km</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-lg font-semibold text-slate-900">45 - 60 Mins</p>
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
                {['Meet & Greet inside Arrivals Hall', 'Complimentary Flight Delay Monitoring', 'All Airport Tolls & Parking Included', 'Air-Conditioned Private Vehicle', 'Professional English Speaking Driver'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <svg aria-hidden="true" className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
              <p className="text-slate-300 font-medium mb-2">Fixed Rate</p>
              <div className="text-white mb-6 flex items-baseline justify-center">
                <span className="text-xl mr-1">IDR</span>
                <span className="text-5xl font-bold tracking-tight">325k</span>
              </div>
              <p className="text-slate-400 text-sm mb-8">Per vehicle, all inclusive</p>
              <Link 
                href={whatsappUrl}
                aria-label="Book your Canggu transfer via WhatsApp"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Transfer Bali for Your Canggu Route</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Discover why international travelers rely on our premier bali airport transfer canggu solution for absolute peace of mind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Real-Time Flight Tracking', desc: 'We monitor your arrival schedule dynamically, ensuring your chauffeur adjusts automatically to delayed landing times at no extra cost.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { title: 'Fixed Transparent Rates', desc: 'Lock in a secure rate with zero surprises. You will never encounter hidden fees, unexpected surge pricing, or toll hassles.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { title: 'VIP Meet & Greet', desc: 'Avoid confusion at Ngurah Rai International Airport. Your professional driver waits inside the arrivals area holding a custom name sign.', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' },
            { title: 'Immaculate Fleet', desc: 'Travel in total comfort inside a meticulously cleaned, air-conditioned vehicle sanitized thoroughly after every single reservation.', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
            { title: 'Experienced Local Drivers', desc: 'Our courteous English speaking drivers offer deep insight into the region, ensuring safe navigation directly to your destination.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            { title: 'Dedicated 24/7 Support', desc: 'Need assistance or itinerary modifications? Our customer support group is available round-the-clock via WhatsApp.', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' }
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

      <section className="bg-slate-900 py-24 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Your Airport Pickup Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Arriving at DPS airport is straightforward when you follow our simple, organized transfer procedure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0" aria-hidden="true"></div>
            {[
              { step: '01', title: 'Flight Land & Customs', desc: 'Exit your flight, clear passport control smoothly, and retrieve your luggage from the carousel.' },
              { step: '02', title: 'Meet Your Driver', desc: 'Walk out into the arrival hall where your private chauffeur holds a signboard displaying your name.' },
              { step: '03', title: 'Luggage Assistance', desc: 'Your driver handles your bags and guides you securely to the reserved vehicle waiting nearby.' },
              { step: '04', title: 'Relaxed Transfer', desc: 'Settle into the air-conditioned cabin and enjoy a comfortable journey straight to Canggu.' }
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

      <article className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-emerald-600 w-full">
        <h2 className="text-4xl text-center mb-12">The Ultimate Guide to Canggu Transfers, Digital Nomads, and Coastal Living</h2>
        
        <p>Canggu has rapidly evolved from a sleepy stretch of black-sand surf beaches and emerald rice paddies into Bali’s most vibrant epicentre for digital nomads, lifestyle enthusiasts, and international travelers. Spanning across legendary neighborhoods like Batu Bolong, Berawa, Pererenan, and Echo Beach, Canggu offers an electric blend of world-class surf breaks, upscale beach clubs, innovative coworking spaces, and a thriving culinary scene. When you book an <Link href="/airport-transfer-canggu" title="Bali Airport Transfer to Canggu">airport transfer canggu</Link>, you are setting the stage for a seamless transition from the arrivals gate directly into the heart of Bali's most fashionable coastal hub.</p>

        <p>The journey from Ngurah Rai International Airport (DPS) to Canggu covers approximately 22 kilometers. Depending on traffic conditions around the busy Kuta and Seminyak arteries, the drive typically takes between 45 to 60 minutes. Opting for a professional <strong>bali airport transfer canggu</strong> removes all the hassle of navigating local transport networks after a long-haul flight. Your private driver monitors your flight status in real-time, ensuring a stress-free meet-and-greet experience right when you exit customs.</p>

        <h3>Why Canggu Captivates Global Travelers and Digital Nomads</h3>
        <p>Canggu's unique magnetism stems from its ability to harmoniously merge laid-back surf culture with high-end cosmopolitan sophistication. For remote workers, entrepreneurs, and creatives, Canggu is globally recognized as a premier remote work capital. State-of-the-art coworking spaces equipped with high-speed fiber internet, ergonomic workstations, and networking cafes line the streets. After a productive morning of work, residents and visitors can easily transition to catching waves at Echo Beach or enjoying sunset cocktails at world-renowned venues like Finns Beach Club or Atlas Beach Fest.</p>

        <p>Beyond the trendy cafes and beach clubs, the area retains pockets of traditional Balinese charm. Daily offerings placed neatly on doorways, local temples hosting vibrant ceremonies, and glimpses of emerald rice fields tucked between modern architectural villas provide a constant reminder of the island's rich spiritual heritage.</p>

        <div className="not-prose my-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Planning Your Trip to Canggu?</h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">Skip the airport taxi lines. Reserve your private vehicle with a professional English-speaking driver today.</p>
          <Link 
            href={whatsappUrl}
            aria-label="Book your airport transfer to Canggu via WhatsApp"
            className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-md"
          >
            Book Airport Transfer to Canggu (IDR 325k)
          </Link>
        </div>

        <h3>Top Neighborhoods and Hotspots in Canggu</h3>
        <p>Canggu is not a single village, but rather a collection of distinct coastal neighborhoods, each possessing its own unique vibe and community:</p>
        <ol>
          <li><strong>Batu Bolong:</strong> The bustling heartbeat of Canggu, famous for its surf break, iconic sunset views, and an endless array of bustling cafes, boutiques, and nightspots.</li>
          <li><strong>Berawa:</strong> Known for its upscale beach clubs including Finns and Atlas, family-friendly amenities, international schools, and chic clothing stores.</li>
          <li><strong>Pererenan:</strong> A slightly more relaxed and traditional village adjacent to Canggu, featuring quieter black-sand beaches, great coffee shops, and scenic sunset viewpoints.</li>
          <li><strong>Echo Beach:</strong> A world-famous surf destination boasting legendary right-hand reef breaks and an array of rustic seafood warungs perched right on the cliffside.</li>
          <li><strong>Coworking Hubs:</strong> World-class remote work environments like Tropical Nomad and Kinship Studio that foster a thriving international entrepreneurial community.</li>
          <li><strong>Culinary Scene:</strong> From plant-based smoothie bowls and artisan coffee roasters to fine dining Mediterranean and Japanese fusion restaurants.</li>
          <li><strong>Nightlife & Entertainment:</strong> Legendary beachfront venues offering live DJ sets, sunset parties, and vibrant social events every single night of the week.</li>
          <li><strong>Wellness & Fitness:</strong> Premium fitness centers, ice baths, infrared saunas, and holistic yoga studios catering to health-conscious travelers.</li>
          <li><strong>Boutique Shopping:</strong> Curated concept stores offering sustainable fashion, handmade jewelry, and bohemian home decor.</li>
          <li><strong>Luxury Villas:</strong> Private architectural sanctuaries nestled quietly behind the bustling main commercial strips.</li>
        </ol>

        <h3>Travel & Transport Tips for Canggu</h3>
        <p>Navigating Canggu efficiently requires knowing how the local infrastructure operates. The main roads can get quite congested during peak afternoon hours. Here are expert tips for your stay:</p>
        <ul>
          <li><strong>Arriving Smoothly:</strong> Secure a reliable <Link href="/airport-transfer-canggu" title="Canggu Airport Transfer">canggu airport transfer</Link> in advance. Stepping out of the arrivals terminal into a pre-arranged private car saves precious time and eliminates negotiation stress.</li>
          <li><strong>Getting Around Locally:</strong> Scooters are popular for beating traffic, but always wear a helmet and ensure you have an international driving permit. For families or groups, local ride-hailing apps or private drivers are safer options.</li>
          <li><strong>Beach Safety:</strong> Always swim between the red and yellow flags, as Canggu’s beach breaks can feature strong undercurrents and rip tides.</li>
          <li><strong>Connectivity:</strong> Pick up an e-SIM or local tourist SIM card upon arrival at the airport so you have instant mobile data as soon as your <Link href="/airport-transfer-canggu" title="Private Transfer Canggu">private transfer canggu</Link> departs.</li>
        </ul>
      </article>

      <section className="bg-slate-50 py-24 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about your bali airport to canggu transfer.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How far is Canggu from Bali Airport?",
                a: "The driving distance from Ngurah Rai International Airport (DPS) to Canggu is roughly 22 kilometers. Depending on traffic flow through Kuta and Seminyak, a comfortable hotel transfer usually takes between 45 to 60 minutes."
              },
              {
                q: "How much does a taxi from Bali airport to Canggu cost?",
                a: "Our private airport transfer to Canggu features a guaranteed fixed price of IDR 325,000 per vehicle (accommodating up to 4 passengers with standard luggage). There are never any hidden fees or surge charges."
              },
              {
                q: "What happens if my flight to Bali is delayed?",
                a: "We utilize real-time flight tracking via your flight number. If your arrival is delayed, our team automatically reschedules your pickup time so your private driver is always waiting when you exit."
              },
              {
                q: "Where will I meet my driver at the airport?",
                a: "After clearing customs at DPS Airport, proceed into the main arrival hall where your English speaking driver will greet you while holding a personalized name board for an effortless meet and greet."
              },
              {
                q: "Are child seats available for the transfer to Canggu?",
                a: "Yes, certified baby and toddler car seats can be arranged upon request for a nominal additional charge. Simply let us know via WhatsApp when securing your booking."
              },
              {
                q: "Can we stop at an ATM or convenience store along the way?",
                a: "Of course. Your private car chauffeur is happy to accommodate a quick, convenient stop at a local ATM, convenience store, or money changer during your journey to Canggu at no extra cost."
              },
              {
                q: "Is it safe to travel to Canggu late at night?",
                a: "Yes, our private airport taxi service operates around the clock. Our professional drivers are highly experienced and fully equipped to manage late-night or early-morning flight arrivals safely."
              },
              {
                q: "Do I need to pay a deposit in advance?",
                a: "No advance payment or deposit is required for standard bookings. You can coordinate your airport pickup canggu via WhatsApp and pay your driver directly in cash upon arrival."
              },
              {
                q: "What type of vehicles are used for the transfer?",
                a: "We dispatch impeccably maintained, fully air-conditioned vehicles such as the Toyota Avanza or Toyota Innova, tailored for comfort and spacious luggage capacity."
              },
              {
                q: "How far in advance should I book my Canggu airport transfer?",
                a: "While last-minute requests are accommodated subject to availability, we strongly suggest booking at least 24 hours ahead to lock in your preferred vehicle and ensure a seamless greeting."
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

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Related Destinations</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Explore our other fixed-price private airport transfer routes across Bali from Ngurah Rai International Airport.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ubud', price: 'IDR 350,000', time: '60-90 mins', href: '/airport-transfer-ubud', image: '/images/ubud-hero.jpg' },
              { name: 'Seminyak', price: 'IDR 175,000', time: '25-40 mins', href: '/airport-transfer-seminyak', image: '/images/seminyak-hero.jpg' },
              { name: 'Uluwatu', price: 'IDR 350,000', time: '40-60 mins', href: '/airport-transfer-uluwatu', image: '/images/uluwatu-hero.jpg' },
              { name: 'Nusa Dua', price: 'IDR 190,000', time: '20-35 mins', href: '/airport-transfer-nusa-dua', image: '/images/nusa-dua-hero.jpg' }
            ].map((dest, i) => (
              <Link key={i} href={dest.href} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <Image 
                    src={dest.image} 
                    alt={`Private airport transfer to ${dest.name}`} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {dest.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1">{dest.name}</h3>
                    <p className="text-sm text-slate-500 mb-4">Duration: {dest.time}</p>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    View Transfer Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Explore More Routes:</span>
            <Link href="/" className="hover:text-emerald-600 underline underline-offset-2">Home</Link>
            <span>•</span>
            <Link href="/airport-transfer-canggu" className="hover:text-emerald-600 underline underline-offset-2">Airport Transfer Canggu</Link>
            <span>•</span>
            <Link href="/airport-transfer-seminyak" className="hover:text-emerald-600 underline underline-offset-2">Airport Transfer Seminyak</Link>
            <span>•</span>
            <Link href="/airport-transfer-uluwatu" className="hover:text-emerald-600 underline underline-offset-2">Airport Transfer Uluwatu</Link>
            <span>•</span>
            <Link href="/airport-transfer-lovina" className="hover:text-emerald-600 underline underline-offset-2">Airport Transfer Lovina</Link>
            <span>•</span>
            <Link href="/airport-transfer-munduk" className="hover:text-emerald-600 underline underline-offset-2">Airport Transfer Munduk</Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 py-20 text-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Ready for a Seamless Trip to Canggu?</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">Book your private <Link href="/airport-transfer-canggu" className="text-white underline underline-offset-2 font-semibold">airport transfer canggu</Link> today. Enjoy a fixed price, zero waiting stress, and an expert driver waiting right at Bali airport.</p>
          <div className="pt-4">
            <Link 
              href={whatsappUrl}
              aria-label="Book your Canggu airport transfer via WhatsApp instantly"
              className="inline-flex justify-center items-center gap-2 px-10 py-5 bg-white hover:bg-emerald-50 text-slate-900 rounded-2xl font-bold transition-all shadow-2xl text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
            >
              <svg aria-hidden="true" className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Book via WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-2xl font-bold text-white tracking-tight">Transfer Bali</span>
            <p className="text-sm text-slate-400 max-w-sm">Your trusted partner for safe, reliable, and fixed-price private airport transfers throughout Bali.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/airport-transfer-canggu" className="hover:text-white transition-colors">Canggu</Link>
            <Link href="/airport-transfer-seminyak" className="hover:text-white transition-colors">Seminyak</Link>
            <Link href="/airport-transfer-uluwatu" className="hover:text-white transition-colors">Uluwatu</Link>
            <Link href={whatsappUrl} className="hover:text-white transition-colors">Contact Support</Link>
          </div>
          <div className="text-sm text-slate-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Transfer Bali. All rights reserved.</p>
            <p className="mt-1">Ngurah Rai International Airport Transfer Specialists</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
