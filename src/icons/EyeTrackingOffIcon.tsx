
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.127.127c-.223.397-.35.855-.35 1.343v3.502l.007.102a.75.75 0 0 0 1.493-.102V4.75l.007-.128.006-.051 3.675 3.675a7.6 7.6 0 0 0-2.02 2.251 6 6 0 0 0-.358.716l-.006.015c-.002.005-.162.75.436.974a.75.75 0 0 0 .964-.436l.001-.002.008-.02.044-.1c.043-.09.11-.226.206-.391a6.1 6.1 0 0 1 1.8-1.932l1.494 1.494a3.5 3.5 0 1 0 4.93 4.93l4.744 4.744a1 1 0 0 1-.18.013h-3.5l-.103.007a.75.75 0 0 0 .102 1.493h3.5l.168-.005a2.7 2.7 0 0 0 1.176-.345l.128.128a.75.75 0 0 0 1.061-1.06zm8.17 6.048L10.122 6.94A9 9 0 0 1 12 6.75c2.726 0 4.535 1.1 5.655 2.22a7.6 7.6 0 0 1 1.18 1.527 6 6 0 0 1 .34.67l.018.046.006.015.002.005v.002l.001.002a.75.75 0 0 1-.439.965.76.76 0 0 1-.965-.438l-.008-.02s-.023-.055-.044-.1a5 5 0 0 0-.206-.391 6 6 0 0 0-.945-1.223c-.88-.88-2.32-1.78-4.595-1.78a8 8 0 0 0-.55.018m10.547 10.547-1.5-1.5V15.75a.75.75 0 0 1 1.493-.102l.007.102zM6.682 3.5 5.182 2h3.065a.75.75 0 0 1 .102 1.493l-.102.007zM2.747 15a.75.75 0 0 1 .743.648l.007.102v3.502l.007.128a1.25 1.25 0 0 0 1.115 1.116l.128.006h3.5l.102.007a.75.75 0 0 1 0 1.486l-.102.007h-3.5l-.167-.005a2.75 2.75 0 0 1-2.577-2.57l-.006-.175V15.75l.007-.102A.75.75 0 0 1 2.747 15m16.5-13 .168.005a2.75 2.75 0 0 1 2.577 2.57l.005.175v3.502l-.007.102a.75.75 0 0 1-1.486 0l-.007-.102V4.75l-.006-.128a1.25 1.25 0 0 0-1.116-1.116l-.128-.006h-3.5l-.102-.007a.75.75 0 0 1 0-1.486L15.747 2z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.127.127c-.223.397-.35.855-.35 1.343v3.502l.007.102a.75.75 0 0 0 1.493-.102V4.75l.007-.128.006-.051 3.675 3.675a7.6 7.6 0 0 0-2.02 2.251 6 6 0 0 0-.358.716l-.006.015c-.002.005-.162.75.436.974a.75.75 0 0 0 .964-.436l.001-.002.008-.02.044-.1c.043-.09.11-.226.206-.391a6.1 6.1 0 0 1 1.8-1.932l1.494 1.494a3.5 3.5 0 1 0 4.93 4.93l4.744 4.744a1 1 0 0 1-.18.013h-3.5l-.103.007a.75.75 0 0 0 .102 1.493h3.5l.168-.005a2.7 2.7 0 0 0 1.176-.345l.128.128a.75.75 0 0 0 1.061-1.06zm10.337 12.458a2 2 0 1 1-2.794-2.794zm-2.167-6.41L10.122 6.94A9 9 0 0 1 12 6.75c2.726 0 4.535 1.1 5.655 2.22a7.6 7.6 0 0 1 1.18 1.527 6 6 0 0 1 .34.67l.018.046.006.015.002.005v.002l.001.002a.75.75 0 0 1-.439.965.76.76 0 0 1-.965-.438l-.008-.02s-.023-.055-.044-.1a5 5 0 0 0-.206-.391 6 6 0 0 0-.945-1.223c-.88-.88-2.32-1.78-4.595-1.78a8 8 0 0 0-.55.018m10.547 10.547-1.5-1.5V15.75a.75.75 0 0 1 1.493-.102l.007.102zM6.682 3.5 5.182 2h3.065a.75.75 0 0 1 .102 1.493l-.102.007zM2.747 15a.75.75 0 0 1 .743.648l.007.102v3.502l.007.128a1.25 1.25 0 0 0 1.115 1.116l.128.006h3.5l.102.007a.75.75 0 0 1 0 1.486l-.102.007h-3.5l-.167-.005a2.75 2.75 0 0 1-2.577-2.57l-.006-.175V15.75l.007-.102A.75.75 0 0 1 2.747 15m16.5-13 .168.005a2.75 2.75 0 0 1 2.577 2.57l.005.175v3.502l-.007.102a.75.75 0 0 1-1.486 0l-.007-.102V4.75l-.006-.128a1.25 1.25 0 0 0-1.116-1.116l-.128-.006h-3.5l-.102-.007a.75.75 0 0 1 0-1.486L15.747 2z"/>`
} as const;

export default function EyeTrackingOffIcon({ 
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

  const gradientId = 'eyetrackingofficon_gradient';
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