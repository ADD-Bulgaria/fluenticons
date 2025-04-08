import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 6a6.25 6.25 0 0 0-6.061 4.72A4 4 0 1 1 6 18.21v17.54A6.25 6.25 0 0 0 12.25 42h11.794A12.94 12.94 0 0 1 22 35c0-2.368.633-4.588 1.74-6.5h-6.49a1.25 1.25 0 1 1 0-2.5h8.37A12.96 12.96 0 0 1 35 22c2.577 0 4.98.75 7 2.044V12.25A6.25 6.25 0 0 0 35.75 6zM16 20.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25M7.5 12A2.496 2.496 0 0 0 5 14.5 2.496 2.496 0 0 0 7.5 17a2.5 2.5 0 0 0 0-5M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-11-7a5 5 0 0 0-5 5v3.382l-.947 1.894A.5.5 0 0 0 29.5 39h11a.5.5 0 0 0 .447-.724L40 36.382V33a5 5 0 0 0-5-5m-2 12a2 2 0 1 0 4 0z"/>`,
  'regular': `<path d="M7.5 10.5c-.46 0-.9.077-1.311.22A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v11.794c-.78-.5-1.618-.919-2.5-1.244V12.25a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.427 2.224A4 4 0 0 0 7.5 10.5m15.3 29c.325.882.744 1.72 1.244 2.5H12.25A6.25 6.25 0 0 1 6 35.75V18.21a4 4 0 0 0 2.5.165V35.75a3.75 3.75 0 0 0 3.75 3.75zm.94-11a13 13 0 0 1 1.88-2.5h-8.37a1.25 1.25 0 1 0 0 2.5zM7.5 12A2.496 2.496 0 0 0 5 14.5 2.496 2.496 0 0 0 7.5 17a2.5 2.5 0 0 0 0-5m9.75 7a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-11-7a5 5 0 0 0-5 5v3.382l-.947 1.894A.5.5 0 0 0 29.5 39h11a.5.5 0 0 0 .447-.724L40 36.382V33a5 5 0 0 0-5-5m-2 12a2 2 0 1 0 4 0z"/>`
} as const;

export default function ChannelAlertIcon({ 
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

  const gradientId = 'channelalerticon_gradient';
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