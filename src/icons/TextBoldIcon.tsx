
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.5 3.5c.966 0 1.75.784 1.75 1.75v4.437l4.712-5.122a1.75 1.75 0 0 1 2.576 2.37L15.878 12l4.66 5.065a1.75 1.75 0 0 1-2.576 2.37l-4.712-5.122v4.437a1.75 1.75 0 1 1-3.5 0v-4.437l-4.712 5.122a1.75 1.75 0 0 1-2.576-2.37L7.122 12l-4.66-5.065a1.75 1.75 0 0 1 2.576-2.37L9.75 9.687V5.25c0-.966.784-1.75 1.75-1.75"/>`,
  'regular': `<path d="M11.5 3.75a1.5 1.5 0 0 1 1.5 1.5v5.08l5.398-5.847a1.5 1.5 0 1 1 2.204 2.034L15.542 12l5.06 5.483a1.5 1.5 0 1 1-2.204 2.034L13 13.67v5.08a1.5 1.5 0 0 1-3 0v-5.08l-5.398 5.847a1.5 1.5 0 1 1-2.204-2.034L7.458 12l-5.06-5.483a1.5 1.5 0 0 1 2.204-2.034L10 10.33V5.25a1.5 1.5 0 0 1 1.5-1.5"/>`
} as const;

export default function TextBoldIcon({ 
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

  const gradientId = 'textboldicon_gradient';
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