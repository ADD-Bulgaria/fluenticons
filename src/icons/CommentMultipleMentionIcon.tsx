import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 7.5A3.5 3.5 0 0 0 13.5 4h-9c.456-.607 1.182-1 2-1h7A4.5 4.5 0 0 1 18 7.5v2.303a6 6 0 0 0-1-.462zM9.057 16h.026A6 6 0 0 1 16 9.083V7.5A2.5 2.5 0 0 0 13.5 5h-9A2.5 2.5 0 0 0 2 7.5v6A2.5 2.5 0 0 0 4.5 16H5v.995a1 1 0 0 0 1.59.808zM15 11a4 4 0 1 0 1.333 7.773.5.5 0 0 1 .334.942A5 5 0 1 1 20 15c0 1.455-.901 2.437-1.973 2.494a1.75 1.75 0 0 1-1.438-.627 2 2 0 0 1-.156-.207c-.402.508-.993.84-1.683.84-1.303 0-2.25-1.184-2.25-2.5s.947-2.5 2.25-2.5c.476 0 .904.158 1.256.422A.5.5 0 0 1 17 13v2c0 .62.164 1.001.348 1.215a.75.75 0 0 0 .625.28C18.401 16.474 19 16.046 19 15a4 4 0 0 0-4-4m-.25 5.5c.63 0 1.25-.607 1.25-1.5s-.62-1.5-1.25-1.5-1.25.607-1.25 1.5.62 1.5 1.25 1.5"/>`,
  'regular': `<path d="M14.39 4.114A3.5 3.5 0 0 1 17 7.5v1.841q.526.187 1 .462V7.5A4.5 4.5 0 0 0 13.5 3h-7c-.818 0-1.544.393-2 1h9a3.5 3.5 0 0 1 .89.114M16 7.5v1.583A6 6 0 0 0 15 9V7.5A1.5 1.5 0 0 0 13.5 6h-9A1.5 1.5 0 0 0 3 7.5v6A1.5 1.5 0 0 0 4.5 15H6v1.995L8.73 15H9q0 .511.083 1h-.026L6.59 17.803A1 1 0 0 1 5 16.995V16h-.5A2.5 2.5 0 0 1 2 13.5v-6A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5M15 11a4 4 0 1 0 1.333 7.773.5.5 0 0 1 .334.942A5 5 0 1 1 20 15c0 1.455-.901 2.437-1.973 2.494a1.75 1.75 0 0 1-1.438-.627 2 2 0 0 1-.156-.207c-.402.508-.993.84-1.683.84-1.303 0-2.25-1.184-2.25-2.5s.947-2.5 2.25-2.5c.476 0 .904.158 1.256.422A.5.5 0 0 1 17 13v2c0 .62.164 1.001.348 1.215a.75.75 0 0 0 .625.28C18.401 16.474 19 16.046 19 15a4 4 0 0 0-4-4m-.25 5.5c.63 0 1.25-.607 1.25-1.5s-.62-1.5-1.25-1.5-1.25.607-1.25 1.5.62 1.5 1.25 1.5"/>`
} as const;

export default function CommentMultipleMentionIcon({ 
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

  const gradientId = 'commentmultiplementionicon_gradient';
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