
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.707 6.707a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414L16 6.414V20a1 1 0 1 0 2 0V6.414l.293.293a1 1 0 0 0 1.414 0m-9-1.414a1 1 0 0 1-1.414 1.414L9 6.414V8a1 1 0 0 1-2 0V6.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0zM4 12a1 1 0 1 0 0 2h9.25a1 1 0 1 0 0-2H9v-1a1 1 0 1 0-2 0v1zm0 8a1 1 0 1 0 2 0v-3h.25c.895 0 1.87.184 2.586.642C9.49 18.061 10 18.745 10 20a1 1 0 1 0 2 0c0-1.945-.864-3.26-2.086-4.042C8.756 15.216 7.354 15 6.25 15H5a1 1 0 0 0-1 1z"/>`,
  'regular': `<path d="M5.22 6.28a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v3.186a.75.75 0 1 1-1.5 0V5.561l-.72.72a.75.75 0 0 1-1.06 0m9.5-1.06a.75.75 0 0 0 1.06 1.06l.72-.72v14.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0zM4 13.25a.75.75 0 0 1 .75-.75h3v-1.25a.75.75 0 0 1 1.5 0v1.25h4.5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75M5.5 21a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h1.25c1.078 0 2.426.212 3.53.918 1.15.737 1.97 1.973 1.97 3.832a.75.75 0 0 1-1.5 0c0-1.341-.555-2.105-1.28-2.568C8.7 17.188 7.673 17 6.75 17h-.5v3.25a.75.75 0 0 1-.75.75"/>`
} as const;

export default function TextDirectionRotate270RightIcon({ 
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

  const gradientId = 'textdirectionrotate270righticon_gradient';
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