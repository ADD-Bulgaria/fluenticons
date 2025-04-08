import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m9.198 16.5-.433 1.767A4.25 4.25 0 0 0 6 22.25v17.5A3.25 3.25 0 0 0 9.25 43h3.5A3.25 3.25 0 0 0 16 39.75V36.5h16v3.25A3.25 3.25 0 0 0 35.25 43h3.5A3.25 3.25 0 0 0 42 39.75v-17.5c0-1.84-1.17-3.408-2.807-3.999l-.5-1.751h2.057a1.25 1.25 0 1 0 0-2.5h-2.771l-.991-3.467A6.25 6.25 0 0 0 30.978 6H16.674a6.25 6.25 0 0 0-6.07 4.763L9.81 14H7.25a1.25 1.25 0 1 0 0 2.5zm7.475-8H30.98a3.75 3.75 0 0 1 3.605 2.72L36.521 18H11.404l1.627-6.642A3.75 3.75 0 0 1 16.673 8.5m17.827 28h5v3.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75zm-26 3.25V36.5h5v3.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75M14 28a2 2 0 1 1 0-4 2 2 0 0 1 0 4m22-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-15.75 2h7.5a1.25 1.25 0 1 1 0 2.5h-7.5a1.25 1.25 0 1 1 0-2.5"/>`,
  'regular': `<path d="M19 29.25c0-.69.56-1.25 1.25-1.25h7.5a1.25 1.25 0 1 1 0 2.5h-7.5c-.69 0-1.25-.56-1.25-1.25M16 26a2 2 0 1 1-4 0 2 2 0 0 1 4 0m18 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8.765 18.267l.433-1.767H7.25a1.25 1.25 0 1 1 0-2.5h2.56l.793-3.237A6.25 6.25 0 0 1 16.673 6H30.98a6.25 6.25 0 0 1 6.009 4.533l.99 3.467h2.772a1.25 1.25 0 1 1 0 2.5h-2.057l.5 1.751A4.25 4.25 0 0 1 42 22.25v17.5A3.25 3.25 0 0 1 38.75 43h-3.5A3.25 3.25 0 0 1 32 39.75V36.5H16v3.25A3.25 3.25 0 0 1 12.75 43h-3.5A3.25 3.25 0 0 1 6 39.75v-17.5a4.25 4.25 0 0 1 2.765-3.983m4.266-6.909L11.404 18h25.117l-1.937-6.78a3.75 3.75 0 0 0-3.606-2.72H16.674a3.75 3.75 0 0 0-3.642 2.858M10.25 20.5a1.75 1.75 0 0 0-1.75 1.75V34h31V22.25a1.75 1.75 0 0 0-1.75-1.75zM34.5 39.75c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V36.5h-5zm-26-3.25v3.25c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V36.5z"/>`
} as const;

export default function VehicleCarIcon({ 
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

  const gradientId = 'vehiclecaricon_gradient';
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