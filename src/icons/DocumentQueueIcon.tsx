import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5h-4.75a1.75 1.75 0 0 1-1.75-1.75V2zm1.75 3h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5M8 8.75A.75.75 0 0 1 8.75 8h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 8 8.75M8.75 11h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5M14 2.002 19 7h-4.75a.25.25 0 0 1-.25-.25zM2.75 15a.75.75 0 0 1 .75.75v1.75a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-1.75a.75.75 0 0 1 1.5 0v1.75a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-1.75a.75.75 0 0 1 .75-.75M12.5 2H14Z"/>`,
  'regular': `<path d="M8.75 5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM8 8.75A.75.75 0 0 1 8.75 8h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 8 8.75M8.75 11a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM5 4a2 2 0 0 1 2-2h6.232a2 2 0 0 1 1.414.586l3.768 3.768A2 2 0 0 1 19 7.768V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5h-3.25a1.75 1.75 0 0 1-1.75-1.75V3.5zm7 .56v2.69c0 .138.112.25.25.25h2.69zM3.5 15.75a.75.75 0 0 0-1.5 0v1.75A4.5 4.5 0 0 0 6.5 22h11a4.5 4.5 0 0 0 4.5-4.5v-1.75a.75.75 0 0 0-1.5 0v1.75a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3z"/>`
} as const;

export default function DocumentQueueIcon({ 
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

  const gradientId = 'documentqueueicon_gradient';
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