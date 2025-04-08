import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14 14-6.268 14-14M19.918 9.394l-6 14a1 1 0 1 1-1.838-.788l6-14a1 1 0 0 1 1.838.788m-8.26 3.859L8.519 16l3.14 2.748a1 1 0 1 1-1.316 1.505l-4-3.5a1 1 0 0 1 0-1.505l4-3.5a1 1 0 1 1 1.316 1.505m8.59 6.906a1 1 0 0 1 .093-1.412L23.482 16l-3.14-2.747a1 1 0 0 1 1.317-1.505l4 3.5a1 1 0 0 1 0 1.505l-4 3.5a1 1 0 0 1-1.41-.094"/>`,
  'regular': `<path d="M19.918 9.394a1 1 0 0 0-1.838-.788l-6 14a1 1 0 1 0 1.838.788zm-8.26 3.859a1 1 0 1 0-1.316-1.505l-4 3.5a1 1 0 0 0 0 1.505l4 3.5a1 1 0 1 0 1.316-1.505L8.519 16zm8.59 6.906a1 1 0 0 1 .093-1.412L23.482 16l-3.14-2.747a1 1 0 0 1 1.317-1.505l4 3.5a1 1 0 0 1 0 1.505l-4 3.5a1 1 0 0 1-1.41-.094M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2m12 14c0-6.627-5.373-12-12-12S4 9.373 4 16s5.373 12 12 12 12-5.373 12-12"/>`
} as const;

export default function CodeCircleIcon({ 
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

  const gradientId = 'codecircleicon_gradient';
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