export function StatPlate({
  value,
  label,
  code,
}: {
  value: string;
  label: string;
  code: string;
}) {
  return (
    <div className="relative border border-haze/15 bg-plate/40 p-6">
      <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-haze/20" />
      <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-haze/20" />
      <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-haze/20" />
      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-haze/20" />
      <div className="plate-number">{code}</div>
      <div className="mt-2 font-display text-4xl font-bold text-haze">{value}</div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-steelLight">
        {label}
      </div>
    </div>
  );
}
