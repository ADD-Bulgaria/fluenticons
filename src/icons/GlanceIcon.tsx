import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 6A4.25 4.25 0 0 0 6 10.25v11.5A4.25 4.25 0 0 0 10.25 26h7.5A4.25 4.25 0 0 0 22 21.75v-11.5A4.25 4.25 0 0 0 17.75 6zM6 34.25A4.25 4.25 0 0 1 10.25 30h7.5A4.25 4.25 0 0 1 22 34.25v3.5A4.25 4.25 0 0 1 17.75 42h-7.5A4.25 4.25 0 0 1 6 37.75zm20-24A4.25 4.25 0 0 1 30.25 6h7.5A4.25 4.25 0 0 1 42 10.25v3.5A4.25 4.25 0 0 1 37.75 18h-7.5A4.25 4.25 0 0 1 26 13.75zm0 16A4.25 4.25 0 0 1 30.25 22h7.5A4.25 4.25 0 0 1 42 26.25v11.5A4.25 4.25 0 0 1 37.75 42h-7.5A4.25 4.25 0 0 1 26 37.75z"/>`,
  'regular': `<path d="M10.25 6A4.25 4.25 0 0 0 6 10.25v11.5A4.25 4.25 0 0 0 10.25 26h7.5A4.25 4.25 0 0 0 22 21.75v-11.5A4.25 4.25 0 0 0 17.75 6zM8.5 10.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75zM10.25 30A4.25 4.25 0 0 0 6 34.25v3.5A4.25 4.25 0 0 0 10.25 42h7.5A4.25 4.25 0 0 0 22 37.75v-3.5A4.25 4.25 0 0 0 17.75 30zM8.5 34.25c0-.967.784-1.75 1.75-1.75h7.5c.966 0 1.75.783 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75zm17.5-24A4.25 4.25 0 0 1 30.25 6h7.5A4.25 4.25 0 0 1 42 10.25v3.5A4.25 4.25 0 0 1 37.75 18h-7.5A4.25 4.25 0 0 1 26 13.75zm4.25-1.75a1.75 1.75 0 0 0-1.75 1.75v3.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-3.5a1.75 1.75 0 0 0-1.75-1.75zm0 13.5A4.25 4.25 0 0 0 26 26.25v11.5A4.25 4.25 0 0 0 30.25 42h7.5A4.25 4.25 0 0 0 42 37.75v-11.5A4.25 4.25 0 0 0 37.75 22zm-1.75 4.25c0-.966.784-1.75 1.75-1.75h7.5c.967 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function GlanceIcon({ 
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

  const gradientId = 'glanceicon_gradient';
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