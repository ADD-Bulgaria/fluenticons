
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.5 15a.75.75 0 0 0 0-1.5H9c-2.485 0-4.5-1.567-4.5-3.5 0-1.874 1.894-3.405 4.275-3.496L9 6.5h6.939l-1.72 1.72a.75.75 0 0 0 .977 1.133l.084-.073 3-3a.75.75 0 0 0 0-1.06l-3-3-.084-.073a.75.75 0 0 0-.976 1.133L15.938 5H9c-3.314 0-6 2.239-6 5s2.686 5 6 5zm11-4.633a.5.5 0 0 1 .5.5V20a1 1 0 0 1-1 1H3.862a.5.5 0 0 1-.251-.933l16.638-9.632a.5.5 0 0 1 .251-.068"/>`,
  'regular': `<path d="M8.985 5q-.126 0-.25.005h-.017a6.8 6.8 0 0 0-3.132.883C4.024 6.79 3 8.295 3 10c0 1.708 1.028 3.216 2.595 4.118A6.84 6.84 0 0 0 9 15h.5a.75.75 0 0 0 0-1.5H9a5.4 5.4 0 0 1-2.588-.636C5.256 12.23 4.5 11.184 4.5 10s.756-2.23 1.912-2.864a5.36 5.36 0 0 1 2.363-.632L9 6.5h6.939l-1.72 1.72a.75.75 0 0 0 .977 1.133l.084-.073h.001l3-3 .017-.018a.75.75 0 0 0-.018-1.042l-2.999-3-.085-.073a.75.75 0 0 0-.977 1.132v.001L15.939 5zM3.61 20.067a.5.5 0 0 0 .25.933H20a1 1 0 0 0 1-1v-9.133a.5.5 0 0 0-.75-.433zm3.974-.567L19.5 12.602V19.5z"/>`
} as const;

export default function RotateRightIcon({ 
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

  const gradientId = 'rotaterighticon_gradient';
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