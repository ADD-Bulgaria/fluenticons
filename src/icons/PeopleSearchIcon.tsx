import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.91 14h7.843a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 20.696 20C19.13 21.345 16.89 22.002 14 22.002h-.179a1.75 1.75 0 0 0-.221-1.897l-.111-.121-2.23-2.224a5.48 5.48 0 0 0 .65-3.76M6.5 10.5a4.5 4.5 0 0 1 3.46 7.377l2.823 2.814a.75.75 0 0 1-.975 1.134l-.085-.072-2.903-2.896A4.5 4.5 0 1 1 6.5 10.5m0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M14 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/>`,
  'regular': `<path d="m11.91 13.999 7.843.001a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 20.696 20C19.13 21.345 16.89 22.002 14 22.002h-.179a1.76 1.76 0 0 0 .026-1.502l.153.002c2.56 0 4.458-.556 5.719-1.639a2.25 2.25 0 0 0 .784-1.707v-.905a.75.75 0 0 0-.75-.75h-7.776A5.6 5.6 0 0 0 11.91 14M6.5 10.5a4.5 4.5 0 0 1 3.46 7.377l2.823 2.814a.75.75 0 0 1-.975 1.134l-.085-.072-2.903-2.896A4.5 4.5 0 1 1 6.5 10.5m0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M14 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"/>`
} as const;

export default function PeopleSearchIcon({ 
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

  const gradientId = 'peoplesearchicon_gradient';
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