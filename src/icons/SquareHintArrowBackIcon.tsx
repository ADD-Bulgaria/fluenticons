import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM3 10.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm4.5 5.5a.75.75 0 0 1 .75-.75h.84A5.5 5.5 0 0 0 9.6 17H8.25a.75.75 0 0 1-.75-.75m8-7.16a5.5 5.5 0 0 1 1.5.51V8.25a.75.75 0 0 0-1.5 0zM6 3.75A.75.75 0 0 0 5.25 3 2.25 2.25 0 0 0 3 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75.75.75 0 0 0 .75-.75M5.25 17a.75.75 0 0 0 0-1.5.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0A2.25 2.25 0 0 0 5.25 17M14 3.75a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 17 5.25a.75.75 0 0 1-1.5 0 .75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75M14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m-.896-6.396-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708"/>`,
  'regular': `<path d="M6 3.5a.5.5 0 0 0-.5-.5A2.5 2.5 0 0 0 3 5.5a.5.5 0 0 0 1 0A1.5 1.5 0 0 1 5.5 4a.5.5 0 0 0 .5-.5M16.5 6a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 0 14.5 3a.5.5 0 0 0 0 1A1.5 1.5 0 0 1 16 5.5a.5.5 0 0 0 .5.5m-13 8a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5a.5.5 0 0 0-.5-.5M3 9a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zm13.5-1.5a.5.5 0 0 0-.5.5v1.207q.524.149 1 .393V8a.5.5 0 0 0-.5-.5M9.6 17a5.5 5.5 0 0 1-.393-1H8a.5.5 0 0 0 0 1zM8.5 3.5A.5.5 0 0 1 9 3h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m6 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m-.896-6.396-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708"/>`
} as const;

export default function SquareHintArrowBackIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'squarehintarrowbackicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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