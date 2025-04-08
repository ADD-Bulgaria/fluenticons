import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5-4.925 5-11 5S5 9.761 5 7m11 7c3.256 0 6.3-.596 8.606-1.644.823-.374 1.668-.865 2.394-1.48v5.534a7.5 7.5 0 1 0-5.942 13.032C19.543 29.797 17.823 30 16 30c-6.075 0-11-2.239-11-5V10.876c.726.615 1.571 1.106 2.394 1.48C9.7 13.404 12.744 14 16 14m6 14c1.296 0 2.496-.41 3.477-1.11l3.316 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 22 28m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`,
  'regular': `<path d="M27 7c0-2.761-4.925-5-11-5S5 4.239 5 7v18c0 2.761 4.925 5 11 5 1.823 0 3.543-.202 5.058-.559a7.46 7.46 0 0 1-3.62-1.487Q16.739 28 16 28c-2.82 0-5.275-.523-6.95-1.285C7.192 25.87 7 25.115 7 25V9.876C8.99 11.16 12.28 12 16 12s7.01-.84 9-2.124v5.248c.736.321 1.41.758 2 1.286zm-2 0c0 .114-.193.871-2.05 1.715C21.276 9.477 18.82 10 16 10s-5.275-.523-6.95-1.285C7.192 7.87 7 7.115 7 7s.193-.871 2.05-1.715C10.724 4.523 13.18 4 16 4s5.275.523 6.95 1.285C24.808 6.13 25 6.885 25 7m-3 21c1.296 0 2.496-.41 3.477-1.11l3.316 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 22 28m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`
} as const;

export default function DatabaseSearchIcon({ 
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

  const gradientId = 'databasesearchicon_gradient';
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