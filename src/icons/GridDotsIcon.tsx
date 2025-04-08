import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 20a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m8.5-8.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M14 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"/>`,
  'regular': `<path d="M14 21a2 2 0 1 1 0 4 2 2 0 0 1 0-4m9 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 21a2 2 0 1 1 0 4 2 2 0 0 1 0-4m9-9a2 2 0 1 1 0 4 2 2 0 0 1 0-4m9 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4m9-9a2 2 0 1 1 0 4 2 2 0 0 1 0-4m9 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/>`
} as const;

export default function GridDotsIcon({ 
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

  const gradientId = 'griddotsicon_gradient';
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