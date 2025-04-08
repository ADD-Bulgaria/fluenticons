
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 21.248a.75.75 0 0 1-1.493.102l-.007-.102V17h-.746a2.25 2.25 0 0 1-2.245-2.095l-.005-.154v-5.5a2.25 2.25 0 0 1 1.513-2.127V2.747a.75.75 0 0 1 .648-.743l.101-.007h6.501a.75.75 0 0 1 .743.648l.007.102v4.386a2.25 2.25 0 0 1 1.48 1.946l.007.17v5.5a2.25 2.25 0 0 1-2.096 2.246l-.154.005H14.5l.001 4.245a.75.75 0 0 1-1.493.102L13 21.245V17h-2zm3.517-17.751H9.516v3.502h5.001z"/>`,
  'regular': `<path d="M11 21.248a.75.75 0 0 1-1.493.102l-.007-.102V17h-.746a2.25 2.25 0 0 1-2.245-2.095l-.005-.154v-5.5a2.25 2.25 0 0 1 1.513-2.127V2.747a.75.75 0 0 1 .648-.743l.101-.007h6.501a.75.75 0 0 1 .743.648l.007.102v4.386a2.25 2.25 0 0 1 1.48 1.946l.007.17v5.5a2.25 2.25 0 0 1-2.096 2.246l-.154.005H14.5l.001 4.245a.75.75 0 0 1-1.493.102L13 21.245V17h-2zM15.254 8.5h-6.5a.75.75 0 0 0-.743.648l-.007.102v5.5c0 .38.282.693.648.743l.102.007 4.996-.003.043.002h1.461a.75.75 0 0 0 .743-.647l.007-.102v-5.5a.75.75 0 0 0-.648-.743zm-.737-5.003H9.516v3.502h5.001z"/>`
} as const;

export default function UsbPlugIcon({ 
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

  const gradientId = 'usbplugicon_gradient';
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