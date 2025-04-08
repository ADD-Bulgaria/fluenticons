
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.443 3.416a1 1 0 0 0-1.875-.027l-6 15.5a1 1 0 0 0 1.865.722L3.83 16h6.955l1.272 3.584a1 1 0 0 0 1.885-.668zM4.605 14 7.46 6.625 10.076 14zM16 3a1 1 0 0 1 1 1v7.619A3.6 3.6 0 0 1 19 11c2.21 0 4 2.07 4 4.625 0 2.554-1.79 4.625-4 4.625a3.6 3.6 0 0 1-2.06-.66 1 1 0 0 1-1.94-.34V4a1 1 0 0 1 1-1m3 15.25c.842 0 2-.893 2-2.625S19.842 13 19 13s-2 .893-2 2.625 1.158 2.625 2 2.625"/>`,
  'regular': `<path d="M15.75 3a.75.75 0 0 0-.75.75v15.5a.75.75 0 0 0 1.5 0v-.237c.685.618 1.554.987 2.5.987 2.21 0 4-2.015 4-4.5S21.21 11 19 11c-.946 0-1.815.37-2.5.987V3.75a.75.75 0 0 0-.75-.75m.75 12.5c0-1.828 1.28-3 2.5-3s2.5 1.172 2.5 3-1.28 3-2.5 3-2.5-1.172-2.5-3M7.76 3a.75.75 0 0 1 .697.5l5.5 15.5a.75.75 0 1 1-1.414.5l-1.42-4H4.007L2.45 19.52a.75.75 0 1 1-1.4-.54l6-15.5A.75.75 0 0 1 7.76 3m-.04 2.907L4.587 14h6.005z"/>`
} as const;

export default function TextCaseTitleIcon({ 
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

  const gradientId = 'textcasetitleicon_gradient';
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