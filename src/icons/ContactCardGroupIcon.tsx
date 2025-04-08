import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM18 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m6.5-1.75c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25m1.25 4.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5a1.25 1.25 0 1 1 0-2.5M10 26.5a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5V28s0 3.5-5 3.5-5-3.5-5-3.5zM23 30h-1.472a5.5 5.5 0 0 0 .34-.99 5 5 0 0 0 .128-.876l.003-.078V26.5c0-.537-.12-1.045-.336-1.5H24.5a1.5 1.5 0 0 1 1.5 1.5v.5a3 3 0 0 1-3 3"/>`,
  'regular': `<path d="M18 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m6.5-1.75c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25m1.25 4.25a1.25 1.25 0 1 0 0 2.5h6.5a1.25 1.25 0 1 0 0-2.5zM10 26.5a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5V28s0 3.5-5 3.5-5-3.5-5-3.5zm11.867 2.51a5.5 5.5 0 0 1-.339.99H23a3 3 0 0 0 3-3v-.5a1.5 1.5 0 0 0-1.5-1.5h-2.837c.216.455.337.963.337 1.5v1.556a3 3 0 0 1-.02.297 5 5 0 0 1-.113.657M4 14.25A6.25 6.25 0 0 1 10.25 8h27.5A6.25 6.25 0 0 1 44 14.25v19.5A6.25 6.25 0 0 1 37.75 40h-27.5A6.25 6.25 0 0 1 4 33.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v19.5a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75v-19.5a3.75 3.75 0 0 0-3.75-3.75z"/>`
} as const;

export default function ContactCardGroupIcon({ 
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

  const gradientId = 'contactcardgroupicon_gradient';
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