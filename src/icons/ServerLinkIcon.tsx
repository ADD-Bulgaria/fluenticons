
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9H9.25a.75.75 0 0 0 0 1.5h3.036c-.406.432-.731.94-.953 1.5H9.25a.75.75 0 0 0 0 1.5h1.757a4.73 4.73 0 0 0 1.28 3.5H8.999a3 3 0 0 1-3-3zm3.25 1a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM23 18.75A3.75 3.75 0 0 0 19.25 15l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 19.25 21l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V22.5l.2-.005A3.75 3.75 0 0 0 23 18.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 21l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007A.75.75 0 0 0 20 18.75"/>`,
  'regular': `<path d="M9.25 6a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM8.5 17.75a.75.75 0 0 1 .75-.75h2.083a4.7 4.7 0 0 0-.326 1.5H9.25a.75.75 0 0 1-.75-.75m3.786-2.25a4.74 4.74 0 0 1 2.744-1.446.8.8 0 0 0-.28-.054h-5.5a.75.75 0 0 0 0 1.5zM16.5 5v9H18V5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h3.286a4.8 4.8 0 0 1-.953-1.5H9A1.5 1.5 0 0 1 7.5 19V5A1.5 1.5 0 0 1 9 3.5h6A1.5 1.5 0 0 1 16.5 5M23 18.75A3.75 3.75 0 0 0 19.25 15l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 19.25 21l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V22.5l.2-.005A3.75 3.75 0 0 0 23 18.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 21l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007A.75.75 0 0 0 20 18.75"/>`
} as const;

export default function ServerLinkIcon({ 
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

  const gradientId = 'serverlinkicon_gradient';
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