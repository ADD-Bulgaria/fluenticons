import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.651 2.638a2.25 2.25 0 0 1 3.19.023l4.91 5.008a2.25 2.25 0 0 1-.007 3.158L12.16 19.5h3.954a2.501 2.501 0 1 1 0 1.5H9.848a2.24 2.24 0 0 1-1.69-.642L3.06 15.35a2.25 2.25 0 0 1-.007-3.204zM9.801 19.5a.75.75 0 0 0 .467-.22l1.468-1.483-6.099-6.1-1.529 1.515a.75.75 0 0 0 .003 1.068l5.099 5.008c.15.147.345.218.54.214V19.5z"/>`,
  'regular': `<path d="M15.841 2.661a2.25 2.25 0 0 0-3.19-.023l-9.598 9.508a2.25 2.25 0 0 0 .007 3.204l5.099 5.008a2.24 2.24 0 0 0 1.69.642h6.265a2.501 2.501 0 1 0 0-1.5h-3.953l8.583-8.673a2.25 2.25 0 0 0 .007-3.158zM9.75 19.5v.002a.75.75 0 0 1-.54-.214l-5.1-5.008a.75.75 0 0 1-.002-1.068l1.53-1.514 6.098 6.099-1.468 1.483a.75.75 0 0 1-.468.22zm3.957-15.796a.75.75 0 0 1 1.063.007l4.91 5.009a.75.75 0 0 1-.002 1.052L12.79 16.73l-6.088-6.088z"/>`
} as const;

export default function EraserSegmentIcon({ 
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

  const gradientId = 'erasersegmenticon_gradient';
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