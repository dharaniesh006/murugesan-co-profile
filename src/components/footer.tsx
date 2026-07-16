import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-haze/10 bg-ink text-steelLight">
      <div className="section-pad grid gap-12 py-16 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-bold uppercase tracking-wide text-haze">
            Murugesan<span className="text-brass">&amp;Co</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Chennai / Tiruvallur manufacturer of hydraulic hose assemblies, end
            fittings, adapters and precision components, serving industry
            since 2005.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Products</div>
          <ul className="space-y-2 text-sm">
            {[...products]
              .sort((a, b) => (a.slug === "precision-components" ? -1 : b.slug === "precision-components" ? 1 : 0))
              .map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="hover:text-brass">
                    {p.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brass">About Us</Link></li>
            <li><Link href="/manufacturing" className="hover:text-brass">Manufacturing</Link></li>
            <li><Link href="/quality" className="hover:text-brass">Quality Assurance</Link></li>
            <li><Link href="/industries" className="hover:text-brass">Industries Served</Link></li>
            <li><Link href="/clients" className="hover:text-brass">Clients</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brass" />
              S128 (Development Plot), Kakkalur Industrial Estate, Tiruvallur District, Tamil Nadu 602003
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-brass" />
              <a href="tel:+919382701199" className="hover:text-brass">+91 93827 01199</a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-brass" />
              <a href="mailto:murugesangroups@hotmail.com" className="hover:text-brass">
                murugesangroups@hotmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-pad flex flex-col gap-2 border-t border-haze/10 py-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Murugesan &amp; Co. All rights reserved.</span>
        <span className="font-mono tracking-widest2 uppercase">GSTIN: 33AJBPB9910G1ZO</span>
        <span className="font-mono tracking-widest2 uppercase">Manufactured in Tamil Nadu, India</span>
      </div>
    </footer>
  );
}
