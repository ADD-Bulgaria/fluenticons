
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 3c-.69 0-1.25.56-1.25 1.25v19a5.75 5.75 0 0 0 11.5 0V8.75a3.25 3.25 0 0 1 6.5 0v16.982l-.866-.866a1.25 1.25 0 0 0-1.768 1.768l3 3a1.25 1.25 0 0 0 1.768 0l3-3a1.25 1.25 0 0 0-1.768-1.768l-.866.866V8.75a5.75 5.75 0 0 0-11.5 0v14.5a3.25 3.25 0 0 1-6.5 0v-19C8 3.56 7.44 3 6.75 3"/>`,
  'regular': `<path d="M7 3a1 1 0 0 0-1 1v19.5a5.5 5.5 0 1 0 11 0v-15a3.5 3.5 0 1 1 7 0v18.086l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L26 26.586V8.5a5.5 5.5 0 1 0-11 0v15a3.5 3.5 0 1 1-7 0V4a1 1 0 0 0-1-1"/>`
} as const;

export default function ArrowWrapUpToDownIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'arrowwrapuptodownicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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