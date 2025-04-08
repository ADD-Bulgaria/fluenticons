
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 9.25a5.75 5.75 0 0 1 5.75-5.75h.5a.75.75 0 0 0 0-1.5h-.5A7.25 7.25 0 0 0 6 9.25v1a.75.75 0 0 1-.75.75H4.9l1.294 1.293A2.25 2.25 0 0 0 7.5 10.25zm-1.097 7.248-1.23 1.23A.75.75 0 0 0 5.75 18h.5a7.25 7.25 0 0 0 7.25-7.25v-1a.75.75 0 0 1 .75-.75h3a.75.75 0 0 0 0-1.5h-3A2.25 2.25 0 0 0 12 9.75v1a5.75 5.75 0 0 1-5.597 5.748m.788-3.084a2.22 2.22 0 0 1 .24 1.53A4.75 4.75 0 0 0 10.5 10.5v-1a3.25 3.25 0 0 1 3.25-3.25h3.5a.75.75 0 0 0 0-1.5h-3.5A4.75 4.75 0 0 0 9 9.5v1a3.25 3.25 0 0 1-1.809 2.914M1.72 10.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H.75a.75.75 0 0 1 0-1.5h2.69l-1.72-1.72a.75.75 0 0 1 0-1.06" opacity=".79"/>`,
  'regular': `<path d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1h-.9l.997.998A2 2 0 0 0 7 10zM.5 14a.5.5 0 0 0 0 1h3.684l-2.147 2.146a.5.5 0 0 0 .707.708l2.989-2.99a.5.5 0 0 0 0-.729l-2.989-2.989a.5.5 0 0 0-.707.708L4.184 14zm9.5-3.5a4.5 4.5 0 0 1-3.148 4.293 1.87 1.87 0 0 0-.122-1.015A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4A3.5 3.5 0 0 0 10 9.5zM14 9a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1z"/>`
} as const;

export default function StreamInputIcon({ 
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

  const gradientId = 'streaminputicon_gradient';
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