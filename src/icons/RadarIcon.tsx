import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.284 3.241 13.19 4.335a6.5 6.5 0 1 0 1.406 10.261.75.75 0 0 1 1.06 1.06 8 8 0 1 1-1.372-12.415m-3.296 3.296 1.163-1.163a5.102 5.102 0 0 0-5.757 8.232 5.1 5.1 0 0 0 7.212 0 .75.75 0 1 0-1.06-1.06 3.6 3.6 0 1 1-1.558-6.009M15.78 4.22a.75.75 0 0 1 0 1.06l-4.33 4.331q.049.187.05.389a1.5 1.5 0 1 1-1.111-1.45l4.33-4.33a.75.75 0 0 1 1.061 0m1.47 9.03a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>`,
  'regular': `<path d="m14.497 3.382-.722.722A7 7 0 1 0 14.95 14.95a.5.5 0 0 1 .707.707 8 8 0 1 1-1.16-12.275m-2.935 2.935.751-.751a5.002 5.002 0 0 0-5.849 7.97 5 5 0 0 0 7.072 0 .5.5 0 1 0-.708-.708 4 4 0 1 1-1.266-6.511m4.292-2.17a.5.5 0 0 1 0 .707L10.966 9.74a1.001 1.001 0 1 1-.707-.707l4.887-4.888a.5.5 0 0 1 .708 0M17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>`
} as const;

export default function RadarIcon({ 
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

  const gradientId = 'radaricon_gradient';
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