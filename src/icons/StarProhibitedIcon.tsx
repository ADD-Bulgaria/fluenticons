
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778 5.273.766c1.107.16 1.549 1.522.748 2.303l-.906.882a6.5 6.5 0 0 0-9.442 7.43l-3.957 2.081c-.99.52-2.148-.32-1.96-1.423l.901-5.251-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zM22.998 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9.5 0c0 .833.255 1.607.691 2.248l5.557-5.557a4 4 0 0 0-6.248 3.309m4 4a4 4 0 0 0 3.309-6.249l-5.557 5.557c.64.437 1.415.692 2.248.692"/>`,
  'regular': `<path d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778 5.273.766c1.107.16 1.549 1.522.748 2.303l-.905.882a6.5 6.5 0 0 0-1.517-.616l1.157-1.128-5.05-.734a1.35 1.35 0 0 1-1.016-.739L11.998 4.04 9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734 3.654 3.562c.318.31.463.757.388 1.195l-.862 5.029 4.149-2.181c.015.542.098 1.067.238 1.569l-3.958 2.081c-.99.52-2.148-.32-1.96-1.423l.901-5.251-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9.5 0c0 .833.255 1.607.691 2.248l5.557-5.557A4 4 0 0 0 13.5 17.5m4 4a4 4 0 0 0 3.309-6.249l-5.557 5.557c.64.437 1.414.692 2.248.692"/>`
} as const;

export default function StarProhibitedIcon({ 
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

  const gradientId = 'starprohibitedicon_gradient';
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