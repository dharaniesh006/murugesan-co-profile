import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Gauge, ShieldCheck, Factory, Boxes } from "lucide-react";
import { StatPlate } from "@/components/stat-plate";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Precision Components & Hydraulic Hose Manufacturer in Chennai, Tamil Nadu",
};

const industries = [
  "Earth Movers", "Mining", "Cranes", "Compressors",
  "Plastic Molders", "Special Purpose Machinery",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink bg-diagonal-hatch">
        <div className="section-pad grid gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div className="animate-rise">
            <div className="eyebrow">Manufacturer · Exporter · Supplier — Est. 2005</div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-haze text-balance sm:text-6xl lg:text-7xl">
              Precision components and hydraulic systems, built to{" "}
              <span className="text-brass">your specification.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-steelLight">
              From Tiruvallur, Tamil Nadu, we manufacture CNC-turned diesel
              engine components, hose assemblies, end fittings and adapters —
              machined, welded and quality-checked in one facility, across
              16 CNC machines.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="primary">
                <Link href="/precision-components">
                  Precision Components <ArrowRight size={14} />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden border border-haze/15">
            <Image
              src="/images/workshop/workshop-1.png"
              alt="Murugesan & Co. CNC machine shop floor"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-gunmetal">
        <div className="section-pad grid grid-cols-2 gap-4 py-10 md:grid-cols-4">
          <StatPlate code="PLATE 01" value="2005" label="In Operation Since" />
          <StatPlate code="PLATE 02" value="16" label="CNC Machines" />
          <StatPlate code="PLATE 03" value="10K PSI" label="Max Hydraulic Pressure" />
          <StatPlate code="PLATE 04" value="ISO 9001" label="Certified Quality System" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-paper py-24">
        <div className="eyebrow">Why Manufacturers Choose Us</div>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold text-ink text-balance">
          Every fitting passes through a stage-wise quality check before it leaves the floor.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden border border-steel/15 bg-steel/15 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Gauge, title: "Pressure Rated", body: "Assemblies built and tested up to 10,000 PSI across spiral and braided constructions." },
            { icon: ShieldCheck, title: "Quality Controlled", body: "Stage-wise inspection, random testing and sampling ahead of every delivery." },
            { icon: Factory, title: "In-House Machining", body: "16 CNC lathes and 2 × 100-ton presses running end fittings and press components." },
            { icon: Boxes, title: "Global Standards", body: "SAE, DIN, BS, IS, EN and ISO specifications manufactured to fit, not to force." },
          ].map((f, i) => (
            <div key={i} className="flex flex-col gap-4 bg-paper p-8">
              <f.icon className="text-brass" size={26} />
              <h3 className="font-display text-lg font-semibold text-ink">{f.title}</h3>
              <p className="text-sm leading-relaxed text-steel">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRECISION COMPONENTS SPOTLIGHT */}
      <section className="section-pad bg-ink py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow">Now Our Primary Focus</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-haze text-balance">
              Precision components for diesel engines and OEM applications.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-steelLight">
              Most of this work runs under client confidentiality — so what
              you'll see is real production capability, shown by process and
              material rather than part name or client.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary">
                <Link href="/precision-components">
                  See the Capability Gallery <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "/images/precision/part-1.png",
              "/images/precision/part-3.png",
              "/images/precision/part-5.png",
              "/images/precision/part-7.png",
              "/images/precision/part-9.png",
              "/images/precision/group-1.png",
            ].map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden border border-haze/10">
                <Image
                  src={src}
                  alt="CNC-turned precision component"
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-pad bg-haze py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Product Range</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink">
              Precision components and hydraulic fittings, one quality system.
            </h2>
          </div>
          <Link
            href="/products"
            className="font-mono text-xs tracking-widest2 uppercase text-brass hover:underline"
          >
            View full catalog →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-ink py-24">
        <div className="section-pad">
          <div className="eyebrow">Industries Served</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-haze">
            Built for the machines that don't get to stop.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="border border-haze/15 px-5 py-2.5 font-mono text-xs uppercase tracking-widest2 text-steelLight"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-paper py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold text-ink text-balance">
          Send your specification. We'll quote it against the standard you actually need.
        </h2>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="primary">
            <Link href="/contact">
              Talk to Our Team <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
