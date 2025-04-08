import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5A6.25 6.25 0 0 0 10.25 41h27.5A6.25 6.25 0 0 0 44 34.75v-21.5A6.25 6.25 0 0 0 37.75 7zM19 9.5h18.75a3.75 3.75 0 0 1 3.75 3.75v21.5a3.75 3.75 0 0 1-3.75 3.75H19zM8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m1.25 7.75h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5"/>`,
  'regular': `<path d="M8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25M4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v21.5A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h6.25v-29zm27.5 0H19v29h18.75a3.75 3.75 0 0 0 3.75-3.75v-21.5a3.75 3.75 0 0 0-3.75-3.75"/>`
} as const;

export default function PanelLeftTextIcon({ 
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

  const gradientId = 'panellefttexticon_gradient';
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