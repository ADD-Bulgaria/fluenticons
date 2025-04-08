import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 5c0 1.657-2.686 3-6 3S4 6.657 4 5s2.686-3 6-3 6 1.343 6 3m-1.31 3.016q.156-.078.31-.166v.213a1.97 1.97 0 0 0-1.288 1.044l-3.495 6.997a1.98 1.98 0 0 0 .056 1.893Q10.138 18 10 18c-3.314 0-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984m-.087 1.538-3.496 6.998A1 1 0 0 0 12.002 18h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>`,
  'regular': `<path d="M4 5c0-1.007.875-1.755 1.9-2.223A10.2 10.2 0 0 1 10 2a10.2 10.2 0 0 1 4.1.777C15.125 3.245 16 3.993 16 5v3.06a2.05 2.05 0 0 0-1 .002V6.7q-.421.31-.9.525A10.2 10.2 0 0 1 10 8a10.2 10.2 0 0 1-4.1-.777A5 5 0 0 1 5 6.7V15c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 17h.004c0 .356.098.701.272 1.002L10 18a10.2 10.2 0 0 1-4.1-.777C4.875 16.755 4 16.007 4 15zm1 0c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.682.687C5.356 4.125 5 4.626 5 5m9.603 4.554-3.496 6.998A1 1 0 0 0 12.002 18h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>`
} as const;

export default function DatabaseWarningIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'databasewarningicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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