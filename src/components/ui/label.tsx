import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("font-mono text-[11px] tracking-widest2 uppercase text-steel", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };
