"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type EnquiryInput } from "@/lib/validations";
import { countryCodes, getCountryRule } from "@/lib/country-codes";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

export function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      product: defaultProduct ?? "",
      phone: { countryCode: "+91", number: "" },
    },
  });

  const selectedCode = useWatch({ control, name: "phone.countryCode" }) || "+91";
  const countryRule = getCountryRule(selectedCode);

  async function onSubmit(data: EnquiryInput) {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setStatus("error");
        setErrorMsg("Too many enquiries from this connection. Please try again in an hour.");
        return;
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(body?.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border border-brass/30 bg-brass/5 p-8">
        <CheckCircle2 className="text-brass" size={28} />
        <h3 className="font-display text-xl font-semibold text-ink">Enquiry received</h3>
        <p className="text-sm text-steel">
          Thank you — our team will get back to you within one business day.
        </p>
        <Button variant="outline" className="mt-2 border-ink/20 text-ink hover:border-brass" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot field — hidden from sighted users, bots tend to fill every field */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Company name (optional)" {...register("company")} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="phoneNumber">Phone</Label>
        <div className="flex gap-2">
          <select
            id="phoneCountryCode"
            {...register("phone.countryCode")}
            className="w-[9.5rem] shrink-0 border-b border-steel/30 bg-transparent py-2.5 font-mono text-sm text-ink focus-visible:border-brass focus-visible:outline-none"
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
          <Input
            id="phoneNumber"
            placeholder="00000 00000"
            inputMode="numeric"
            maxLength={countryRule?.maxDigits ?? 15}
            {...register("phone.number")}
            aria-invalid={!!errors.phone?.number}
          />
        </div>
        {countryRule && !errors.phone?.number && (
          <p className="mt-1 font-mono text-[11px] text-steel/50">
            {countryRule.minDigits === countryRule.maxDigits
              ? `${countryRule.minDigits} digits expected`
              : `${countryRule.minDigits}–${countryRule.maxDigits} digits expected`}
          </p>
        )}
        {(errors.phone?.number || errors.phone?.countryCode) && (
          <p className="mt-1 text-xs text-red-600">
            {errors.phone?.number?.message || errors.phone?.countryCode?.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="product">Product of interest</Label>
        <select
          id="product"
          {...register("product")}
          className="w-full border-b border-steel/30 bg-transparent py-2.5 font-body text-sm text-ink focus-visible:border-brass focus-visible:outline-none"
        >
          <option value="">General enquiry</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message">Requirement details</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Quantity, specification, target delivery, and any drawing references"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" /> Sending
          </>
        ) : (
          "Submit Enquiry"
        )}
      </Button>
      <p className="font-mono text-[11px] tracking-wide text-steel/60">
        Fields are validated and rate-limited server-side. We reply within one business day.
      </p>
    </form>
  );
}
