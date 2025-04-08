import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M24 9.725A5.5 5.5 0 0 0 20 8H7a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h13a5.5 5.5 0 0 0 4-1.725L25 23z"/><path d="M24 9.725A5.5 5.5 0 0 1 28 8h13a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H28a5.5 5.5 0 0 1-4-1.725L23 23z"/><path d="M6.5 9a1 1 0 0 1 1-1h15A1.5 1.5 0 0 1 24 9.5l.5 15L24 34a3.5 3.5 0 0 1-3.5 3.5h-13a1 1 0 0 1-1-1z"/><path d="M41.5 9a1 1 0 0 0-1-1h-15A1.5 1.5 0 0 0 24 9.5V34a3.5 3.5 0 0 0 3.5 3.5h13a1 1 0 0 0 1-1z"/>`,
  'filled': `<path d="M20 8c1.576 0 2.997.663 4 1.725A5.5 5.5 0 0 1 28 8h13a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H28a5.5 5.5 0 0 1-4-1.725A5.5 5.5 0 0 1 20 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3zm2.5 26.5v-21A2.5 2.5 0 0 0 20 11H7v26h13a2.5 2.5 0 0 0 2.5-2.5m3-21v21A2.5 2.5 0 0 0 28 37h13V11H28a2.5 2.5 0 0 0-2.5 2.5"/>`,
  'regular': `<path d="M20 8c1.602 0 3.037.718 4 1.85A5.24 5.24 0 0 1 28 8h13.25A2.75 2.75 0 0 1 44 10.75v26.5A2.75 2.75 0 0 1 41.25 40H28a5.24 5.24 0 0 1-4-1.85A5.24 5.24 0 0 1 20 40H6.75A2.75 2.75 0 0 1 4 37.25v-26.5A2.75 2.75 0 0 1 6.75 8zm2.75 26.75v-21.5A2.75 2.75 0 0 0 20 10.5H6.75a.25.25 0 0 0-.25.25v26.5c0 .138.112.25.25.25H20a2.75 2.75 0 0 0 2.75-2.75m2.5-21.5v21.5A2.75 2.75 0 0 0 28 37.5h13.25a.25.25 0 0 0 .25-.25v-26.5a.25.25 0 0 0-.25-.25H28a2.75 2.75 0 0 0-2.75 2.75"/>`
} as const;

export default function BookOpenIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'bookopenicon_gradient';
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