import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 8.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v1.75h-11zm0 3.25v3.25c0 .138.112.25.25.25H9V12zm10.75 3.5H10.5V12h7v3.25a.25.25 0 0 1-.25.25M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zM6.75 7A1.75 1.75 0 0 0 5 8.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 15.25v-6.5A1.75 1.75 0 0 0 17.25 7z"/>`,
  'regular': `<path d="M6.75 7A1.75 1.75 0 0 0 5 8.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 15.25v-6.5A1.75 1.75 0 0 0 17.25 7zM6.5 8.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v1.75h-11zm4 3.25h7v3.25a.25.25 0 0 1-.25.25H10.5zM9 12v3.5H6.75a.25.25 0 0 1-.25-.25V12zM4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4zM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25z"/>`
} as const;

export default function SlideLayoutIcon({ 
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

  const gradientId = 'slidelayouticon_gradient';
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