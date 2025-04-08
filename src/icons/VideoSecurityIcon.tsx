
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 6.25A3.25 3.25 0 0 1 5.25 3h8.5A3.25 3.25 0 0 1 17 6.25v6.5A3.25 3.25 0 0 1 13.75 16h-8.5A3.25 3.25 0 0 1 2 12.75zm19.62-2.653a.75.75 0 0 1 .38.653v10.5a.75.75 0 0 1-1.136.643L18 13.675v-8.35l2.864-1.718a.75.75 0 0 1 .755-.01M8.135 17a2.5 2.5 0 0 1-2.386 1.75h-2a.75.75 0 0 0-.75.75v1.6a.9.9 0 0 0 .9.9h1.944a6.16 6.16 0 0 0 6.048-5z"/>`,
  'regular': `<path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v6.5A3.25 3.25 0 0 0 5.25 16h2.243a1.656 1.656 0 0 1-1.65 1.5H3.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3A5.75 5.75 0 0 0 12 16.25V16h1.75a3.25 3.25 0 0 0 3.235-2.934l3.88 2.327A.75.75 0 0 0 22 14.75V4.25a.75.75 0 0 0-1.136-.643l-3.88 2.327A3.25 3.25 0 0 0 13.75 3zM17 7.675l3.5-2.1v7.85l-3.5-2.1zM6.25 20.5H4V19h1.844c1.69 0 3.07-1.33 3.152-3H10.5v.25a4.25 4.25 0 0 1-4.25 4.25M3.5 6.25c0-.966.784-1.75 1.75-1.75h8.5c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-8.5a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function VideoSecurityIcon({ 
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

  const gradientId = 'videosecurityicon_gradient';
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