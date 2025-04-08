
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.245 12.997c.709 0 1.022.892.469 1.335l-4.718 3.778v1.644a2.25 2.25 0 0 1-2.25 2.25H10.25A2.25 2.25 0 0 1 8 19.754V18.11l-4.72-3.778c-.553-.443-.24-1.335.47-1.335zM8.75 9h6.495a1.75 1.75 0 0 1 1.744 1.606l.006.143V12H7v-1.25a1.75 1.75 0 0 1 1.607-1.744zh6.495zM12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6"/>`,
  'regular': `<path d="M20.245 12.997c.709 0 1.022.892.469 1.335l-4.718 3.778v1.644a2.25 2.25 0 0 1-2.25 2.25H10.25A2.25 2.25 0 0 1 8 19.754V18.11l-4.72-3.778c-.553-.443-.24-1.335.47-1.335zm-2.137 1.5H5.887l3.332 2.667a.75.75 0 0 1 .281.585v2.005c0 .414.336.75.75.75h3.496a.75.75 0 0 0 .75-.75V17.75a.75.75 0 0 1 .281-.585zM8.75 9h6.495a1.75 1.75 0 0 1 1.744 1.606l.006.143V12h-1.5v-1.25a.25.25 0 0 0-.192-.243l-.058-.007H8.75a.25.25 0 0 0-.243.193l-.007.057V12H7v-1.25a1.75 1.75 0 0 1 1.607-1.744zh6.495zM12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>`
} as const;

export default function PresenterIcon({ 
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

  const gradientId = 'presentericon_gradient';
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