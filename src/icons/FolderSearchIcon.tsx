
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 6.25V8h6.129a.75.75 0 0 0 .53-.22l2.591-2.59-1.53-1.531A2.25 2.25 0 0 0 8.129 3H5.25A3.25 3.25 0 0 0 2 6.25m0 11.5V9.5h6.129a2.25 2.25 0 0 0 1.59-.659L13.062 5.5h5.689A3.25 3.25 0 0 1 22 8.75V15h-.022a5.5 5.5 0 1 0-5.478 6H5.25A3.25 3.25 0 0 1 2 17.75M16.5 21q.253 0 .5-.022V21zm0-1a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 16.5 20m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v11.5A3.25 3.25 0 0 0 5.25 21H17v-.022a5.48 5.48 0 0 1-4.275-1.478H5.25a1.75 1.75 0 0 1-1.75-1.75V9.5h4.629a2.25 2.25 0 0 0 1.59-.659L11.562 7h7.189c.966 0 1.75.784 1.75 1.75v2.975A5.48 5.48 0 0 1 21.978 15H22V8.75a3.25 3.25 0 0 0-3.25-3.25h-7.19L9.72 3.659A2.25 2.25 0 0 0 8.129 3zM3.5 8V6.25c0-.966.784-1.75 1.75-1.75h2.879a.75.75 0 0 1 .53.22l1.53 1.53-1.53 1.53a.75.75 0 0 1-.53.22zm13 12a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 16.5 20m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function FolderSearchIcon({ 
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

  const gradientId = 'foldersearchicon_gradient';
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