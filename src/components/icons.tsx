type IconProps = { size?: number; className?: string };

export function ArrowUpRight({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function XLogo({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.53 3h3.19l-6.97 7.97L22 21h-6.4l-5.01-6.55L4.85 21H1.66l7.45-8.52L1.5 3h6.56l4.53 5.99Zm-1.12 16.1h1.77L7.67 4.8H5.77Z" />
    </svg>
  );
}

/** Pump.fun has no public mark to borrow, so its card gets a plain target. */
export function TargetMark({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  );
}

export function GithubLogo({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49l-.01-1.71c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

/**
 * Streamflow mark: three offset bars that read as an S.
 * Do not redraw this by hand — it is the official glyph shape.
 */
export function StreamflowLogo({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        d="M 6.027 0 C 2.698 0 0 2.687 0 6 L 18 6 C 21.314 6 24 3.314 24 0 Z"
        transform="translate(0 1.75)"
      />
      <path
        d="M 18.175 0 L 0 0 C 0 3.259 2.608 6 5.825 6 L 24 6 C 24 2.742 21.392 0 18.175 0 Z"
        transform="translate(0 9)"
      />
      <path
        d="M 6.027 0 C 2.698 0 0 2.687 0 6 L 6 6 C 9.314 6 12 3.314 12 0 Z"
        transform="translate(0 16.25)"
      />
    </svg>
  );
}
