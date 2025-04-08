import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.25 3H6.75C4.72 3 3 4.712 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75C25 4.712 23.28 3 21.25 3M6.75 23.5a2.25 2.25 0 0 1-2.25-2.25V9.5h19v11.75a2.25 2.25 0 0 1-2.25 2.25zm0-11a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 3.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm11 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6.75 19a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M21.25 3H6.75A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3M4.5 21.25V9.5h19v11.75a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25m19-14.5V8h-19V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25M6.75 12.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 3.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm11 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6.75 19a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function WindowTextIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'windowtexticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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