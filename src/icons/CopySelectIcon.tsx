import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.25 3.5A1.75 1.75 0 0 0 7.5 5.25v1a.75.75 0 0 1-1.5 0v-1A3.25 3.25 0 0 1 9.25 2h1a.75.75 0 0 1 0 1.5zM12 2.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m.75 13.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-6-8.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 6.75 8M22 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-3.25 7.75a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 1 1.5 0v1A3.25 3.25 0 0 1 18.75 18h-1a.75.75 0 0 1 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 1 22 5.25v1a.75.75 0 0 1-1.5 0zM9.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-1a.75.75 0 0 0-1.5 0v1A3.25 3.25 0 0 0 9.25 18h1a.75.75 0 0 0 0-1.5zM2 9.25a3.25 3.25 0 0 1 3-3.24V15a4 4 0 0 0 4 4h8.99a3.25 3.25 0 0 1-3.24 3h-7A5.75 5.75 0 0 1 2 16.25z"/>`,
  'regular': `<path d="M9.25 3.5A1.75 1.75 0 0 0 7.5 5.25v1a.75.75 0 0 1-1.5 0v-1A3.25 3.25 0 0 1 9.25 2h1a.75.75 0 0 1 0 1.5zM12 2.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m.75 13.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-6-8.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 6.75 8M22 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-3.25 7.75a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 1 1.5 0v1A3.25 3.25 0 0 1 18.75 18h-1a.75.75 0 0 1 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 1 22 5.25v1a.75.75 0 0 1-1.5 0zM9.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-1a.75.75 0 0 0-1.5 0v1A3.25 3.25 0 0 0 9.25 18h1a.75.75 0 0 0 0-1.5zM2 9.25a3.25 3.25 0 0 1 3-3.24v1.508A1.75 1.75 0 0 0 3.5 9.25v7a4.25 4.25 0 0 0 4.25 4.25h7a1.75 1.75 0 0 0 1.732-1.5h1.509a3.25 3.25 0 0 1-3.241 3h-7A5.75 5.75 0 0 1 2 16.25z"/>`
} as const;

export default function CopySelectIcon({ 
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

  const gradientId = 'copyselecticon_gradient';
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