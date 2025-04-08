import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.05 6.05a7 7 0 1 1 9.9 9.9L29.6 28.3a4.25 4.25 0 0 1-1.964 1.114l-10.08 2.548a1.25 1.25 0 0 1-1.518-1.518l2.547-10.08a4.25 4.25 0 0 1 1.116-1.964zM24 8.5q1.31.002 2.561.21l2.101-2.1A18 18 0 0 0 24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18c0-1.613-.212-3.175-.61-4.663l-2.1 2.102q.208 1.25.21 2.561c0 8.56-6.94 15.5-15.5 15.5S8.5 32.56 8.5 24 15.44 8.5 24 8.5"/>`,
  'regular': `<path d="M33.818 7.818a4.5 4.5 0 0 1 6.364 6.364l-12.35 12.35a1.75 1.75 0 0 1-.808.459l-8.049 2.034 2.034-8.049a1.75 1.75 0 0 1 .46-.809zM41.95 6.05a7 7 0 0 0-9.9 0L19.7 18.4a4.25 4.25 0 0 0-1.114 1.963l-2.548 10.08a1.25 1.25 0 0 0 1.518 1.519l10.08-2.547a4.25 4.25 0 0 0 1.964-1.116l12.35-12.35a7 7 0 0 0 0-9.899M26.56 8.71A15.6 15.6 0 0 0 24 8.5C15.44 8.5 8.5 15.44 8.5 24S15.44 39.5 24 39.5 39.5 32.56 39.5 24q-.002-1.31-.21-2.561l2.1-2.102c.398 1.488.61 3.05.61 4.663 0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6c1.612 0 3.175.212 4.662.61z"/>`
} as const;

export default function StatusIcon({ 
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

  const gradientId = 'statusicon_gradient';
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