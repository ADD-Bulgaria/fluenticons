import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M16 12v3h2.5v-3a5.5 5.5 0 1 1 11 0v3H32v-3a8 8 0 1 0-16 0"/><path d="M40 20.25A6.25 6.25 0 0 0 33.75 14h-19.5A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75z"/><path d="M27 28a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path d="M40 20.25A6.25 6.25 0 0 0 33.75 14h-19.5A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75z"/><path d="M41.556 26.773a14.7 14.7 0 0 1-2.778-1.153 18.5 18.5 0 0 1-2.278-1.455.84.84 0 0 0-1 0c-2.825 2.097-5.707 3.135-8.667 3.135a.83.83 0 0 0-.833.825V33.9q.001 2.714 1.06 4.95a11.1 11.1 0 0 0 1.86 2.75c1.606 1.76 3.87 3.21 6.775 4.343a.84.84 0 0 0 .61 0C42.714 43.443 46 39.4 46 33.9v-5.775a.83.83 0 0 0-.833-.825q-1.825 0-3.611-.527"/>`,
  'filled': `<path d="M16 12a8 8 0 1 1 16 0v2h1.75A6.25 6.25 0 0 1 40 20.25v3.756a16.3 16.3 0 0 1-2.308-1.447 2.84 2.84 0 0 0-3.384 0c-2.544 1.89-5.018 2.741-7.475 2.741-.398 0-.78.083-1.126.233A3 3 0 1 0 24 31v2.9c0 2.942.905 5.775 2.655 8.1H14.25A6.25 6.25 0 0 1 8 35.75v-15.5A6.25 6.25 0 0 1 14.25 14H16zm8-5.5a5.5 5.5 0 0 0-5.5 5.5v2h11v-2A5.5 5.5 0 0 0 24 6.5m17.556 20.273a14.7 14.7 0 0 1-2.778-1.153 18.5 18.5 0 0 1-2.278-1.455.84.84 0 0 0-1 0c-2.825 2.097-5.707 3.135-8.667 3.135a.83.83 0 0 0-.833.825V33.9q.001 2.714 1.06 4.95a11.1 11.1 0 0 0 1.86 2.75c1.606 1.76 3.87 3.21 6.775 4.343a.84.84 0 0 0 .61 0C42.714 43.443 46 39.4 46 33.9v-5.775a.83.83 0 0 0-.833-.825q-1.825 0-3.611-.527"/>`,
  'regular': `<path d="M37.5 20.25v2.178q.098.062.192.131A16.3 16.3 0 0 0 40 24.006V20.25A6.25 6.25 0 0 0 33.75 14H32v-2a8 8 0 1 0-16 0v2h-1.75A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h12.405a13 13 0 0 1-1.475-2.5H14.25a3.75 3.75 0 0 1-3.75-3.75v-15.5a3.75 3.75 0 0 1 3.75-3.75h19.5a3.75 3.75 0 0 1 3.75 3.75M24 28.125V31a3 3 0 1 1 1.707-5.467A2.82 2.82 0 0 0 24 28.125M18.5 12a5.5 5.5 0 1 1 11 0v2h-11zm23.056 14.773a14.7 14.7 0 0 1-2.778-1.153 18.5 18.5 0 0 1-2.278-1.455.84.84 0 0 0-1 0c-2.825 2.097-5.707 3.135-8.667 3.135a.83.83 0 0 0-.833.825V33.9q.001 2.714 1.06 4.95a11.1 11.1 0 0 0 1.86 2.75c1.606 1.76 3.87 3.21 6.775 4.343a.84.84 0 0 0 .61 0C42.714 43.443 46 39.4 46 33.9v-5.775a.83.83 0 0 0-.833-.825q-1.825 0-3.611-.527"/>`
} as const;

export default function LockShieldIcon({ 
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

  const gradientId = 'lockshieldicon_gradient';
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