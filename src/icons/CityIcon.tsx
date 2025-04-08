
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.75 2.746a.75.75 0 0 0-1.5 0V4h-2A1.75 1.75 0 0 0 7.5 5.75v2.155c1.52-.138 3 1.036 3 2.743V21.25q0 .04-.002.078V22h3v-1.25h.002v-7.5a2.75 2.75 0 0 1 2.75-2.75h.25V5.75A1.75 1.75 0 0 0 14.75 4h-2zM14.498 22h4.252a1.75 1.75 0 0 0 1.75-1.75v-7a1.75 1.75 0 0 0-1.75-1.75h-2.5a1.75 1.75 0 0 0-1.75 1.75v7.5h-.002zM9.5 20.75h-.002V22H5.25a1.75 1.75 0 0 1-1.75-1.75v-7.96c0-.59.297-1.14.79-1.463l2.5-1.641c1.163-.765 2.71.07 2.71 1.462z"/>`,
  'regular': `<path d="M12 1.996a.75.75 0 0 1 .75.75V4h2c.966 0 1.75.784 1.75 1.75V11h2.25c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 22H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.43c0-.619.327-1.192.86-1.507L7.5 8.458V5.749A1.75 1.75 0 0 1 9.25 4h2V2.746a.75.75 0 0 1 .75-.75M9 8.018c.81.12 1.5.806 1.5 1.734v10.747h3v-7.75a1.75 1.75 0 0 1 1.5-1.732V5.75a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25zm6.25 4.481a.25.25 0 0 0-.25.25v7.75h3.75a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25zM8.623 9.537l-3.5 2.068A.25.25 0 0 0 5 11.82v8.43c0 .137.112.25.25.25H9V9.751a.25.25 0 0 0-.377-.215"/>`
} as const;

export default function CityIcon({ 
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

  const gradientId = 'cityicon_gradient';
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