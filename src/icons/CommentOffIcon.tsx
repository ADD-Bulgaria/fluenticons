
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m34.232 36 7.634 7.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l1.875 1.875A7.23 7.23 0 0 0 4 13.25v15.5A7.25 7.25 0 0 0 11.25 36H12v5.82c0 1.824 2.057 2.89 3.547 1.838L26.398 36zM11.303 6 40.35 35.045A7.25 7.25 0 0 0 44 28.75v-15.5A7.25 7.25 0 0 0 36.75 6z"/>`,
  'regular': `<path d="m34.232 36 7.634 7.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l1.875 1.875A7.23 7.23 0 0 0 4 13.25v15.5A7.25 7.25 0 0 0 11.25 36H12v5.82c0 1.824 2.057 2.89 3.547 1.838L26.398 36zm-2.5-2.5h-6.129L14.5 41.338V33.5h-3.25a4.75 4.75 0 0 1-4.75-4.75v-15.5c0-1.37.58-2.606 1.51-3.473zM11.303 6l2.5 2.5H36.75a4.75 4.75 0 0 1 4.75 4.75v15.5a4.75 4.75 0 0 1-3.021 4.426l1.87 1.87A7.25 7.25 0 0 0 44 28.75v-15.5A7.25 7.25 0 0 0 36.75 6z"/>`
} as const;

export default function CommentOffIcon({ 
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

  const gradientId = 'commentofficon_gradient';
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