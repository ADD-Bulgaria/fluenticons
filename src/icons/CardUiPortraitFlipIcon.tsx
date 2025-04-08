import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75V10h-.75a1.75 1.75 0 0 0-1.142 3.076C16.738 13.83 14.754 14.5 12 14.5s-4.738-.67-6.108-1.424A1.75 1.75 0 0 0 4.75 10H4zM12 18c3.501 0 6.124-.897 8-1.972v3.222A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25v-3.222C5.876 17.103 8.499 18 12 18M8.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM8 10.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75M1.75 11a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-1.031c.318.287.695.593 1.136.898C5.379 15.823 8.089 17 12 17s6.621-1.177 8.364-2.383c.44-.305.818-.61 1.136-.898v1.031a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h1.36c-.296.276-.66.58-1.1.883C18.005 14.427 15.59 15.5 12 15.5s-6.004-1.073-7.51-2.117a10 10 0 0 1-1.1-.883h1.36a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75V10h-.75c-.268 0-.523.06-.75.168V4.75c0-.69-.56-1.25-1.25-1.25H6.75c-.69 0-1.25.56-1.25 1.25v5.418A1.74 1.74 0 0 0 4.75 10H4zm14.5 12.02c.545-.23 1.045-.481 1.5-.742v3.222A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25v-3.222c.455.26.955.512 1.5.741v2.481c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25zM1.75 11a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-1.031c.318.287.695.593 1.136.898C5.379 15.823 8.089 17 12 17s6.621-1.177 8.364-2.383c.44-.305.818-.61 1.136-.898v1.031a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h1.36c-.296.276-.66.58-1.1.883C18.005 14.427 15.59 15.5 12 15.5s-6.004-1.073-7.51-2.117a10 10 0 0 1-1.1-.883h1.36a.75.75 0 0 0 0-1.5zM8 6.75A.75.75 0 0 1 8.75 6h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 6.75M8.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function CardUiPortraitFlipIcon({ 
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

  const gradientId = 'carduiportraitflipicon_gradient';
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