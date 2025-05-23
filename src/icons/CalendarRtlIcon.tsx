import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42 12.25A6.25 6.25 0 0 0 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25V14h36zm0 4.25v19.25A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75V16.5zm-12 7a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M24 26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-11-2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M32.5 34a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-11-2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/>`,
  'regular': `<path d="M32.5 26a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-11-2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m-6 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M30 31.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M24 34a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m18-21.75A6.25 6.25 0 0 0 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75zM35.75 8.5a3.75 3.75 0 0 1 3.75 3.75V14h-31v-1.75a3.75 3.75 0 0 1 3.75-3.75zm3.75 27.25a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75V16.5h31z"/>`
} as const;

export default function CalendarRtlIcon({ 
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

  const gradientId = 'calendarrtlicon_gradient';
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