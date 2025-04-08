
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.788 2.788a3 3 0 0 0-.005.181v14.996a.75.75 0 0 0 1.188.609L12 17.673l5.812 4.18A.75.75 0 0 0 19 21.246v-1.183l1.718 1.718a.75.75 0 0 0 1.061-1.06zm15.721 4.03v9.57L6.621 3.437A3.25 3.25 0 0 1 8.252 3h7.498A3.25 3.25 0 0 1 19 6.25"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.788 2.788a3 3 0 0 0-.005.181v14.996a.75.75 0 0 0 1.188.609L12 17.673l5.812 4.18A.75.75 0 0 0 19 21.246v-1.183l1.718 1.718a.75.75 0 0 0 1.061-1.06zm14.221 16.342v1.22L12.44 16.14a.75.75 0 0 0-.876 0l-5.061 3.642V7.563zm0-12.313v8.07l1.5 1.5V6.25A3.25 3.25 0 0 0 15.751 3H8.253a3.23 3.23 0 0 0-1.633.44l1.133 1.13a1.8 1.8 0 0 1 .5-.072h7.498c.967 0 1.75.784 1.75 1.75"/>`
} as const;

export default function BookmarkOffIcon({ 
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

  const gradientId = 'bookmarkofficon_gradient';
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