import clsx from "clsx";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  /** When false, skips bottom border (e.g. before another full-bleed block). */
  borderBottom?: boolean;
};

/**
 * Shared inner-page header — matches home typography and spacing.
 */
export function PageShell({
  eyebrow,
  title,
  description,
  children,
  className,
  borderBottom = true,
}: PageShellProps) {
  return (
    <div className={clsx(borderBottom && "border-b border-white/[0.06]", className)}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
        {eyebrow ? (
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 text-balance text-3xl font-light tracking-tight text-white md:text-4xl lg:text-[2.5rem] lg:leading-tight">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60 md:text-base">{description}</p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

type PageContentProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

/** Main content column below PageShell — optional narrow reading width for prose. */
export function PageContent({ children, className, narrow }: PageContentProps) {
  return (
    <div
      className={clsx(
        "mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-12",
        narrow ? "max-w-3xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
