"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/45 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#top" aria-label="Bali Airport Transfer home" className="relative h-20 w-44 shrink-0">
          <Image src="/logo/bat-logo.png" alt="BAT Bali Airport Transfer" fill className="object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-white/85 transition hover:text-gold-400">{link.label}</Link>)}
        </nav>
        <div className="hidden lg:block">
          <Link href="#booking" className="inline-flex h-11 items-center rounded-full bg-gold-500 px-6 text-sm font-bold text-navy-900 transition hover:bg-gold-400">Book now</Link>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-xl border border-white/20 p-2 text-white lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-white hover:bg-white/10">{link.label}</Link>)}
            <Link href="#booking" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-gold-500 px-4 py-3 text-center text-sm font-bold text-navy-900">Book now</Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
