import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Murugesan & Co. at Kakkalur Industrial Estate, Tiruvallur, Tamil Nadu, or send a spec-matched enquiry directly.",
};

export default function ContactPage() {
  return (
    <section className="section-pad grid gap-16 bg-paper py-24 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <div className="eyebrow">Contact</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink text-balance">
          Send your specification, get a quote back.
        </h1>

        <ul className="mt-10 space-y-6">
          <li className="flex gap-4">
            <MapPin className="mt-1 shrink-0 text-brass" size={20} />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-steel">Factory</div>
              <p className="mt-1 text-sm text-ink">
                S128 (Development Plot), Kakkalur Industrial Estate, Tiruvallur District, Tamil Nadu 602003
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <Phone className="mt-1 shrink-0 text-brass" size={20} />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-steel">Phone</div>
              <a href="tel:+919382701199" className="mt-1 block text-sm text-ink hover:text-brass">
                +91 93827 01199
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <Mail className="mt-1 shrink-0 text-brass" size={20} />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-steel">Email</div>
              <a href="mailto:murugesangroups@hotmail.com" className="mt-1 block text-sm text-ink hover:text-brass">
                murugesangroups@hotmail.com
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <Clock className="mt-1 shrink-0 text-brass" size={20} />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-steel">Hours</div>
              <p className="mt-1 text-sm text-ink">Mon – Sat, 9:00 AM – 6:30 PM IST</p>
            </div>
          </li>
        </ul>

        <div className="mt-10 aspect-video overflow-hidden border border-steel/20">
          <iframe
            title="Murugesan & Co. factory location — Kakkalur Industrial Estate"
            src="https://www.google.com/maps?q=13.1268983,79.940409&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border border-steel/15 bg-white p-8 sm:p-10">
        <ContactForm />
      </div>
    </section>
  );
}
