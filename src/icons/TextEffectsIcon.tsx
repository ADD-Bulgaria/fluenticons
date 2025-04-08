
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.754 10.617a11 11 0 0 1-.56 1.963q-.221.572-.522 1.11c-.525.933-1.24 1.76-2.174 2.355C7.563 16.639 6.408 17 5 17a1 1 0 1 1 0-2c1.982 0 3.176-.953 3.928-2.29q.075-.131.142-.267c.226-.452.405-.94.543-1.443.181-.659.291-1.342.346-2H5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1c0 .362-.014.748-.047 1.147l-.001.018c-.039.47-.103.958-.198 1.452M7.516 11a5 5 0 0 1-.33.73c-.255.451-.532.747-.83.936-.286.182-.7.334-1.356.334a3 3 0 1 0 0 6c3.65 0 6.07-1.938 7.415-4.33C13.66 12.457 14 9.886 14 8v10a3 3 0 1 0 6 0v-5.041a3 3 0 0 0 0-5.918V5a3 3 0 1 0-6 0v3a3 3 0 0 0-3-3H5a3 3 0 0 0 0 6zM19.5 11H18v7a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v4h1.5a1 1 0 1 1 0 2"/>`,
  'regular': `<path d="M17 2.5A2.5 2.5 0 0 1 19.5 5v2.5a2.5 2.5 0 0 1 0 5V18a2.5 2.5 0 0 1-5 0V5A2.5 2.5 0 0 1 17 2.5M18 18v-7h1.5a1 1 0 1 0 0-2H18V5a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0M2.5 8A2.5 2.5 0 0 1 5 5.5h6A2.5 2.5 0 0 1 13.5 8c0 1.837-.333 4.314-1.521 6.426C10.709 16.685 8.44 18.5 5 18.5a2.5 2.5 0 0 1 0-5c.74 0 1.25-.174 1.624-.411.383-.243.712-.609.997-1.115.243-.431.433-.934.573-1.474H5A2.5 2.5 0 0 1 2.5 8m7.236 2.5c-.17.779-.432 1.542-.808 2.21C8.177 14.045 6.984 15 5 15a1 1 0 1 0 0 2c2.816 0 4.623-1.445 5.672-3.31C11.687 11.886 12 9.695 12 8a1 1 0 0 0-1-1H5a1 1 0 0 0 0 2h4.959c-.041.493-.113 1-.223 1.5"/>`
} as const;

export default function TextEffectsIcon({ 
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

  const gradientId = 'texteffectsicon_gradient';
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