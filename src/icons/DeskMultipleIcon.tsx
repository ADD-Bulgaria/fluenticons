import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 3.5A2.25 2.25 0 0 0 4.63 5h12.62a3.25 3.25 0 0 1 3.25 3.25v8.537a.75.75 0 0 0 1.5-.037v-8.5a4.75 4.75 0 0 0-4.75-4.75zM2 8.25A2.25 2.25 0 0 1 4.25 6h13a2.25 2.25 0 0 1 2.25 2.25v11a.75.75 0 0 1-1.5 0V9.5H2zM2 11h9v6.75A2.25 2.25 0 0 1 8.75 20h-4.5A2.25 2.25 0 0 1 2 17.75zm3.25 2a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M4.629 5A2.25 2.25 0 0 1 6.75 3.5h10.5A4.75 4.75 0 0 1 22 8.25v8.5a.75.75 0 0 1-1.5.037V8.25A3.25 3.25 0 0 0 17.252 5zM2 8.25A2.25 2.25 0 0 1 4.25 6h13a2.25 2.25 0 0 1 2.25 2.25v11a.75.75 0 0 1-1.5 0V11.5h-7v6.25A2.25 2.25 0 0 1 8.75 20h-4.5A2.25 2.25 0 0 1 2 17.75zm7.5 3.25h-6v6.25c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75zm-6-1.5H18V8.25a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0-.75.75zm2.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function DeskMultipleIcon({ 
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

  const gradientId = 'deskmultipleicon_gradient';
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