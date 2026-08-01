import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return <section id="faq" className="bg-slate-50 py-20 sm:py-28"><Container><SectionHeading eyebrow="FAQ" title="Everything you need before pickup" /><div className="mx-auto mt-12 max-w-3xl space-y-3">{faqItems.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer list-none pr-8 font-bold text-navy-900">{item.question}<span className="float-right text-gold-600 transition group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p></details>)}</div></Container></section>;
}
