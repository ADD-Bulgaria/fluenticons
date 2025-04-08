import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 8.29v1.585A5.502 5.502 0 0 0 12 20.5a5.5 5.5 0 0 0 2.21-10.538L14 9.875l.001-1.585a7 7 0 1 1-4.247.078zm0 2.678v1.796a3 3 0 1 0 4.138.132l-.137-.131v-1.797a4.5 4.5 0 1 1-4.192.1zm1.387-8.758a1 1 0 0 1 1.226 0l.094.083 3 3 .083.094a1 1 0 0 1 0 1.226l-.083.094-.094.083a1 1 0 0 1-1.226 0l-.094-.083L13 5.415V15a1 1 0 0 1-1.993.117L11 15V5.415L9.707 6.707l-.094.083A1 1 0 0 1 8.21 5.387l.083-.094 3-3z"/>`,
  'regular': `<path d="M12 16.017a.75.75 0 0 0 .743-.648l.007-.102V4.562l2.22 2.218a.75.75 0 0 0 .976.073l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-3.5-3.5a.75.75 0 0 0-.976-.073l-.084.073-3.5 3.5a.75.75 0 0 0 .976 1.133l.084-.073 2.22-2.218v10.705c0 .414.336.75.75.75m0 6a7 7 0 0 0 1.75-13.78v1.564a5.5 5.5 0 1 1-3.5 0V8.237A7 7 0 0 0 12 22.017m0-2.5a4.5 4.5 0 0 0 1.751-8.647v1.71a3 3 0 1 1-3.5 0l-.001-1.71A4.501 4.501 0 0 0 12 19.517"/>`
} as const;

export default function Component2DoubleTapSwipeUpIcon({ 
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

  const gradientId = 'component2doubletapswipeupicon_gradient';
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