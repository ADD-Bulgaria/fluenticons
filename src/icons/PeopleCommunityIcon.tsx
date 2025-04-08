
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M24 5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M9.5 9a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m29 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-8.022 12.818a3.25 3.25 0 0 0-3.98 2.298l-1.489 5.554a9 9 0 1 0 17.387 4.659l1.488-5.554a3.25 3.25 0 0 0-2.298-3.98zm-12.956 0a3.25 3.25 0 0 1 3.98 2.298l1.488 5.554a9 9 0 1 1-17.386 4.66l-1.489-5.554a3.25 3.25 0 0 1 2.299-3.98z"/><path d="M18.25 21A3.25 3.25 0 0 0 15 24.25V32a9 9 0 1 0 18 0v-7.75A3.25 3.25 0 0 0 29.75 21z"/>`,
  'filled': `<path d="M17.5 11.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M9.5 9a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m29 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M18.25 21A3.25 3.25 0 0 0 15 24.25V32a9 9 0 1 0 18 0v-7.75A3.25 3.25 0 0 0 29.75 21zm-5.098 1.99q-.151.606-.152 1.26V32a10.98 10.98 0 0 0 4.087 8.557q-.227.075-.46.136A9 9 0 0 1 5.603 34.33l-1.489-5.554a3.25 3.25 0 0 1 2.299-3.98zm17.76 17.567A10.98 10.98 0 0 0 35 32v-7.75q-.002-.654-.152-1.26l6.738 1.805a3.25 3.25 0 0 1 2.298 3.98l-1.488 5.554a9 9 0 0 1-11.483 6.228"/>`,
  'regular': `<path d="M24 7.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6.5 4a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0m-8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5.5 3a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m31.5 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M15 24.25A3.25 3.25 0 0 1 18.25 21h11.5A3.25 3.25 0 0 1 33 24.25V32a9 9 0 1 1-18 0zm3.25-.75a.75.75 0 0 0-.75.75V32a6.5 6.5 0 1 0 13 0v-7.75a.75.75 0 0 0-.75-.75zm-5.098-.51q-.151.606-.152 1.26v1.368L7.06 27.21a.75.75 0 0 0-.53.918l1.488 5.554a6.5 6.5 0 0 0 7.072 4.77 11 11 0 0 0 1.997 2.105q-.227.075-.46.136A9 9 0 0 1 5.603 34.33l-1.489-5.554a3.25 3.25 0 0 1 2.299-3.98zm17.76 17.567q.228.075.461.136a9 9 0 0 0 11.023-6.364l1.488-5.554a3.25 3.25 0 0 0-2.298-3.98l-6.738-1.806q.151.607.152 1.26v1.37l5.939 1.59a.75.75 0 0 1 .53.92l-1.488 5.553a6.5 6.5 0 0 1-7.071 4.77 11 11 0 0 1-1.997 2.105"/>`
} as const;

export default function PeopleCommunityIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'peoplecommunityicon_gradient';
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