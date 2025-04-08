import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 12.25A4.25 4.25 0 0 1 8.25 8h21.5A4.25 4.25 0 0 1 34 12.25v13.5A4.25 4.25 0 0 1 29.75 30H8.25A4.25 4.25 0 0 1 4 25.75zM9.375 32.5a4.25 4.25 0 0 0 3.874 2.5h16.5A9.25 9.25 0 0 0 39 25.75v-8.5a4.25 4.25 0 0 0-2.5-3.874V25.75a6.75 6.75 0 0 1-6.75 6.75zm5 5a4.25 4.25 0 0 0 3.874 2.5h11.5C37.62 40 44 33.62 44 25.75v-3.5a4.25 4.25 0 0 0-2.5-3.874v7.374c0 6.49-5.26 11.75-11.75 11.75z"/>`,
  'regular': `<path d="M8.25 8A4.25 4.25 0 0 0 4 12.25v13.5A4.25 4.25 0 0 0 8.25 30h21.5A4.25 4.25 0 0 0 34 25.75v-13.5A4.25 4.25 0 0 0 29.75 8zM6.5 12.25c0-.966.784-1.75 1.75-1.75h21.5c.966 0 1.75.784 1.75 1.75v13.5a1.75 1.75 0 0 1-1.75 1.75H8.25a1.75 1.75 0 0 1-1.75-1.75zM13.25 35a4.25 4.25 0 0 1-3.874-2.5H29.75a6.75 6.75 0 0 0 6.75-6.75V13.376A4.25 4.25 0 0 1 39 17.25v8.5A9.25 9.25 0 0 1 29.75 35zm5 5a4.25 4.25 0 0 1-3.874-2.5H29.75c6.49 0 11.75-5.26 11.75-11.75v-7.374A4.25 4.25 0 0 1 44 22.25v3.5C44 33.62 37.62 40 29.75 40z"/>`
} as const;

export default function StackIcon({ 
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

  const gradientId = 'stackicon_gradient';
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