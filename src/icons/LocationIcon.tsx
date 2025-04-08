
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M39.015 28.98A16.9 16.9 0 0 0 41 21c0-9.389-7.611-17-17-17S7 11.611 7 21a16.92 16.92 0 0 0 4 10.955l.02.025.018.02H11l10.088 10.71a4 4 0 0 0 5.823 0L37 32h-.038l.016-.019.002-.002q.108-.129.215-.26a17 17 0 0 0 1.82-2.74m-15.01-1.48a6 6 0 1 1 0-12 6 6 0 0 1 0 12"/>`,
  'regular': `<path d="M24.005 15.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-3.5 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M37 32 26.912 42.71a4 4 0 0 1-5.824 0L11 32h.038l-.017-.02-.021-.025A16.92 16.92 0 0 1 7 21c0-9.389 7.611-17 17-17s17 7.611 17 17a16.92 16.92 0 0 1-4 10.955l-.021.025-.017.02zm-1.943-1.619A14.43 14.43 0 0 0 38.5 21c0-8.008-6.492-14.5-14.5-14.5S9.5 12.992 9.5 21a14.43 14.43 0 0 0 3.443 9.381l.308.363 9.657 10.251a1.5 1.5 0 0 0 2.184 0l9.657-10.251z"/>`
} as const;

export default function LocationIcon({ 
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

  const gradientId = 'locationicon_gradient';
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