import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 2005, Murugesan & Co. has grown from a Chennai-area hose assembler into a manufacturer of precision-turned components for diesel engine OEMs, alongside hydraulic hose assemblies, fittings and adapters.",
};

const timeline = [
  { year: "2005", text: "Murugesan & Co. founded in the Chennai region, assembling hose and pipe fittings for local machinery repair." },
  { year: "2010", text: "Expanded into in-house end-fitting manufacturing on semi-automatic and CNC lathes, adding TIG welding capability." },
  { year: "2015", text: "Added metal finishing services — zinc, silver, electroless nickel and tin plating — to offer complete finished parts." },
  { year: "Today", text: "16 CNC machines and 2 × 100-ton presses at our Kakkalur Industrial Estate facility, supplying OEMs across India and exporting to the Gulf." },
];

const values = [
  { title: "Consistency", body: "The same tolerance, the same finish, on the tenth batch as on the first." },
  { title: "Fit, Not Force", body: "We manufacture to the standard the customer specifies — SAE, DIN, BS, IS, EN or ISO — rather than asking them to adapt." },
  { title: "Traceable Quality", body: "Stage-wise inspection and random sampling on every production run, not just at final dispatch." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink section-pad py-24">
        <div className="eyebrow">About Murugesan &amp; Co.</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          Two decades of components built to hold tolerance, and fittings built to hold pressure.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steelLight">
          Established in 2005, Murugesan &amp; Company pioneered the manufacturing,
          wholesale exporting and supplying of hose assemblies and hydraulic
          pipe fittings from Tamil Nadu. Precision-turned components for
          diesel engine and OEM programs are now our primary manufacturing
          focus, alongside a full hydraulic range — hoses, end fittings and
          adapters — used across earth movers, compressors, plastic molders,
          cranes and special-purpose machinery nationwide.
        </p>
      </section>

      <section className="section-pad grid gap-14 bg-paper py-24 lg:grid-cols-2">
        <div>
          <div className="eyebrow">Mission</div>
          <p className="mt-4 font-display text-2xl font-semibold text-ink text-balance">
            Manufacture precision components and durable hydraulic products at
            cost-effective prices, without compromising the quality check
            system behind every part.
          </p>
        </div>
        <div>
          <div className="eyebrow">Vision</div>
          <p className="mt-4 font-display text-2xl font-semibold text-ink text-balance">
            Remain the manufacturer OEMs specify by name — a component held
            to tolerance, or a fitting that has to work the first time,
            under pressure, in the field.
          </p>
        </div>
      </section>

      <section className="section-pad bg-haze py-24">
        <div className="eyebrow">Core Values</div>
        <div className="mt-8 grid gap-px overflow-hidden border border-steel/15 bg-steel/15 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-haze p-8">
              <h3 className="font-display text-xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-paper py-24">
        <div className="eyebrow">Timeline</div>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink">Growing the shop floor, one capability at a time.</h2>
        <div className="mt-12 space-y-0 border-l border-steel/20">
          {timeline.map((t) => (
            <div key={t.year} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-brass" />
              <div className="font-mono text-xs tracking-widest2 uppercase text-brass">{t.year}</div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
