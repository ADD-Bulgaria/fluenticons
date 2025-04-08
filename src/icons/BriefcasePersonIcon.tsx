
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 6V4.25A2.25 2.25 0 0 1 10.25 2h3.5A2.25 2.25 0 0 1 16 4.25V6h1.75A3.25 3.25 0 0 1 21 9.25v1.5c0 .629-.331 1.18-.829 1.488A3.5 3.5 0 0 0 17.5 11c-1.19 0-2.24.593-2.873 1.5H14V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5H4.75A1.75 1.75 0 0 1 3 10.75v-1.5A3.25 3.25 0 0 1 6.25 6zm5.75-2.5h-3.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75m.285 10.5H14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1H4.75A3.24 3.24 0 0 1 3 13.49v3.26A3.25 3.25 0 0 0 6.25 20h5.752L12 19.875v-.103A2.77 2.77 0 0 1 14.773 17h.277a3.49 3.49 0 0 1-1.015-3m5.965.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C22 21.431 20.714 23 17.5 23S13 21.437 13 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M8 6V4.25A2.25 2.25 0 0 1 10.25 2h3.5A2.25 2.25 0 0 1 16 4.25V6h1.75A3.25 3.25 0 0 1 21 9.25v5.25c0-1.264-.67-2.372-1.675-2.987.112-.23.175-.49.175-.763v-1.5a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 9.25v1.5c0 .966.784 1.75 1.75 1.75H10V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h.627a3.5 3.5 0 0 0-.592 1.5H14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1H6.25a3.24 3.24 0 0 1-1.75-.51v3.26c0 .966.784 1.75 1.75 1.75h6.058A2.76 2.76 0 0 0 12 19.772v.103q0 .063.002.125H6.25A3.25 3.25 0 0 1 3 16.75v-7.5A3.25 3.25 0 0 1 6.25 6zm5.75-2.5h-3.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75m6.25 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C22 21.431 20.714 23 17.5 23S13 21.437 13 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function BriefcasePersonIcon({ 
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

  const gradientId = 'briefcasepersonicon_gradient';
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