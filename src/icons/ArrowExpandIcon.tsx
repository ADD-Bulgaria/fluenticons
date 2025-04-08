
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.669 14.923a1 1 0 0 1 1.414 1.414l-2.668 2.667H8a1 1 0 0 1 .993.884l.007.116a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.587zm8.336 6.081a1 1 0 1 1 0-2h1.583l-2.665-2.667a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l2.668 2.67v-1.589a1 1 0 0 1 .883-.993l.117-.007a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM8 3a1 1 0 0 1 0 2H6.417l2.665 2.668a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0L5 6.412V8a1 1 0 0 1-.883.993L4 9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm12.005 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.412l-2.668 2.67a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L17.589 5h-1.584a1 1 0 0 1-.993-.883L15.005 4a1 1 0 0 1 1-1z"/>`,
  'regular': `<path d="M7.596 15.35a.75.75 0 0 1 1.06 1.06l-3.095 3.094H7.75a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v2.19zm8.659 5.654a.75.75 0 0 1 0-1.5h2.186L15.35 16.41a.75.75 0 0 1-.073-.976l.073-.084a.75.75 0 0 1 1.06 0l3.095 3.096v-2.192a.75.75 0 0 1 .648-.743l.102-.007a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75zM7.75 3a.75.75 0 0 1 0 1.5H5.563l3.093 3.095a.75.75 0 0 1 .072.976l-.073.085a.75.75 0 0 1-1.06 0L4.5 5.557V7.75a.75.75 0 0 1-.648.743L3.75 8.5A.75.75 0 0 1 3 7.75v-4A.75.75 0 0 1 3.75 3zm12.505 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V5.559L16.41 8.655a.75.75 0 0 1-.976.073l-.084-.073a.75.75 0 0 1 0-1.06L18.442 4.5h-2.187a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .75-.75z"/>`
} as const;

export default function ArrowExpandIcon({ 
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

  const gradientId = 'arrowexpandicon_gradient';
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