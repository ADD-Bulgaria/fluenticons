
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.92 16a3.24 3.24 0 0 0-1.42 2.65v.6a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25v-.6A3.24 3.24 0 0 0 16.08 16z"/>`,
  'regular': `<path d="M6.884 17.15A3.24 3.24 0 0 1 7.92 16h8.16a3.24 3.24 0 0 1 1.42 2.65v.6a.25.25 0 0 1-.25.25H6.75a.25.25 0 0 1-.25-.25v-.6a3.24 3.24 0 0 1 .384-1.5M6.75 2A2.75 2.75 0 0 0 4 4.75v.42a5.75 5.75 0 0 0 2.792 4.93l1.81 1.086a.75.75 0 0 1 .036 1.263l-2.121 1.443A5.75 5.75 0 0 0 4 18.647v.603A2.75 2.75 0 0 0 6.75 22h10.5A2.75 2.75 0 0 0 20 19.25v-.604a5.75 5.75 0 0 0-2.517-4.754l-2.121-1.443a.75.75 0 0 1 .036-1.263l1.81-1.086A5.75 5.75 0 0 0 20 5.17v-.42A2.75 2.75 0 0 0 17.25 2zM5.5 4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v.42a4.25 4.25 0 0 1-2.063 3.643L14.627 9.9c-1.41.845-1.467 2.866-.108 3.79l2.12 1.442a4.25 4.25 0 0 1 1.861 3.515v.603c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25v-.604a4.25 4.25 0 0 1 1.86-3.514l2.121-1.442c1.359-.924 1.302-2.945-.107-3.79l-1.81-1.087A4.25 4.25 0 0 1 5.5 5.17z"/>`
} as const;

export default function HourglassOneQuarterIcon({ 
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

  const gradientId = 'hourglassonequartericon_gradient';
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