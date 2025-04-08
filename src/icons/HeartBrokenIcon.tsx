
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m11.28 5.034-.104-.104a5.375 5.375 0 1 0-7.601 7.601l7.895 7.896a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.6 5.38 5.38 0 0 0-7.611 0l-.789.791-1.882 3.033 3.68 3.22a.5.5 0 0 1 .025.73l-2.5 2.5a.5.5 0 0 1-.708-.707l2.122-2.122-3.597-3.148a.5.5 0 0 1-.096-.64z"/>`,
  'regular': `<path d="m12 5.753.82-.822a5.38 5.38 0 0 1 7.61 0 5.376 5.376 0 0 1 .002 7.599l-7.901 7.897a.75.75 0 0 1-1.061 0L3.575 12.53a5.375 5.375 0 1 1 7.6-7.601zm0 13.083 7.368-7.364a3.88 3.88 0 0 0-5.292-5.662l-1.007.999-.523.526a1 1 0 0 1-.087.079l-1.237 1.225 2.796 2.671a.75.75 0 0 1 .012 1.073l-2.5 2.5a.75.75 0 1 1-1.06-1.061l1.957-1.957-2.798-2.673a.75.75 0 0 1-.01-1.075l1.317-1.306-.82-.82a3.875 3.875 0 0 0-5.48 5.48z"/>`
} as const;

export default function HeartBrokenIcon({ 
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

  const gradientId = 'heartbrokenicon_gradient';
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