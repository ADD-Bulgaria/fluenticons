
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M43.996 19.464C43.844 13.659 39.091 9 33.25 9h-4.5l-.143.006a1.75 1.75 0 0 0 .143 3.494h4.5l.24.004a7.25 7.25 0 0 1 7.01 7.246v.5l-.004.24a7.2 7.2 0 0 1-.886 3.243 7 7 0 0 1 2.075 3.183A10.7 10.7 0 0 0 44 20.25v-.5zM21 10.75A1.75 1.75 0 0 0 19.25 9h-4.5l-.286.004C8.659 9.156 4 13.909 4 19.75v.5l.004.286C4.156 26.341 8.909 31 14.75 31h4.5l.143-.006a1.75 1.75 0 0 0-.143-3.494h-4.5l-.24-.004A7.25 7.25 0 0 1 7.5 20.25v-.5l.004-.24a7.25 7.25 0 0 1 7.246-7.01h4.5l.143-.006A1.75 1.75 0 0 0 21 10.75m13 7.5H14l-.143.006A1.75 1.75 0 0 0 14 21.75h20l.144-.006A1.75 1.75 0 0 0 34 18.25M40 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 29 36h12c1.657 0 3 1.34 3 2.998z"/>`,
  'regular': `<path d="M44 20c0-5.523-4.477-10-10-10h-5.75l-.128.007a1.25 1.25 0 0 0 .128 2.493H34l.243.004a7.5 7.5 0 0 1 5.92 11.77 7 7 0 0 1 1.395 2.274A9.96 9.96 0 0 0 44 20m-23-8.75c0-.69-.56-1.25-1.25-1.25H14l-.28.004C8.327 10.152 4 14.57 4 20c0 5.523 4.477 10 10 10h5.75l.128-.006a1.25 1.25 0 0 0-.128-2.494H14l-.243-.004A7.5 7.5 0 0 1 14 12.5h5.75l.128-.007A1.25 1.25 0 0 0 21 11.25m14 7.5H13l-.128.006A1.25 1.25 0 0 0 13 21.25h22l.128-.006A1.25 1.25 0 0 0 35 18.75M40 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 29 36h12c1.657 0 3 1.34 3 2.998z"/>`
} as const;

export default function LinkPersonIcon({ 
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

  const gradientId = 'linkpersonicon_gradient';
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