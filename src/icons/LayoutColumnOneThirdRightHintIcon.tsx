
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25a.75.75 0 0 1-1.5 0A3.25 3.25 0 0 1 6.25 3a.75.75 0 0 1 0 1.5M9 3.75A.75.75 0 0 1 9.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 9 3.75M3.75 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 3.75 9m0 8a.75.75 0 0 1 .75.75c0 .966.784 1.75 1.75 1.75a.75.75 0 0 1 0 1.5A3.25 3.25 0 0 1 3 17.75a.75.75 0 0 1 .75-.75M9 20.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m5-16.5a.75.75 0 0 1 .75-.75h3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-3a.75.75 0 0 1-.75-.75z"/>`,
  'regular': `<path d="M4.5 6.25c0-.966.784-1.75 1.75-1.75a.75.75 0 0 0 0-1.5A3.25 3.25 0 0 0 3 6.25a.75.75 0 0 0 1.5 0M9.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM4.5 9.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm0 8a.75.75 0 0 0-1.5 0A3.25 3.25 0 0 0 6.25 21a.75.75 0 0 0 0-1.5 1.75 1.75 0 0 1-1.75-1.75m5.25 1.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm5-16.5a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h3A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm.75 16.5v-15h2.25c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75z"/>`
} as const;

export default function LayoutColumnOneThirdRightHintIcon({ 
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

  const gradientId = 'layoutcolumnonethirdrighthinticon_gradient';
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