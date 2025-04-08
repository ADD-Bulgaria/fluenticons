import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m31-7.75a1.25 1.25 0 1 0-2.5 0v2.48A9.99 9.99 0 0 0 24 14a9.99 9.99 0 0 0-8 3.998 1.25 1.25 0 0 0 2 1.502 7.503 7.503 0 0 1 13.074 2H27.25a1.25 1.25 0 1 0 0 2.5h6.5c.69 0 1.25-.56 1.25-1.25zM14.25 33c.69 0 1.25-.56 1.25-1.25v-2.48A9.99 9.99 0 0 0 24 34a9.99 9.99 0 0 0 8-3.998 1.25 1.25 0 0 0-2-1.502 7.503 7.503 0 0 1-13.074-2h3.824a1.25 1.25 0 1 0 0-2.5h-6.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25"/>`,
  'regular': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24 33.665 41.5 24 41.5 6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m11 12.25a1.25 1.25 0 1 0-2.5 0v2.48A10 10 0 0 0 24 14a9.99 9.99 0 0 0-8 3.998 1.25 1.25 0 0 0 2 1.502 7.503 7.503 0 0 1 13.074 2H27.25a1.25 1.25 0 1 0 0 2.5h6.5c.69 0 1.25-.56 1.25-1.25zM14.25 33c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-3.823A7.503 7.503 0 0 0 30 28.5a1.25 1.25 0 0 1 1.998 1.502A9.99 9.99 0 0 1 24 34a9.99 9.99 0 0 1-8.499-4.73v2.48c0 .69-.56 1.25-1.25 1.25"/>`
} as const;

export default function ArrowSyncCircleIcon({ 
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

  const gradientId = 'arrowsynccircleicon_gradient';
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