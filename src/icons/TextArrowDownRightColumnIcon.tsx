
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 6.25C4 5.56 4.56 5 5.25 5h17.5a1.25 1.25 0 1 1 0 2.5H5.25C4.56 7.5 4 6.94 4 6.25m0 7.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H5.25C4.56 15 4 14.44 4 13.75m23-1.5A4.25 4.25 0 0 1 31.25 8h6.5A4.25 4.25 0 0 1 42 12.25V19H27zm0 9.25v8h15v-8zM42 32H27v6.75A4.25 4.25 0 0 0 31.25 43h6.5A4.25 4.25 0 0 0 42 38.75zM8.5 21.25a1.25 1.25 0 1 0-2.5 0v4.5A6.25 6.25 0 0 0 12.25 32h5.482l-3.366 3.366a1.25 1.25 0 0 0 1.768 1.768l5.5-5.5a1.25 1.25 0 0 0 0-1.768l-5.5-5.5a1.25 1.25 0 0 0-1.768 1.768l3.366 3.366H12.25a3.75 3.75 0 0 1-3.75-3.75z"/>`,
  'regular': `<path d="M5.25 5a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5zm0 7.5a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zm26-4.5A4.25 4.25 0 0 0 27 12.25v26.5A4.25 4.25 0 0 0 31.25 43h6.5A4.25 4.25 0 0 0 42 38.75v-26.5A4.25 4.25 0 0 0 37.75 8zm-1.75 4.25c0-.966.784-1.75 1.75-1.75h6.5c.967 0 1.75.784 1.75 1.75V19h-10zm0 9.25h10v8h-10zm0 10.5h10v6.75a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75zm-21-10.75a1.25 1.25 0 1 0-2.5 0v4.5A6.25 6.25 0 0 0 12.25 32h5.482l-3.366 3.366a1.25 1.25 0 0 0 1.768 1.768l5.5-5.5a1.25 1.25 0 0 0 0-1.768l-5.5-5.5a1.25 1.25 0 0 0-1.768 1.768l3.366 3.366H12.25a3.75 3.75 0 0 1-3.75-3.75z"/>`
} as const;

export default function TextArrowDownRightColumnIcon({ 
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

  const gradientId = 'textarrowdownrightcolumnicon_gradient';
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