import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75z"/><path d="m40.835 39.385-14.36-14.36a3.5 3.5 0 0 0-4.95 0l-14.36 14.36A6.24 6.24 0 0 0 12.25 42h23.5a6.24 6.24 0 0 0 5.085-2.615M27 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/>`,
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5c0 1.356.432 2.61 1.165 3.635l14.36-14.36a3.5 3.5 0 0 1 4.95 0l14.36 14.36A6.22 6.22 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM34.5 17.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m4.502 23.588L24.707 26.793a1 1 0 0 0-1.414 0L8.998 41.088A6.2 6.2 0 0 0 12.25 42h23.5a6.2 6.2 0 0 0 3.252-.912"/>`,
  'regular': `<path d="M26 17.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v23.5c0 .663.172 1.286.474 1.826l12.551-12.55a3.5 3.5 0 0 1 4.95 0l12.551 12.55a3.73 3.73 0 0 0 .474-1.826v-23.5a3.75 3.75 0 0 0-3.75-3.75zm24.896 30.732-12.439-12.44a1 1 0 0 0-1.414 0l-12.439 12.44c.432.173.903.268 1.396.268h23.5c.493 0 .964-.095 1.396-.268"/>`
} as const;

export default function ImageIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'imageicon_gradient';
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