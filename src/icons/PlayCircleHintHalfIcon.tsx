
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.014 4.845A9.97 9.97 0 0 1 12 2c.667 0 1.32.065 1.95.19a.75.75 0 0 1-.29 1.472 8.6 8.6 0 0 0-1.929-.158 8.5 8.5 0 1 0 1.929 16.834.75.75 0 1 1 .29 1.472 10 10 0 0 1-2.413.18 9.96 9.96 0 0 1-7.138-3.491A9.96 9.96 0 0 1 2 12a9.97 9.97 0 0 1 3.014-7.155m11.502-.954a.75.75 0 0 1 1.04-.206c1.09.73 2.03 1.668 2.76 2.758a.75.75 0 0 1-1.247.835 8.6 8.6 0 0 0-2.347-2.347.75.75 0 0 1-.206-1.04m4.412 5.568a.75.75 0 0 1 .882.59 10 10 0 0 1 0 3.902.75.75 0 0 1-1.472-.291 8.5 8.5 0 0 0 0-3.32.75.75 0 0 1 .59-.881m-.819 7.057a.75.75 0 0 1 .206 1.04 10 10 0 0 1-2.758 2.76.75.75 0 0 1-.835-1.247 8.6 8.6 0 0 0 2.347-2.347.75.75 0 0 1 1.04-.206M12 19.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5M9 9.247a1.25 1.25 0 0 1 1.856-1.093l5.757 3.187a.75.75 0 0 1 0 1.31l-5.757 3.187A1.25 1.25 0 0 1 9 14.745z"/>`,
  'regular': `<path d="M12 3.5q-.135 0-.269.004a8.5 8.5 0 1 0 1.929 16.834.75.75 0 1 1 .29 1.472 10 10 0 0 1-2.417.18 9.96 9.96 0 0 1-7.147-3.507A9.96 9.96 0 0 1 2 12a9.97 9.97 0 0 1 3.135-7.27A9.97 9.97 0 0 1 12 2c.667 0 1.32.065 1.95.19a.75.75 0 0 1-.29 1.472A8.6 8.6 0 0 0 12 3.5m4.516.39a.75.75 0 0 1 1.04-.205c1.09.73 2.03 1.668 2.76 2.758a.75.75 0 0 1-1.247.835 8.6 8.6 0 0 0-2.347-2.347.75.75 0 0 1-.206-1.04m4.412 5.569a.75.75 0 0 1 .882.59 10 10 0 0 1 0 3.902.75.75 0 0 1-1.472-.291 8.5 8.5 0 0 0 0-3.32.75.75 0 0 1 .59-.881m-.819 7.057a.75.75 0 0 1 .206 1.04 10 10 0 0 1-2.758 2.76.75.75 0 0 1-.835-1.247 8.6 8.6 0 0 0 2.347-2.347.75.75 0 0 1 1.04-.206m-9.253-8.361A1.25 1.25 0 0 0 9 9.247v5.499a1.25 1.25 0 0 0 1.856 1.092l5.757-3.186a.75.75 0 0 0 0-1.31z"/>`
} as const;

export default function PlayCircleHintHalfIcon({ 
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

  const gradientId = 'playcirclehinthalficon_gradient';
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