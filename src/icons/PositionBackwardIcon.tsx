
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 6.5h-5.75a4.25 4.25 0 0 0-4.25 4.25v5.75H5.25A3.25 3.25 0 0 1 2 13.25v-8A3.25 3.25 0 0 1 5.25 2h8a3.25 3.25 0 0 1 3.25 3.25zM22 18.75A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25v-8a3.25 3.25 0 0 1 3.25-3.25h8A3.25 3.25 0 0 1 22 10.75zm-3.25 1.75a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9h-8A1.75 1.75 0 0 0 9 10.75v8c0 .966.784 1.75 1.75 1.75z"/>`,
  'regular': `<path d="M6.5 16.5H5.25A3.25 3.25 0 0 1 2 13.25v-8A3.25 3.25 0 0 1 5.25 2h8a3.25 3.25 0 0 1 3.25 3.25V6.5h-1.652L15 6.348V5.25c0-.231-.045-.452-.127-.655L12.97 6.5h-2.121l2.921-2.922a1.8 1.8 0 0 0-.519-.078H11.97L3.5 11.969v1.281q0 .271.078.52L6.5 10.847v2.121l-1.905 1.905c.203.081.424.126.655.126h1.098l.152-.152zm3.348-13H7.969L3.5 7.969v1.879zm-4 0H5.25A1.75 1.75 0 0 0 3.5 5.25v.598zM22 18.75A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25v-8a3.25 3.25 0 0 1 3.25-3.25h8A3.25 3.25 0 0 1 22 10.75zm-3.25 1.75a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9h-8A1.75 1.75 0 0 0 9 10.75v8c0 .966.784 1.75 1.75 1.75z"/>`
} as const;

export default function PositionBackwardIcon({ 
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

  const gradientId = 'positionbackwardicon_gradient';
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