import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.284 3.241 13.19 4.335a6.503 6.503 0 0 0-9.659 5.028 5.5 5.5 0 0 0-1.527.89 8.003 8.003 0 0 1 12.28-7.012M9.746 17.996c.374-.454.677-.968.891-1.527a6.47 6.47 0 0 0 3.96-1.873.75.75 0 0 1 1.06 1.06 7.98 7.98 0 0 1-5.91 2.34M11 14.5q0 .256-.023.506a5.1 5.1 0 0 0 2.63-1.4.75.75 0 1 0-1.061-1.06c-.47.47-1.039.783-1.64.939Q11 13.979 11 14.5M5.5 9q.521 0 1.015.094a3.6 3.6 0 0 1 4.472-2.556l1.164-1.164a5.102 5.102 0 0 0-7.157 3.649A6 6 0 0 1 5.5 9m3.004.892c.64.418 1.186.965 1.604 1.604a1.5 1.5 0 0 0 1.341-1.885l4.331-4.33a.75.75 0 0 0-1.06-1.061l-4.331 4.33a1.5 1.5 0 0 0-1.885 1.342m8.746 3.358a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-4.25 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L4.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="m14.497 3.382-.722.722a7.003 7.003 0 0 0-10.763 5.49c-.36.183-.699.405-1.008.66a8.003 8.003 0 0 1 12.493-6.872m-4.75 14.614q.382-.466.66-1.008a6.97 6.97 0 0 0 4.543-2.038.5.5 0 0 1 .707.707 7.98 7.98 0 0 1-5.91 2.339M11 14.5q0 .203-.014.402a5 5 0 0 0 2.55-1.366.5.5 0 1 0-.708-.708 4 4 0 0 1-1.862 1.054q.033.305.034.618M5.5 9q.313 0 .618.034a4 4 0 0 1 5.445-2.718l.75-.75a5.002 5.002 0 0 0-7.215 3.449A6 6 0 0 1 5.5 9m3.544 1.294q.359.302.662.662a1 1 0 0 0 1.26-1.215l4.888-4.887a.5.5 0 0 0-.708-.708L10.26 9.034a1.001 1.001 0 0 0-1.215 1.26M17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L4.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`
} as const;

export default function RadarCheckmarkIcon({ 
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

  const gradientId = 'radarcheckmarkicon_gradient';
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