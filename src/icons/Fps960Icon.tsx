
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.75 15a2.25 2.25 0 0 1 .154 4.495l-.154.005H11v1.75a.75.75 0 0 1-.648.743L10.25 22a.75.75 0 0 1-.743-.648L9.5 21.25v-5.5a.75.75 0 0 1 .648-.743L10.25 15zM18 15a2 2 0 0 1 2 2 .75.75 0 0 1-1.493.102L18.5 17a.5.5 0 0 0-.41-.492L18 16.5h-.625a.625.625 0 0 0-.092 1.243l.092.007h.5a2.125 2.125 0 0 1 .152 4.245l-.152.005h-.625a2 2 0 0 1-2-2 .75.75 0 0 1 1.493-.102l.007.102a.5.5 0 0 0 .41.492l.09.008h.625a.625.625 0 0 0 .092-1.243l-.092-.007h-.5a2.125 2.125 0 0 1-.152-4.245l.152-.005zM7.75 15a.75.75 0 0 1 .102 1.493l-.102.007H5.5v1.502h1.75a.75.75 0 0 1 .102 1.494l-.102.007H5.5v1.728a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L4 21.231V15.75a.75.75 0 0 1 .648-.743L4.75 15zm4 1.5H11V18h.75a.75.75 0 0 0 .102-1.493zM5 3a3 3 0 0 1 3 3l-.002.105.002.05V10a3 3 0 0 1-2.824 2.995L5 13h-.249A2.75 2.75 0 0 1 2 10.249a1 1 0 0 1 1.993-.117l.007.117c0 .38.283.694.65.744l.1.007H5a1 1 0 0 0 .993-.883L6 10V8.83A3 3 0 1 1 5 3m7.251 0a2.75 2.75 0 0 1 2.752 2.751 1 1 0 0 1-1.994.117l-.006-.117a.75.75 0 0 0-.65-.744L12.251 5h-.248a1 1 0 0 0-.994.883L11.003 6v1.17a3 3 0 1 1-2 2.83l.001-.105-.001-.05V6a3 3 0 0 1 2.823-2.995L12.003 3zM19 3a3 3 0 0 1 2.995 2.824L22 6v4a3 3 0 0 1-5.995.176L16 10V6a3 3 0 0 1 3-3m-6.997 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M19 5a1 1 0 0 0-.993.883L18 6v4a1 1 0 0 0 1.993.117L20 10V6a1 1 0 0 0-1-1M5 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>`,
  'regular': `<path d="M11.75 15a2.25 2.25 0 0 1 .154 4.494l-.154.005H11v1.75a.75.75 0 0 1-.648.743L10.25 22a.75.75 0 0 1-.743-.648L9.5 21.25v-5.5a.75.75 0 0 1 .648-.743L10.25 15zM18 15a2 2 0 0 1 2 2 .75.75 0 0 1-1.493.101l-.007-.102a.5.5 0 0 0-.41-.492L18 16.5h-.625a.625.625 0 0 0-.092 1.243l.092.007h.5a2.125 2.125 0 0 1 .152 4.245l-.152.005h-.625a2 2 0 0 1-2-2 .75.75 0 0 1 1.493-.102l.007.102a.5.5 0 0 0 .41.492l.09.008h.625a.625.625 0 0 0 .092-1.243l-.092-.007h-.5a2.125 2.125 0 0 1-.152-4.244l.152-.006zM7.75 15a.75.75 0 0 1 .102 1.492l-.102.007H5.5V18l1.75.001a.75.75 0 0 1 .102 1.493l-.102.007H5.5v1.728a.75.75 0 0 1-.648.744l-.102.006a.75.75 0 0 1-.743-.648L4 21.23v-5.48a.75.75 0 0 1 .648-.744l.102-.007zm4 1.5H11V18h.75a.75.75 0 0 0 .102-1.494zM12 3a3 3 0 0 1 2.996 2.823l.006.176v.172a.75.75 0 0 1-1.494.102l-.006-.102V6l-.007-.145a1.5 1.5 0 0 0-2.988.002l-.007.145V7.4a3 3 0 1 1-1.496 2.776L9 9.999V6.002A3 3 0 0 1 12 3M5 3a3 3 0 0 1 2.996 2.824L8 6.001v3.997a3 3 0 0 1-5.996.177l-.006-.177v-.17a.75.75 0 0 1 1.494-.1l.006.1v.17a1.5 1.5 0 0 0 2.995.145l.007-.145V8.6A3 3 0 1 1 5 3m14.006 0a2.994 2.994 0 0 1 2.989 2.82l.005.175v4.01a2.994 2.994 0 0 1-2.818 2.99l-.176.004-.188-.005a2.995 2.995 0 0 1-2.813-2.813L16 10.005v-4.01a2.995 2.995 0 0 1 2.818-2.99zM12 8.499a1.5 1.5 0 0 0-1.494 1.357L10.5 10a1.502 1.502 0 0 0 3 0A1.5 1.5 0 0 0 12 8.5m7.006-3.997h-.012c-.776 0-1.415.592-1.487 1.35l-.007.144v4.01c0 .777.593 1.415 1.35 1.487l.144.007.156-.007a1.495 1.495 0 0 0 1.343-1.343l.007-.144v-4.01c0-.825-.669-1.494-1.494-1.494M5 4.5a1.5 1.5 0 1 0 1.494 1.645l.006-.144A1.5 1.5 0 0 0 5 4.5"/>`
} as const;

export default function Fps960Icon({ 
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

  const gradientId = 'fps960icon_gradient';
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