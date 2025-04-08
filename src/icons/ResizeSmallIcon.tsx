import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v1.5a.75.75 0 0 1-1.5 0v-1.5A3.25 3.25 0 0 1 6.25 3h1.5a.75.75 0 0 1 0 1.5zM10.2 8a2.25 2.25 0 0 0-2.25 2.25v3.5A2.25 2.25 0 0 0 10.2 16h3.5a2.25 2.25 0 0 0 2.25-2.25v-3.5A2.25 2.25 0 0 0 13.7 8zm7.55-3.5c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 0 1.5 0v-1.5A3.25 3.25 0 0 0 17.75 3h-1.5a.75.75 0 0 0 0 1.5zm0 15a1.75 1.75 0 0 0 1.75-1.75v-1.5a.75.75 0 0 1 1.5 0v1.5A3.25 3.25 0 0 1 17.75 21h-1.5a.75.75 0 0 1 0-1.5zm-11.5 0a1.75 1.75 0 0 1-1.75-1.75v-1.5a.75.75 0 0 0-1.5 0v1.5A3.25 3.25 0 0 0 6.25 21h1.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v1.5a.75.75 0 0 1-1.5 0v-1.5A3.25 3.25 0 0 1 6.25 3h1.5a.75.75 0 0 1 0 1.5zm1.7 5.75A2.25 2.25 0 0 1 10.2 8h3.5a2.25 2.25 0 0 1 2.25 2.25v3.5A2.25 2.25 0 0 1 13.7 16h-3.5a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zm7.55-5c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 0 0 1.5 0v-1.5A3.25 3.25 0 0 0 17.75 3h-1.5a.75.75 0 0 0 0 1.5zm0 15a1.75 1.75 0 0 0 1.75-1.75v-1.5a.75.75 0 0 1 1.5 0v1.5A3.25 3.25 0 0 1 17.75 21h-1.5a.75.75 0 0 1 0-1.5zm-11.5 0a1.75 1.75 0 0 1-1.75-1.75v-1.5a.75.75 0 0 0-1.5 0v1.5A3.25 3.25 0 0 0 6.25 21h1.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function ResizeSmallIcon({ 
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

  const gradientId = 'resizesmallicon_gradient';
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