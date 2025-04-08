import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5.25A3.25 3.25 0 0 1 7.25 2h5.464a3.25 3.25 0 0 1 2.299.952l4.035 4.035c.61.61.952 1.437.952 2.299v9.464A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75zM7.75 14H12v-3.25H9.25a1.5 1.5 0 0 0-1.5 1.5zm0 1.5v1.25a1.5 1.5 0 0 0 1.5 1.5H12V15.5zm5.75 2.75h1.25a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5H13.5z"/>`,
  'regular': `<path d="M9.75 10A2.75 2.75 0 0 0 7 12.75v3.5A2.75 2.75 0 0 0 9.75 19h4.5A2.75 2.75 0 0 0 17 16.25v-3.5A2.75 2.75 0 0 0 14.25 10zM8.5 12.75c0-.69.56-1.25 1.25-1.25H12V14H8.5zm0 2.75H12v2H9.75c-.69 0-1.25-.56-1.25-1.25zm5 2v-6h.75c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25zM7.25 2A3.25 3.25 0 0 0 4 5.25v13.5A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75V9.286a3.25 3.25 0 0 0-.952-2.299l-4.035-4.035A3.25 3.25 0 0 0 12.714 2zM5.5 5.25c0-.966.784-1.75 1.75-1.75h5.464c.465 0 .91.184 1.238.513l4.035 4.035c.329.328.513.773.513 1.238v9.464a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function SimIcon({ 
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

  const gradientId = 'simicon_gradient';
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