import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 10a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm9 1.25a.75.75 0 0 0-1.5 0v1.604a2.751 2.751 0 0 0-1.152 4.632l-1.294 3.236a.75.75 0 0 0 1.392.556l1.235-3.087a2.8 2.8 0 0 0 1.138 0l1.235 3.087a.75.75 0 0 0 1.392-.556l-1.294-3.236A2.751 2.751 0 0 0 13 7.354z"/>`,
  'regular': `<path d="M13 5.75a.75.75 0 0 0-1.5 0v1.604a2.751 2.751 0 0 0-1.152 4.632l-1.294 3.236a.75.75 0 0 0 1.392.556l1.235-3.087a2.8 2.8 0 0 0 1.138 0l1.235 3.087a.75.75 0 0 0 1.392-.556l-1.294-3.236A2.751 2.751 0 0 0 13 7.354zM11 10a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"/>`
} as const;

export default function BookCompassIcon({ 
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

  const gradientId = 'bookcompassicon_gradient';
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