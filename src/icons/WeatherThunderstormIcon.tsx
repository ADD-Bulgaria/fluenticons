import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M27.356 25.395a1.75 1.75 0 0 1 .342 2.335l-.095.128-2.164 2.645h4.806c1.436 0 2.242 1.622 1.43 2.76l-.086.111-7.501 8.997a1.75 1.75 0 0 1-2.785-2.115l.097-.127 5.106-6.126h-4.758c-1.428 0-2.236-1.606-1.44-2.745l.086-.112 4.5-5.504a1.75 1.75 0 0 1 2.462-.247M26 10.018c6.338 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-3.063c1.284-2.436-.414-5.505-3.306-5.505h-.694l.067-.131c.74-1.576.348-3.426-.996-4.525a3.75 3.75 0 0 0-5.277.53l-4.5 5.503-.131.171-.102.153a3.77 3.77 0 0 0-.168 3.805h-3.06c-4.077 0-7.383-3.298-7.383-7.366 0-3.986 3.175-7.233 7.14-7.361l.404-.004c.525-5.099 4.117-9.26 10.455-9.26M19.997 4a9.43 9.43 0 0 1 7.787 4.104A15 15 0 0 0 25.996 8c-6.078 0-10.476 3.44-11.96 8.62l-.08.29-.115.476-.413.076a9.38 9.38 0 0 0-6.908 6.07 6.564 6.564 0 0 1 4.04-11.737h.142A9.44 9.44 0 0 1 19.996 4"/>`,
  'regular': `<path d="m21.282 31.95 4.517-5.489a1.25 1.25 0 0 1 2.011 1.479l-.08.11-2.835 3.444h4.858c1.01 0 1.586 1.124 1.044 1.937l-.073.1-6.486 8.005a1.25 1.25 0 0 1-2.022-1.463l.08-.11 4.835-5.969h-4.884c-1.014 0-1.59-1.132-1.04-1.944zl4.517-5.489zM26 10.018c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365l-4.123.001A2.5 2.5 0 0 0 33 32.5c0-.35-.072-.684-.203-.987h4.007c2.594 0 4.697-2.114 4.697-4.721s-2.103-4.722-4.697-4.722h-1.42c-.752 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.211-7.975-8.211s-7.975 3.448-7.975 8.21c0 .755-.656 1.347-1.407 1.347h-1.421c-2.594 0-4.697 2.114-4.697 4.722 0 2.607 2.103 4.721 4.697 4.721h4.004a2.5 2.5 0 0 0 .304 2.497l-4.12-.002c-4.078 0-7.384-3.297-7.384-7.365 0-3.986 3.175-7.233 7.14-7.361l.404-.004c.526-5.099 4.118-9.26 10.455-9.26M19.998 4a9.43 9.43 0 0 1 7.787 4.104 15.3 15.3 0 0 0-3.437-.017 6.65 6.65 0 0 0-4.35-1.625c-3.285 0-6.083 2.422-6.644 5.696l-.313 1.83a1 1 0 0 1-.986.831h-1.947c-2.063 0-3.735 1.71-3.735 3.821 0 1.106.459 2.102 1.193 2.8a9.3 9.3 0 0 0-1.044 2.092 6.564 6.564 0 0 1 4.04-11.737h.142A9.44 9.44 0 0 1 19.998 4"/>`
} as const;

export default function WeatherThunderstormIcon({ 
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

  const gradientId = 'weatherthunderstormicon_gradient';
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