import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.409.41C2.239 4.093 2 4.643 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.007a.75.75 0 0 0-.102-1.493h-1.751v-2.498h1.442l3.778 3.779a.75.75 0 0 0 1.061-1.061zM22 15.752c0 .83-.45 1.556-1.12 1.946L6.182 3h13.567a2.25 2.25 0 0 1 2.245 2.096l.005.154zm-8.001 2.25L14 20.5h-4l-.001-2.498z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.409.41C2.239 4.093 2 4.643 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.007a.75.75 0 0 0-.102-1.493h-1.751v-2.498h1.442l3.778 3.779a.75.75 0 0 0 1.061-1.061zm12.16 14.282H4.25l-.102-.007a.75.75 0 0 1-.648-.743V5.25l.007-.102a.75.75 0 0 1 .183-.397zm4.309 0h-.066l1.196 1.196A2.25 2.25 0 0 0 22 15.752V5.25l-.005-.154A2.25 2.25 0 0 0 19.749 3H6.182l1.5 1.5h12.067l.102.006a.75.75 0 0 1 .648.744v10.502l-.007.102a.75.75 0 0 1-.743.648m-5.751 1.5.001 2.498h-4l-.001-2.498z"/>`
} as const;

export default function DesktopOffIcon({ 
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

  const gradientId = 'desktopofficon_gradient';
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