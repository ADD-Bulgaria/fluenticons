import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m3.5-29.42V27.5h2.25a1.25 1.25 0 1 1 0 2.5H27.5v2.75a1.25 1.25 0 1 1-2.5 0V30h-8.442c-1.235 0-1.974-1.375-1.293-2.405l9.209-13.925c.902-1.364 3.026-.726 3.026.91M25 17.406V27.5h-6.675z"/>`,
  'regular': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24 33.665 41.5 24 41.5 6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m3.5 10.58c0-1.636-2.124-2.274-3.026-.91l-9.209 13.925c-.681 1.03.058 2.405 1.293 2.405H25v2.75a1.25 1.25 0 1 0 2.5 0V30h2.25a1.25 1.25 0 1 0 0-2.5H27.5zM25 17.406V27.5h-6.675z"/>`
} as const;

export default function NumberCircle4Icon({ 
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

  const gradientId = 'numbercircle4icon_gradient';
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