import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients",
  description: "Trusted by manufacturers and trading companies across India, Oman and Saudi Arabia.",
};

const clients = [
  { name: "Delphi TVS", location: "India" },
  { name: "Kavya Exports Pvt. Ltd.", location: "Chennai, India" },
  { name: "Ali Stewa Trading Company", location: "Oman" },
  { name: "Al Fouzan Trading Company", location: "Dammam, Saudi Arabia" },
];

export default function ClientsPage() {
  return (
    <>
      <section className="bg-ink section-pad py-24">
        <div className="eyebrow">Clients</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          Reordered because the last batch fit exactly like the first.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-steelLight">
          Consistency of quality has earned us customers across India and
          export relationships across the Gulf.
        </p>
      </section>

      <section className="section-pad bg-paper py-24">
        <div className="grid gap-px overflow-hidden border border-steel/15 bg-steel/15 sm:grid-cols-2">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center justify-between bg-paper p-8">
              <span className="font-display text-xl font-semibold text-ink">{c.name}</span>
              <span className="font-mono text-xs uppercase tracking-widest2 text-steel">{c.location}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
