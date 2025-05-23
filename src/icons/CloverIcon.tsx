import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.5 4a9.5 9.5 0 1 0 0 19h8.25c.69 0 1.25-.56 1.25-1.25V13.5A9.5 9.5 0 0 0 13.5 4m-.025 40C8.26 44 4 39.774 4 34.55a9.45 9.45 0 0 1 9.45-9.45h8.3c.69 0 1.25.56 1.25 1.25v8.15c0 5.252-4.283 9.5-9.525 9.5M34.5 4a9.5 9.5 0 0 1 0 19h-8.25c-.69 0-1.25-.56-1.25-1.25V13.5A9.5 9.5 0 0 1 34.5 4m0 40a9.5 9.5 0 0 0 0-19h-8.25c-.69 0-1.25.56-1.25 1.25v8.25a9.5 9.5 0 0 0 9.5 9.5"/>`,
  'regular': `<path d="M13.5 4a9.5 9.5 0 1 0 0 19h8.25c.69 0 1.25-.56 1.25-1.25V13.5A9.5 9.5 0 0 0 13.5 4m-7 9.5a7 7 0 0 1 14 0v7h-7a7 7 0 0 1-7-7M13.475 44C8.26 44 4 39.774 4 34.55a9.45 9.45 0 0 1 9.45-9.45h8.3c.69 0 1.25.56 1.25 1.25v8.15c0 5.252-4.283 9.5-9.525 9.5M6.5 34.55c0 3.833 3.132 6.95 6.975 6.95 3.87 0 7.025-3.139 7.025-7v-6.9h-7.05a6.95 6.95 0 0 0-6.95 6.95M44 13.5a9.5 9.5 0 0 0-19 0v8.25c0 .69.56 1.25 1.25 1.25h8.25a9.5 9.5 0 0 0 9.5-9.5m-9.5-7a7 7 0 1 1 0 14h-7v-7a7 7 0 0 1 7-7m0 37.5a9.5 9.5 0 0 0 0-19h-8.25c-.69 0-1.25.56-1.25 1.25v8.25a9.5 9.5 0 0 0 9.5 9.5m7-9.5a7 7 0 1 1-14 0v-7h7a7 7 0 0 1 7 7"/>`
} as const;

export default function CloverIcon({ 
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

  const gradientId = 'clovericon_gradient';
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