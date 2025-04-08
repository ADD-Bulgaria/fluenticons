
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M34.895 25.272a1.75 1.75 0 0 0-1.75 0l-6.255 3.611a1.75 1.75 0 0 0-.875 1.516v7.222c0 .625.333 1.203.875 1.516l6.255 3.611a1.75 1.75 0 0 0 1.75 0l6.255-3.611a1.75 1.75 0 0 0 .875-1.516V30.4a1.75 1.75 0 0 0-.875-1.516zM14 26a8 8 0 1 0 0 16 8 8 0 0 0 0-16M30.75 6A4.75 4.75 0 0 0 26 10.75v6.5A4.75 4.75 0 0 0 30.75 22h6.5A4.75 4.75 0 0 0 42 17.25v-6.5A4.75 4.75 0 0 0 37.25 6zM16.904 7.797C15.7 5.4 12.31 5.4 11.105 7.797l-4.743 9.432c-1.1 2.184.473 4.771 2.9 4.771h9.487c2.426 0 3.998-2.587 2.899-4.771z"/>`,
  'filled': `<path d="M26 10.75A4.75 4.75 0 0 1 30.75 6h6.5A4.75 4.75 0 0 1 42 10.75v6.5A4.75 4.75 0 0 1 37.25 22h-6.5A4.75 4.75 0 0 1 26 17.25zM11.105 7.797c1.205-2.396 4.594-2.396 5.8 0l4.743 9.432c1.099 2.184-.473 4.771-2.9 4.771H9.262c-2.426 0-3.998-2.587-2.9-4.771zM14 26a8 8 0 1 0 0 16 8 8 0 0 0 0-16m19.145-.728a1.75 1.75 0 0 1 1.75 0l6.255 3.611c.541.313.875.89.875 1.516v7.222a1.75 1.75 0 0 1-.875 1.516l-6.255 3.611a1.75 1.75 0 0 1-1.75 0l-6.255-3.611a1.75 1.75 0 0 1-.875-1.516V30.4c0-.626.334-1.203.875-1.516z"/>`,
  'regular': `<path d="M30.75 6A4.75 4.75 0 0 0 26 10.75v6.5A4.75 4.75 0 0 0 30.75 22h6.5A4.75 4.75 0 0 0 42 17.25v-6.5A4.75 4.75 0 0 0 37.25 6zm-2.25 4.75a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25h-6.5a2.25 2.25 0 0 1-2.25-2.25zm-9.082 7.623L14.674 8.94a.747.747 0 0 0-1.338 0l-4.744 9.432a.758.758 0 0 0 .669 1.1h9.488c.56 0 .922-.596.669-1.1M11.105 7.797c1.205-2.396 4.594-2.396 5.8 0l4.743 9.432c1.099 2.184-.473 4.771-2.9 4.771H9.262c-2.426 0-3.998-2.587-2.9-4.771zM14 28.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M6 34a8 8 0 1 1 16 0 8 8 0 0 1-16 0m28.895-8.728a1.75 1.75 0 0 0-1.75 0l-6.255 3.611a1.75 1.75 0 0 0-.875 1.516v7.222c0 .625.334 1.203.875 1.516l6.255 3.611a1.75 1.75 0 0 0 1.75 0l6.255-3.611a1.75 1.75 0 0 0 .875-1.516V30.4a1.75 1.75 0 0 0-.875-1.516zm-6.38 5.56 5.505-3.179 5.505 3.179v6.356l-5.505 3.179-5.505-3.179z"/>`
} as const;

export default function DiversityIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
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

  const gradientId = 'diversityicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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