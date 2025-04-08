import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m29.927 31.695 11.94 11.939a1.25 1.25 0 0 0 1.767-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L22.5 24.268v7.61l-7.94-7.939a1.5 1.5 0 0 0-2.12 2.122l10.5 10.5a1.5 1.5 0 0 0 2.12 0zm-2.122-2.122L25.5 31.88v-4.611zm7.756-3.512-2.452 2.452-2.122-2.122 2.452-2.452a1.5 1.5 0 0 1 2.122 2.122M25.5 6.5v14.404l-3-3V6.5a1.5 1.5 0 0 1 3 0M10.5 40a1.5 1.5 0 0 0 0 3h27a1.5 1.5 0 0 0 0-3z"/>`,
  'regular': `<path d="m29.875 31.643 11.991 11.99a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L22.75 24.518v8.214l-8.366-8.366a1.25 1.25 0 0 0-1.768 1.768l10.5 10.5a1.25 1.25 0 0 0 1.768 0zm-1.768-1.768-2.857 2.857v-5.714zm7.277-3.741-2.327 2.327-1.768-1.768 2.327-2.327a1.25 1.25 0 0 1 1.768 1.768M25.25 6.25v14.404l-2.5-2.5V6.25a1.25 1.25 0 1 1 2.5 0m-14 34.25a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function ArrowDownloadOffIcon({ 
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

  const gradientId = 'arrowdownloadofficon_gradient';
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