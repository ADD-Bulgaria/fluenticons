import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.25 38.5a1.75 1.75 0 0 1 .144 3.494l-.143.006h-16.5a1.75 1.75 0 0 1-.144-3.494l.144-.006zm6-5.995a1.75 1.75 0 0 1 .144 3.494l-.143.006H9.75a1.75 1.75 0 0 1-.143-3.494l.143-.006zM24 6.01c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.297 7.384 7.365S38.692 30 34.614 30h-21.23C9.306 30 6 26.703 6 22.635s3.306-7.365 7.384-7.365h.16C14.07 10.171 17.662 6.01 24 6.01"/>`,
  'regular': `<path d="M15.247 38h17.506a1.247 1.247 0 0 1 .128 2.49l-.128.006H15.247a1.247 1.247 0 0 1-.128-2.49zm-6-5h29.505a1.248 1.248 0 0 1 .128 2.49l-.128.006H9.248a1.248 1.248 0 0 1-.128-2.49zM24 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-21.23C9.306 30.99 6 27.693 6 23.625s3.306-7.365 7.384-7.365h.16C14.07 11.161 17.662 7 24 7m0 2.495c-4.261 0-7.975 3.448-7.975 8.21 0 .755-.656 1.348-1.408 1.348h-1.42c-2.594 0-4.697 2.113-4.697 4.72 0 2.608 2.103 4.722 4.697 4.722h21.606c2.594 0 4.697-2.114 4.697-4.721s-2.103-4.722-4.697-4.722h-1.42c-.752 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.21-7.975-8.21"/>`
} as const;

export default function WeatherFogIcon({ 
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

  const gradientId = 'weatherfogicon_gradient';
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