
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M34.75 11h-21.5A5.25 5.25 0 0 0 8 16.25v.769q.248-.02.5-.019a6.5 6.5 0 0 1 6.481 6H33.02A6.5 6.5 0 0 1 40 17.019v-.769c0-2.9-2.35-5.25-5.25-5.25m4.75 8q.25 0 .493.027A4.5 4.5 0 0 1 44 23.5v6.25a5.25 5.25 0 0 1-4 5.1v2.9a1.25 1.25 0 1 1-2.5 0V35h-27v2.75a1.25 1.25 0 1 1-2.5 0v-2.9a5.25 5.25 0 0 1-4-5.1V23.5a4.5 4.5 0 0 1 9 0v.5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-.5a4.5 4.5 0 0 1 4.5-4.5"/>`,
  'regular': `<path d="M13.25 11A5.25 5.25 0 0 0 8 16.25v1.457A5.5 5.5 0 0 0 4 23v6.75a5.25 5.25 0 0 0 4 5.1v2.9a1.25 1.25 0 1 0 2.5 0V35h27v2.75a1.25 1.25 0 1 0 2.5 0v-2.9a5.25 5.25 0 0 0 4-5.1V23a5.5 5.5 0 0 0-4-5.293V16.25c0-2.9-2.35-5.25-5.25-5.25zm24.25 6.59A5.5 5.5 0 0 0 33 23H15c0-2.696-1.94-4.94-4.5-5.41v-1.34a2.75 2.75 0 0 1 2.75-2.75h21.5a2.75 2.75 0 0 1 2.75 2.75zM6.5 23a3 3 0 1 1 6 0v1.25c0 .69.56 1.25 1.25 1.25h20.5c.69 0 1.25-.56 1.25-1.25V23a3 3 0 1 1 6 0v6.75a2.75 2.75 0 0 1-2.75 2.75H9.25a2.75 2.75 0 0 1-2.75-2.75z"/>`
} as const;

export default function CouchIcon({ 
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

  const gradientId = 'couchicon_gradient';
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