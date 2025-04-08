import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M24.1 11.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2"/><path d="M24.1 11.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2"/><path d="M24.1 11.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2"/><path d="M24.1 11.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2"/><path d="M24.1 11.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2m-7.151 8.484a1 1 0 0 1-.633 1.265l-6 2a1 1 0 0 1-.632-1.898l6-2a1 1 0 0 1 1.265.633"/><path d="M16.949 19.684a1 1 0 0 1-.633 1.265l-6 2a1 1 0 0 1-.632-1.898l6-2a1 1 0 0 1 1.265.633"/><path d="M16.949 19.684a1 1 0 0 1-.633 1.265l-6 2a1 1 0 0 1-.632-1.898l6-2a1 1 0 0 1 1.265.633"/><path d="M16.949 19.684a1 1 0 0 1-.633 1.265l-6 2a1 1 0 0 1-.632-1.898l6-2a1 1 0 0 1 1.265.633"/><path d="M16.949 19.684a1 1 0 0 1-.633 1.265l-6 2a1 1 0 0 1-.632-1.898l6-2a1 1 0 0 1 1.265.633"/><path d="M7 19a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/><path d="M7 19a4 4 0 1 0 0 8 4 4 0 0 0 0-8m12-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/><path d="M19 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m6-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/><path d="M25 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>`,
  'filled': `<path d="M21 9a4 4 0 1 1 3.08 3.894l-2.372 3.162a4 4 0 1 1-6.066 5.118l-4.651 1.55Q11 22.86 11 23a4 4 0 1 1-.642-2.174l4.651-1.55a4 4 0 0 1 4.91-4.17l2.373-3.162A4 4 0 0 1 21 9"/>`,
  'regular': `<path d="M21 9a4 4 0 1 1 3.08 3.894l-2.372 3.162a4 4 0 1 1-6.066 5.118l-4.651 1.55Q11 22.86 11 23a4 4 0 1 1-.642-2.174l4.651-1.55a4 4 0 0 1 4.91-4.17l2.373-3.162A4 4 0 0 1 21 9m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-8 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 23a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>`
} as const;

export default function DataLineIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'datalineicon_gradient';
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