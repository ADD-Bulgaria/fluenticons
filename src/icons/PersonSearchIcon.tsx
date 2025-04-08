import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 14q-.505 0-1-.027a2.5 2.5 0 0 0-.732-1.74l-2.5-2.5c.47-.98.732-2.077.732-3.233A7.47 7.47 0 0 0 13 18h13.5a3.5 3.5 0 0 1 3.5 3.5v.5c0 2.393-1.523 4.417-3.685 5.793C24.141 29.177 21.198 30 18 30M7 28.5c1.296 0 2.496-.41 3.476-1.11l3.317 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 7 28.5m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`,
  'regular': `<path d="M25 9a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-5 21q-.505 0-1-.027a2.5 2.5 0 0 0-.732-1.74l-.368-.368c.675.088 1.378.135 2.1.135 2.877 0 5.434-.744 7.241-1.894C27.061 24.95 28 23.472 28 22v-.5a1.5 1.5 0 0 0-1.5-1.5H14.073a7.5 7.5 0 0 0-1.072-2H26.5a3.5 3.5 0 0 1 3.5 3.5v.5c0 2.393-1.523 4.417-3.685 5.793C24.141 29.177 21.198 30 18 30M7 28.5c1.296 0 2.496-.41 3.476-1.11l3.317 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 7 28.5m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`
} as const;

export default function PersonSearchIcon({ 
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

  const gradientId = 'personsearchicon_gradient';
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