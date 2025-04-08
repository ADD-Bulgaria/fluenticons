
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.003 5.754a1.75 1.75 0 0 0-1.75-1.75h-7.248q-.13 0-.255.019v7.228h4.83l-.89-1.002a.75.75 0 1 1 1.121-.997l2 2.25a.75.75 0 0 1 0 .997l-2 2.25a.75.75 0 1 1-1.12-.997l.89-1.001H12.75v7.23q.125.018.255.018h7.248a1.75 1.75 0 0 0 1.75-1.75zm-10.752 5.497H6.42l.89-1.002a.75.75 0 1 0-1.12-.997l-2 2.25a.75.75 0 0 0 0 .997l2 2.25a.75.75 0 1 0 1.12-.997l-.89-1.001h4.83v7.229q-.12.017-.246.017H3.758a1.75 1.75 0 0 1-1.75-1.75V5.752c0-.967.783-1.75 1.75-1.75h7.247q.126 0 .246.017z"/>`,
  'regular': `<path d="M8.311 10.249a.75.75 0 1 0-1.12-.997l-2 2.25a.75.75 0 0 0 0 .997l2 2.25a.75.75 0 1 0 1.12-.997l-.89-1.001h9.16l-.89 1.002a.75.75 0 1 0 1.12.996l2-2.25.01-.012a.75.75 0 0 0-.012-.987l-1.998-2.248a.75.75 0 1 0-1.12.997l.89 1.002H7.42zm4.444-6.247v.002h7.498c.966 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-8.998v-.003H3.758a1.75 1.75 0 0 1-1.75-1.75V5.752c0-.967.783-1.75 1.75-1.75zm7.498 1.502h-7.498v4.997h-1.5V5.502H3.758a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.497v-4.996h1.5V18.5h7.498a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25"/>`
} as const;

export default function DualScreenSpanIcon({ 
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

  const gradientId = 'dualscreenspanicon_gradient';
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