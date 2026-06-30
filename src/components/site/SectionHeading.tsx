import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary",
        )}
      >
        <Leaf className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{children}</p>
      )}
    </div>
  );
}
