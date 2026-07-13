export default function Loading() {
  return (
    <div className="section-pad grid gap-5 bg-paper py-24 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-48 animate-pulse border border-steel/10 bg-steel/5" />
      ))}
    </div>
  );
}
