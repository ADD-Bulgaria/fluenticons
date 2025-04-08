import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zm5.75-.25A2.25 2.25 0 0 0 6.5 8.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 1 8.75 8h3a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 1.5 0v-3a2.25 2.25 0 0 0-2.25-2.25zM8 16.25a.75.75 0 0 0-1.5 0v3a2.25 2.25 0 0 0 2.25 2.25h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 1-.75-.75zm13.5 0a.75.75 0 0 0-1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 0 0 1.5h3a2.25 2.25 0 0 0 2.25-2.25z"/>`,
  'regular': `<path d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25zm4.25-.25A2.25 2.25 0 0 0 6.5 8.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 1 8.75 8h3a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 1.5 0v-3a2.25 2.25 0 0 0-2.25-2.25zM8 16.25a.75.75 0 0 0-1.5 0v3a2.25 2.25 0 0 0 2.25 2.25h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 1-.75-.75zm13.5 0a.75.75 0 0 0-1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 0 0 1.5h3a2.25 2.25 0 0 0 2.25-2.25z"/>`
} as const;

export default function ScreenshotIcon({ 
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

  const gradientId = 'screenshoticon_gradient';
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