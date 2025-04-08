import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.25 5.5a3.5 3.5 0 1 1 7 0v1h1a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 16.25v-7.5A2.25 2.25 0 0 1 6.25 6.5h1zm5.5 0a2 2 0 1 0-4 0v1h4zm-2 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M7.628 19.5A2.25 2.25 0 0 0 9.75 21h6A4.25 4.25 0 0 0 20 16.75v-4.5a2.25 2.25 0 0 0-1.5-2.122v6.622a2.75 2.75 0 0 1-2.75 2.75z"/>`,
  'regular': `<path d="M10.75 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M7.25 5.5a3.5 3.5 0 1 1 7 0v1h1a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 16.25v-7.5A2.25 2.25 0 0 1 6.25 6.5h1zm5.5 0a2 2 0 1 0-4 0v1h4zM5.5 8.75v7.5c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75M9.75 21a2.25 2.25 0 0 1-2.122-1.5h8.122a2.75 2.75 0 0 0 2.75-2.75v-6.622A2.25 2.25 0 0 1 20 12.25v4.5A4.25 4.25 0 0 1 15.75 21z"/>`
} as const;

export default function LockMultipleIcon({ 
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

  const gradientId = 'lockmultipleicon_gradient';
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