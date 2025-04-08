
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.25 6A7.25 7.25 0 0 0 4 13.25v15.5A7.25 7.25 0 0 0 11.25 36H12v5.82c0 1.824 2.057 2.89 3.547 1.838L26.398 36H36.75A7.25 7.25 0 0 0 44 28.75v-15.5A7.25 7.25 0 0 0 36.75 6zm11 17.5a1.25 1.25 0 1 1 0-2.5h13.5a1.25 1.25 0 1 1 0 2.5zm-5.5-2.5a1.25 1.25 0 1 1 0 2.5h-4.5a1.25 1.25 0 1 1 0-2.5zm-4.5 5.5h14.5a1.25 1.25 0 1 1 0 2.5h-14.5a1.25 1.25 0 1 1 0-2.5m20 2.5a1.25 1.25 0 1 1 0-2.5h3.5a1.25 1.25 0 1 1 0 2.5z"/>`,
  'regular': `<path d="M6.5 13.25a4.75 4.75 0 0 1 4.75-4.75h25.5a4.75 4.75 0 0 1 4.75 4.75v15.5a4.75 4.75 0 0 1-4.75 4.75H25.603L14.5 41.338V33.5h-3.25a4.75 4.75 0 0 1-4.75-4.75zM11.25 6A7.25 7.25 0 0 0 4 13.25v15.5A7.25 7.25 0 0 0 11.25 36H12v5.82c0 1.824 2.057 2.89 3.547 1.838L26.398 36H36.75A7.25 7.25 0 0 0 44 28.75v-15.5A7.25 7.25 0 0 0 36.75 6zm11 17.5h13.5a1.25 1.25 0 1 0 0-2.5h-13.5a1.25 1.25 0 1 0 0 2.5m-5.5-2.5h-4.5a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5m-4.5 5.5a1.25 1.25 0 1 0 0 2.5h14.5a1.25 1.25 0 1 0 0-2.5zm20 2.5a1.25 1.25 0 1 1 0-2.5h3.5a1.25 1.25 0 1 1 0 2.5z"/>`
} as const;

export default function CommentTextIcon({ 
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

  const gradientId = 'commenttexticon_gradient';
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