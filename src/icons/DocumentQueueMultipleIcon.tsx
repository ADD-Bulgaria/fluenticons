
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.353 6.156a.5.5 0 0 1 .065.08L19 7.818V6.51a2 2 0 0 0-.588-1.416L16.7 3.386A4.75 4.75 0 0 0 13.346 2H7a2 2 0 0 0-2 2v.127A3.5 3.5 0 0 1 7 3.5h6.346c.86 0 1.685.341 2.294.949zM2.75 15a.75.75 0 0 1 .75.75v1.75a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-1.75a.75.75 0 0 1 1.5 0v1.75a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-1.75a.75.75 0 0 1 .75-.75M12.5 5v4.75c0 .966.784 1.75 1.75 1.75H19V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM8 8.75c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0-.75.75M8.75 11a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM8 14.75c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0-.75.75m6-9.748V9.75c0 .138.112.25.25.25H19z"/>`,
  'regular': `<path d="M17.353 6.156a.5.5 0 0 1 .065.08L19 7.818V6.51a2 2 0 0 0-.588-1.416L16.7 3.386A4.75 4.75 0 0 0 13.346 2H7a2 2 0 0 0-2 2v.127A3.5 3.5 0 0 1 7 3.5h6.346c.86 0 1.685.341 2.294.949zM2.75 15a.75.75 0 0 1 .75.75v1.75a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-1.75a.75.75 0 0 1 1.5 0v1.75a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-1.75a.75.75 0 0 1 .75-.75m6-7a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM8 11.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M8.75 14a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6.232a2 2 0 0 0-.586-1.414l-3.768-3.768A2 2 0 0 0 13.232 5zm-.5 2a.5.5 0 0 1 .5-.5h5.5v3.25c0 .966.784 1.75 1.75 1.75h3.25V17a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zM14 9.75V7.06L16.94 10h-2.69a.25.25 0 0 1-.25-.25"/>`
} as const;

export default function DocumentQueueMultipleIcon({ 
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

  const gradientId = 'documentqueuemultipleicon_gradient';
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