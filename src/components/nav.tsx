"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../../public/images/brand/logo-transparent.png";

const links = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/precision-components", label: "Precision" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/quality", label: "Quality" },
  { href: "/industries", label: "Industries" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-haze/10 bg-ink/95 backdrop-blur">
      <nav className="section-pad flex min-h-[72px] items-center justify-between gap-4 py-3" aria-label="Main">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src={logo} alt="Murugesan & Co. logo" width={36} height={36} className="h-8 w-8 shrink-0" priority />
          <span className="whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide text-haze">
            Murugesan<span className="text-brass">&amp;Co</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "whitespace-nowrap font-mono text-[11px] tracking-widest2 uppercase text-steelLight transition-colors hover:text-brass",
                  pathname === l.href && "text-brass"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden shrink-0 whitespace-nowrap border border-brass px-4 py-2.5 font-mono text-[11px] tracking-widest2 uppercase text-brass transition-colors hover:bg-brass hover:text-ink xl:inline-block"
        >
          Get a Quote
        </Link>

        <button
          className="shrink-0 text-haze xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-haze/10 bg-ink px-6 pb-8 pt-2 xl:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-haze/5 py-3 font-mono text-sm tracking-widest2 uppercase text-steelLight hover:text-brass"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
