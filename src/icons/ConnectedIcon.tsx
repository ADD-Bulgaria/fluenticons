import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 6.5a4.5 4.5 0 0 1-.69 2.396l3.294 3.294A4.5 4.5 0 0 1 16 11.5c.88 0 1.702.253 2.396.69l3.294-3.294a4.5 4.5 0 1 1 1.414 1.414l-3.294 3.294A4.5 4.5 0 0 1 20.5 16a4.5 4.5 0 0 1-.69 2.396l3.294 3.294a4.5 4.5 0 1 1-1.414 1.414l-3.294-3.294A4.5 4.5 0 0 1 16 20.5a4.5 4.5 0 0 1-2.396-.69l-3.294 3.294a4.5 4.5 0 1 1-1.414-1.414l3.294-3.294A4.5 4.5 0 0 1 11.5 16c0-.88.253-1.702.69-2.396L8.896 10.31A4.5 4.5 0 1 1 11 6.5"/>`,
  'regular': `<path d="M6.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M2 6.5a4.5 4.5 0 1 1 8.31 2.396l3.294 3.294A4.5 4.5 0 0 1 16 11.5c.88 0 1.702.253 2.396.69l3.294-3.294a4.5 4.5 0 1 1 1.414 1.414l-3.294 3.294A4.5 4.5 0 0 1 20.5 16a4.5 4.5 0 0 1-.69 2.396l3.294 3.294a4.5 4.5 0 1 1-1.414 1.414l-3.294-3.294A4.5 4.5 0 0 1 16 20.5a4.5 4.5 0 0 1-2.396-.69l-3.294 3.294a4.5 4.5 0 1 1-1.414-1.414l3.294-3.294A4.5 4.5 0 0 1 11.5 16c0-.88.253-1.702.69-2.396L8.896 10.31A4.5 4.5 0 0 1 2 6.5M25.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4 25.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m12-12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m7 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/>`
} as const;

export default function ConnectedIcon({ 
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

  const gradientId = 'connectedicon_gradient';
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