
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.25 2.25a.75.75 0 0 0-1.5 0v1.808a5.44 5.44 0 0 0-3.067 1.541l-1.762 1.762-1.64-1.641a.75.75 0 1 0-1.061 1.06l1.64 1.641-3.439 3.44-1.64-1.641a.75.75 0 1 0-1.061 1.06l1.64 1.641-1.76 1.76a5.44 5.44 0 0 0-1.54 3.069H2.25a.75.75 0 0 0 0 1.5h1.797c.12.918.472 1.811 1.058 2.584L3.22 23.72a.75.75 0 1 0 1.06 1.06l1.885-1.885c.773.587 1.667.94 2.585 1.06v1.795a.75.75 0 0 0 1.5 0v-1.805a5.44 5.44 0 0 0 3.072-1.543l1.76-1.76 1.638 1.638a.75.75 0 1 0 1.06-1.06l-1.638-1.638 3.44-3.44 1.638 1.638a.75.75 0 1 0 1.06-1.06l-1.638-1.638 1.762-1.762a5.43 5.43 0 0 0 1.542-3.07h1.804a.75.75 0 0 0 0-1.5h-1.793a5.43 5.43 0 0 0-1.06-2.586L24.78 4.28a.75.75 0 0 0-1.06-1.06l-1.884 1.883a5.43 5.43 0 0 0-2.586-1.057zM9.498 19.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10-10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`,
  'regular': `<path d="M19.25 2.25a.75.75 0 0 0-1.5 0v1.808a5.44 5.44 0 0 0-3.067 1.541l-1.762 1.762-1.64-1.641a.75.75 0 1 0-1.061 1.06l1.64 1.641-3.439 3.44-1.64-1.641a.75.75 0 1 0-1.061 1.06l1.64 1.641-1.76 1.76a5.44 5.44 0 0 0-1.54 3.069H2.25a.75.75 0 0 0 0 1.5h1.797c.12.918.472 1.811 1.058 2.584L3.22 23.72a.75.75 0 1 0 1.06 1.06l1.885-1.885c.773.587 1.667.94 2.585 1.06v1.795a.75.75 0 0 0 1.5 0v-1.805a5.44 5.44 0 0 0 3.072-1.543l1.76-1.76 1.638 1.638a.75.75 0 1 0 1.06-1.06l-1.638-1.638 3.44-3.44 1.638 1.638a.75.75 0 1 0 1.06-1.06l-1.638-1.638 1.762-1.762a5.43 5.43 0 0 0 1.542-3.07h1.804a.75.75 0 0 0 0-1.5h-1.793a5.43 5.43 0 0 0-1.06-2.586L24.78 4.28a.75.75 0 0 0-1.06-1.06l-1.884 1.883a5.43 5.43 0 0 0-2.586-1.057zM6.661 15.742l9.083-9.082a3.96 3.96 0 1 1 5.6 5.6l-9.083 9.082a3.96 3.96 0 0 1-5.6-5.6M10.5 18.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function MoldIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'moldicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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