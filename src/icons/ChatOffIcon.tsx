import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.198 2.2A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 1.145 4.65l-1.116 4.29a.85.85 0 0 0 1.036 1.036l4.29-1.117A9.96 9.96 0 0 0 12 22c2.491 0 4.77-.911 6.52-2.418l2.2 2.198a.75.75 0 0 0 1.06-1.06zm10.14 12.26-.066.012-.102.007H8.75l-.102-.007a.75.75 0 0 1 0-1.486L8.75 13h3.19zM9.94 11H8.75l-.102-.007a.75.75 0 0 1-.161-1.445zm5.31 0h-1.068l6.3 6.3A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10a9.95 9.95 0 0 0-5.3 1.518L12.682 9.5h2.568l.102.007a.75.75 0 0 1 0 1.486z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.198 2.2A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 1.115 4.592l-1.068 3.823a1.25 1.25 0 0 0 1.54 1.54l3.826-1.067A9.96 9.96 0 0 0 12 22c2.491 0 4.77-.911 6.52-2.418l2.2 2.198a.75.75 0 0 0 1.06-1.06zm14.177 16.298A8.47 8.47 0 0 1 12 20.5a8.46 8.46 0 0 1-4.133-1.07l-.27-.15-3.986 1.111 1.113-3.984-.151-.27A8.46 8.46 0 0 1 3.5 12c0-2.077.745-3.98 1.983-5.457l3.004 3.005A.75.75 0 0 0 8.75 11h1.19l2 2H8.75l-.102.007A.75.75 0 0 0 8.75 14.5h4.498l.102-.007.07-.013zM15.255 9.5h-2.573l1.5 1.5h1.072l.102-.007a.75.75 0 0 0-.101-1.493"/><path d="M20.5 12c0 1.53-.404 2.966-1.112 4.206l1.094 1.094A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10a9.95 9.95 0 0 0-5.3 1.518l1.094 1.094A8.5 8.5 0 0 1 20.5 12"/>`
} as const;

export default function ChatOffIcon({ 
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

  const gradientId = 'chatofficon_gradient';
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