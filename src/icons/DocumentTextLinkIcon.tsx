
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v10.059A5 5 0 0 1 4.75 14h3.5c.533 0 1.046.088 1.525.25h5.975a.75.75 0 0 1 0 1.5h-3.817c.305.374.554.794.734 1.25h3.083a.75.75 0 0 1 0 1.5h-2.757q.007.124.007.25c0 1.257-.488 2.4-1.286 3.25H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-3.75 3.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5M12 18.75A3.75 3.75 0 0 0 8.25 15l-.102.007A.75.75 0 0 0 8.25 16.5l.154.005A2.25 2.25 0 0 1 8.25 21l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V22.5l.2-.005A3.75 3.75 0 0 0 12 18.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 4.75 21l-.154-.005A2.25 2.25 0 0 1 4.75 16.5l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 4.75 19.5h3.5l.102-.007A.75.75 0 0 0 9 18.75"/>`,
  'regular': `<path d="M18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v10h-.75q-.383 0-.75.059V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-6.286c.406-.432.731-.94.953-1.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5zm-7.603 5.75c.854.29 1.6.815 2.158 1.5h3.317a.75.75 0 0 0 0-1.5zM12.667 17c.186.468.3.973.326 1.5h2.257a.75.75 0 0 0 0-1.5zM8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM12 18.75A3.75 3.75 0 0 0 8.25 15l-.102.007A.75.75 0 0 0 8.25 16.5l.154.005A2.25 2.25 0 0 1 8.25 21l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V22.5l.2-.005A3.75 3.75 0 0 0 12 18.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 4.75 21l-.154-.005A2.25 2.25 0 0 1 4.75 16.5l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 4.75 19.5h3.5l.102-.007A.75.75 0 0 0 9 18.75"/>`
} as const;

export default function DocumentTextLinkIcon({ 
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

  const gradientId = 'documenttextlinkicon_gradient';
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