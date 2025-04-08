
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 4h-.5A1.5 1.5 0 0 0 12 5.5V7h2.5v-.25a.75.75 0 0 1 1.5 0V7h3v-.25a.75.75 0 0 1 1.5 0V7H23V5.5A1.5 1.5 0 0 0 21.5 4H21V3a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 3zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM12 10.5v-2h2.5v.75a.75.75 0 0 0 1.5 0V8.5h3v.75a.75.75 0 0 0 1.5 0V8.5H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5m1-7.45a2.5 2.5 0 0 0-2 2.45v5a2.5 2.5 0 0 0 2.5 2.5h7v5.75a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h6.688c-.122.31-.188.647-.188 1z"/>`,
  'regular': `<path d="M14 4h-.5A1.5 1.5 0 0 0 12 5.5V7h2.5v-.25a.75.75 0 0 1 1.5 0V7h3v-.25a.75.75 0 0 1 1.5 0V7H23V5.5A1.5 1.5 0 0 0 21.5 4H21V3a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 3zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM12 10.5v-2h2.5v.75a.75.75 0 0 0 1.5 0V8.5h3v.75a.75.75 0 0 0 1.5 0V8.5H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5m1-7.45c-.37.075-.71.232-1 .45H6.5a1 1 0 0 0-1 1V18H19v-5h1.5v5.75a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h6.688c-.122.31-.188.647-.188 1z"/>`
} as const;

export default function BookToolboxIcon({ 
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

  const gradientId = 'booktoolboxicon_gradient';
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