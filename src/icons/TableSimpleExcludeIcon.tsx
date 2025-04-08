import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 4A6.25 6.25 0 0 0 4 10.25v8.25h14.5V4zM4 29.25V21h14.5v14.5h-8.25A6.25 6.25 0 0 1 4 29.25m31.5-19v8.25H21V4h8.25a6.25 6.25 0 0 1 6.25 6.25m-10.5 19A4.25 4.25 0 0 1 29.25 25h10.5A4.25 4.25 0 0 1 44 29.25v10.5A4.25 4.25 0 0 1 39.75 44h-10.5A4.25 4.25 0 0 1 25 39.75z"/>`,
  'regular': `<path d="M4 10.25A6.25 6.25 0 0 1 10.25 4h19a6.25 6.25 0 0 1 6.25 6.25V21H21v14.5H10.25A6.25 6.25 0 0 1 4 29.25zm29 0a3.75 3.75 0 0 0-3.75-3.75H21v12h12zM18.5 6.5h-8.25a3.75 3.75 0 0 0-3.75 3.75v8.25h12zm-12 22.75A3.75 3.75 0 0 0 10.25 33h8.25V21h-12zm18.5 0A4.25 4.25 0 0 1 29.25 25h10.5A4.25 4.25 0 0 1 44 29.25v10.5A4.25 4.25 0 0 1 39.75 44h-10.5A4.25 4.25 0 0 1 25 39.75z"/>`
} as const;

export default function TableSimpleExcludeIcon({ 
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

  const gradientId = 'tablesimpleexcludeicon_gradient';
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