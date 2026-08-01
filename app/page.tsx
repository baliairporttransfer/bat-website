import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import Destinations from "@/components/Destinations";
import { FAQ } from "@/components/FAQ";
import  Fleet  from "@/components/Fleet";
import { Footer } from "@/components/Footer";
import  Hero  from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";
import { SITE_CONFIG } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    logo: `${SITE_CONFIG.baseUrl}/logo/bat-logo.png`,
    image: SITE_CONFIG.heroImage,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.whatsappDisplay,
    email: SITE_CONFIG.email,
    areaServed: { "@type": "AdministrativeArea", name: "Bali" },
    priceRange: "IDR 175,000–800,000",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main>
        <Hero />
        <BookingForm />
        <WhyChoose />
        <Destinations />
        <Fleet />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
