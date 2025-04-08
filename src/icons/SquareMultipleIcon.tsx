import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.496 10h-2.504a6.25 6.25 0 0 1 6.245-6h14.5a9.25 9.25 0 0 1 9.25 9.25v14.5a6.25 6.25 0 0 1-5.989 6.245V31.49a3.75 3.75 0 0 0 3.49-3.741v-14.5a6.75 6.75 0 0 0-6.75-6.75h-14.5a3.75 3.75 0 0 0-3.742 3.5M4 18.25A6.25 6.25 0 0 1 10.25 12h19.5A6.25 6.25 0 0 1 36 18.25v19.5A6.25 6.25 0 0 1 29.75 44h-19.5A6.25 6.25 0 0 1 4 37.75z"/>`,
  'regular': `<path d="M16.497 10h-2.503a6.25 6.25 0 0 1 6.245-6h14.5a9.25 9.25 0 0 1 9.25 9.25v14.5A6.25 6.25 0 0 1 38 33.995V31.49a3.75 3.75 0 0 0 3.49-3.741v-14.5a6.75 6.75 0 0 0-6.75-6.75h-14.5a3.75 3.75 0 0 0-3.743 3.5m-6.247 2A6.25 6.25 0 0 0 4 18.25v19.5A6.25 6.25 0 0 0 10.25 44h19.5A6.25 6.25 0 0 0 36 37.75v-19.5A6.25 6.25 0 0 0 29.75 12zM6.5 18.25a3.75 3.75 0 0 1 3.75-3.75h19.5a3.75 3.75 0 0 1 3.75 3.75v19.5a3.75 3.75 0 0 1-3.75 3.75h-19.5a3.75 3.75 0 0 1-3.75-3.75z"/>`
} as const;

export default function SquareMultipleIcon({ 
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

  const gradientId = 'squaremultipleicon_gradient';
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