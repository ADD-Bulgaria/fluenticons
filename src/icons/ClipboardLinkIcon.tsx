import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 2h3.5a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25V14h-5a5 5 0 0 0-4 8H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2m3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M23 19a4 4 0 0 0-4-4l-.102.007A.75.75 0 0 0 19 16.5l.164.005A2.5 2.5 0 0 1 19 21.5l-.102.007A.75.75 0 0 0 19 23l.2-.005A4 4 0 0 0 23 19m-7.25-3.25A.75.75 0 0 0 15 15l-.2.005A4 4 0 0 0 15 23l.102-.007A.75.75 0 0 0 15 21.5l-.164-.005A2.5 2.5 0 0 1 15 16.5l.102-.007a.75.75 0 0 0 .648-.743m3 2.5h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0-.102-1.493"/>`,
  'regular': `<path d="M15.986 4a2.25 2.25 0 0 0-2.236-2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22H11a5 5 0 0 1-.771-1.5H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1h3.5c.778 0 1.464-.395 1.868-.996h1.884V5.5h.248a.75.75 0 0 1 .75.75V14H20V6.25A2.25 2.25 0 0 0 17.75 4zm-5.736-.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5M19 15a4 4 0 0 1 .2 7.995L19 23a.75.75 0 0 1-.102-1.493L19 21.5a2.5 2.5 0 0 0 .164-4.995L19 16.5a.75.75 0 0 1-.102-1.493zm-4 0a.75.75 0 0 1 .102 1.493L15 16.5a2.5 2.5 0 0 0-.164 4.995L15 21.5a.75.75 0 0 1 .102 1.493L15 23a4 4 0 0 1-.2-7.995zm.25 3.25h3.5a.75.75 0 0 1 .102 1.493l-.102.007h-3.5a.75.75 0 0 1-.102-1.493z"/>`
} as const;

export default function ClipboardLinkIcon({ 
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

  const gradientId = 'clipboardlinkicon_gradient';
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