import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 2.5c.69 0 1.25.56 1.25 1.25V8A3.5 3.5 0 0 1 8 11.5H3.75a1.25 1.25 0 1 1 0-2.5H8a1 1 0 0 0 1-1V3.75c0-.69.56-1.25 1.25-1.25m11.5 0c.69 0 1.25.56 1.25 1.25V8a1 1 0 0 0 1 1h4.25a1.25 1.25 0 1 1 0 2.5H24A3.5 3.5 0 0 1 20.5 8V3.75c0-.69.56-1.25 1.25-1.25M2.5 21.75c0-.69.56-1.25 1.25-1.25H8a3.5 3.5 0 0 1 3.5 3.5v4.25a1.25 1.25 0 1 1-2.5 0V24a1 1 0 0 0-1-1H3.75c-.69 0-1.25-.56-1.25-1.25m18 2.25a3.5 3.5 0 0 1 3.5-3.5h4.25a1.25 1.25 0 1 1 0 2.5H24a1 1 0 0 0-1 1v4.25a1.25 1.25 0 1 1-2.5 0z"/>`,
  'regular': `<path d="M10 29a1 1 0 0 0 1-1v-3.75A3.25 3.25 0 0 0 7.75 21H4a1 1 0 1 0 0 2h3.75c.69 0 1.25.56 1.25 1.25V28a1 1 0 0 0 1 1m12 0a1 1 0 0 0 1-1v-3.75c0-.69.56-1.25 1.25-1.25H28a1 1 0 1 0 0-2h-3.75A3.25 3.25 0 0 0 21 24.25V28a1 1 0 0 0 1 1M3 10a1 1 0 0 0 1 1h3.75A3.25 3.25 0 0 0 11 7.75V4a1 1 0 1 0-2 0v3.75C9 8.44 8.44 9 7.75 9H4a1 1 0 0 0-1 1m18-2.25A3.25 3.25 0 0 0 24.25 11H28a1 1 0 1 0 0-2h-3.75C23.56 9 23 8.44 23 7.75V4a1 1 0 1 0-2 0z"/>`
} as const;

export default function FullScreenMinimizeIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'fullscreenminimizeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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