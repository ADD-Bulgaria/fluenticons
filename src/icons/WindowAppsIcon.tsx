
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V18h-2.5v-1.5h-31v19.25a3.75 3.75 0 0 0 3.75 3.75H18V42h-5.75A6.25 6.25 0 0 1 6 35.75zM35.5 20a3.75 3.75 0 0 0-3.75 3.75v8h-8A3.75 3.75 0 0 0 20 35.5v6.75A3.75 3.75 0 0 0 23.75 46h16A6.25 6.25 0 0 0 46 39.75v-16A3.75 3.75 0 0 0 42.25 20zm-1.25 3.75c0-.69.56-1.25 1.25-1.25h6.75c.69 0 1.25.56 1.25 1.25v8h-9.25zm9.25 10.5v5.5a3.75 3.75 0 0 1-3.75 3.75h-5.5v-9.25zm-19.75 0h8v9.25h-8c-.69 0-1.25-.56-1.25-1.25V35.5c0-.69.56-1.25 1.25-1.25"/>`,
  'regular': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42H18v-2.5h-5.75a3.75 3.75 0 0 1-3.75-3.75V16.5h31V18H42v-5.75A6.25 6.25 0 0 0 35.75 6zm27.25 8h-31v-1.75a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75zm-4 6a3.75 3.75 0 0 0-3.75 3.75v8h-8A3.75 3.75 0 0 0 20 35.5v6.75A3.75 3.75 0 0 0 23.75 46h16A6.25 6.25 0 0 0 46 39.75v-16A3.75 3.75 0 0 0 42.25 20zm-1.25 3.75c0-.69.56-1.25 1.25-1.25h6.75c.69 0 1.25.56 1.25 1.25v8h-9.25zm9.25 10.5v5.5a3.75 3.75 0 0 1-3.75 3.75h-5.5v-9.25zm-19.75 0h8v9.25h-8c-.69 0-1.25-.56-1.25-1.25V35.5c0-.69.56-1.25 1.25-1.25"/>`
} as const;

export default function WindowAppsIcon({ 
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

  const gradientId = 'windowappsicon_gradient';
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