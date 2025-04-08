
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.8 4.002a7.97 7.97 0 0 0-5.594 2.482A7.97 7.97 0 0 0 4.002 12.2a8 8 0 0 0 9.56 7.648 1 1 0 1 1 .389 1.962 10 10 0 0 1-2.2.187 9.96 9.96 0 0 1-7.16-3.28A9.96 9.96 0 0 1 2 12a9.97 9.97 0 0 1 3.016-7.157A9.97 9.97 0 0 1 12 2q1.002.001 1.95.19a1 1 0 1 1-.388 1.962 8 8 0 0 0-1.762-.15m5.757-.317a1 1 0 0 0-1.113 1.662 8 8 0 0 1 2.21 2.209 1 1 0 0 0 1.661-1.113 10 10 0 0 0-2.758-2.758m4.253 6.365a1 1 0 0 0-1.962.388 8 8 0 0 1 0 3.124 1 1 0 1 0 1.962.389 10 10 0 0 0 0-3.902m-1.495 7.507a1 1 0 0 0-1.662-1.113 8 8 0 0 1-2.209 2.21 1 1 0 0 0 1.113 1.661 10.1 10.1 0 0 0 2.758-2.758"/>`,
  'regular': `<path d="M11.781 3.253a8.75 8.75 0 1 0 1.928 17.33.75.75 0 0 1 .29 1.472 10.3 10.3 0 0 1-2.255.192 10.2 10.2 0 0 1-7.338-3.363A10.2 10.2 0 0 1 1.75 12C1.75 6.34 6.34 1.75 12 1.75q1.027.001 2 .195a.75.75 0 0 1-.291 1.472 8.8 8.8 0 0 0-1.928-.164m5.915.224a.75.75 0 0 0-.835 1.246 8.8 8.8 0 0 1 2.416 2.416.75.75 0 0 0 1.246-.835 10.3 10.3 0 0 0-2.827-2.827M22.055 10a.75.75 0 1 0-1.472.291 8.8 8.8 0 0 1 0 3.418.75.75 0 0 0 1.472.29 10.3 10.3 0 0 0 0-3.999m-1.532 7.696a.75.75 0 0 0-1.246-.835 8.8 8.8 0 0 1-2.416 2.416.75.75 0 0 0 .835 1.246 10.3 10.3 0 0 0 2.827-2.827"/>`
} as const;

export default function CircleHintHalfVerticalIcon({ 
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

  const gradientId = 'circlehinthalfverticalicon_gradient';
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