import Image from 'next/image';

type Size = 'sm' | 'md' | 'lg';

const ASPECT = 1600 / 1146;

const sizeMap: Record<Size, { height: number }> = {
  sm: { height: 56 },
  md: { height: 96 },
  lg: { height: 144 },
};

export function Logo({ size = 'md', priority = false }: { size?: Size; priority?: boolean }) {
  const { height } = sizeMap[size];
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src="/logo.png"
      alt="Siedlisko po nowemu"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className="block h-auto w-auto"
      style={{ height, width: 'auto' }}
    />
  );
}
