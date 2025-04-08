import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v21A2.5 2.5 0 0 1 7.5 29h-2A2.5 2.5 0 0 1 3 26.5zm9 0A2.5 2.5 0 0 1 14.5 3h2A2.5 2.5 0 0 1 19 5.5v21a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5zm9.8 2.105c-1.295.358-2.064 1.733-1.717 3.07l4.27 16.466c.348 1.338 1.678 2.131 2.973 1.773l1.875-.52c1.294-.357 2.063-1.732 1.716-3.07L26.647 8.86c-.348-1.338-1.678-2.131-2.973-1.773z"/><path d="M3 8h7v3H3zm24.296 3.365L20.72 13.13l.753 2.904 6.576-1.764zM19 8h-7v3h7z"/>`,
  'filled': `<path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v21A2.5 2.5 0 0 1 7.5 29h-2A2.5 2.5 0 0 1 3 26.5zm9 0A2.5 2.5 0 0 1 14.5 3h2A2.5 2.5 0 0 1 19 5.5v21a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5zm9.8 2.105c-1.295.358-2.064 1.733-1.717 3.07l4.27 16.466c.348 1.338 1.678 2.131 2.973 1.773l1.875-.52c1.294-.357 2.063-1.732 1.716-3.07L26.647 8.86c-.348-1.338-1.678-2.131-2.973-1.773z"/>`,
  'regular': `<path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v21A2.5 2.5 0 0 1 7.5 29h-2A2.5 2.5 0 0 1 3 26.5zM5.5 5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-21a.5.5 0 0 0-.5-.5zm6.5.5A2.5 2.5 0 0 1 14.5 3h2A2.5 2.5 0 0 1 19 5.5v21a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5zm2.5-.5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-21a.5.5 0 0 0-.5-.5zm7.3 2.605c-1.295.358-2.064 1.733-1.717 3.07l4.27 16.466c.348 1.338 1.678 2.131 2.973 1.773l1.875-.52c1.294-.357 2.063-1.732 1.716-3.07L26.647 8.86c-.348-1.338-1.678-2.131-2.973-1.773zm.158 2.551a.503.503 0 0 1 .344-.614l1.875-.519a.484.484 0 0 1 .594.355l4.27 16.466a.503.503 0 0 1-.343.614l-1.875.519a.484.484 0 0 1-.594-.355z"/>`
} as const;

export default function LibraryIcon({ 
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

  const gradientId = 'libraryicon_gradient';
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