export const countryCodes = [
  { code: "+91", label: "India (+91)", minDigits: 10, maxDigits: 10 },
  { code: "+971", label: "UAE (+971)", minDigits: 9, maxDigits: 9 },
  { code: "+966", label: "Saudi Arabia (+966)", minDigits: 9, maxDigits: 9 },
  { code: "+974", label: "Qatar (+974)", minDigits: 8, maxDigits: 8 },
  { code: "+965", label: "Kuwait (+965)", minDigits: 8, maxDigits: 8 },
  { code: "+968", label: "Oman (+968)", minDigits: 8, maxDigits: 8 },
  { code: "+973", label: "Bahrain (+973)", minDigits: 8, maxDigits: 8 },
  { code: "+1", label: "USA/Canada (+1)", minDigits: 10, maxDigits: 10 },
  { code: "+44", label: "UK (+44)", minDigits: 10, maxDigits: 10 },
  { code: "+61", label: "Australia (+61)", minDigits: 9, maxDigits: 9 },
  { code: "+65", label: "Singapore (+65)", minDigits: 8, maxDigits: 8 },
  { code: "+49", label: "Germany (+49)", minDigits: 6, maxDigits: 11 },
] as const;

export function getCountryRule(code: string) {
  return countryCodes.find((c) => c.code === code);
}
