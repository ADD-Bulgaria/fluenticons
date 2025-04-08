
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.56 8.44a1.5 1.5 0 0 1 0 2.12L7.622 20.5l9.94 9.94a1.5 1.5 0 0 1-2.122 2.12l-11-11a1.5 1.5 0 0 1 0-2.12l11-11a1.5 1.5 0 0 1 2.122 0m9 0a1.5 1.5 0 0 1 0 2.12L18.122 19H24.5C35.27 19 44 27.73 44 38.5a1.5 1.5 0 0 1-3 0C41 29.387 33.613 22 24.5 22h-6.379l8.44 8.44a1.5 1.5 0 0 1-2.122 2.12l-11-11a1.5 1.5 0 0 1 0-2.12l11-11a1.5 1.5 0 0 1 2.122 0"/>`,
  'regular': `<path d="M17.134 8.366a1.25 1.25 0 0 1 0 1.768L7.018 20.25l10.116 10.116a1.25 1.25 0 0 1-1.768 1.768l-11-11a1.25 1.25 0 0 1 0-1.768l11-11a1.25 1.25 0 0 1 1.768 0m8 0a1.25 1.25 0 0 1 0 1.768L16.268 19h8.982C35.605 19 44 27.395 44 37.75a1.25 1.25 0 1 1-2.5 0c0-8.975-7.275-16.25-16.25-16.25h-8.982l8.866 8.866a1.25 1.25 0 0 1-1.768 1.768l-11-11a1.25 1.25 0 0 1 0-1.768l11-11a1.25 1.25 0 0 1 1.768 0"/>`
} as const;

export default function ArrowReplyAllIcon({ 
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

  const gradientId = 'arrowreplyallicon_gradient';
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