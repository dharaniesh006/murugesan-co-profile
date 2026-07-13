import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full border-b border-steel/30 bg-transparent py-2.5 font-body text-sm text-ink placeholder:text-steel/50 focus-visible:border-brass focus-visible:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
