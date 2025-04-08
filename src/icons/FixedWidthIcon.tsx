
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.75 4c.414 0 .75.308.75.688V6h6.75V4.688c0-.38.336-.688.75-.688s.75.308.75.688V6h6.75V4.688c0-.38.336-.688.75-.688s.75.308.75.688v4.125c0 .38-.336.687-.75.687s-.75-.308-.75-.687V7.5h-6.75v1.313c0 .38-.336.687-.75.687s-.75-.308-.75-.687V7.5H4.5v1.313c0 .38-.336.687-.75.687S3 9.192 3 8.813V4.687c0-.38.336-.687.75-.687m2 7A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h5.5V11zm12.5 9.5h-5.5V11h5.5A2.75 2.75 0 0 1 21 13.75v4a2.75 2.75 0 0 1-2.75 2.75"/>`,
  'regular': `<path d="M4.5 4.688c0-.38-.336-.688-.75-.688S3 4.308 3 4.688v4.125c0 .38.336.687.75.687s.75-.308.75-.687V7.5h6.75v1.313c0 .38.336.687.75.687s.75-.308.75-.687V7.5h6.75v1.313c0 .38.336.687.75.687s.75-.308.75-.687V4.687c0-.38-.336-.687-.75-.687s-.75.308-.75.688V6h-6.75V4.688c0-.38-.336-.688-.75-.688s-.75.308-.75.688V6H4.5zM5.75 11A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h12.5A2.75 2.75 0 0 0 21 17.75v-4A2.75 2.75 0 0 0 18.25 11zm5.5 1.5V19h-5.5c-.69 0-1.25-.56-1.25-1.25v-4c0-.69.56-1.25 1.25-1.25zm1.5 6.5v-6.5h5.5c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25z"/>`
} as const;

export default function FixedWidthIcon({ 
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

  const gradientId = 'fixedwidthicon_gradient';
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