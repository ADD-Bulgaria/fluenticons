import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v5.745L4.073 16.31a1.25 1.25 0 1 0-1.646 1.882l4 3.5a1.25 1.25 0 0 0 1.646 0l4-3.5a1.25 1.25 0 0 0-1.646-1.882L8.5 17.995V14H42v-1.75A6.25 6.25 0 0 0 35.75 6zM6 23.75a3.25 3.25 0 0 0 3.39-.554l4-3.5a3.25 3.25 0 0 0 1.023-3.196H42v19.25A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zM15.5 26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m6-2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m11 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M13 31.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M24 34a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>`,
  'regular': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v5.745L4.073 16.31a1.25 1.25 0 1 0-1.646 1.882l4 3.5a1.25 1.25 0 0 0 1.646 0l4-3.5a1.25 1.25 0 1 0-1.646-1.882L8.5 17.995V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V14h-28v.01a3.24 3.24 0 0 1 2.196 1.1c.361.413.6.891.717 1.39H39.5v19.25a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75v-8.5a1.25 1.25 0 1 0-2.5 0v8.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM18 23.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m6 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m11-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M15.5 34a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m11-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>`
} as const;

export default function CalendarArrowCounterclockwiseIcon({ 
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

  const gradientId = 'calendararrowcounterclockwiseicon_gradient';
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