import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.315-2.922c.206-.322.316-.696.315-1.078v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3a2 2 0 0 0 .315 1.078A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.986 3.986 0 0 0 3.587 3.958A5.486 5.486 0 0 1 14 9.025V8h.5A2.5 2.5 0 0 0 17 5.5zM14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 7.25a2.74 2.74 0 0 1-2.05-.917.499.499 0 1 1 .745-.666A1.75 1.75 0 1 0 13.6 13h.4a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.628V12a.5.5 0 0 1 1 0v.194a2.75 2.75 0 1 1 1.5 5.056"/>`,
  'regular': `<path d="M17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.315-2.922c.206-.322.316-.696.315-1.078v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3a2 2 0 0 0 .315 1.078A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.986 3.986 0 0 0 3.587 3.958 5.5 5.5 0 0 1-.407-1.086A2.99 2.99 0 0 1 7 13V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.213a5.6 5.6 0 0 1 1-.188V8h.5A2.5 2.5 0 0 0 17 5.5zM14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 7.25a2.74 2.74 0 0 1-2.05-.917.499.499 0 1 1 .745-.666A1.75 1.75 0 1 0 13.6 13h.4a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.628V12a.5.5 0 0 1 1 0v.194a2.75 2.75 0 1 1 1.5 5.056"/>`
} as const;

export default function BugArrowCounterclockwiseIcon({ 
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

  const gradientId = 'bugarrowcounterclockwiseicon_gradient';
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