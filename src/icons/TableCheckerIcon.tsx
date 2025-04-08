import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm5 5H8v4h4zm1 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13zM8 4h6.5A1.5 1.5 0 0 1 16 5.5V12h1V5.5A2.5 2.5 0 0 0 14.5 3H8zM5.5 16H12v1H5.5A2.5 2.5 0 0 1 3 14.5V8h1v6.5A1.5 1.5 0 0 0 5.5 16"/>`,
  'regular': `<path d="M16 5.5V11h1V5.5A2.5 2.5 0 0 0 14.5 3H9v1h5.5A1.5 1.5 0 0 1 16 5.5M3 9v5.5A2.5 2.5 0 0 0 5.5 17H11v-1H5.5A1.5 1.5 0 0 1 4 14.5V9zm2.5-6H8v4h5v5h4v2.5a2.5 2.5 0 0 1-2.5 2.5H12v-4H7V8H3V5.5A2.5 2.5 0 0 1 5.5 3m9 13a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3v3zM12 8H8v4h4zM4 7h3V4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5z"/>`
} as const;

export default function TableCheckerIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'tablecheckericon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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