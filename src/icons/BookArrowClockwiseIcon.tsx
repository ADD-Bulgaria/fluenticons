import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 4.25a.75.75 0 0 1-.75.75H18.5a.75.75 0 0 1 0-1.5h1.33l-.008-.006-.01-.007A4.5 4.5 0 1 0 21.5 7 .75.75 0 0 1 23 7a6 6 0 1 1-2.5-4.874V1.5a.746.746 0 0 1 .75-.75.75.75 0 0 1 .75.75zM12.101 2H6.5A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75v-5.687A7.003 7.003 0 0 1 10.07 8a7.1 7.1 0 0 1 .22-3q.155-.519.384-1A7 7 0 0 1 12.1 2"/>`,
  'regular': `<path d="M21.25 5a.75.75 0 0 0 .75-.75V1.5a.75.75 0 0 0-1.5 0v.626A6 6 0 1 0 23 7a.75.75 0 0 0-1.5 0 4.5 4.5 0 1 1-1.67-3.5H18.5a.75.75 0 0 0 0 1.5zM6.5 2h5.601a7 7 0 0 0-1.165 1.5H6.5a1 1 0 0 0-1 1V18H19v-4.29a7 7 0 0 0 1.5-.647v5.687a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2"/>`
} as const;

export default function BookArrowClockwiseIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'bookarrowclockwiseicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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