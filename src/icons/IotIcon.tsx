import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 4.492a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.117A4 4 0 0 1 16 12.001v.058l1.296.26a2.5 2.5 0 1 1-.279 1.475l-1.32-.266a4 4 0 0 1-1.742 1.963l.495 1.512h.05a2.5 2.5 0 1 1-1.472.479l-.496-1.516a4 4 0 0 1-3.752-1.592l-1.795.847q.015.138.015.28a2.5 2.5 0 1 1-.623-1.652l1.754-.829a4 4 0 0 1 .784-3.566l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.983 1.12A4 4 0 0 1 12 8.001c.505 0 .99.093 1.434.265l1.245-2.06A2.5 2.5 0 1 1 19 4.493"/>`,
  'regular': `<path d="M19 4.492a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.117A4 4 0 0 1 16 12.06l1.296.26a2.5 2.5 0 1 1-.279 1.475l-1.319-.266a4 4 0 0 1-1.744 1.964l.495 1.511h.051a2.5 2.5 0 1 1-1.472.479l-.497-1.516a4 4 0 0 1-3.752-1.593l-1.794.848q.015.138.015.28a2.5 2.5 0 1 1-.623-1.652l1.754-.829a4 4 0 0 1 .784-3.566l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.982 1.12A4 4 0 0 1 12 8.001c.505 0 .989.093 1.434.264l1.245-2.06A2.5 2.5 0 1 1 19 4.492m-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M7 7.001a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-6.5 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 4.002a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4-5.002a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function IotIcon({ 
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

  const gradientId = 'ioticon_gradient';
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