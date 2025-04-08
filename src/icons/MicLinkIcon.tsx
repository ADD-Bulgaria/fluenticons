
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 4a8 8 0 0 0-8 8v12a8 8 0 1 0 16 0V12a8 8 0 0 0-8-8m0 35.25c0 1.404.34 2.726.94 3.884a1.25 1.25 0 0 1-2.44-.384v-5.08C13.473 36.923 8 30.976 8 23.75a1.25 1.25 0 1 1 2.5 0c0 6.351 5.149 11.5 11.5 11.5q.519 0 1.026-.045A8.4 8.4 0 0 0 22 39.25M33.979 31A13.93 13.93 0 0 0 36 23.75a1.25 1.25 0 1 0-2.5 0c0 2.749-.964 5.272-2.573 7.25zM24 39.25A6.25 6.25 0 0 1 30.25 33h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 24 39.25m22 0A6.25 6.25 0 0 0 39.75 33h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 46 39.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M14 12a8 8 0 1 1 16 0v12a8 8 0 1 1-16 0zm8-5.5a5.5 5.5 0 0 0-5.5 5.5v12a5.5 5.5 0 1 0 11 0V12A5.5 5.5 0 0 0 22 6.5m0 32.75c0 1.404.34 2.726.94 3.884a1.25 1.25 0 0 1-2.44-.384v-5.08C13.473 36.923 8 30.976 8 23.75a1.25 1.25 0 1 1 2.5 0c0 6.351 5.149 11.5 11.5 11.5q.519 0 1.026-.045A8.4 8.4 0 0 0 22 39.25M33.979 31A13.93 13.93 0 0 0 36 23.75a1.25 1.25 0 1 0-2.5 0c0 2.749-.964 5.272-2.573 7.25zM24 39.25A6.25 6.25 0 0 1 30.25 33h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 24 39.25m22 0A6.25 6.25 0 0 0 39.75 33h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 46 39.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function MicLinkIcon({ 
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

  const gradientId = 'miclinkicon_gradient';
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