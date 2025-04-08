import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-.5 6c1.749 0 3.336-.69 4.504-1.814l.003 5.064a2.25 2.25 0 0 1-2.248 2.25H18v1.25A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75v-1.251l-1.75.001A2.25 2.25 0 0 1 2 16.25v-5.996a3.25 3.25 0 0 1 3.25-3.25l.749-.001L6 6.25A2.25 2.25 0 0 1 8.25 4h3.248a6.5 6.5 0 0 0-.422 1.5H8.25a.75.75 0 0 0-.75.75l-.001.753h3.52A6.5 6.5 0 0 0 17.5 13m-1 2.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75z"/>`,
  'regular': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm2.507 9.251-.002-3.986a6.5 6.5 0 0 0 1.5-1.079l.002 5.064a2.25 2.25 0 0 1-2.248 2.25H18v1.25A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V18.5H4.25A2.25 2.25 0 0 1 2 16.25v-5.996a3.25 3.25 0 0 1 3.25-3.25l.749-.001L6 6.25A2.25 2.25 0 0 1 8.25 4h3.248a6.5 6.5 0 0 0-.422 1.5H8.25a.75.75 0 0 0-.75.75l-.001.753h3.52q.061.782.296 1.5H5.25a1.75 1.75 0 0 0-1.75 1.75v5.997c0 .414.336.75.75.75H6v-1.75A2.25 2.25 0 0 1 8.25 13h7.5A2.25 2.25 0 0 1 18 15.25V17h1.783a.75.75 0 0 0 .724-.749M16.5 15.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75z"/>`
} as const;

export default function PrintAddIcon({ 
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

  const gradientId = 'printaddicon_gradient';
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