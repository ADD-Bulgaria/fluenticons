import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0V7h-7.5A4.25 4.25 0 0 0 11 11.25v8.5A4.25 4.25 0 0 0 15.25 24h12.819c2.006-1.267 4.383-2 6.931-2q.666 0 1.314.066A4.23 4.23 0 0 0 37 19.75v-8.5A4.25 4.25 0 0 0 32.75 7h-7.5zM12.25 28h11.794A12.94 12.94 0 0 0 22 35c0 3.474 1.363 6.63 3.584 8.963Q24.81 44 24 44c-4.94 0-8.9-1.043-11.664-2.915C9.535 39.188 8 36.454 8 33.3v-1.05A4.25 4.25 0 0 1 12.25 28M19 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m12.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`,
  'regular': `<path d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0V7h-7.5A4.25 4.25 0 0 0 11 11.25v8.5A4.25 4.25 0 0 0 15.25 24h12.819c2.006-1.267 4.383-2 6.931-2q.666 0 1.314.066A4.23 4.23 0 0 0 37 19.75v-8.5A4.25 4.25 0 0 0 32.75 7h-7.5zM12.25 28h11.794c-.5.78-.919 1.618-1.244 2.5H12.25a1.75 1.75 0 0 0-1.75 1.75v1.05c0 2.246 1.056 4.237 3.238 5.715 2.177 1.474 5.506 2.448 10 2.484.518.894 1.138 1.72 1.846 2.464Q24.81 44 24 44c-4.94 0-8.9-1.043-11.664-2.915C9.535 39.188 8 36.454 8 33.3v-1.05A4.25 4.25 0 0 1 12.25 28m1.25-16.75c0-.966.784-1.75 1.75-1.75h17.5c.967 0 1.75.784 1.75 1.75v8.5a1.75 1.75 0 0 1-1.75 1.75h-17.5a1.75 1.75 0 0 1-1.75-1.75zM19 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m12.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`
} as const;

export default function BotAddIcon({ 
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

  const gradientId = 'botaddicon_gradient';
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