import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 16.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M9.25 16a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M4 5.25A3.25 3.25 0 0 1 7.25 2h9.5A3.25 3.25 0 0 1 20 5.25v13.5A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75zm8.75.5a.75.75 0 0 0-1.5 0v.75H9A.75.75 0 0 0 9 8h2.25v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1.5h-2a2.25 2.25 0 1 0 2.122 1.5h1.256a2.25 2.25 0 1 0 2.122-1.5h-2V13h3.5a.75.75 0 0 0 0-1.5h-3.5v-1h3.5a.75.75 0 0 0 0-1.5h-3.5V8H15a.75.75 0 0 0 0-1.5h-2.25z"/>`,
  'regular': `<path d="M12.75 5.75a.75.75 0 0 0-1.5 0v.75H9A.75.75 0 0 0 9 8h2.25v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1.5h-2a2.25 2.25 0 1 0 2.122 1.5h1.256a2.25 2.25 0 1 0 2.122-1.5h-2V13h3.5a.75.75 0 0 0 0-1.5h-3.5v-1h3.5a.75.75 0 0 0 0-1.5h-3.5V8H15a.75.75 0 0 0 0-1.5h-2.25zm2 10.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-6.25.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M7.25 2A3.25 3.25 0 0 0 4 5.25v13.5A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75V5.25A3.25 3.25 0 0 0 16.75 2zM5.5 5.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v13.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function XrayIcon({ 
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

  const gradientId = 'xrayicon_gradient';
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