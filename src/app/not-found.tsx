import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="section-pad flex min-h-[60vh] flex-col items-center justify-center bg-ink text-center">
      <div className="plate-number">ERROR — 404</div>
      <h1 className="mt-3 font-display text-4xl font-bold text-haze">Part not found.</h1>
      <p className="mt-3 max-w-md text-sm text-steelLight">
        That page isn't in our catalog. It may have moved, or the link may be
        out of date.
      </p>
      <Button asChild variant="primary" className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
