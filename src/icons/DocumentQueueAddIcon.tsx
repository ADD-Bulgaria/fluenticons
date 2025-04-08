import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 4a2 2 0 0 1 2-2h5.5v4.75c0 .966.784 1.75 1.75 1.75H19v2.674A6.5 6.5 0 0 0 11.174 19H7a2 2 0 0 1-2-2zm3 1.75c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0-.75.75M8.75 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM8 11.75c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0-.75.75M12.81 22a6.5 6.5 0 0 1-1.078-1.5H6.5a3 3 0 0 1-3-3v-1.75a.75.75 0 0 0-1.5 0v1.75A4.5 4.5 0 0 0 6.5 22zM19 7l-5-4.998V6.75c0 .138.112.25.25.25zm4 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1zM12.5 2H14Z"/>`,
  'regular': `<path d="M7 2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4.174A6.5 6.5 0 0 1 11 17.5H7a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h5.5v3.25c0 .966.784 1.75 1.75 1.75h3.25V11q.776.002 1.5.174V7.768a2 2 0 0 0-.586-1.414l-3.768-3.768A2 2 0 0 0 13.232 2zm7 4.75V4.06L16.94 7h-2.69a.25.25 0 0 1-.25-.25M6.5 20.5h5.232A6.5 6.5 0 0 0 12.81 22H6.5A4.5 4.5 0 0 1 2 17.5v-1.75a.75.75 0 0 1 1.5 0v1.75a3 3 0 0 0 3 3M8 5.75A.75.75 0 0 1 8.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 8 5.75M8.75 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`
} as const;

export default function DocumentQueueAddIcon({ 
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

  const gradientId = 'documentqueueaddicon_gradient';
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