import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 7.5a1.5 1.5 0 0 1 2.75-.83 1 1 0 0 0 1.663-1.11A3.5 3.5 0 1 0 5.483 11H21a1 1 0 1 0 0-2H5.5A1.5 1.5 0 0 1 4 7.5M12 5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zm-5 8a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-5 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m5 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M3.503 7.51a1.979 1.979 0 0 1 3.626-1.096.75.75 0 1 0 1.248-.833 3.479 3.479 0 1 0-2.932 5.407 1 1 0 0 0 .134.012h15.672a.75.75 0 0 0 0-1.5H5.615a1 1 0 0 0-.134-.012A1.98 1.98 0 0 1 3.503 7.51M11.748 6a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5zm-5 7.25a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm-4.752 4.5a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5h-18.5a.75.75 0 0 1-.75-.75m4.748 2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function ReadingListIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'readinglisticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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