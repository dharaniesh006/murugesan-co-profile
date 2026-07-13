import { z } from "zod";
import { getCountryRule } from "@/lib/country-codes";

export const phoneEntrySchema = z
  .object({
    countryCode: z.string().trim().min(1, "Select code"),
    number: z
      .string()
      .trim()
      .regex(/^[0-9]+$/, "Digits only"),
  })
  .superRefine((data, ctx) => {
    const rule = getCountryRule(data.countryCode);
    if (!rule) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["countryCode"], message: "Unknown country code" });
      return;
    }
    const len = data.number.length;
    if (len < rule.minDigits || len > rule.maxDigits) {
      const expected =
        rule.minDigits === rule.maxDigits
          ? `${rule.minDigits} digits`
          : `${rule.minDigits}–${rule.maxDigits} digits`;
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["number"],
        message: `Enter ${expected} for this country`,
      });
    }
  });

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(100, "Name is too long"),
  company: z.string().trim().max(150, "Company name is too long").optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address").max(150),
  phone: phoneEntrySchema,
  product: z.string().trim().max(150).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about your requirement")
    .max(2000, "Message is too long"),
  // Honeypot — must stay empty. Real users never see or fill this field.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const loginSchema = z.object({
  username: z.string().trim().min(3).max(50),
  password: z.string().min(8).max(200),
});
