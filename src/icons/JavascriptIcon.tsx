import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25m9 3.25a.75.75 0 0 1 .75.75v6A1.75 1.75 0 0 1 11 18H9.75a.75.75 0 0 1 0-1.5H11a.25.25 0 0 0 .25-.25v-6A.75.75 0 0 1 12 9.5m2 1.75c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 16.25 18h-1.5a.75.75 0 0 1 0-1.5h1.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-.5A1.75 1.75 0 0 1 14 12.75z"/>`,
  'regular': `<path d="M14 11.25c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 16.25 18h-1.5a.75.75 0 0 1 0-1.5h1.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-.5A1.75 1.75 0 0 1 14 12.75zm-1.25-1a.75.75 0 0 0-1.5 0v6a.25.25 0 0 1-.25.25H9.75a.75.75 0 0 0 0 1.5H11a1.75 1.75 0 0 0 1.75-1.75zM3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25M6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75"/>`
} as const;

export default function JavascriptIcon({ 
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

  const gradientId = 'javascripticon_gradient';
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