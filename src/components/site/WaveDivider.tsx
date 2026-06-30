import { cn } from "@/lib/utils";

/**
 * Organic wave that sits at the bottom of a section and is filled with the
 * NEXT section's background color, so the following section appears to rise
 * up with a soft, natural edge. Purely decorative.
 */
export function WaveDivider({
  color = "var(--color-background)",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-x-0 bottom-0 z-10 pointer-events-none leading-[0]",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-[44px] sm:h-[68px] md:h-[92px]"
      >
        <path
          d="M0,52 C240,104 460,8 720,40 C980,72 1200,104 1440,48 L1440,100 L0,100 Z"
          style={{ fill: color }}
        />
      </svg>
    </div>
  );
}
