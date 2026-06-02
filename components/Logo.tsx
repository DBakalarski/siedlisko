type Size = 'sm' | 'md' | 'lg';

const sizeMap: Record<Size, { icon: number; mark: string; sub: string; gap: string }> = {
  sm: { icon: 22, mark: 'text-[11px]', sub: 'text-[10px]', gap: 'gap-[3px]' },
  md: { icon: 30, mark: 'text-[14px]', sub: 'text-[12px]', gap: 'gap-[4px]' },
  lg: { icon: 48, mark: 'text-[20px]', sub: 'text-[16px]', gap: 'gap-[6px]' },
};

export function Logo({ size = 'md' }: { size?: Size }) {
  const s = sizeMap[size];

  return (
    <span className={`inline-flex flex-col items-center ${s.gap} text-primary`}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* roof */}
        <path d="M4 15 L16 5 L28 15" />
        {/* walls */}
        <path d="M7 14 L7 26 L25 26 L25 14" />
        {/* door */}
        <path d="M14 26 L14 19 L18 19 L18 26" />
        {/* chimney */}
        <path d="M22 10 L22 7 L24 7 L24 11.5" />
      </svg>
      <span
        className={`font-serif font-semibold tracking-wordmark uppercase leading-none ${s.mark}`}
      >
        Siedlisko
      </span>
      <span
        className={`font-serif italic text-muted-fg leading-none ${s.sub}`}
      >
        po nowemu
      </span>
    </span>
  );
}
