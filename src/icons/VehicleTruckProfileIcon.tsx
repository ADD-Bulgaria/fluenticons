import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 10.25A4.25 4.25 0 0 1 8.25 6h20.5A4.25 4.25 0 0 1 33 10.25V12h3.31c1.673 0 3.19.98 3.876 2.506l3.44 7.644A4.25 4.25 0 0 1 44 23.894V34.75A4.25 4.25 0 0 1 39.75 39h-3.833a6.002 6.002 0 0 1-11.834 0h-4.166a6.002 6.002 0 0 1-11.835-.003A4.25 4.25 0 0 1 4 34.75zM26.645 39a3.502 3.502 0 0 0 6.855-1 3.5 3.5 0 1 0-6.855 1M14 41.5a3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 1 0-3.5 3.5M41.5 31h-3.25a1.25 1.25 0 1 0 0 2.5h3.25zM33 22h7.817l-2.91-6.468A1.75 1.75 0 0 0 36.31 14.5H33z"/>`,
  'regular': `<path d="M8.25 6A4.25 4.25 0 0 0 4 10.25v24.5a4.25 4.25 0 0 0 4.082 4.247A6.002 6.002 0 0 0 19.917 39h4.166a6.002 6.002 0 0 0 11.834 0h3.833A4.25 4.25 0 0 0 44 34.75V23.894a4.25 4.25 0 0 0-.374-1.744l-3.44-7.644A4.25 4.25 0 0 0 36.31 12H33v-1.75A4.25 4.25 0 0 0 28.75 6zm27.561 30.5A6 6 0 0 0 33 32.803V24.5h8.5V31h-3.25a1.25 1.25 0 1 0 0 2.5h3.25v1.25a1.75 1.75 0 0 1-1.75 1.75zM33 36.196A3.5 3.5 0 0 1 33.5 38a3.502 3.502 0 1 1-6.663-1.5A3.5 3.5 0 0 1 33 36.196m-2.5-4.175a6 6 0 0 0-6.311 4.48h-4.378a6.003 6.003 0 0 0-11.622-.002A1.75 1.75 0 0 1 6.5 34.75v-24.5c0-.966.784-1.75 1.75-1.75h20.5c.966 0 1.75.784 1.75 1.75zM14 41.5a3.502 3.502 0 0 1-3.163-5 3.5 3.5 0 1 1 3.163 5m19-27h3.31a1.75 1.75 0 0 1 1.596 1.032L40.816 22H33z"/>`
} as const;

export default function VehicleTruckProfileIcon({ 
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

  const gradientId = 'vehicletruckprofileicon_gradient';
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