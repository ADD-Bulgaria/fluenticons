import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 10.75A4.75 4.75 0 0 1 10.75 6h12v16.75H6zm0 14.5v12A4.75 4.75 0 0 0 10.75 42h11.917A6.23 6.23 0 0 1 21 37.75v-10.5c0-.7.115-1.372.327-2zm36-14.5v11.917A6.23 6.23 0 0 0 37.75 21h-10.5c-.7 0-1.372.115-2 .327V6h12A4.75 4.75 0 0 1 42 10.75m-19 16.5A4.25 4.25 0 0 1 27.25 23h10.5A4.25 4.25 0 0 1 42 27.25v10.5A4.25 4.25 0 0 1 37.75 42h-10.5A4.25 4.25 0 0 1 23 37.75z"/>`,
  'regular': `<path d="M11.25 6h25.5C39.65 6 42 8.35 42 11.25v11.417a6.24 6.24 0 0 0-2.5-1.419V11.25a2.75 2.75 0 0 0-2.75-2.75H25.5v12.748a6.24 6.24 0 0 0-2.5 1.42V8.5H11.25a2.75 2.75 0 0 0-2.75 2.75v11.5h14.413a6.25 6.25 0 0 0-1.586 2.5H8.5v11.5a2.75 2.75 0 0 0 2.75 2.75h9.998a6.24 6.24 0 0 0 1.42 2.5H11.25A5.25 5.25 0 0 1 6 36.75v-25.5C6 8.35 8.35 6 11.25 6M23 27.25A4.25 4.25 0 0 1 27.25 23h10.5A4.25 4.25 0 0 1 42 27.25v10.5A4.25 4.25 0 0 1 37.75 42h-10.5A4.25 4.25 0 0 1 23 37.75z"/>`
} as const;

export default function TableSimpleIncludeIcon({ 
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

  const gradientId = 'tablesimpleincludeicon_gradient';
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