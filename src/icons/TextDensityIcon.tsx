import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zm2.5 5h6a2.5 2.5 0 0 1 0 5h-6zm6 11h-6v5h6a2.5 2.5 0 0 0 0-5M3 5a1 1 0 0 0 0 2h10.5V5zM2 26a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2zm-1-4a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2z"/>`,
  'light': `<path d="M17 2.5a.5.5 0 0 0-1 0v27a.5.5 0 0 0 1 0zM18.5 8H26a2 2 0 1 1 0 4h-7.5v1H26a3 3 0 1 0 0-6h-7.5zM26 19h-7.5v-1H26a3 3 0 1 1 0 6h-7.5v-1H26a2 2 0 1 0 0-4M3.5 5a.5.5 0 0 0 0 1h11V5zM3 25.5a.5.5 0 0 1 .5-.5h11v1h-11a.5.5 0 0 1-.5-.5m.5-5.5a.5.5 0 0 0 0 1h11v-1zM3 15.5a.5.5 0 0 1 .5-.5h11v1h-11a.5.5 0 0 1-.5-.5m.5-5.5a.5.5 0 0 0 0 1h11v-1z"/>`,
  'regular': `<path d="M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zm1.5 6h7a1.5 1.5 0 0 1 0 3h-7v2h7a3.5 3.5 0 1 0 0-7h-7zm7 11h-7v-2h7a3.5 3.5 0 1 1 0 7h-7v-2h7a1.5 1.5 0 0 0 0-3M3 5a1 1 0 0 0 0 2h10.5V5zM2 26a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2zm-1-4a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2z"/>`
} as const;

export default function TextDensityIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'textdensityicon_gradient';
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