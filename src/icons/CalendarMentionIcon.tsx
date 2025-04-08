import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 7v2.341A6 6 0 0 0 9.341 17H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zm.5 8a4 4 0 1 0 1.333 7.773.5.5 0 0 1 .334.942A5 5 0 1 1 20 15c0 1.455-.901 2.437-1.973 2.494a1.75 1.75 0 0 1-1.438-.627 2 2 0 0 1-.156-.207c-.402.508-.993.84-1.683.84-1.303 0-2.25-1.184-2.25-2.5s.947-2.5 2.25-2.5c.476 0 .904.158 1.256.422A.5.5 0 0 1 17 13v2c0 .62.164 1.001.348 1.215a.75.75 0 0 0 .625.28C18.401 16.474 19 16.046 19 15a4 4 0 0 0-4-4m-.25 5.5c.63 0 1.25-.607 1.25-1.5s-.62-1.5-1.25-1.5-1.25.607-1.25 1.5.62 1.5 1.25 1.5"/>`,
  'regular': `<path d="M14.5 3A2.5 2.5 0 0 1 17 5.5v3.841a6 6 0 0 0-1-.258V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.583q.088.517.258 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4m.5 7a4 4 0 1 0 1.333 7.773.5.5 0 0 1 .334.942A5 5 0 1 1 20 15c0 1.455-.901 2.437-1.973 2.494a1.75 1.75 0 0 1-1.438-.627 2 2 0 0 1-.156-.207c-.402.508-.993.84-1.683.84-1.303 0-2.25-1.184-2.25-2.5s.947-2.5 2.25-2.5c.476 0 .904.158 1.256.422A.5.5 0 0 1 17 13v2c0 .62.164 1.001.348 1.215a.75.75 0 0 0 .625.28C18.401 16.474 19 16.046 19 15a4 4 0 0 0-4-4m-.25 5.5c.63 0 1.25-.607 1.25-1.5s-.62-1.5-1.25-1.5-1.25.607-1.25 1.5.62 1.5 1.25 1.5"/>`
} as const;

export default function CalendarMentionIcon({ 
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

  const gradientId = 'calendarmentionicon_gradient';
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