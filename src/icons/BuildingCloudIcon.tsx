import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.75 18h1.507a4.74 4.74 0 0 1 3.33-4.265A5.89 5.89 0 0 1 14 9.848V8.75A1.75 1.75 0 0 0 12.25 7h-1a.25.25 0 0 1-.25-.25v-3A1.75 1.75 0 0 0 9.25 2h-5.5A1.75 1.75 0 0 0 2 3.75v12.5c0 .966.784 1.75 1.75 1.75M6 8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.5-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.75 9.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-2.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.25 6.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m8.875 4.347a4.89 4.89 0 0 0-4.748 3.727A3.739 3.739 0 0 0 9.987 22h8.275a3.738 3.738 0 0 0 .611-7.426 4.89 4.89 0 0 0-4.748-3.727m-3.366 4.51a3.388 3.388 0 0 1 6.732 0l.075.67.696-.003h.002a2.238 2.238 0 0 1-.002 4.476H9.988a2.238 2.238 0 0 1-.001-4.476l.697.003z"/>`,
  'regular': `<path d="M3.5 3.75a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v3c0 .966.784 1.75 1.75 1.75h1a.25.25 0 0 1 .25.25v1.324c.478-.137.98-.215 1.5-.226V8.75A1.75 1.75 0 0 0 12.25 7h-1a.25.25 0 0 1-.25-.25v-3A1.75 1.75 0 0 0 9.25 2h-5.5A1.75 1.75 0 0 0 2 3.75v12.5c0 .966.784 1.75 1.75 1.75h1.507a4.7 4.7 0 0 1 .331-1.5H3.75a.25.25 0 0 1-.25-.25zM5.25 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.5-6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m6.375-1.653a4.89 4.89 0 0 0-4.748 3.727A3.739 3.739 0 0 0 9.987 22h8.275a3.738 3.738 0 0 0 .611-7.426 4.89 4.89 0 0 0-4.748-3.727m-3.366 4.51a3.388 3.388 0 0 1 6.732 0l.075.67.696-.003h.002a2.238 2.238 0 0 1-.002 4.476H9.988a2.238 2.238 0 0 1-.001-4.476l.697.003z"/>`
} as const;

export default function BuildingCloudIcon({ 
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

  const gradientId = 'buildingcloudicon_gradient';
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