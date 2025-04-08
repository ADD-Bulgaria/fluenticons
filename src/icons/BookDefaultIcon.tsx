import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 5.75A3.25 3.25 0 0 1 7.75 2.5h12.5a3.25 3.25 0 0 1 3.25 3.25v16a.75.75 0 0 1-.75.75H6.018c.121.848.85 1.5 1.732 1.5h15a.75.75 0 0 1 0 1.5h-15a3.25 3.25 0 0 1-3.25-3.25zM8 7.25v1c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-1C20 6.56 19.44 6 18.75 6h-9.5C8.56 6 8 6.56 8 7.25"/>`,
  'regular': `<path d="M7.75 2.5A3.25 3.25 0 0 0 4.5 5.75v16.5a3.25 3.25 0 0 0 3.25 3.25h15a.75.75 0 0 0 0-1.5h-15a1.75 1.75 0 0 1-1.732-1.5H22.75a.75.75 0 0 0 .75-.75v-16a3.25 3.25 0 0 0-3.25-3.25zM22 21H6V5.75C6 4.784 6.784 4 7.75 4h12.5c.966 0 1.75.784 1.75 1.75zM9.25 6C8.56 6 8 6.56 8 7.25v2c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-2C20 6.56 19.44 6 18.75 6zm.25 3V7.5h9V9z"/>`
} as const;

export default function BookDefaultIcon({ 
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

  const gradientId = 'bookdefaulticon_gradient';
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