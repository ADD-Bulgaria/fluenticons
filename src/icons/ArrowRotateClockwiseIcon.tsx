import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-4.873 8.001L18 20a1 1 0 0 1 .117 1.993L18 22h-4a1 1 0 0 1-.993-.883L13 21v-4a1 1 0 0 1 1.993-.117L15 17l.001 1.327A7.01 7.01 0 0 0 19 12a7 7 0 1 0-14 0 1 1 0 1 1-2 0 9 9 0 0 1 9-9m0 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>`,
  'regular': `<path d="M12 3a9 9 0 0 1 4.977 16.5h1.773a.75.75 0 0 1 .102 1.493L18.75 21h-4a.75.75 0 0 1-.743-.648L14 20.25v-4a.75.75 0 0 1 1.493-.102l.007.102.001 2.385A7.501 7.501 0 0 0 12 4.5 7.5 7.5 0 0 0 4.5 12 .75.75 0 0 1 3 12a9 9 0 0 1 9-9m0 6.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/>`
} as const;

export default function ArrowRotateClockwiseIcon({ 
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

  const gradientId = 'arrowrotateclockwiseicon_gradient';
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