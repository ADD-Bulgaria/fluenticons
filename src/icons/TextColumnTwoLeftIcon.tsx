
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 6a1 1 0 0 0-1-1h-9a1 1 0 1 0 0 2h9a1 1 0 0 0 1-1M8 6a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m13 4a1 1 0 0 0-1-1h-9a1 1 0 1 0 0 2h9a1 1 0 0 0 1-1M8 10a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m13 4a1 1 0 0 0-1-1h-9a1 1 0 1 0 0 2h9a1 1 0 0 0 1-1M8 14a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1m13 4a1 1 0 0 0-1-1h-9a1 1 0 1 0 0 2h9a1 1 0 0 0 1-1M8 18a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1"/>`,
  'regular': `<path d="M21 5.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75m-13 0A.75.75 0 0 0 7.25 5h-3.5a.75.75 0 0 0 0 1.5h3.5A.75.75 0 0 0 8 5.75m13 4a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75m-13 0A.75.75 0 0 0 7.25 9h-3.5a.75.75 0 0 0 0 1.5h3.5A.75.75 0 0 0 8 9.75m13 4a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75m-13 0a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75m13 4a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75m-13 0a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75"/>`
} as const;

export default function TextColumnTwoLeftIcon({ 
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

  const gradientId = 'textcolumntwolefticon_gradient';
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