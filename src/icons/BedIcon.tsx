import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.25 11a2.75 2.75 0 0 1 2.745 2.582l.005.168v6.5a.75.75 0 0 1-1.493.102l-.007-.102V18h-17v2.25a.75.75 0 0 1-.648.743L2.75 21a.75.75 0 0 1-.743-.648L2 20.25v-6.5a2.75 2.75 0 0 1 2.582-2.745L4.75 11zM6.75 4h10.5a2.75 2.75 0 0 1 2.745 2.582L20 6.75V10h-3l-.007-.117a1 1 0 0 0-.876-.876L16 9h-2a1 1 0 0 0-.993.883L13 10h-2l-.007-.117a1 1 0 0 0-.876-.876L10 9H8a1 1 0 0 0-.993.883L7 10H4V6.75a2.75 2.75 0 0 1 2.582-2.745z"/>`,
  'regular': `<path d="M6.75 4h10.5a2.75 2.75 0 0 1 2.745 2.582L20 6.75v3.354a2.75 2.75 0 0 1 1.994 2.459l.006.187v7.5a.75.75 0 0 1-1.493.102l-.007-.102V18h-17v2.25a.75.75 0 0 1-.648.743L2.75 21a.75.75 0 0 1-.743-.648L2 20.25v-7.5c0-1.259.846-2.32 2-2.647V6.75a2.75 2.75 0 0 1 2.582-2.745zm12.5 7.5H4.75a1.25 1.25 0 0 0-1.244 1.122l-.006.128v3.75h17v-3.75a1.25 1.25 0 0 0-1.122-1.243zm-2-6H6.75a1.25 1.25 0 0 0-1.244 1.122L5.5 6.75V10H7a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L11 10h2a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L17 10h1.5V6.75a1.25 1.25 0 0 0-1.122-1.244z"/>`
} as const;

export default function BedIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'bedicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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