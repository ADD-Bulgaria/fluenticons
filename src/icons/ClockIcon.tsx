import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24 13.507 5 24 5"/><path d="M22.75 12c.647 0 1.18.492 1.244 1.122l.006.128V24h6.75a1.25 1.25 0 0 1 .128 2.494l-.128.006h-8a1.25 1.25 0 0 1-1.244-1.122l-.006-.128v-12c0-.69.56-1.25 1.25-1.25"/>`,
  'filled': `<path d="M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24 13.507 5 24 5m-1.25 7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 1 0 0-2.5H24V13.25c0-.69-.56-1.25-1.25-1.25"/>`,
  'regular': `<path d="M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24 13.507 5 24 5m0 2.5C14.887 7.5 7.5 14.887 7.5 24S14.887 40.5 24 40.5 40.5 33.113 40.5 24 33.113 7.5 24 7.5M22.75 12c.647 0 1.18.492 1.244 1.122l.006.128V24h6.75a1.25 1.25 0 0 1 .128 2.494l-.128.006h-8a1.25 1.25 0 0 1-1.244-1.122l-.006-.128v-12c0-.69.56-1.25 1.25-1.25"/>`
} as const;

export default function ClockIcon({ 
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

  const gradientId = 'clockicon_gradient';
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