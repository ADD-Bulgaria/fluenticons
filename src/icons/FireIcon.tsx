
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m6.156 9.323-.002.002-.004.003-.01.008a2 2 0 0 0-.126.104 5 5 0 0 0-.302.291c-.24.253-.548.629-.837 1.132-.582 1.015-1.071 2.528-.796 4.551.271 1.997 1.11 3.666 2.528 4.83C8.021 21.404 9.935 22 12.25 22c2.387 0 4.293-.895 5.554-2.43 1.25-1.521 1.808-3.596 1.675-5.864-.128-2.176-1.313-3.827-2.36-5.285l-.299-.417c-1.142-1.612-2.043-3.097-1.824-5.175A.75.75 0 0 0 14.25 2c-.382 0-.82.118-1.242.296a6.5 6.5 0 0 0-1.373.8c-.925.698-1.85 1.75-2.343 3.156C8.8 7.654 9.05 8.99 9.41 9.963c.237.639-.02 1.27-.407 1.454a.706.706 0 0 1-.927-.31L7.27 9.576a.75.75 0 0 0-1.113-.252"/>`,
  'regular': `<path d="M12.538 4.294c.323-.243.644-.43.93-.562.088 2.127 1.127 3.726 2.129 5.14l.272.382c1.083 1.518 2.011 2.819 2.112 4.54.117 1.982-.377 3.657-1.336 4.824C15.7 19.77 14.24 20.5 12.25 20.5c-2.061 0-3.61-.529-4.692-1.416-1.076-.883-1.763-2.181-1.993-3.872-.226-1.663.176-2.845.611-3.603q.13-.223.258-.4l.315.598a2.206 2.206 0 0 0 2.898.965c1.306-.62 1.584-2.213 1.17-3.33-.29-.782-.445-1.737-.11-2.694.377-1.072 1.092-1.895 1.831-2.454m-6.382 5.03h-.002l-.004.004-.01.008a2 2 0 0 0-.126.104 5 5 0 0 0-.302.291c-.24.253-.548.629-.837 1.132-.582 1.015-1.071 2.528-.796 4.551.271 1.997 1.11 3.666 2.528 4.83C8.021 21.404 9.935 22 12.25 22c2.387 0 4.293-.895 5.554-2.43 1.25-1.521 1.808-3.596 1.675-5.864-.128-2.176-1.313-3.827-2.36-5.285l-.299-.417c-1.142-1.612-2.043-3.097-1.824-5.175A.75.75 0 0 0 14.25 2c-.382 0-.82.118-1.242.296a6.5 6.5 0 0 0-1.373.8c-.925.698-1.85 1.75-2.343 3.156C8.8 7.654 9.05 8.99 9.41 9.963c.237.639-.02 1.27-.407 1.454a.706.706 0 0 1-.927-.31L7.27 9.576a.75.75 0 0 0-1.113-.252"/>`
} as const;

export default function FireIcon({ 
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

  const gradientId = 'fireicon_gradient';
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