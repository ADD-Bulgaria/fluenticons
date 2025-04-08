
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 7.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M7 8l.001 2.504a.5.5 0 1 1-1 0V8H3.496a.5.5 0 0 1 0-1H6V4.5a.5.5 0 0 1 1 0V7h2.497a.5.5 0 0 1 0 1zm-.5 6a6.5 6.5 0 0 0 6.002-9H15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.81A6.48 6.48 0 0 0 6.5 14m0 4.5A2 2 0 0 1 4.563 17H15.5a2.5 2.5 0 0 0 2.5-2.5V7.563A2 2 0 0 1 19.5 9.5v5a4 4 0 0 1-4 4zM9 21a2 2 0 0 1-1.937-1.5h9.187a4.25 4.25 0 0 0 4.25-4.25v-5.187A2 2 0 0 1 22 12v3.25A5.75 5.75 0 0 1 16.25 21z"/>`,
  'regular': `<path d="M12 7.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M7 8l.001 2.504a.5.5 0 1 1-1 0V8H3.496a.5.5 0 0 1 0-1H6V4.5a.5.5 0 0 1 1 0V7h2.497a.5.5 0 0 1 0 1zm8-1.5h-2.076a6.5 6.5 0 0 0-.422-1.5H15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.81c.444.427.949.79 1.5 1.078V14a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M4.563 17A2 2 0 0 0 6.5 18.5h9a4 4 0 0 0 4-4v-5A2 2 0 0 0 18 7.563V14.5a2.5 2.5 0 0 1-2.5 2.5zm2.5 2.5A2 2 0 0 0 9 21h7.25A5.75 5.75 0 0 0 22 15.25V12a2 2 0 0 0-1.5-1.937v5.187a4.25 4.25 0 0 1-4.25 4.25z"/>`
} as const;

export default function StackAddIcon({ 
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

  const gradientId = 'stackaddicon_gradient';
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