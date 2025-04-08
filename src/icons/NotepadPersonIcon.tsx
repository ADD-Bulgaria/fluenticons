
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.25 2a.75.75 0 0 1 .743.648L17 2.75l-.001.749h.75a2.25 2.25 0 0 1 2.25 2.25v5.587A3.5 3.5 0 0 0 16.05 17h-.278A2.77 2.77 0 0 0 13 19.772v.103c0 .741.215 1.483.668 2.13H5.753a2.25 2.25 0 0 1-2.25-2.25L3.502 5.75a2.25 2.25 0 0 1 2.25-2.25l.747-.001V2.75a.75.75 0 0 1 1.494-.102L8 2.75l-.001.749H11V2.75a.75.75 0 0 1 1.494-.102l.007.102-.001.749h2.998V2.75a.75.75 0 0 1 .75-.75m-5.002 14H7.25l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.998l.102-.007a.75.75 0 0 0 0-1.486zm5-8H7.25l-.102.007a.75.75 0 0 0 0 1.486l.102.007h8.998l.102-.007a.75.75 0 0 0 0-1.486zM6.5 12.75c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75M21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M5.753 22.005a2.25 2.25 0 0 1-2.25-2.25L3.502 5.75a2.25 2.25 0 0 1 2.25-2.25l.747-.001V2.75a.75.75 0 0 1 .649-.743L7.25 2a.75.75 0 0 1 .743.648L8 2.75l-.001.749H11V2.75a.75.75 0 0 1 .649-.743L11.75 2a.75.75 0 0 1 .744.648l.007.102-.001.749h2.998V2.75a.75.75 0 0 1 .649-.743L16.25 2a.75.75 0 0 1 .743.648L17 2.75l-.001.749h.75a2.25 2.25 0 0 1 2.25 2.25v5.587A3.5 3.5 0 0 0 18.5 11h-.001V5.75a.75.75 0 0 0-.751-.75H5.742a.75.75 0 0 0-.74.75l.001 14.004c0 .415.336.75.75.75h7.3c.088.526.29 1.038.615 1.5zM7.25 16h3.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493zm0-8h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493zm11.25 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 6c3.214 0 4.5-1.569 4.5-3.125v-.103c0-.979-.794-1.772-1.773-1.772h-5.454c-.98 0-1.773.793-1.773 1.772v.103C14 21.437 15.286 23 18.5 23M7.25 12a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function NotepadPersonIcon({ 
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

  const gradientId = 'notepadpersonicon_gradient';
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