import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.999 21.998c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-1-8-.083-.072a.75.75 0 0 0-.977.072l-.439.44v-3.94h5v3.941l-.512-.44-.084-.073a.75.75 0 0 0-.977 1.133l1.792 1.72.084.073a.75.75 0 0 0 .976-.073l1.72-1.72.073-.084a.75.75 0 0 0-.073-.976l-.084-.073a.75.75 0 0 0-.976.073l-.439.438v-4.69l-.007-.101a.75.75 0 0 0-.743-.649L15.23 9h-2.48V5.747l-.007-.101a.75.75 0 0 0-.744-.649l-.101.007a.75.75 0 0 0-.649.744v3.25H8.75l-.102.006A.75.75 0 0 0 8 9.748v4.691L7.56 14l-.083-.073A.75.75 0 0 0 6.5 15.06l1.719 1.72.084.073a.75.75 0 0 0 .977-.073L11 15.06l.072-.084a.75.75 0 0 0-.072-.977"/>`,
  'regular': `<path d="m11 13.998-.084-.072a.75.75 0 0 0-.977.072l-.439.44v-3.94h5v3.941l-.512-.44-.084-.073a.75.75 0 0 0-.977 1.133l1.792 1.72.084.073a.75.75 0 0 0 .976-.073l1.72-1.72.073-.084a.75.75 0 0 0-.073-.976l-.084-.073a.75.75 0 0 0-.976.073l-.439.438v-4.69l-.007-.101a.75.75 0 0 0-.743-.649L15.23 9h-2.48V5.747l-.007-.101a.75.75 0 0 0-.744-.649l-.101.007a.75.75 0 0 0-.649.744v3.25H8.75l-.102.006A.75.75 0 0 0 8 9.748v4.691L7.56 14l-.083-.073A.75.75 0 0 0 6.5 15.06l1.719 1.72.084.073a.75.75 0 0 0 .977-.073L11 15.06l.072-.084a.75.75 0 0 0-.072-.977m-9.001-2c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10m18.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"/>`
} as const;

export default function ArrowCircleDownSplitIcon({ 
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

  const gradientId = 'arrowcircledownspliticon_gradient';
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