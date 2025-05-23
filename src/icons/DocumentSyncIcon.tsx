import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3h-8.843A9 9 0 0 0 5 15.204V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M17 23a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-2.75 0h-3a.75.75 0 0 1 0-1.5h.849a3 3 0 0 0-4.4-.899c-.23.172-.534.231-.79.104-.493-.247-.635-.89-.204-1.232a4.5 4.5 0 0 1 6.795 1.463V19.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75m-2.174 2.576c.335.335.338.886-.054 1.151A4.5 4.5 0 0 1 5.5 25.063v1.187a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.849a3 3 0 0 0 4.22 1.024c.3-.192.704-.2.955.052"/>`,
  'regular': `<path d="M8 2a3 3 0 0 0-3 3v10.204a9 9 0 0 1 2-.852V5a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1h-7.015a9 9 0 0 1-1.828 2H24a3 3 0 0 0 3-3V10.828a3 3 0 0 0-.879-2.12l-5.828-5.83A3 3 0 0 0 18.172 2zm16.586 8H20a1 1 0 0 1-1-1V4.414zM17 23a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-2.75 0h-3a.75.75 0 0 1 0-1.5h.849a3 3 0 0 0-4.4-.899c-.23.172-.534.231-.79.104-.493-.247-.635-.89-.204-1.232a4.5 4.5 0 0 1 6.795 1.463V19.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75m-2.174 2.576c.335.335.338.886-.054 1.151A4.5 4.5 0 0 1 5.5 25.063v1.187a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.849a3 3 0 0 0 4.22 1.024c.3-.192.704-.2.955.052"/>`
} as const;

export default function DocumentSyncIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'documentsyncicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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