import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12H6zm20 12.5H6v3.25A3.25 3.25 0 0 0 9.25 22H13v5a3 3 0 1 0 6 0v-5h3.75A3.25 3.25 0 0 0 26 18.75z"/><path d="M6 15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1H6zM17 2v5a1 1 0 1 0 2 0V2zm6 7V2h-2v7a1 1 0 1 0 2 0"/>`,
  'filled': `<path d="M17 7V2H7a1 1 0 0 0-1 1v11h20V3a1 1 0 0 0-1-1h-2v7a1 1 0 1 1-2 0V2h-2v5a1 1 0 1 1-2 0m9 9H6v2.75A3.25 3.25 0 0 0 9.25 22H13v5a3 3 0 1 0 6 0v-5h3.75A3.25 3.25 0 0 0 26 18.75z"/>`,
  'light': `<path d="M7 2a1 1 0 0 0-1 1v15.5A3.5 3.5 0 0 0 9.5 22H12v4a4 4 0 0 0 8 0v-4h2.5a3.5 3.5 0 0 0 3.5-3.5V3a1 1 0 0 0-1-1zm11 1h3v6.5a.5.5 0 0 0 1 0V3h3v12H7V3h10v4.5a.5.5 0 0 0 1 0zM7 16h18v2.5a2.5 2.5 0 0 1-2.5 2.5H20a1 1 0 0 0-1 1v4a3 3 0 1 1-6 0v-4a1 1 0 0 0-1-1H9.5A2.5 2.5 0 0 1 7 18.5z"/>`,
  'regular': `<path d="M6 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15.75A3.25 3.25 0 0 1 22.75 22H20v4a4 4 0 0 1-8 0v-4H9.25A3.25 3.25 0 0 1 6 18.75zm2 1v10h16V4h-2v5a1 1 0 1 1-2 0V4h-2v3a1 1 0 1 1-2 0V4zm16 14.75V16H8v2.75c0 .69.56 1.25 1.25 1.25H13a1 1 0 0 1 1 1v5a2 2 0 1 0 4 0v-5a1 1 0 0 1 1-1h3.75c.69 0 1.25-.56 1.25-1.25"/>`
} as const;

export default function PaintBrushIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'paintbrushicon_gradient';
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