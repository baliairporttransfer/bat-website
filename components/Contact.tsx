import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function Contact() {
  return <section id="contact" className="bg-white py-20"><Container><div className="overflow-hidden rounded-4xl bg-navy-900 px-6 py-12 text-center shadow-luxury sm:px-12"><p className="text-xs font-bold uppercase tracking-[.25em] text-gold-400">Need help?</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">Talk to our Bali transfer team</h2><p className="mx-auto mt-4 max-w-2xl text-white/70">Questions about luggage, child seats, late arrivals, or a custom itinerary? We reply quickly on WhatsApp.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gold-500 px-6 font-bold text-navy-900"><MessageCircle size={19} />{SITE_CONFIG.whatsappDisplay}</a><a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-bold text-white"><Mail size={19} />Email us</a></div></div></Container></section>;
}
