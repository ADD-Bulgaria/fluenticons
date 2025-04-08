
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.25 10h3.734A7.5 7.5 0 1 0 10 17.984V14.25A4.25 4.25 0 0 1 14.25 10m0 1A3.25 3.25 0 0 0 11 14.25v7.5c0 .626.177 1.21.483 1.706l4.75-4.749a2.5 2.5 0 0 1 3.535 0l4.749 4.75A3.24 3.24 0 0 0 25 21.75v-7.5A3.25 3.25 0 0 0 21.75 11zm9.206 13.517-4.749-4.75a1 1 0 0 0-1.414 0l-4.75 4.75A3.24 3.24 0 0 0 14.25 25h7.5c.626 0 1.21-.177 1.706-.483M22 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M10.5 4.5a6 6 0 0 0-.5 11.98v1.504A7.5 7.5 0 1 1 17.984 10h-1.505A6 6 0 0 0 10.5 4.5m3.75 6.5A3.25 3.25 0 0 0 11 14.25v7.5A3.25 3.25 0 0 0 14.25 25h7.5A3.25 3.25 0 0 0 25 21.75v-7.5A3.25 3.25 0 0 0 21.75 11zm-1.75 3.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v7.5q-.002.31-.101.588l-3.631-3.63a2.5 2.5 0 0 0-3.536 0l-3.63 3.63a1.8 1.8 0 0 1-.102-.588zm1.162 9.149 3.63-3.631a1 1 0 0 1 1.415 0l3.631 3.63a1.8 1.8 0 0 1-.588.102h-7.5q-.31-.002-.588-.101M22 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`
} as const;

export default function CircleImageIcon({ 
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

  const gradientId = 'circleimageicon_gradient';
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