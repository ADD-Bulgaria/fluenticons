import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M31.75 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m5 2.5A5 5 0 0 1 33 13.842V18.5a5 5 0 0 0 9.975.5H39.25a1.25 1.25 0 0 1-.884-2.134l5-5a1.25 1.25 0 0 1 2.134.884v5.75a7.5 7.5 0 0 1-15 0v-4.658A5 5 0 1 1 36.75 9M38 28a9.49 9.49 0 0 1-7.806-4.085l-5.612 2.955a1.25 1.25 0 0 1-1.168-.002L4 16.567V33.75A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-7.884A9.46 9.46 0 0 1 38 28M24.75 9q0-.51.07-1H10.25a6.25 6.25 0 0 0-6.23 5.747L24.002 24.35l5.048-2.658a9.5 9.5 0 0 1-.55-3.192v-3.299A7 7 0 0 1 24.75 9"/>`,
  'regular': `<path d="M31.75 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m5 2.5A5 5 0 0 1 33 13.842V18.5a5 5 0 0 0 9.975.5H39.25a1.25 1.25 0 0 1-.884-2.134l5-5a1.25 1.25 0 0 1 2.134.884v5.75a7.5 7.5 0 0 1-15 0v-4.658A5 5 0 1 1 36.75 9M24.82 8H10.25A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-7.884a9.5 9.5 0 0 1-2.5 1.468v6.416a3.75 3.75 0 0 1-3.75 3.75h-27.5a3.75 3.75 0 0 1-3.75-3.75V17.894l16.914 8.974a1.25 1.25 0 0 0 1.168.002l5.612-2.954a9.5 9.5 0 0 1-1.144-2.223l-5.048 2.657L6.5 15.063v-.813a3.75 3.75 0 0 1 3.75-3.75h14.661a7 7 0 0 1-.09-2.5"/>`
} as const;

export default function MailFishHookIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'mailfishhookicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill={`url(#${gradientId})`}
      className={className}
      style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
      aria-hidden={title ? undefined : true}
      focusable="false"
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%" y1="0%" x2="100%" y2="0%"
          gradientTransform={gradient.angle !== undefined ? `rotate(${gradient.angle})` : undefined}
        >
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}