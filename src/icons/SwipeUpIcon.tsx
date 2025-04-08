import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 18a1 1 0 0 0 1-1V5.415l1.293 1.292a1 1 0 0 0 1.32.083l.094-.083a1 1 0 0 0 .083-1.32l-.083-.094-3-3a1 1 0 0 0-1.32-.083l-.094.083-3 3a1 1 0 0 0 1.32 1.497l.094-.083L11 5.415V17a1 1 0 0 0 1 1m0 4a5 5 0 0 0 2-9.584v1.712a3.5 3.5 0 1 1-4 0v-1.712A5.001 5.001 0 0 0 12 22"/>`,
  'regular': `<path d="M12 18.003a.75.75 0 0 0 .743-.647l.007-.102V4.56l2.22 2.216a.75.75 0 0 0 .976.073l.084-.073a.75.75 0 0 0 .073-.975l-.073-.084-3.5-3.498a.75.75 0 0 0-.976-.072l-.084.072-3.5 3.498a.749.749 0 0 0 .976 1.132l.084-.073 2.22-2.216v12.694c0 .414.336.75.75.75M12 22c2.761 0 5-2.237 5-4.996a5 5 0 0 0-3.25-4.68v1.651A3.499 3.499 0 0 1 12 20.501a3.499 3.499 0 0 1-1.75-6.526v-1.652A5 5 0 0 0 7 17.004 5 5 0 0 0 12 22"/>`
} as const;

export default function SwipeUpIcon({ 
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

  const gradientId = 'swipeupicon_gradient';
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