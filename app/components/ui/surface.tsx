import clsx from "clsx";

/**
 * Quiet panel — hairline border, no hover glow or scale (replaces legacy Glow on marketing surfaces).
 */
export function Surface({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("rounded-xl border border-white/[0.08] bg-white/[0.02]", className)}>
      {children}
    </div>
  );
}
