import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M36 4a1.5 1.5 0 0 1 1.5 1.5v4.75h5a1.5 1.5 0 0 1 0 3h-5v5.25a1.5 1.5 0 0 1-3 0v-5.25h-5a1.5 1.5 0 0 1 0-3h5V5.5A1.5 1.5 0 0 1 36 4M6 10.25A4.25 4.25 0 0 1 10.25 6h11a4.25 4.25 0 0 1 4.25 4.25V22.5h12.25A4.25 4.25 0 0 1 42 26.75v11A4.25 4.25 0 0 1 37.75 42h-27.5A4.25 4.25 0 0 1 6 37.75zM22.5 22.5V10.25c0-.69-.56-1.25-1.25-1.25h-11C9.56 9 9 9.56 9 10.25V22.5zM9 25.5v12.25c0 .69.56 1.25 1.25 1.25H22.5V25.5zM25.5 39h12.25c.69 0 1.25-.56 1.25-1.25v-11c0-.69-.56-1.25-1.25-1.25H25.5z"/>`,
  'regular': `<path d="M35.75 4.5c.69 0 1.25.56 1.25 1.25V11h5.25a1.25 1.25 0 1 1 0 2.5H37v5.25a1.25 1.25 0 1 1-2.5 0V13.5h-5.25a1.25 1.25 0 1 1 0-2.5h5.25V5.75c0-.69.56-1.25 1.25-1.25M6 10.25A4.25 4.25 0 0 1 10.25 6H21a4.25 4.25 0 0 1 4.25 4.25v12.5h12.5A4.25 4.25 0 0 1 42 27v10.75A4.25 4.25 0 0 1 37.75 42h-27.5A4.25 4.25 0 0 1 6 37.75zm16.75 12.5v-12.5A1.75 1.75 0 0 0 21 8.5H10.25a1.75 1.75 0 0 0-1.75 1.75v12.5zM8.5 25.25v12.5c0 .967.784 1.75 1.75 1.75h12.5V25.25zM25.25 39.5h12.5a1.75 1.75 0 0 0 1.75-1.75V27a1.75 1.75 0 0 0-1.75-1.75h-12.5z"/>`
} as const;

export default function AppsAddInIcon({ 
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

  const gradientId = 'appsaddinicon_gradient';
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