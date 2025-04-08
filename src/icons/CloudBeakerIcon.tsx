import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.041 20C12.55 13.84 17.71 9 24 9c6.12 0 11.169 4.58 11.907 10.5H30.25a3.25 3.25 0 0 0-.25 6.49v4.282a3 3 0 0 1-.463 1.6L26.302 37H11.5a8.5 8.5 0 0 1 0-17zM29 22.75c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 0 1 0 2.5H40v6.274a5 5 0 0 0 .772 2.669l.982 1.557h-11.51l.984-1.56A5 5 0 0 0 32 30.272V24h-1.75c-.69 0-1.25-.56-1.25-1.25m-.018 13.75-1.514 2.4c-1.26 1.997.175 4.6 2.537 4.6h11.988c2.363 0 3.798-2.603 2.538-4.6l-1.515-2.4z"/>`,
  'regular': `<path d="M14.5 21a9.5 9.5 0 0 1 9.5-9.5c4.736 0 8.663 3.466 9.382 8h2.525C35.17 13.58 30.12 9 24 9c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17h14.802l1.577-2.5H11.5a6 6 0 0 1 0-12h1.753a1.25 1.25 0 0 0 1.25-1.279zM29 22.75c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 0 1 0 2.5H40v6.274a5 5 0 0 0 .772 2.669l.982 1.557h-11.51l.984-1.56A5 5 0 0 0 32 30.272V24h-1.75c-.69 0-1.25-.56-1.25-1.25m-.018 13.75-1.514 2.4c-1.26 1.997.175 4.6 2.537 4.6h11.988c2.363 0 3.798-2.603 2.538-4.6l-1.515-2.4z"/>`
} as const;

export default function CloudBeakerIcon({ 
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

  const gradientId = 'cloudbeakericon_gradient';
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