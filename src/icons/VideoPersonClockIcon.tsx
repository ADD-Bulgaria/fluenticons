import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 25a6 6 0 1 0 0-12 6 6 0 0 0 0 12M4 10.75A3.75 3.75 0 0 1 7.75 7h32.5A3.75 3.75 0 0 1 44 10.75v14.87a13 13 0 0 0-2.5-1.88V10.75c0-.69-.56-1.25-1.25-1.25H7.75c-.69 0-1.25.56-1.25 1.25v24.5c0 .69.56 1.25 1.25 1.25H14v-6.25A3.25 3.25 0 0 1 17.25 27h7.502A12.94 12.94 0 0 0 22 35c0 1.396.22 2.74.627 4H7.75A3.75 3.75 0 0 1 4 35.25zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"/>`,
  'regular': `<path d="M24 25a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7M4 10.75A3.75 3.75 0 0 1 7.75 7h32.5A3.75 3.75 0 0 1 44 10.75v14.87a13 13 0 0 0-2.5-1.88V10.75c0-.69-.56-1.25-1.25-1.25H7.75c-.69 0-1.25.56-1.25 1.25v24.5c0 .69.56 1.25 1.25 1.25H14v-6.25A3.25 3.25 0 0 1 17.25 27h7.502c-.6.769-1.117 1.607-1.535 2.5H17.25a.75.75 0 0 0-.75.75v6.25h5.586c.099.862.282 1.698.541 2.5H7.75A3.75 3.75 0 0 1 4 35.25zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"/>`
} as const;

export default function VideoPersonClockIcon({ 
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

  const gradientId = 'videopersonclockicon_gradient';
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