import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.284 3.241 13.19 4.335A6.503 6.503 0 0 0 3.577 11H2.062a8.003 8.003 0 0 1 12.221-7.759M10 17v-.5a6.48 6.48 0 0 0 4.596-1.904.75.75 0 0 1 1.06 1.06 7.98 7.98 0 0 1-5.826 2.342c.11-.312.17-.648.17-.998m0-2.5v.6c1.305 0 2.61-.498 3.606-1.494a.75.75 0 1 0-1.06-1.06 3.6 3.6 0 0 1-2.856 1.04c.194.254.31.57.31.914M6.5 11h.041a3.6 3.6 0 0 1 4.447-4.463l1.163-1.163A5.102 5.102 0 0 0 4.998 11zm9.28-6.78a.75.75 0 0 1 0 1.06l-4.33 4.331q.049.187.05.389a1.5 1.5 0 1 1-1.111-1.45l4.33-4.33a.75.75 0 0 1 1.061 0m1.47 9.03a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M1.5 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm7 2a.5.5 0 0 1 .5.5V17a2 2 0 0 1-2 2H3.5a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 .5-.5"/>`,
  'regular': `<path d="m14.497 3.382-.722.722A7.003 7.003 0 0 0 3.071 11H2.062a8.003 8.003 0 0 1 12.435-7.618M9.83 17.998c.11-.312.17-.648.17-.998a6.98 6.98 0 0 0 4.95-2.05.5.5 0 0 1 .707.707 7.98 7.98 0 0 1-5.827 2.341M10 14.5v.5c1.28 0 2.56-.488 3.536-1.464a.5.5 0 1 0-.708-.708A4 4 0 0 1 9.914 14q.085.236.086.501M5.1 11h1.026a4.001 4.001 0 0 1 5.436-4.683l.751-.751A5.002 5.002 0 0 0 5.1 11m10.754-6.854a.5.5 0 0 1 0 .708L10.966 9.74a1.001 1.001 0 1 1-.707-.707l4.887-4.888a.5.5 0 0 1 .708 0M17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M1.5 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm7 2a.5.5 0 0 1 .5.5V17a2 2 0 0 1-2 2H3.5a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 .5-.5"/>`
} as const;

export default function RadarRectangleMultipleIcon({ 
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

  const gradientId = 'radarrectanglemultipleicon_gradient';
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