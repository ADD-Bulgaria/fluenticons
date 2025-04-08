import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.999 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-.067l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14 3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14 3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14 3.217-5.357h-1.08C9.306 30.99 6 27.693 6 23.625s3.306-7.365 7.384-7.365h.16C14.07 11.161 17.662 7 24 7"/>`,
  'regular': `<path d="M23.999 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365l-1.723.001-.04.094-.066.128-3.5 6.063a1.5 1.5 0 0 1-2.664-1.372l.066-.129 2.763-4.785-4.296.001-.039.094-.066.128-3.5 6.063a1.5 1.5 0 0 1-2.664-1.372l.066-.129 2.762-4.785-4.295.001-.04.094-.065.128-3.5 6.063a1.5 1.5 0 0 1-2.665-1.372l.066-.129 2.763-4.785h-.593C9.306 30.99 6 27.693 6 23.625s3.306-7.365 7.384-7.365h.16C14.07 11.161 17.662 7 24 7m0 2.495c-4.261 0-7.975 3.448-7.975 8.21 0 .755-.656 1.348-1.408 1.348h-1.42c-2.594 0-4.697 2.113-4.697 4.72 0 2.608 2.103 4.722 4.697 4.722h21.606c2.594 0 4.697-2.114 4.697-4.721s-2.103-4.722-4.697-4.722h-1.42c-.752 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.21-7.975-8.21"/>`
} as const;

export default function WeatherRainIcon({ 
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

  const gradientId = 'weatherrainicon_gradient';
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