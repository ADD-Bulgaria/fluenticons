
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h9a2.25 2.25 0 0 1 2.25 2.25v13a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.25zM7.747 5.5A.75.75 0 0 0 7 6.25c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75zm6.006 9H7.747a.75.75 0 0 0-.747.75c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75M7.747 10a.75.75 0 0 0-.747.75c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75zM6.629 20.5A2.25 2.25 0 0 0 8.75 22h6.5A4.75 4.75 0 0 0 20 17.25V6.75a2.25 2.25 0 0 0-1.5-2.122V17.25a3.25 3.25 0 0 1-3.25 3.25z"/>`,
  'regular': `<path d="M7.747 5.5A.75.75 0 0 0 7 6.25c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75zM7 15.25c0-.414.334-.75.747-.75h6.006c.413 0 .747.336.747.75s-.334.75-.747.75H7.747A.75.75 0 0 1 7 15.25M7.747 10a.75.75 0 0 0-.747.75c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75zM6.25 2A2.25 2.25 0 0 0 4 4.25v13a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-13A2.25 2.25 0 0 0 15.25 2zM5.5 4.25q0-.038.004-.077A.75.75 0 0 1 6.25 3.5h9a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75zM6.629 20.5A2.25 2.25 0 0 0 8.75 22h6.5A4.75 4.75 0 0 0 20 17.25V6.75a2.25 2.25 0 0 0-1.5-2.122V17.25a3.25 3.25 0 0 1-3.25 3.25z"/>`
} as const;

export default function DocumentOnePageMultipleIcon({ 
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

  const gradientId = 'documentonepagemultipleicon_gradient';
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