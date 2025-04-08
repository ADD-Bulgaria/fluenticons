
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.75 4A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h9.316a4.3 4.3 0 0 1-.066-.75v-.205A3.045 3.045 0 0 1 18.046 20h.808a4 4 0 1 1 6.638-3.25c.009.138.12.25.258.25a.25.25 0 0 0 .25-.25v-9A3.75 3.75 0 0 0 22.25 4zM24.5 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2.5 6.25c0 1.868-1.571 3.75-5.5 3.75S16 25.125 16 23.25v-.205c0-1.13.916-2.045 2.046-2.045h6.909c1.13 0 2.045.915 2.045 2.045z"/>`,
  'regular': `<path d="M5.75 4A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h9.316a4.3 4.3 0 0 1-.066-.75v-.205q0-.28.049-.545H5.75a2.25 2.25 0 0 1-2.25-2.25V7.75A2.25 2.25 0 0 1 5.75 5.5h16.5a2.25 2.25 0 0 1 2.25 2.25v6.604c.57.647.936 1.48.992 2.396.009.138.12.25.258.25a.25.25 0 0 0 .25-.25v-9A3.75 3.75 0 0 0 22.25 4zM24.5 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2.5 6.25c0 1.868-1.571 3.75-5.5 3.75S16 25.125 16 23.25v-.205c0-1.13.916-2.045 2.046-2.045h6.909c1.13 0 2.045.915 2.045 2.045z"/>`
} as const;

export default function ShareScreenPersonIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'sharescreenpersonicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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