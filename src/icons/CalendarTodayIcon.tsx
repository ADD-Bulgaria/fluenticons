import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m11 7.25V9.5H3v12.25A3.25 3.25 0 0 0 6.25 25h6v-3.573a1.75 1.75 0 0 1-1.663-2.985l2.25-2a1.75 1.75 0 0 1 2.326 0l2.25 2a1.75 1.75 0 0 1-1.663 2.985V25h6A3.25 3.25 0 0 0 25 21.75m-8.75-8.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m8.75-7A3.25 3.25 0 0 0 21.75 3H6.25A3.25 3.25 0 0 0 3 6.25V8h22zm-9.248 14.06a.75.75 0 0 0 .996-1.12l-2.25-2a.75.75 0 0 0-.996 0l-2.25 2a.75.75 0 0 0 .996 1.12l1.002-.89v5.83a.75.75 0 0 0 1.5 0v-5.83z"/>`,
  'regular': `<path d="M25 6.25A3.25 3.25 0 0 0 21.75 3H6.25A3.25 3.25 0 0 0 3 6.25v15.5A3.25 3.25 0 0 0 6.25 25h5.998l.002-.75v-.75h-6a1.75 1.75 0 0 1-1.75-1.75V9.503h19V21.75a1.75 1.75 0 0 1-1.75 1.75h-6V25h6A3.25 3.25 0 0 0 25 21.75zM6.25 4.5h15.5c.966 0 1.75.784 1.75 1.75v1.753h-19V6.25c0-.966.784-1.75 1.75-1.75m9 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m.502 7.06a.75.75 0 1 0 .996-1.12l-2.25-2a.75.75 0 0 0-.996 0l-2.25 2a.75.75 0 1 0 .996 1.12l1.002-.89v5.83a.75.75 0 0 0 1.5 0v-5.83z"/>`
} as const;

export default function CalendarTodayIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'calendartodayicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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