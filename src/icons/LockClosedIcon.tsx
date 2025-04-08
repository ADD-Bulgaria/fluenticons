import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M16 12v3h2.5v-3a5.5 5.5 0 1 1 11 0v3H32v-3a8 8 0 1 0-16 0"/><path d="M40 20.25A6.25 6.25 0 0 0 33.75 14h-19.5A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75z"/><path d="M27 28a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`,
  'filled': `<path d="M16 12a8 8 0 1 1 16 0v2h1.75A6.25 6.25 0 0 1 40 20.25v15.5A6.25 6.25 0 0 1 33.75 42h-19.5A6.25 6.25 0 0 1 8 35.75v-15.5A6.25 6.25 0 0 1 14.25 14H16zm8-5.5a5.5 5.5 0 0 0-5.5 5.5v2h11v-2A5.5 5.5 0 0 0 24 6.5M24 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>`,
  'regular': `<path d="M27 28a3 3 0 1 1-6 0 3 3 0 0 1 6 0M16 14v-2a8 8 0 1 1 16 0v2h1.75A6.25 6.25 0 0 1 40 20.25v15.5A6.25 6.25 0 0 1 33.75 42h-19.5A6.25 6.25 0 0 1 8 35.75v-15.5A6.25 6.25 0 0 1 14.25 14zm2.5-2v2h11v-2a5.5 5.5 0 1 0-11 0m-4.25 4.5a3.75 3.75 0 0 0-3.75 3.75v15.5a3.75 3.75 0 0 0 3.75 3.75h19.5a3.75 3.75 0 0 0 3.75-3.75v-15.5a3.75 3.75 0 0 0-3.75-3.75z"/>`
} as const;

export default function LockClosedIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'lockclosedicon_gradient';
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