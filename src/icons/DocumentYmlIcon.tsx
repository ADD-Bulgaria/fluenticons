
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v8.545l.252-.378a1.5 1.5 0 0 1 2.248-.286 1.5 1.5 0 0 1 2.342.447L10 14.146l1.159-2.316a1.5 1.5 0 0 1 2.341-.448 1.5 1.5 0 0 1 2.5 1.087V8h-4.5A1.5 1.5 0 0 1 10 6.5m1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5M3.5 18a.5.5 0 0 0 .5-.5v-1.85l1.916-2.874a.5.5 0 0 0-.832-.555L3.5 14.6l-1.584-2.377a.5.5 0 0 0-.832.555L3 15.65v1.85a.5.5 0 0 0 .5.5m4.447-5.724A.5.5 0 0 0 7 12.5v5a.5.5 0 1 0 1 0v-2.882l1.553 3.105a.5.5 0 0 0 .894 0L12 14.618V17.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.947-.224L10 16.382zM15 12.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1H15z"/>`,
  'regular': `<path d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414v5.073a1.5 1.5 0 0 0-1-1.402V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.085a1.5 1.5 0 0 0-.748.582L4 12.045zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5m-8 11a.5.5 0 0 0 .5-.5v-1.85l1.916-2.874a.5.5 0 0 0-.832-.555L3.5 14.6l-1.584-2.377a.5.5 0 0 0-.832.555L3 15.65v1.85a.5.5 0 0 0 .5.5m4.447-5.724A.5.5 0 0 0 7 12.5v5a.5.5 0 1 0 1 0v-2.882l1.553 3.105a.5.5 0 0 0 .894 0L12 14.618V17.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.947-.224L10 16.382zM15 12.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1H15z"/>`
} as const;

export default function DocumentYmlIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'documentymlicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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