import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 5h3.25L10 1.25V4.5a.5.5 0 0 0 .5.5m0 1A1.5 1.5 0 0 1 9 4.5V1H5.5A1.5 1.5 0 0 0 4 2.5v7.012l.038.029c.08.06.158.12.23.191.158.158.283.342.393.534.126-.086.259-.159.404-.202.071-.233.198-.447.375-.625A1.5 1.5 0 0 1 6.501 9c.373 0 .725.135 1 .382a1.5 1.5 0 0 1 1-.382 1.49 1.49 0 0 1 1.436 1.064c.233.07.447.197.625.375.283.283.439.66.439 1.061 0 .373-.135.725-.382 1 .247.275.382.627.382 1a1.49 1.49 0 0 1-1.064 1.436q-.006.019-.016.035L9.908 15h2.593a1.5 1.5 0 0 0 1.5-1.5V6zm-8 9A1.503 1.503 0 0 1 1 13.5v-2A1.503 1.503 0 0 1 2.5 10 1.503 1.503 0 0 1 4 11.5a.5.5 0 1 1-1 0 .5.5 0 1 0-1 0v2a.5.5 0 1 0 1 0 .5.5 0 1 1 1 0A1.503 1.503 0 0 1 2.5 15M9 13h.5a.5.5 0 1 1 0 1H9v.5a.5.5 0 1 1-1 0V14h-.979v.5a.5.5 0 1 1-1 0V14H5.5a.5.5 0 1 1 0-1h.515l-.006-1H5.5a.5.5 0 1 1 0-1H6v-.5a.5.5 0 1 1 1 0v.5h1v-.5a.5.5 0 1 1 1 0v.5h.5a.5.5 0 1 1 0 1H9zm-1.985 0H8v-1h-.991z"/>`,
  'regular': `<path d="m10.65 1.44 2.91 2.91c.28.282.438.663.44 1.06V13a2.006 2.006 0 0 1-2 2h-1.6c.374-.226.652-.582.78-1H12a1 1 0 0 0 1-1V6h-2.5A1.5 1.5 0 0 1 9 4.5V2H6a1 1 0 0 0-1 1v6.61a2 2 0 0 0-.13.26 1 1 0 0 0-.12.06 2.2 2.2 0 0 0-.31-.37A2.5 2.5 0 0 0 4 9.2V3a2.006 2.006 0 0 1 2-2h3.59c.397.002.778.16 1.06.44m-.504 3.414A.5.5 0 0 0 10.5 5h2.29L10 2.21V4.5a.5.5 0 0 0 .146.354M2.5 15A1.5 1.5 0 0 1 1 13.5v-2a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0A1.5 1.5 0 0 1 2.5 15m7-2H9v-1h.5a.5.5 0 0 0 0-1H9v-.5a.5.5 0 0 0-1 0v.5H7v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.509l.006 1H5.5a.5.5 0 0 0 0 1h.521v.5a.5.5 0 0 0 1 0V14H8v.5a.5.5 0 0 0 1 0V14h.5a.5.5 0 0 0 0-1M8 13h-.985l-.006-1H8z"/>`
} as const;

export default function DocumentCsIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documentcsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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