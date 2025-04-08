import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 8h.5a.5.5 0 1 0 0-1H10V5.5c0-.552-.185-1.071-.513-1.503L9.5 4h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.5.507l.002.007A2.47 2.47 0 0 0 7.5 3H7v-.5A1.497 1.497 0 0 1 8.5 1h3A1.5 1.5 0 0 1 13 2.494V8.5c0 .827-.674 1.5-1.5 1.5H10zm4 .415.976 2.927a.5.5 0 0 1-.07.45H14.9a.5.5 0 0 1-.4.208h-3.251l-.325-.975-.007-.013-.006-.012h.588c1.377 0 2.5-1.122 2.5-2.5zm-4 3 .977 2.927v.001a.5.5 0 0 1-.07.45H10.9a.5.5 0 0 1-.4.208h-9a.504.504 0 0 1-.495-.425.5.5 0 0 1 .02-.234L2 11.419v.081C2 12.878 3.122 14 4.5 14h3c1.378 0 2.5-1.122 2.5-2.5zM7.5 13h-3c-.826 0-1.5-.673-1.5-1.5v-6A1.497 1.497 0 0 1 4.5 4h3A1.5 1.5 0 0 1 9 5.494V11.5c0 .827-.672 1.5-1.5 1.5M5.502 6a.5.5 0 1 0 0 1h1a.5.5 0 1 0 0-1zm0 4a.5.5 0 1 0 0 1h1a.5.5 0 1 0 0-1z"/>`,
  'regular': `<path d="M10 7h.5a.5.5 0 1 1 0 1H10zm.854-3.854a.5.5 0 0 1-.353.854H9.485A2.5 2.5 0 0 0 9 3.515V3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .354.146m3.122 5.196 1 3A.502.502 0 0 1 14.5 12h-3.255l-.325-.976-.006-.01q-.005-.005-.006-.014h2.9l-.668-2h-.232a1.5 1.5 0 0 1-1.407 1H10V9h1.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.551A2.5 2.5 0 0 0 7.5 3H7v-.5A1.5 1.5 0 0 1 8.5 1h3A1.5 1.5 0 0 1 13 2.5V8h.5a.5.5 0 0 1 .475.342M5.147 6.146A.5.5 0 0 0 5.501 7h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.354.146M6.501 11h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1m4.224 3.944a.5.5 0 0 0 .176-.152h.005a.5.5 0 0 0 .07-.45l-1-3A.5.5 0 0 0 9.5 11H9V5.5A1.5 1.5 0 0 0 7.5 4h-3A1.5 1.5 0 0 0 3 5.5V11h-.5a.5.5 0 0 0-.475.342l-1 3A.5.5 0 0 0 1.5 15h9q.119-.001.224-.056m-6.578-3.09A.5.5 0 0 1 4 11.5v-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.354-.146M8.91 12h.232l.667 2H2.194l.667-2h.232A1.5 1.5 0 0 0 4.5 13h3a1.5 1.5 0 0 0 1.408-1"/>`
} as const;

export default function ServerSurfaceMultipleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'serversurfacemultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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