import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v7.337A3.251 3.251 0 0 0 36.25 35h-4.5a3.251 3.251 0 0 0-5.298-3.548l-4.5 4.5a3.25 3.25 0 0 0 0 4.596L25.404 44H9.25C8.56 44 8 43.44 8 42.75zM18 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m5.634 4.634a1.25 1.25 0 0 0-1.768-1.768l-4.5 4.5a1.25 1.25 0 0 0 0 1.768l4.5 4.5a1.25 1.25 0 0 0 1.768-1.768L27.268 39.5h13.464l-2.366 2.366a1.25 1.25 0 0 0 1.768 1.768l4.5-4.5a1.25 1.25 0 0 0 0-1.768l-4.5-4.5a1.25 1.25 0 0 0-1.768 1.768L40.732 37H27.268z"/>`,
  'regular': `<path d="M12.25 6.5a1.75 1.75 0 0 0-1.75 1.75V41.5h12.404l2.5 2.5H9.25C8.56 44 8 43.44 8 42.75V8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v7.337a3.25 3.25 0 0 0-2.5.424V23.25a1.75 1.75 0 0 0-1.75-1.75h-5c-.69 0-1.25-.56-1.25-1.25v-12a1.75 1.75 0 0 0-1.75-1.75zM18 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m5.634 4.634a1.25 1.25 0 0 0-1.768-1.768l-4.5 4.5a1.25 1.25 0 0 0 0 1.768l4.5 4.5a1.25 1.25 0 0 0 1.768-1.768L27.268 39.5h13.464l-2.366 2.366a1.25 1.25 0 0 0 1.768 1.768l4.5-4.5a1.25 1.25 0 0 0 0-1.768l-4.5-4.5a1.25 1.25 0 0 0-1.768 1.768L40.732 37H27.268z"/>`
} as const;

export default function BuildingSwapIcon({ 
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

  const gradientId = 'buildingswapicon_gradient';
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