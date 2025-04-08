
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.97 13.95c.09.03.19.05.28.05.2 0 .4-.08.54-.23l.002-.002c.07-.07 2.365-2.412 5.698-2.728v2.21c0 .3.17.57.45.69.27.11.59.06.81-.15l5-4.75c.15-.14.23-.34.23-.54s-.08-.4-.23-.54l-5-4.75a.74.74 0 0 0-1.26.54v2.28c-2.02.13-3.66.81-4.87 2.03-2.11 2.11-2.12 5.07-2.12 5.19 0 .31.19.58.47.7M12 4.75a.75.75 0 0 0-.75-.75h-2.5A3.25 3.25 0 0 0 5.5 7.25v8a3.25 3.25 0 0 0 3.25 3.25h8A3.25 3.25 0 0 0 20 15.25v-.5a.75.75 0 0 0-1.5 0v.5A1.75 1.75 0 0 1 16.75 17h-8A1.75 1.75 0 0 1 7 15.25v-8c0-.966.784-1.75 1.75-1.75h2.5a.75.75 0 0 0 .75-.75m-7.5 2.5q0-.123.007-.243A3.25 3.25 0 0 0 3 9.75v5.5A5.75 5.75 0 0 0 8.75 21h5.5a3.25 3.25 0 0 0 2.744-1.507q-.121.007-.244.007h-8a4.25 4.25 0 0 1-4.25-4.25z"/>`,
  'regular': `<path d="M8.97 13.95c.09.03.19.05.28.05.2 0 .4-.08.54-.23l.002-.002c.07-.07 2.365-2.412 5.698-2.728v2.21c0 .3.17.57.45.69.27.11.59.06.81-.15l5-4.75c.15-.14.23-.34.23-.54s-.08-.4-.23-.54l-5-4.75a.74.74 0 0 0-1.26.54v2.28c-2.02.13-3.66.81-4.87 2.03-2.11 2.11-2.12 5.07-2.12 5.19 0 .31.19.58.47.7m8.03-3.7c0-.41-.34-.75-.75-.75-2.52 0-4.59 1.02-5.92 1.92.54-1.69 2-3.92 5.92-3.92.41 0 .75-.34.75-.75V5.5l3.16 3-3.16 3zm-5-5.5a.75.75 0 0 0-.75-.75h-2.5A3.25 3.25 0 0 0 5.5 7.25v8a3.25 3.25 0 0 0 3.25 3.25h8A3.25 3.25 0 0 0 20 15.25v-.5a.75.75 0 0 0-1.5 0v.5A1.75 1.75 0 0 1 16.75 17h-8A1.75 1.75 0 0 1 7 15.25v-8c0-.966.784-1.75 1.75-1.75h2.5a.75.75 0 0 0 .75-.75m-7.5 2.5q0-.123.007-.243A3.25 3.25 0 0 0 3 9.75v5.5A5.75 5.75 0 0 0 8.75 21h5.5a3.25 3.25 0 0 0 2.744-1.507q-.121.007-.244.007h-8a4.25 4.25 0 0 1-4.25-4.25z"/>`
} as const;

export default function ShareMultipleIcon({ 
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

  const gradientId = 'sharemultipleicon_gradient';
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