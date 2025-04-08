
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.75 19H11.5v-7.5H19v4.25A3.25 3.25 0 0 1 15.75 19M19 10h-7.5V2h4.25A3.25 3.25 0 0 1 19 5.25zm-9 0V2H5.25A3.25 3.25 0 0 0 2 5.25V10zm0 9v-7.5H2v4.25A3.25 3.25 0 0 0 5.25 19zm-1.75 3a3.25 3.25 0 0 1-3-2h10.502a4.25 4.25 0 0 0 4.25-4.25V5.25a3.25 3.25 0 0 1 1.999 3v8.25a5.5 5.5 0 0 1-5.5 5.5z"/>`,
  'regular': `<path d="M5.25 2A3.25 3.25 0 0 0 2 5.25v10.5A3.25 3.25 0 0 0 5.25 19h10.5A3.25 3.25 0 0 0 19 15.75V5.25A3.25 3.25 0 0 0 15.75 2zM3.5 5.25c0-.966.784-1.75 1.75-1.75H10V10H3.5zm8 4.75V3.5h4.25c.966 0 1.75.784 1.75 1.75V10zm-8 1.5H10v6H5.25a1.75 1.75 0 0 1-1.75-1.75zm8 0h6v4.25a1.75 1.75 0 0 1-1.75 1.75H11.5zM8.25 22a3.25 3.25 0 0 1-3-2h1.776c.316.31.748.5 1.225.5h8.25a4 4 0 0 0 4-4V8.25c0-.477-.19-.91-.5-1.225V5.25a3.25 3.25 0 0 1 2 3v8.25a5.5 5.5 0 0 1-5.5 5.5z"/>`
} as const;

export default function TableSimpleMultipleIcon({ 
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

  const gradientId = 'tablesimplemultipleicon_gradient';
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