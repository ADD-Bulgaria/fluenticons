import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zM6.5 4h7v24h-7A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4M6 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m-1 7v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0m1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m19.5 8h-7V4h7A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5M25 9v2a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0m1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m-1 7v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0"/>`,
  'regular': `<path d="M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zM6.5 4h7v2h-7A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h7v2h-7A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4m19 22h-7v2h7a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4h-7v2h7A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5M24 9a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m-1 7a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM7 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m-1 7a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"/>`
} as const;

export default function FilmstripSplitIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'filmstripspliticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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