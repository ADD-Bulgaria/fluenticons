import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44q.799 0 1.58-.04A12.96 12.96 0 0 1 22 35c0-2.577.75-4.98 2.044-7zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-9.81-6.599a1.236 1.236 0 0 0-2.38 0l-1.194 3.83h-3.862c-1.213 0-1.716 1.617-.736 2.36l3.125 2.366-1.194 3.83c-.374 1.201.945 2.2 1.926 1.458L35 39.878l3.125 2.367c.98.743 2.3-.257 1.925-1.458l-1.193-3.83 3.125-2.367c.98-.742.477-2.36-.736-2.36h-3.862z"/>`,
  'regular': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44q.799 0 1.58-.04a13 13 0 0 1-1.841-2.461c-3.824-.034-7.163-.82-9.519-2.254-2.36-1.437-3.72-3.5-3.72-6.245v-.751a1.75 1.75 0 0 1 1.75-1.749H22.8c.325-.882.744-1.72 1.244-2.5zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-9.81-6.599a1.236 1.236 0 0 0-2.38 0l-1.194 3.83h-3.862c-1.213 0-1.716 1.617-.736 2.36l3.125 2.366-1.194 3.83c-.374 1.201.945 2.2 1.926 1.458L35 39.878l3.125 2.367c.98.743 2.3-.257 1.925-1.458l-1.193-3.83 3.125-2.367c.98-.742.477-2.36-.736-2.36h-3.862z"/>`
} as const;

export default function PersonStarIcon({ 
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

  const gradientId = 'personstaricon_gradient';
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