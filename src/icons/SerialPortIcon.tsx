
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.231 10.386a2.75 2.75 0 0 1 2.676-3.387H19.09a2.75 2.75 0 0 1 2.675 3.388l-1.074 4.502A2.75 2.75 0 0 1 18.017 17H5.978a2.75 2.75 0 0 1-2.675-2.113zM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m-2 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M12 11.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>`,
  'regular': `<path d="M7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-2 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 11.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M4.907 6.999a2.75 2.75 0 0 0-2.675 3.387l1.072 4.501A2.75 2.75 0 0 0 5.979 17h12.039a2.75 2.75 0 0 0 2.675-2.111l1.074-4.502A2.75 2.75 0 0 0 19.092 7zm-1.216 3.04a1.25 1.25 0 0 1 1.217-1.54h14.184a1.25 1.25 0 0 1 1.216 1.54l-1.074 4.502a1.25 1.25 0 0 1-1.216.96H5.979a1.25 1.25 0 0 1-1.216-.961z"/>`
} as const;

export default function SerialPortIcon({ 
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

  const gradientId = 'serialporticon_gradient';
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