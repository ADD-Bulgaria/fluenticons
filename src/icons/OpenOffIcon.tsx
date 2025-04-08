
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M39.127 40.895A6.47 6.47 0 0 1 35.5 42h-23A6.5 6.5 0 0 1 6 35.5v-23a6.47 6.47 0 0 1 1.105-3.627l-2.739-2.74a1.25 1.25 0 1 1 1.768-1.767l37.5 37.5a1.25 1.25 0 0 1-1.768 1.768zm-2.199-2.199L9.304 11.072c-.195.436-.304.92-.304 1.428v23a3.5 3.5 0 0 0 3.5 3.5h23c.509 0 .992-.109 1.428-.304m4.979-2.093L39 33.696V27.5a1.5 1.5 0 1 1 3 0v8q0 .565-.093 1.103m-30.51-30.51L14.303 9H20.5a1.5 1.5 0 0 0 0-3h-8q-.565 0-1.103.093m30.054.247c.335.275.549.692.549 1.16v12a1.5 1.5 0 0 1-3 0v-8.379l-9.44 9.44a1.5 1.5 0 1 1-2.12-2.122L36.877 9H28.5a1.5 1.5 0 0 1 0-3h11.981a1.5 1.5 0 0 1 .97.34"/>`,
  'regular': `<path d="M39.197 40.965A6.2 6.2 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5a6.2 6.2 0 0 1 1.035-3.447l-2.669-2.67a1.25 1.25 0 1 1 1.768-1.767l37.5 37.5a1.25 1.25 0 0 1-1.768 1.768zm-1.83-1.83L8.865 10.633A3.7 3.7 0 0 0 8.5 12.25v23.5a3.75 3.75 0 0 0 3.75 3.75h23.5c.579 0 1.127-.131 1.617-.365m4.57-2.5L39.5 34.197V27.25a1.25 1.25 0 0 1 2.5 0v8.5q0 .45-.062.885M11.366 6.062 13.803 8.5h6.947a1.25 1.25 0 0 0 0-2.5h-8.5q-.45 0-.885.062M27 7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 1 1-2.5 0v-9.482L29.134 20.634a1.25 1.25 0 0 1-1.768-1.768L37.732 8.5H28.25c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function OpenOffIcon({ 
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

  const gradientId = 'openofficon_gradient';
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