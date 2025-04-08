import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 3.75c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5H29.5v2h4.25A6.25 6.25 0 0 1 40 13.25v22.5A6.25 6.25 0 0 1 33.75 42h-.275q.024.12.025.25v1.5a1.25 1.25 0 1 1-2.5 0v-1.5q0-.13.025-.25h-14.55q.024.12.025.25v1.5a1.25 1.25 0 1 1-2.5 0v-1.5q0-.13.026-.254A6.25 6.25 0 0 1 8 35.75v-22.5A6.25 6.25 0 0 1 14.25 7H18V5h-.75C16.56 5 16 4.44 16 3.75M20.5 5v2H27V5zm-4.25 13a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5z"/>`,
  'regular': `<path d="M15 19.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5h-15.5c-.69 0-1.25-.56-1.25-1.25M17.25 2.5a1.25 1.25 0 1 0 0 2.5H18v2h-3.75A6.25 6.25 0 0 0 8 13.25v22.5a6.25 6.25 0 0 0 6.026 6.246 1.3 1.3 0 0 0-.026.254v1.5a1.25 1.25 0 1 0 2.5 0v-1.5q0-.13-.025-.25h14.55q-.024.12-.025.25v1.5a1.25 1.25 0 1 0 2.5 0v-1.5q0-.13-.025-.25h.275A6.25 6.25 0 0 0 40 35.75v-22.5A6.25 6.25 0 0 0 33.75 7H29.5V5h1.25a1.25 1.25 0 1 0 0-2.5zM27 5v2h-6.5V5zM14.25 9.5h19.5a3.75 3.75 0 0 1 3.75 3.75v22.5a3.75 3.75 0 0 1-3.75 3.75h-19.5a3.75 3.75 0 0 1-3.75-3.75v-22.5a3.75 3.75 0 0 1 3.75-3.75"/>`
} as const;

export default function LuggageIcon({ 
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

  const gradientId = 'luggageicon_gradient';
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