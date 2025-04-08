
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.25 2a.75.75 0 0 1 .743.648L16 2.75v2.325a3.75 3.75 0 0 1 2.926 2.93h2.324a.75.75 0 0 1 .102 1.493l-.102.007L19 9.504v1.75h2.25a.75.75 0 0 1 .743.65l.007.1a.75.75 0 0 1-.648.744l-.102.007-2.25-.001v1.75h2.25a.75.75 0 0 1 .743.65l.007.1a.75.75 0 0 1-.648.744l-.102.007h-2.326A3.76 3.76 0 0 1 16 18.925v2.325a.75.75 0 0 1-1.493.102l-.007-.102v-2.251h-1.751l.001 2.251a.75.75 0 0 1-.648.743L12 22a.75.75 0 0 1-.743-.648l-.007-.102-.001-2.251H9.5v2.251a.75.75 0 0 1-.648.743L8.75 22a.75.75 0 0 1-.743-.648L8 21.25v-2.325A3.75 3.75 0 0 1 5.075 16H2.75a.75.75 0 0 1-.102-1.493l.102-.007L5 14.499v-1.75l-2.25.001a.75.75 0 0 1-.743-.648L2 12a.75.75 0 0 1 .648-.743l.102-.007L5 11.249v-1.75L2.75 9.5a.75.75 0 0 1-.743-.648L2 8.75a.75.75 0 0 1 .648-.743L2.75 8l2.325-.001A3.75 3.75 0 0 1 8 5.075V2.75a.75.75 0 0 1 1.493-.102l.007.102v2.249h1.749l.001-2.249a.75.75 0 0 1 .648-.743L12 2a.75.75 0 0 1 .743.648l.007.102-.001 2.249H14.5V2.75a.75.75 0 0 1 .55-.723l.098-.02zm-3.245 7.005a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/>`,
  'regular': `<path d="M15.25 2a.75.75 0 0 1 .743.648L16 2.75v2.325A3.75 3.75 0 0 1 18.926 8h2.325a.75.75 0 0 1 .102 1.493l-.102.007H19v1.75h2.25a.75.75 0 0 1 .743.648L22 12a.75.75 0 0 1-.648.743l-.102.007H19v1.75h2.25a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L21.25 16h-2.325A3.75 3.75 0 0 1 16 18.926v2.325a.75.75 0 0 1-1.493.102l-.007-.102V19h-1.751l.001 2.251a.75.75 0 0 1-.648.743L12 22a.75.75 0 0 1-.743-.648l-.007-.102-.001-2.251H9.5v2.251a.75.75 0 0 1-.648.743L8.75 22a.75.75 0 0 1-.743-.648L8 21.25v-2.325A3.75 3.75 0 0 1 5.075 16H2.75a.75.75 0 0 1-.102-1.493l.102-.007L5 14.499v-1.75l-2.25.001a.75.75 0 0 1-.743-.648L2 12a.75.75 0 0 1 .648-.743l.102-.007L5 11.249v-1.75L2.75 9.5a.75.75 0 0 1-.743-.648L2 8.75a.75.75 0 0 1 .648-.743L2.75 8l2.325-.001A3.75 3.75 0 0 1 8 5.075V2.75a.75.75 0 0 1 1.493-.102l.007.102v2.249h1.749l.001-2.249a.75.75 0 0 1 .648-.743L12 2a.75.75 0 0 1 .743.648l.007.102-.001 2.249H14.5V2.75a.75.75 0 0 1 .55-.723l.098-.02zm0 4.5h-6.5A2.25 2.25 0 0 0 6.5 8.75v6.5a2.25 2.25 0 0 0 2.25 2.25h6.5a2.25 2.25 0 0 0 2.25-2.25v-6.5a2.25 2.25 0 0 0-2.25-2.25m-3.245 2.505a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>`
} as const;

export default function DeveloperBoardIcon({ 
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

  const gradientId = 'developerboardicon_gradient';
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