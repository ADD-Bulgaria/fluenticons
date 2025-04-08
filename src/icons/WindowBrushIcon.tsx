import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h2.768a1.75 1.75 0 0 1 .508-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v3.879a2.24 2.24 0 0 1 1.5-.365V6.25A3.25 3.25 0 0 0 17.75 3zm15.384 12.134a1.25 1.25 0 0 0-1.768-1.768l-2.875 2.875a3.25 3.25 0 0 0-3.54.706A3.2 3.2 0 0 0 12.763 18c-.06.14-.102.252-.14.35-.06.156-.107.278-.188.429-.184.341-.54.795-1.921 1.255a.75.75 0 0 0-.306 1.229c.979 1.029 2.413 1.615 3.835 1.7 1.425.085 2.93-.328 4.008-1.422a3.25 3.25 0 0 0 .707-3.53zm-7.121 2.874a1.75 1.75 0 1 1 2.474 2.475l-.004.004c-.708.72-1.755 1.044-2.851.979a4.6 4.6 0 0 1-1.9-.532c.79-.424 1.232-.904 1.523-1.445.123-.23.23-.5.31-.705q.045-.117.078-.196c.097-.23.198-.408.37-.58"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h2.768a1.75 1.75 0 0 1 .508-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v3.879a2.24 2.24 0 0 1 1.5-.365V6.25A3.25 3.25 0 0 0 17.75 3zM19.5 7h-15v-.75c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75zm2.134 8.134a1.25 1.25 0 0 0-1.768-1.768l-2.875 2.875a3.25 3.25 0 0 0-3.54.706A3.2 3.2 0 0 0 12.763 18c-.06.14-.102.252-.14.35-.06.156-.107.278-.188.429-.184.341-.54.795-1.921 1.255a.75.75 0 0 0-.306 1.229c.979 1.029 2.413 1.615 3.835 1.7 1.425.085 2.93-.328 4.008-1.422a3.25 3.25 0 0 0 .707-3.53zm-7.121 2.874a1.75 1.75 0 1 1 2.474 2.475l-.004.004c-.708.72-1.755 1.044-2.851.979a4.6 4.6 0 0 1-1.9-.532c.79-.424 1.232-.904 1.523-1.445.123-.23.23-.5.31-.705q.045-.117.078-.196c.097-.23.198-.408.37-.58"/>`
} as const;

export default function WindowBrushIcon({ 
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

  const gradientId = 'windowbrushicon_gradient';
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