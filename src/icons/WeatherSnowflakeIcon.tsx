import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M24.5 4A1.5 1.5 0 0 1 26 5.5v7.827l4.503-4.503a1.5 1.5 0 0 1 2.122 2.121L26 17.57V23h5.43l6.625-6.625a1.5 1.5 0 0 1 2.121 2.122L35.673 23H43.5a1.5 1.5 0 0 1 0 3h-7.827l4.26 4.26a1.5 1.5 0 0 1-2.122 2.121L31.43 26H26v5.43l6.381 6.381a1.5 1.5 0 0 1-2.121 2.121L26 35.673V43.5a1.5 1.5 0 0 1-3 0v-7.827l-4.503 4.503a1.5 1.5 0 0 1-2.122-2.121L23 31.43V26h-5.43l-6.625 6.625a1.5 1.5 0 0 1-2.121-2.122L13.327 26H5.5a1.5 1.5 0 0 1 0-3h7.827L8.58 18.253a1.5 1.5 0 0 1 2.122-2.121L17.57 23H23v-5.43l-6.868-6.868a1.5 1.5 0 0 1 2.121-2.122L23 13.327V5.5A1.5 1.5 0 0 1 24.5 4"/><path d="M24.5 4A1.5 1.5 0 0 1 26 5.5v7.827l4.503-4.503a1.5 1.5 0 0 1 2.122 2.121L26 17.57V23h5.43l6.625-6.625a1.5 1.5 0 0 1 2.121 2.122L35.673 23H43.5a1.5 1.5 0 0 1 0 3h-7.827l4.26 4.26a1.5 1.5 0 0 1-2.122 2.121L31.43 26H26v5.43l6.381 6.381a1.5 1.5 0 0 1-2.121 2.121L26 35.673V43.5a1.5 1.5 0 0 1-3 0v-7.827l-4.503 4.503a1.5 1.5 0 0 1-2.122-2.121L23 31.43V26h-5.43l-6.625 6.625a1.5 1.5 0 0 1-2.121-2.122L13.327 26H5.5a1.5 1.5 0 0 1 0-3h7.827L8.58 18.253a1.5 1.5 0 0 1 2.122-2.121L17.57 23H23v-5.43l-6.868-6.868a1.5 1.5 0 0 1 2.121-2.122L23 13.327V5.5A1.5 1.5 0 0 1 24.5 4"/>`,
  'filled': `<path d="M24.5 4A1.5 1.5 0 0 1 26 5.5v7.827l4.503-4.503a1.5 1.5 0 0 1 2.122 2.121L26 17.57V23h5.43l6.625-6.625a1.5 1.5 0 0 1 2.121 2.122L35.673 23H43.5a1.5 1.5 0 0 1 0 3h-7.827l4.26 4.26a1.5 1.5 0 0 1-2.122 2.121L31.43 26H26v5.43l6.381 6.381a1.5 1.5 0 0 1-2.121 2.121L26 35.673V43.5a1.5 1.5 0 0 1-3 0v-7.827l-4.503 4.503a1.5 1.5 0 0 1-2.122-2.121L23 31.43V26h-5.43l-6.625 6.625a1.5 1.5 0 0 1-2.121-2.122L13.327 26H5.5a1.5 1.5 0 0 1 0-3h7.827L8.58 18.253a1.5 1.5 0 0 1 2.122-2.121L17.57 23H23v-5.43l-6.868-6.868a1.5 1.5 0 0 1 2.121-2.122L23 13.327V5.5A1.5 1.5 0 0 1 24.5 4"/>`,
  'regular': `<path d="M24.25 3.5c.69 0 1.25.56 1.25 1.25v8.732l5.116-5.116a1.25 1.25 0 0 1 1.768 1.768L25.5 17.018V23h5.982l6.884-6.884a1.25 1.25 0 0 1 1.768 1.768L35.018 23h8.732a1.25 1.25 0 1 1 0 2.5h-8.732l4.866 4.866a1.25 1.25 0 0 1-1.768 1.768L31.482 25.5H25.5v5.982l6.634 6.634a1.25 1.25 0 0 1-1.768 1.768L25.5 35.018v8.732a1.25 1.25 0 1 1-2.5 0v-8.732l-5.116 5.116a1.25 1.25 0 0 1-1.768-1.768L23 31.482V25.5h-5.982l-6.884 6.884a1.25 1.25 0 0 1-1.768-1.768l5.116-5.116H4.75a1.25 1.25 0 1 1 0-2.5h8.732l-5.366-5.366a1.25 1.25 0 0 1 1.768-1.768L17.018 23H23v-5.982l-7.134-7.134a1.25 1.25 0 0 1 1.768-1.768L23 13.482V4.75c0-.69.56-1.25 1.25-1.25"/>`
} as const;

export default function WeatherSnowflakeIcon({ 
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

  const gradientId = 'weathersnowflakeicon_gradient';
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