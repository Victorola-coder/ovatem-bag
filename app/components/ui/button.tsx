import clsx from "clsx";

export type CtaVariant = "primary" | "default" | "secondary" | "danger" | "google";
export type CtaSize = "default" | "sm" | "lg";

/** Shared classes for marketing CTAs (buttons & CtaLink) — consistent site-wide. */
export function ctaButtonStyles(
  variant: CtaVariant = "primary",
  size: CtaSize = "default",
  options?: { loading?: boolean }
): string {
  const { loading } = options ?? {};

  return clsx(
    "inline-flex items-center justify-center font-medium transition-colors duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/45",
    "disabled:cursor-not-allowed disabled:opacity-50",
    loading && "cursor-wait opacity-90",
    size === "sm" && "rounded-lg px-4 py-2 text-xs",
    size === "default" && "rounded-lg px-5 py-2.5 text-sm",
    size === "lg" && "rounded-lg px-6 py-3 text-base",
    (variant === "primary" || variant === "default") && [
      "bg-white text-[#0c4c3c] shadow-sm",
      "hover:bg-[#eff6f5] active:bg-[#e0ebe8]",
    ],
    variant === "secondary" && [
      "border border-white/40 bg-transparent text-white",
      "hover:bg-white/[0.08] active:bg-white/[0.12]",
    ],
    variant === "danger" && "rounded-lg bg-red-500/15 text-red-200 hover:bg-red-500/25",
    variant === "google" && "rounded-lg bg-white/10 text-white hover:bg-white/15"
  );
}

export default function Button(props: ButtonProps) {
  const {
    loading,
    noDefault,
    className,
    onClick,
    children,
    disabled,
    size = "default",
    variant = "default",
    ...prop
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={clsx(
        !noDefault && ctaButtonStyles(variant, size, { loading }),
        className
      )}
      aria-busy={loading ? true : undefined}
      {...prop}
    >
      <span className="flex items-center justify-center gap-2">
        {loading ? (
          <svg
            className="h-4 w-4 shrink-0 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          children
        )}
      </span>
    </button>
  );
}
