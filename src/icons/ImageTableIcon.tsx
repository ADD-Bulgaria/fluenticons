import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 6.005A6.25 6.25 0 0 0 6.005 12H12zM6 14.5v19h6v-19zm8.5-2.5h19V6h-19zM36 6.005V12h5.995A6.25 6.25 0 0 0 36 6.005m6 8.495h-6v19h6zM41.995 36H36v5.995A6.25 6.25 0 0 0 41.995 36M33.5 42v-6h-19v6zM12 41.995V36H6.005A6.25 6.25 0 0 0 12 41.995m2.5-10.048 6.848-6.849a3.75 3.75 0 0 1 5.304 0l6.848 6.849V14.5h-19zM26.5 19a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m5.018 14.5-6.634-6.634a1.25 1.25 0 0 0-1.768 0L16.482 33.5z"/>`,
  'regular': `<path d="M26.5 19a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zM8.508 12H12V8.508A3.75 3.75 0 0 0 8.508 12M14.5 8.5V12h19V8.5zm21.5.008V12h3.492A3.75 3.75 0 0 0 36 8.508m3.5 5.992H36v19h3.5zM39.492 36H36v3.492A3.75 3.75 0 0 0 39.492 36M33.5 39.5V36h-19v3.5zM12 39.492V36H8.508A3.75 3.75 0 0 0 12 39.492M8.5 33.5H12v-19H8.5zm6-1.553 6.848-6.849a3.75 3.75 0 0 1 5.304 0l6.848 6.849V14.5h-19zM31.518 33.5l-6.634-6.634a1.25 1.25 0 0 0-1.768 0L16.482 33.5z"/>`
} as const;

export default function ImageTableIcon({ 
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

  const gradientId = 'imagetableicon_gradient';
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