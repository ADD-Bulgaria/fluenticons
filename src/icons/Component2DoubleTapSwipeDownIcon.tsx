import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 15.71v-1.585A5.502 5.502 0 0 1 12 3.5a5.5 5.5 0 0 1 2.21 10.538l-.21.087.001 1.585a7 7 0 1 0-4.247-.078zm0-2.678v-1.796a3 3 0 1 1 4.138-.132l-.137.131v1.797a4.5 4.5 0 1 0-4.192-.1zm1.387 8.758a1 1 0 0 0 1.226 0l.094-.083 3-3 .083-.094a1 1 0 0 0 0-1.226l-.083-.094-.094-.083a1 1 0 0 0-1.226 0l-.094.083L13 18.585V9a1 1 0 0 0-1.993-.117L11 9v9.585l-1.293-1.292-.094-.083a1 1 0 0 0-1.403 1.403l.083.094 3 3z"/>`,
  'regular': `<path d="M12 8a.75.75 0 0 1 .743.648l.007.102v10.705l2.22-2.218a.75.75 0 0 1 .976-.073l.084.072a.75.75 0 0 1 .073.977l-.073.084-3.5 3.5a.75.75 0 0 1-.976.073l-.084-.073-3.5-3.5a.75.75 0 0 1 .976-1.133l.084.072 2.22 2.219V8.75A.75.75 0 0 1 12 8m0-6a7 7 0 0 1 1.75 13.78v-1.564a5.5 5.5 0 1 0-3.5 0v1.563A7 7 0 0 1 12 2m0 2.5a4.5 4.5 0 0 1 1.751 8.647v-1.71a3 3 0 1 0-3.5 0l-.001 1.71A4.501 4.501 0 0 1 12 4.5"/>`
} as const;

export default function Component2DoubleTapSwipeDownIcon({ 
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

  const gradientId = 'component2doubletapswipedownicon_gradient';
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