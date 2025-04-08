import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M11 14.5a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.5 3.5 0 0 1-.7-2.1m3.5 3.5a3.5 3.5 0 0 1-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6M17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.315-2.922c.206-.322.316-.696.315-1.078v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3a2 2 0 0 0 .315 1.078A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.986 3.986 0 0 0 3.587 3.958A5.46 5.46 0 0 1 9 14.5a5.506 5.506 0 0 1 5-5.475V8h.5A2.5 2.5 0 0 0 17 5.5z"/>`,
  'regular': `<path d="M9.18 15.872c.097.375.233.74.407 1.086A3.986 3.986 0 0 1 6 13h-.5A1.5 1.5 0 0 0 4 14.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 5.5 12H6v-1.5H2.5a.5.5 0 0 1 0-1H6V8h-.5A2.5 2.5 0 0 1 3 5.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 0 5.5 7H6a3 3 0 0 1 2.315-2.922A2 2 0 0 1 8 3v-.5a.5.5 0 0 1 1 0V3a1 1 0 0 0 2 0v-.5a.5.5 0 0 1 1 0V3a2 2 0 0 1-.315 1.078A3 3 0 0 1 14 7h.5A1.5 1.5 0 0 0 16 5.5v-2a.5.5 0 0 1 1 0v2A2.5 2.5 0 0 1 14.5 8H14v1.025a5.5 5.5 0 0 0-1 .188V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2.99 2.99 0 0 0 2.18 2.872M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-7.3 2.1 4.9-4.9a3.5 3.5 0 0 0-4.9 4.9m6.3-2.1a3.5 3.5 0 0 0-.7-2.1l-4.9 4.9a3.5 3.5 0 0 0 5.6-2.8"/>`
} as const;

export default function BugProhibitedIcon({ 
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

  const gradientId = 'bugprohibitedicon_gradient';
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