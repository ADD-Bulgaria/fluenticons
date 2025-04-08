import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.207 2.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L16.5 5.414V17a1 1 0 1 0 2 0V5.414l1.293 1.293a1 1 0 1 0 1.414-1.414zM12.5 17a5 5 0 0 1 3-4.584v2.348a3 3 0 1 0 4 0v-2.348a5.001 5.001 0 0 1-2 9.584 5 5 0 0 1-5-5m-8-4.584A5.001 5.001 0 0 0 6.5 22a5 5 0 0 0 2-9.584v2.348a3 3 0 1 1-4 0zM7.207 2.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L5.5 5.414V17a1 1 0 1 0 2 0V5.414l1.293 1.293a1 1 0 0 0 1.414-1.414z"/>`,
  'regular': `<path d="M6.75 18a.75.75 0 0 0 .743-.648l.007-.102V4.561l2.22 2.22a.75.75 0 0 0 .976.072l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-3.5-3.5a.75.75 0 0 0-.976-.073l-.084.073-3.5 3.5a.75.75 0 0 0 .976 1.133l.084-.073L6 4.561V17.25c0 .414.336.75.75.75m10.498 0a.75.75 0 0 0 .743-.648l.007-.102V4.561l2.22 2.22a.75.75 0 0 0 .976.072l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-3.5-3.5a.75.75 0 0 0-.976-.073l-.085.073-3.5 3.5a.75.75 0 0 0 .977 1.133l.084-.073 2.22-2.219V17.25c0 .414.335.75.75.75M6.75 22a4.75 4.75 0 0 0 1.751-9.167v1.679a3.25 3.25 0 1 1-3.502 0v-1.68A4.752 4.752 0 0 0 6.75 22m10.498 0a4.75 4.75 0 0 0 1.75-9.167L19 14.512a3.25 3.25 0 1 1-3.502 0v-1.68A4.752 4.752 0 0 0 17.248 22"/>`
} as const;

export default function DoubleSwipeUpIcon({ 
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

  const gradientId = 'doubleswipeupicon_gradient';
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