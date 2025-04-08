import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.151 3.007a.75.75 0 1 1 .198 1.487L17.5 5.54v3.71c0 .644-.187 1.245-.51 1.75h2.26A3.75 3.75 0 0 1 23 14.75v3.75H5v-3.75A3.75 3.75 0 0 1 8.75 11h5.5A1.75 1.75 0 0 0 16 9.25V5.74L2.85 7.494a.75.75 0 0 1-.199-1.487l13.35-1.78V3.75a.75.75 0 0 1 1.5 0v.277zM23.001 20v2.25A2.75 2.75 0 0 1 20.25 25H7.75A2.75 2.75 0 0 1 5 22.25V20z"/>`,
  'regular': `<path d="M25.151 3.007a.75.75 0 1 1 .198 1.487L17.5 5.54v3.71c0 .644-.187 1.245-.51 1.75h2.26A3.75 3.75 0 0 1 23 14.75v7.5A2.75 2.75 0 0 1 20.25 25H7.75A2.75 2.75 0 0 1 5 22.25v-7.5A3.75 3.75 0 0 1 8.75 11h5.5A1.75 1.75 0 0 0 16 9.25V5.74L2.85 7.494a.75.75 0 0 1-.199-1.487l13.35-1.78V3.75a.75.75 0 0 1 1.5 0v.277zm-3.65 11.743a2.25 2.25 0 0 0-2.25-2.25H8.75a2.25 2.25 0 0 0-2.25 2.25v3.75h15zM6.5 20v2.25c0 .69.559 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V20z"/>`
} as const;

export default function VehicleCableCarIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'vehiclecablecaricon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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