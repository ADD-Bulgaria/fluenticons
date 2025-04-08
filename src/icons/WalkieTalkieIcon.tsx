
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 8.5v4h6v-4zM10.25 1a.75.75 0 0 1 .75.75V3.5h8.75A2.25 2.25 0 0 1 22 5.75V16a.75.75 0 0 1-.19.498L20 18.535v4.715a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 8 23.25v-4.715l-1.81-2.037A.75.75 0 0 1 6 16V5.75A2.25 2.25 0 0 1 8.25 3.5H9.5V1.75a.75.75 0 0 1 .75-.75M9.5 7.75v5.5c0 .415.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75m1.5 9.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75"/>`,
  'regular': `<path d="M11.75 16.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM10.25 7a.75.75 0 0 0-.75.75v5.5c0 .415.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75zm.75 5.5v-4h6v4zM10.25 1a.75.75 0 0 1 .75.75V3.5h8.75A2.25 2.25 0 0 1 22 5.75V16a.75.75 0 0 1-.19.498L20 18.535v4.715a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 8 23.25v-4.715l-1.81-2.037A.75.75 0 0 1 6 16V5.75A2.25 2.25 0 0 1 8.25 3.5H9.5V1.75a.75.75 0 0 1 .75-.75M7.5 5.75v9.965l1.81 2.037a.75.75 0 0 1 .19.498v5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 1 .19-.498l1.81-2.037V5.75a.75.75 0 0 0-.75-.75H8.25a.75.75 0 0 0-.75.75"/>`
} as const;

export default function WalkieTalkieIcon({ 
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

  const gradientId = 'walkietalkieicon_gradient';
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