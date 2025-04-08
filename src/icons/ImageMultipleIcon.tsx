import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.75 5A5.75 5.75 0 0 0 5 10.75v21.5c0 1.142.333 2.206.907 3.101l12.878-12.449a3.25 3.25 0 0 1 4.442-.071l13.847 12.55A5.73 5.73 0 0 0 38 32.25v-21.5A5.75 5.75 0 0 0 32.25 5zm24.536 32.134-13.738-12.45a.75.75 0 0 0-1.025.016L7.68 37.113c.888.562 1.94.887 3.069.887h21.5a5.7 5.7 0 0 0 3.036-.866M30 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15.25 42.5a5.74 5.74 0 0 1-4.747-2.504q.123.004.247.004h21.5A7.75 7.75 0 0 0 40 32.25v-21.5q0-.123-.004-.247A5.74 5.74 0 0 1 42.5 15.25v17c0 5.66-4.59 10.25-10.25 10.25z"/>`,
  'regular': `<path d="M10.75 5A5.75 5.75 0 0 0 5 10.75v21.5A5.75 5.75 0 0 0 10.75 38h21.5A5.75 5.75 0 0 0 38 32.25v-21.5A5.75 5.75 0 0 0 32.25 5zM7.5 10.75a3.25 3.25 0 0 1 3.25-3.25h21.5a3.25 3.25 0 0 1 3.25 3.25v21.5c0 .456-.094.89-.264 1.285L23.215 22.802a3.25 3.25 0 0 0-4.417.081L7.75 33.505a3.2 3.2 0 0 1-.25-1.255zm2.03 24.513 11-10.577a.75.75 0 0 1 1.02-.02l11.884 10.612a3.2 3.2 0 0 1-1.184.222h-21.5c-.432 0-.843-.084-1.22-.237m5.72 7.237a5.74 5.74 0 0 1-4.747-2.504q.123.004.247.004h21.5A7.75 7.75 0 0 0 40 32.25v-21.5q0-.123-.004-.247A5.74 5.74 0 0 1 42.5 15.25v17c0 5.66-4.59 10.25-10.25 10.25zM30 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`
} as const;

export default function ImageMultipleIcon({ 
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

  const gradientId = 'imagemultipleicon_gradient';
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