
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30 6a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m3 14a3 3 0 1 1-6 0v-8a3 3 0 1 1 6 0zM8 31.25c0-.69.56-1.25 1.25-1.25h6.506a1.25 1.25 0 1 1 0 2.5H10.5V36h4.25a1.25 1.25 0 1 1 0 2.5H10.5v4.29a1.25 1.25 0 1 1-2.5 0zM20.75 30c-.69 0-1.25.56-1.25 1.25v11.54a1.25 1.25 0 1 0 2.5 0V38.5h2.25a4.25 4.25 0 0 0 0-8.5zm3.5 6H22v-3.5h2.25a1.75 1.75 0 1 1 0 3.5M33 34.156c0-.915.741-1.656 1.656-1.656h1.594c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 1 0 2.5 0A3.75 3.75 0 0 0 36.25 30h-1.594a4.156 4.156 0 1 0 0 8.311h1.25a1.595 1.595 0 0 1 0 3.189H34.25c-.69 0-1.25-.56-1.25-1.25a1.25 1.25 0 1 0-2.5 0A3.75 3.75 0 0 0 34.25 44h1.656a4.094 4.094 0 1 0 0-8.189h-1.25A1.656 1.656 0 0 1 33 34.156M13 12a3 3 0 1 1 6 0 1.5 1.5 0 0 0 3 0 6 6 0 0 0-12 0v8.25q0 .126.02.248A6 6 0 1 0 13 14.803zm0 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0"/>`,
  'regular': `<path d="M24 12a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0zm9.5 0a3.5 3.5 0 1 0-7 0v8a3.5 3.5 0 1 0 7 0zm-23.483 8.458a6 6 0 1 0 2.483-5.332V12a3.5 3.5 0 1 1 7 0 1.25 1.25 0 1 0 2.5 0 6 6 0 0 0-12 0v8.25q0 .105.017.208M16 23.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7M9.25 30C8.56 30 8 30.56 8 31.25v11.54a1.25 1.25 0 1 0 2.5 0V38.5h4.25a1.25 1.25 0 1 0 0-2.5H10.5v-3.5h5.256a1.25 1.25 0 1 0 0-2.5zm11.5 0c-.69 0-1.25.56-1.25 1.25v11.54a1.25 1.25 0 1 0 2.5 0V38.5h2.25a4.25 4.25 0 0 0 0-8.5zm3.5 6H22v-3.5h2.25a1.75 1.75 0 1 1 0 3.5M33 34.156c0-.915.741-1.656 1.656-1.656h1.594c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 1 0 2.5 0A3.75 3.75 0 0 0 36.25 30h-1.594a4.156 4.156 0 1 0 0 8.311h1.25a1.595 1.595 0 0 1 0 3.189H34.25c-.69 0-1.25-.56-1.25-1.25a1.25 1.25 0 1 0-2.5 0A3.75 3.75 0 0 0 34.25 44h1.656a4.094 4.094 0 1 0 0-8.189h-1.25A1.656 1.656 0 0 1 33 34.156"/>`
} as const;

export default function Fps60Icon({ 
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

  const gradientId = 'fps60icon_gradient';
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