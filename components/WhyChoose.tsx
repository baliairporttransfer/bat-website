import { Clock3, Languages, ShieldCheck, WalletCards } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  { icon: WalletCards, title: "Fixed prices", text: "Know your estimated fare before you travel, with no meter surprises." },
  { icon: Clock3, title: "Flight-aware pickup", text: "We use your flight details to prepare for delays and arrival changes." },
  { icon: Languages, title: "English-speaking drivers", text: "Friendly local professionals who make your arrival clear and comfortable." },
  { icon: ShieldCheck, title: "Private & dependable", text: "A private vehicle, direct route, and responsive WhatsApp support." },
];

export function WhyChoose() {
  return <section id="about" className="bg-white py-20 sm:py-28"><Container><SectionHeading eyebrow="Why choose BAT" title="A calmer way to arrive in Bali" description="From the arrivals hall to your hotel, every detail is designed to feel simple, safe, and well organized." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-50 text-gold-600"><Icon size={23} /></div><h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></Container></section>;
}
