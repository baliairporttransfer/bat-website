import { Star } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return <section id="reviews" className="bg-navy-900 py-20 sm:py-28"><Container><SectionHeading eyebrow="Guest reviews" title="Trusted by travelers from around the world" description="Thoughtful service, clear communication, and a smooth first journey in Bali." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <blockquote key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-7 text-white backdrop-blur"><div className="flex text-gold-400">{Array.from({ length: item.rating }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div><p className="mt-5 text-base leading-7 text-white/85">“{item.quote}”</p><footer className="mt-6"><p className="font-bold">{item.name}</p><p className="text-sm text-white/55">{item.country}</p></footer></blockquote>)}</div></Container></section>;
}
