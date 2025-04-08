
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 6A4.25 4.25 0 0 0 6 10.25v25.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75V28h-8V10.25A4.25 4.25 0 0 0 29.75 6zM34 30.5h5.5v5.25a3.75 3.75 0 0 1-3.75 3.75H34zM13 15.25c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 1 1 0 2.5h-11.5c-.69 0-1.25-.56-1.25-1.25M14.25 23h11.5a1.25 1.25 0 1 1 0 2.5h-11.5a1.25 1.25 0 1 1 0-2.5M13 33.25c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M6 10.25A4.25 4.25 0 0 1 10.25 6h19.5A4.25 4.25 0 0 1 34 10.25V28h8v7.75A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zM34 39.5h1.75a3.75 3.75 0 0 0 3.75-3.75V30.5H34zm-2.5-29.25a1.75 1.75 0 0 0-1.75-1.75h-19.5a1.75 1.75 0 0 0-1.75 1.75v25.5a3.75 3.75 0 0 0 3.75 3.75H31.5zM14.25 14a1.25 1.25 0 1 0 0 2.5h11.5a1.25 1.25 0 1 0 0-2.5zM13 24.25c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 1 1 0 2.5h-11.5c-.69 0-1.25-.56-1.25-1.25M14.25 32a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function ReceiptIcon({ 
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

  const gradientId = 'receipticon_gradient';
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