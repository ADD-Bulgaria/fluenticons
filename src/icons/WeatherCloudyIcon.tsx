import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M26.003 14.018c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-21.23c-4.078 0-7.384-3.297-7.384-7.365s3.307-7.365 7.385-7.365h.16c.526-5.099 4.117-9.26 10.454-9.26M20 8a9.43 9.43 0 0 1 7.8 4.125 15 15 0 0 0-1.8-.107c-6.078 0-10.476 3.438-11.96 8.615l-.08.289-.115.475-.414.077a9.38 9.38 0 0 0-6.905 6.06 6.564 6.564 0 0 1 4.038-11.739h.142A9.44 9.44 0 0 1 20 8"/>`,
  'regular': `<path d="M26.003 14.018c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-21.23c-4.078 0-7.384-3.297-7.384-7.365 0-3.986 3.176-7.233 7.14-7.361l.405-.004c.526-5.099 4.117-9.26 10.454-9.26m0 2.495c-4.26 0-7.975 3.448-7.975 8.21 0 .755-.656 1.347-1.407 1.347H15.2c-2.595 0-4.698 2.114-4.698 4.722 0 2.607 2.103 4.721 4.697 4.721h21.606c2.595 0 4.697-2.114 4.697-4.721S39.4 26.07 36.806 26.07h-1.421c-.751 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.211-7.975-8.211M20 8a9.43 9.43 0 0 1 7.787 4.104 15.3 15.3 0 0 0-3.437-.017A6.65 6.65 0 0 0 20 10.462c-3.284 0-6.083 2.423-6.643 5.696l-.314 1.83a1 1 0 0 1-.986.832H10.11c-2.063 0-3.735 1.71-3.735 3.821 0 1.106.46 2.102 1.193 2.8a9.3 9.3 0 0 0-1.044 2.092 6.564 6.564 0 0 1 4.04-11.737h.142A9.44 9.44 0 0 1 20 8"/>`
} as const;

export default function WeatherCloudyIcon({ 
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

  const gradientId = 'weathercloudyicon_gradient';
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