import type { IconProps } from './types';

const svgContent = {
  'color': `<rect width="36" height="36" x="6" y="6" rx="8.5"/><path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v4.25h10.5V6zM19 6v10.5h10V6zm-2.5 13H6v10h10.5zM19 29V19h10v10zm-2.5 2.5H6v4.25A6.25 6.25 0 0 0 12.25 42h4.25zM19 42h10V31.5H19zm12.5 0V31.5H42v4.25A6.25 6.25 0 0 1 35.75 42zM42 19v10H31.5V19zm0-2.5v-4.25A6.25 6.25 0 0 0 35.75 6H31.5v10.5z"/>`,
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v4.25h10.5V6zM19 6v10.5h10V6zm-2.5 13H6v10h10.5zM19 29V19h10v10zm-2.5 2.5H6v4.25A6.25 6.25 0 0 0 12.25 42h4.25zM19 42h10V31.5H19zm12.5 0V31.5H42v4.25A6.25 6.25 0 0 1 35.75 42zM42 19v10H31.5V19zm0-2.5v-4.25A6.25 6.25 0 0 0 35.75 6H31.5v10.5z"/>`,
  'regular': `<path d="M35.75 6A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5A6.25 6.25 0 0 1 12.25 6zM8.5 19.5v9H17v-9zm0 11.5v4.75a3.75 3.75 0 0 0 3.75 3.75H17V31zm11 8.5h9V31h-9zm11.5 0h4.75a3.75 3.75 0 0 0 3.75-3.75V31H31zm8.5-11v-9H31v9zm0-11.5v-4.75a3.75 3.75 0 0 0-3.75-3.75H31V17zm-11-8.5h-9V17h9zM17 8.5h-4.75a3.75 3.75 0 0 0-3.75 3.75V17H17zm11.5 20v-9h-9v9z"/>`
} as const;

export default function TableIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'tableicon_gradient';
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