
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42 26.75v10.653l-3-3V26.75c0-.69-.56-1.25-1.25-1.25h-7.653l-3-3H37.75A4.25 4.25 0 0 1 42 26.75M20.732 22.5H9V10.768zM6.493 8.261A4.2 4.2 0 0 0 6 10.25v27.5A4.25 4.25 0 0 0 10.25 42h27.5c.719 0 1.396-.178 1.989-.493l2.127 2.127a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768zM37.233 39H25.5V27.268zM25.5 20.903l-3-3V10.25c0-.69-.56-1.25-1.25-1.25h-7.653l-3-3H21.25a4.25 4.25 0 0 1 4.25 4.25zM36 4a1.5 1.5 0 0 1 1.5 1.5v4.75h5a1.5 1.5 0 0 1 0 3h-5v5.25a1.5 1.5 0 0 1-3 0v-5.25h-5a1.5 1.5 0 0 1 0-3h5V5.5A1.5 1.5 0 0 1 36 4M9 25.5h13.5V39H10.25C9.56 39 9 38.44 9 37.75z"/>`,
  'regular': `<path d="m39.739 41.507 2.127 2.127a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L6.493 8.26A4.2 4.2 0 0 0 6 10.25v27.5A4.25 4.25 0 0 0 10.25 42h27.5c.719 0 1.396-.178 1.989-.493M37.732 39.5H25.25V27.018zm-16.75-16.75H8.5V10.268zM42 27v10.403l-2.5-2.5V27a1.75 1.75 0 0 0-1.75-1.75h-7.903l-2.5-2.5H37.75A4.25 4.25 0 0 1 42 27m-16.75-6.347-2.5-2.5V10.25A1.75 1.75 0 0 0 21 8.5h-7.903l-2.5-2.5H21a4.25 4.25 0 0 1 4.25 4.25zM35.75 4.5c.69 0 1.25.56 1.25 1.25V11h5.25a1.25 1.25 0 1 1 0 2.5H37v5.25a1.25 1.25 0 1 1-2.5 0V13.5h-5.25a1.25 1.25 0 1 1 0-2.5h5.25V5.75c0-.69.56-1.25 1.25-1.25M8.5 25.25h14.25V39.5h-12.5a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function AppsAddInOffIcon({ 
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

  const gradientId = 'appsaddinofficon_gradient';
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