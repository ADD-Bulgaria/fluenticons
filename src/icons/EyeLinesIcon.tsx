import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.232 9.5C16.858 7.996 20.082 7 24 7h.001c7.693 0 12.716 3.843 15.774 7.827a24.8 24.8 0 0 1 3.23 5.635c.333.814.575 1.537.735 2.116.148.532.26 1.057.26 1.422s-.112.89-.26 1.422c-.16.579-.402 1.302-.734 2.116a24.8 24.8 0 0 1-3.23 5.635C36.716 37.157 31.693 41 24 41c-3.917 0-7.142-.996-9.768-2.5h9.77v-2h-12.62a21 21 0 0 1-2.49-2.5H24v-2h-.003a8 8 0 1 0 0-16H24v-2H8.891a21 21 0 0 1 2.492-2.5H24v-2zm3.957 9H5.9c.413-.802.904-1.647 1.48-2.5h16.617c-2.288 0-4.351.96-5.81 2.5m-1.387 2H4.98a19 19 0 0 0-.72 2.078q-.059.214-.109.422h11.91c.11-.887.366-1.728.742-2.5M16.06 25H4.15q.05.208.11.422c.157.57.394 1.28.719 2.078h11.823a8 8 0 0 1-.742-2.5m2.129 4.5a7.98 7.98 0 0 0 5.809 2.5H7.381a25 25 0 0 1-1.48-2.5z"/>`,
  'regular': `<path d="M4.977 20.5h13.545a6.5 6.5 0 0 0-.946 2.5H4.148q.05-.208.11-.422c.157-.57.394-1.28.719-2.078M4.148 25h13.428c.14.91.47 1.756.946 2.5H4.977a19 19 0 0 1-.72-2.078q-.059-.214-.109-.422m19.85-18c-3.917 0-7.142.996-9.768 2.5h9.772c6.728.001 11.078 3.317 13.789 6.85a22.3 22.3 0 0 1 2.9 5.058c.297.73.506 1.36.639 1.838a6 6 0 0 1 .169.754l-.001.005a6 6 0 0 1-.168.749 17 17 0 0 1-.64 1.838 22.3 22.3 0 0 1-2.9 5.059c-2.71 3.532-7.06 6.848-13.788 6.849H14.23c2.461 1.41 5.45 2.374 9.04 2.488q.36.012.727.012h.004c7.691-.001 12.714-3.843 15.772-7.827a24.8 24.8 0 0 0 3.23-5.635c.333-.814.575-1.537.735-2.116.147-.532.26-1.057.26-1.422s-.113-.89-.26-1.422a19 19 0 0 0-.735-2.116 24.8 24.8 0 0 0-3.23-5.635C36.716 10.843 31.694 7.001 24.002 7zM11.38 11.5h12.622V14H8.888a21 21 0 0 1 2.492-2.5m-4 4.5H24v-1a9 9 0 1 1 0 18v-1H7.378a25 25 0 0 1-1.48-2.5h14.636a6.47 6.47 0 0 0 3.464 1H24a6.5 6.5 0 1 0 0-13h-.002a6.47 6.47 0 0 0-3.464 1H5.9c.413-.802.904-1.647 1.48-2.5m1.51 18h15.113v2.5H11.38A21 21 0 0 1 8.89 34m15.109 0v2.5Z"/>`
} as const;

export default function EyeLinesIcon({ 
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

  const gradientId = 'eyelinesicon_gradient';
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