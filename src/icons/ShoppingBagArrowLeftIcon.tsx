
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v2.998A6.5 6.5 0 0 0 17.5 11a6.5 6.5 0 0 0-3 .732V7h1V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v7.81a6.48 6.48 0 0 0-2 4.69c0 1.747.689 3.332 1.81 4.5H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7zm4.5-2a1.5 1.5 0 0 0-3 0v2h3zm6 7a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-.78 2.589-.07.057-2.516 2.517-.04.05-.044.077-.023.059-.02.085-.002.11.015.086.03.08.033.061.051.066 2.516 2.517a.5.5 0 0 0 .765-.638l-.058-.07L15.711 18H20.5a.5.5 0 0 0 .492-.41L21 17.5a.5.5 0 0 0-.41-.492L20.5 17h-4.789l1.646-1.646a.5.5 0 0 0 .058-.638l-.058-.07a.5.5 0 0 0-.638-.057"/>`,
  'regular': `<path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.35-2.854.07-.057a.5.5 0 0 1 .637.057l.058.07a.5.5 0 0 1-.058.638L15.711 17h4.79l.089.008a.5.5 0 0 1 .41.492l-.008.09a.5.5 0 0 1-.492.41h-4.789l1.646 1.646.058.07a.5.5 0 0 1-.765.638l-2.516-2.517-.05-.066-.034-.061-.03-.08-.014-.086.002-.11.019-.085.023-.059.044-.077.04-.05zM7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v2.998a6.5 6.5 0 0 0-1.5-.422V8.5h-4v3.232A6.5 6.5 0 0 0 13 12.81V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h3.732A6.5 6.5 0 0 0 12.81 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7zm3-3.5A1.5 1.5 0 0 0 8.5 5v2h3V5A1.5 1.5 0 0 0 10 3.5M15.5 7V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v2z"/>`
} as const;

export default function ShoppingBagArrowLeftIcon({ 
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

  const gradientId = 'shoppingbagarrowlefticon_gradient';
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