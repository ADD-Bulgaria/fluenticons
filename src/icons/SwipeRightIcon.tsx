import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12a1 1 0 0 0 1 1h11.585l-1.292 1.293a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.32.083l.094-.083 3-3a1 1 0 0 0 .083-1.32l-.083-.094-3-3a1 1 0 0 0-1.497 1.32l.083.094L18.585 11H7a1 1 0 0 0-1 1m-4 0a5 5 0 0 0 9.584 2H9.872a3.5 3.5 0 1 1 0-4h1.712A5.001 5.001 0 0 0 2 12"/>`,
  'regular': `<path d="M5.997 12c0 .38.282.694.647.743l.102.007H19.44l-2.216 2.22a.75.75 0 0 0-.073.976l.073.084c.266.267.682.29.975.073l.084-.073 3.497-3.5a.75.75 0 0 0 .073-.976l-.073-.084-3.497-3.5a.749.749 0 0 0-1.132.976l.073.084 2.216 2.22H6.746a.75.75 0 0 0-.75.75M2 12c0 2.761 2.237 5 4.996 5a5 5 0 0 0 4.68-3.25h-1.651A3.499 3.499 0 0 1 3.499 12a3.499 3.499 0 0 1 6.526-1.75h1.652A5 5 0 0 0 6.996 7 5 5 0 0 0 2 12"/>`
} as const;

export default function SwipeRightIcon({ 
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

  const gradientId = 'swiperighticon_gradient';
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