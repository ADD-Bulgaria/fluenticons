
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h4.254v4.748a2.25 2.25 0 0 0 2.25 2.25H17.5v8.252a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.25zm3.75 7.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M7 15.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m3-3c0 .414.336.75.75.75h3.054a.75.75 0 0 0 0-1.5H10.75a.75.75 0 0 0-.75.75m.75 2.25a.75.75 0 0 0 0 1.5h3.054a.75.75 0 0 0 0-1.5zm1.254-7.752v-4.28q.115.087.218.191l4.619 4.619q.105.105.193.22h-4.28a.75.75 0 0 1-.75-.75M6.629 20.5A2.25 2.25 0 0 0 8.75 22h6.5A4.75 4.75 0 0 0 20 17.25v-5.881a2.25 2.25 0 0 0-.66-1.591l-.84-.841v8.313a3.25 3.25 0 0 1-3.25 3.25z"/>`,
  'regular': `<path d="M7.75 11.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M7 15.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m3-3a.75.75 0 0 1 .75-.75h3.054a.75.75 0 0 1 0 1.5H10.75a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h3.054a.75.75 0 0 0 0-1.5zM6.25 2A2.25 2.25 0 0 0 4 4.25v13a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V8.869a2.25 2.25 0 0 0-.659-1.591l-4.619-4.619A2.25 2.25 0 0 0 10.632 2zM5.5 4.25a.75.75 0 0 1 .75-.75h4.254v3.248a2.25 2.25 0 0 0 2.25 2.25H16v8.252a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75zm6.504 2.498V4.562l2.935 2.936h-2.185a.75.75 0 0 1-.75-.75M8.75 22a2.25 2.25 0 0 1-2.122-1.5h8.622a3.25 3.25 0 0 0 3.25-3.25V8.937l.84.84c.423.423.66.995.66 1.592v5.881A4.75 4.75 0 0 1 15.25 22z"/>`
} as const;

export default function DocumentBulletListMultipleIcon({ 
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

  const gradientId = 'documentbulletlistmultipleicon_gradient';
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