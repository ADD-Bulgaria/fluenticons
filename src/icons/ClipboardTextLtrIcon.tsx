import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.83 4h1.67A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2h6c1.306 0 2.418.835 2.83 2M19 4h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2m-8 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 6a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1m1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M11 12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM21.83 4A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h15a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 23.5 4zM12 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M7 7.5A1.5 1.5 0 0 1 8.5 6h1.67A3 3 0 0 0 13 8h6a3 3 0 0 0 2.83-2h1.67A1.5 1.5 0 0 1 25 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 7 26.5z"/>`
} as const;

export default function ClipboardTextLtrIcon({ 
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

  const gradientId = 'clipboardtextltricon_gradient';
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