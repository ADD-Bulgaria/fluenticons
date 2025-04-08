import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M37.903 33.01c-4.971 8.609-15.98 11.558-24.589 6.588a17.9 17.9 0 0 1-5.821-5.368 1.35 1.35 0 0 1 .656-2.036c6.78-2.427 10.412-5.24 12.52-9.262 2.218-4.235 2.791-8.873 1.24-15.232a1.35 1.35 0 0 1 1.383-1.668c2.802.15 5.54.956 8.022 2.389 8.61 4.97 11.56 15.979 6.589 24.588"/>`,
  'regular': `<path d="M37.903 33.01c-4.971 8.609-15.98 11.558-24.589 6.588a17.9 17.9 0 0 1-5.821-5.368 1.35 1.35 0 0 1 .656-2.036c6.78-2.427 10.412-5.24 12.52-9.262 2.218-4.235 2.791-8.873 1.24-15.232a1.35 1.35 0 0 1 1.383-1.668c2.802.15 5.54.956 8.022 2.389 8.61 4.97 11.56 15.979 6.589 24.588m-15.02-8.918C20.58 28.49 16.771 31.523 10.457 34a15.5 15.5 0 0 0 4.107 3.434c7.414 4.28 16.893 1.74 21.173-5.674 4.28-7.413 1.74-16.893-5.673-21.173a15.5 15.5 0 0 0-4.907-1.818l-.468-.08c1.193 5.967.591 10.829-1.806 15.404"/>`
} as const;

export default function WeatherMoonIcon({ 
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

  const gradientId = 'weathermoonicon_gradient';
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