import {
  Cable,
  Link2,
  GitMerge,
  CircleDot,
  Disc3,
  Waves,
  Droplets,
  Cog,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "hydraulic-hose-assemblies": Cable,
  "hydraulic-hose-end-fittings": Link2,
  "hydraulic-adapters": GitMerge,
  ferrules: CircleDot,
  "flange-fittings": Disc3,
  "stainless-steel-hoses": Waves,
  "hand-primers": Droplets,
  "precision-components": Cog,
  "metal-finishing": Sparkles,
};

export function ProductIcon({
  slug,
  size = "md",
}: {
  slug: string;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = ICON_MAP[slug] ?? Cog;
  const dims = size === "lg" ? 48 : size === "sm" ? 20 : 28;
  const pad = size === "lg" ? "p-10" : size === "sm" ? "p-3" : "p-6";

  return (
    <div
      className={`flex aspect-square items-center justify-center border border-steel/15 bg-gunmetal bg-diagonal-hatch ${pad}`}
    >
      <Icon size={dims} className="text-brass" strokeWidth={1.5} />
    </div>
  );
}
