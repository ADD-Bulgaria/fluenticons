import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.25 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zM9 13.5v-3h3v3zM2 7.75A4.75 4.75 0 0 1 6.75 3h10.5a4.75 4.75 0 0 1 3.5 7.961v7.789A2.25 2.25 0 0 1 18.5 21h-13a2.25 2.25 0 0 1-2.25-2.25v-7.789A4.74 4.74 0 0 1 2 7.75M6.75 4.5a3.25 3.25 0 0 0-2.234 5.61.75.75 0 0 1 .234.545v8.095c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-7.692a.75.75 0 0 1 .328-.62A3.25 3.25 0 0 0 14.75 4.5z"/>`,
  'regular': `<path d="M8.25 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zM9 13.5v-3h3v3zM2 7.75A4.75 4.75 0 0 1 6.75 3h10.5a4.75 4.75 0 0 1 3.5 7.961v7.789A2.25 2.25 0 0 1 18.5 21h-13a2.25 2.25 0 0 1-2.25-2.25v-7.789A4.74 4.74 0 0 1 2 7.75M6.75 4.5a3.25 3.25 0 0 0-2.234 5.61.75.75 0 0 1 .234.545v8.095c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-7.692a.75.75 0 0 1 .328-.62A3.25 3.25 0 0 0 14.75 4.5zM19.5 7.75a4.74 4.74 0 0 1-1.75 3.683v7.317q-.002.396-.128.75h.878a.75.75 0 0 0 .75-.75v-8.095a.75.75 0 0 1 .234-.545 3.25 3.25 0 0 0-1.084-5.4 4.73 4.73 0 0 1 1.1 3.04"/>`
} as const;

export default function FoodToastIcon({ 
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

  const gradientId = 'foodtoasticon_gradient';
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