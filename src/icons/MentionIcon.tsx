
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 24c0-9.389 7.611-17 17-17s17 7.611 17 17c0 5.136-2.635 7.012-4.516 7.031C34.64 31.051 32 29.276 32 24v-8.5a1.5 1.5 0 0 0-3 0v1.04C27.432 14.973 25.35 14 23 14c-5.142 0-9 4.66-9 10s3.858 10 9 10c3.057 0 5.66-1.647 7.27-4.106 1.347 2.66 3.64 4.164 6.246 4.137C40.635 33.988 44 30.115 44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20c2.47 0 4.839-.449 7.027-1.27a1.5 1.5 0 1 0-1.054-2.808A17 17 0 0 1 24 41c-9.389 0-17-7.611-17-17m22 0c0 4.048-2.857 7-6 7s-6-2.952-6-7 2.857-7 6-7 6 2.952 6 7"/>`,
  'regular': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24c0 5.654-2.733 7.604-4.724 7.563C34.726 31.52 32 29.376 32 24v-8.75a1.25 1.25 0 1 0-2.5 0v1.83C27.883 15.198 25.6 14 23 14c-5.109 0-9 4.624-9 10s3.891 10 9 10c3.227 0 5.97-1.846 7.55-4.56 1.275 2.885 3.579 4.568 6.174 4.622C40.733 34.146 44 30.346 44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20c2.536 0 4.964-.473 7.2-1.336a1.25 1.25 0 1 0-.9-2.332A17.5 17.5 0 0 1 24 41.5c-9.665 0-17.5-7.835-17.5-17.5m23 0c0 4.289-3.048 7.5-6.5 7.5s-6.5-3.211-6.5-7.5 3.048-7.5 6.5-7.5 6.5 3.211 6.5 7.5"/>`
} as const;

export default function MentionIcon({ 
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

  const gradientId = 'mentionicon_gradient';
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