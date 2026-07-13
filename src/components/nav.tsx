"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
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
      <nav className="section-pad flex h-20 items-center justify-between" aria-label="Main">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold uppercase tracking-wide text-haze">
            Murugesan<span className="text-brass">&amp;Co</span>
          </span>
          <span className="hidden font-mono text-[10px] tracking-widest2 text-steelLight sm:inline">
            EST. 2005
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "font-mono text-xs tracking-widest2 uppercase text-steelLight transition-colors hover:text-brass",
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
          className="hidden border border-brass px-5 py-2.5 font-mono text-xs tracking-widest2 uppercase text-brass transition-colors hover:bg-brass hover:text-ink lg:inline-block"
        >
          Get a Quote
        </Link>

        <button
          className="text-haze lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-haze/10 bg-ink px-6 pb-8 pt-2 lg:hidden">
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
