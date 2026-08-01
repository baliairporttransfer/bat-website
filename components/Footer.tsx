import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return <footer className="bg-navy-900 py-12 text-white"><Container><div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]"><div><div className="relative h-16 w-36"><Image src="/logo/bat-logo.png" alt="BAT logo" fill className="object-contain" /></div><p className="mt-4 max-w-sm text-sm leading-6 text-white/60">Premium private airport transfers and chauffeured journeys across Bali.</p></div><div><h3 className="font-bold">Explore</h3><div className="mt-4 grid gap-3">{NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="text-sm text-white/60 hover:text-gold-400">{link.label}</Link>)}</div></div><div><h3 className="font-bold">Contact</h3><div className="mt-4 space-y-3 text-sm text-white/60"><p>{SITE_CONFIG.whatsappDisplay}</p><p>{SITE_CONFIG.email}</p><p>{SITE_CONFIG.address}</p></div></div></div><div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">© {new Date().getFullYear()} Bali Airport Transfer. All rights reserved.</div></Container></footer>;
}
