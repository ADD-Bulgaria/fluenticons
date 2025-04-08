
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.749 3a2.25 2.25 0 0 1 2.245 2.096l.005.154v10.502a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-4.25V20.5h1.751a.75.75 0 0 1 .102 1.494L17.25 22H6.75a.75.75 0 0 1-.102-1.493l.102-.007h1.749v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096L2 15.752V5.25a2.25 2.25 0 0 1 2.096-2.245L4.25 3zm-5.751 15.002h-4l.001 2.498h4zM18.504 6H9.5a.5.5 0 0 0-.5.5v8.002a.5.5 0 0 0 .5.5h9.004a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5M7.5 6h-2a.5.5 0 0 0-.5.5v8.002a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5"/>`,
  'regular': `<path d="M19.75 3a2.25 2.25 0 0 1 2.245 2.096L22 5.25v10.502a2.25 2.25 0 0 1-2.096 2.245l-.154.005H15.5V20.5h1.751a.75.75 0 0 1 .102 1.494L17.25 22H6.75a.75.75 0 0 1-.102-1.493l.102-.007H8.5v-2.498H4.251a2.25 2.25 0 0 1-2.245-2.096l-.005-.154V5.25a2.25 2.25 0 0 1 2.096-2.245L4.25 3zm-5.751 15.002h-4L10 20.5h4zM19.749 4.5H4.252a.75.75 0 0 0-.743.648L3.5 5.25v10.502c0 .38.282.694.648.743l.102.007h15.5a.75.75 0 0 0 .743-.648l.007-.102V5.25a.75.75 0 0 0-.648-.743zM18.505 6a.5.5 0 0 1 .492.41l.008.09v8.002a.5.5 0 0 1-.41.492l-.09.008H9.5a.5.5 0 0 1-.492-.41L9 14.502V6.5a.5.5 0 0 1 .41-.492L9.5 6zM7.5 6a.5.5 0 0 1 .492.41L8 6.5v8.002a.5.5 0 0 1-.41.492l-.09.008h-2a.5.5 0 0 1-.492-.41L5 14.502V6.5a.5.5 0 0 1 .41-.492L5.5 6z"/>`
} as const;

export default function ViewDesktopIcon({ 
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

  const gradientId = 'viewdesktopicon_gradient';
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