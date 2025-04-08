import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20M17.116 12.334l-.914 2.586a2.1 2.1 0 0 1-1.28 1.28l-2.589.915c-1.777.63-1.777 3.143 0 3.772l2.589.915a2.1 2.1 0 0 1 1.28 1.28l.914 2.587c.628 1.777 3.142 1.778 3.771.001l.917-2.59a2.1 2.1 0 0 1 1.279-1.278l2.587-.916c1.776-.628 1.776-3.141 0-3.77l-2.587-.916a2.1 2.1 0 0 1-1.279-1.279l-.917-2.589c-.63-1.777-3.143-1.776-3.77.002m14.298 12.665c-.472-1.332-2.356-1.332-2.828.001l-.685 1.94a1.58 1.58 0 0 1-.96.96L25 28.585c-1.333.471-1.333 2.357 0 2.828l1.941.686c.449.159.802.511.96.96l.685 1.94c.472 1.333 2.356 1.334 2.828 0l.688-1.941c.159-.448.511-.8.959-.959l1.94-.686c1.332-.472 1.332-2.356 0-2.828l-1.94-.687c-.448-.158-.8-.51-.96-.959z"/>`,
  'regular': `<path d="M17.116 12.334c.628-1.778 3.142-1.779 3.771-.002l.917 2.59a2.1 2.1 0 0 0 1.279 1.278l2.587.916c1.776.629 1.776 3.142 0 3.77l-2.587.916a2.1 2.1 0 0 0-1.279 1.279l-.917 2.589c-.63 1.777-3.143 1.776-3.77-.001l-.915-2.587a2.1 2.1 0 0 0-1.28-1.28l-2.589-.915c-1.777-.629-1.777-3.143 0-3.772l2.59-.915a2.1 2.1 0 0 0 1.279-1.28zm14.298 12.665c-.472-1.332-2.356-1.332-2.828.001l-.685 1.94a1.58 1.58 0 0 1-.96.96L25 28.585c-1.333.471-1.333 2.357 0 2.828l1.941.686c.449.159.802.511.96.96l.685 1.94c.472 1.333 2.356 1.334 2.828 0l.688-1.941c.159-.448.511-.8.959-.959l1.94-.686c1.332-.472 1.332-2.356 0-2.828l-1.94-.687c-.448-.158-.8-.51-.96-.959zM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24M24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5 41.5 33.665 41.5 24 33.665 6.5 24 6.5"/>`
} as const;

export default function SparkleCircleIcon({ 
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

  const gradientId = 'sparklecircleicon_gradient';
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