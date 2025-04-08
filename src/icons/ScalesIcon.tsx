
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 4a1 1 0 0 0 0 2h1.557l-3.491 9.143A1 1 0 0 0 3 15.5C3 18.077 4.923 20 7.5 20s4.5-1.923 4.5-4.5a1 1 0 0 0-.066-.357L8.445 6H15v16H9a3 3 0 1 0 0 6h14a3 3 0 0 0 0-6h-6V6h6.434l-3.372 9.154A1 1 0 0 0 20 15.5c0 2.577 1.923 4.5 4.5 4.5s4.5-1.923 4.5-4.5a1 1 0 0 0-.062-.346L25.566 6H27a1 1 0 1 0 0-2zm2.5 5.137L9.548 14.5H5.452zM22.434 14.5 24.5 8.893l2.066 5.607z"/>`,
  'regular': `<path d="M4 5a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-1.434l3.372 9.154A1 1 0 0 1 29 15.5c0 2.577-1.923 4.5-4.5 4.5S20 18.077 20 15.5a1 1 0 0 1 .062-.346L23.434 6H17v16h6a3 3 0 1 1 0 6H9a3 3 0 0 1 0-6h6V6H8.443l3.492 9.143A1 1 0 0 1 12 15.5c0 2.577-1.923 4.5-4.5 4.5S3 18.077 3 15.5a1 1 0 0 1 .066-.357L6.556 6H5a1 1 0 0 1-1-1m4 20a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1M7.5 9.137 5.452 14.5h4.096zM9.821 16.5H5.18c.354.917 1.21 1.5 2.32 1.5s1.966-.583 2.321-1.5M24.5 18c1.11 0 1.966-.583 2.321-1.5H22.18c.355.917 1.212 1.5 2.321 1.5m-2.066-3.5h4.132L24.5 8.893z"/>`
} as const;

export default function ScalesIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'scalesicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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