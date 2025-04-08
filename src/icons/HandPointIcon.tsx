import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 9.002a5 5 0 0 1 5-5 5.004 5.004 0 0 1 5.004 5v8.012l6.201.988c5.352.853 8.826 6.105 7.52 11.366l-2.375 9.555a5.25 5.25 0 0 1-4.292 3.922l-7.07 1.09c-2.74.424-5.06-1.376-6.1-3.598-1.564-3.338-5.32-7.831-16.585-12.785-1.198-.527-1.697-2.025-.952-3.165a9.39 9.39 0 0 1 11.698-3.441l1.951.876z"/>`,
  'regular': `<path d="M23 6.502a2.5 2.5 0 0 0-2.5 2.5V23.75a1.243 1.243 0 0 1-1.752 1.141l-3.719-1.663a6.89 6.89 0 0 0-8.357 2.196c11.3 5.03 15.583 9.806 17.478 13.853.713 1.523 2.114 2.395 3.458 2.188l7.069-1.09a2.75 2.75 0 0 0 2.248-2.055l2.374-9.555c.954-3.839-1.582-7.672-5.487-8.294l-7.254-1.156a1.255 1.255 0 0 1-1.058-1.234V9A2.5 2.5 0 0 0 23 6.5M18 9a5 5 0 0 1 5-5 5.004 5.004 0 0 1 5.004 5v8.012l6.201.988c5.352.853 8.826 6.105 7.52 11.366l-2.375 9.555a5.25 5.25 0 0 1-4.292 3.922l-7.07 1.09c-2.74.424-5.06-1.376-6.1-3.598-1.564-3.338-5.32-7.831-16.585-12.785-1.198-.527-1.697-2.025-.952-3.165a9.39 9.39 0 0 1 11.698-3.441L18 21.82z"/>`
} as const;

export default function HandPointIcon({ 
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

  const gradientId = 'handpointicon_gradient';
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