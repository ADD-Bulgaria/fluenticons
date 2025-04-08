
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.679 5.332a6.25 6.25 0 0 1 4.642 0l15.007 6.003A4.25 4.25 0 0 1 44 15.281v17.438a4.25 4.25 0 0 1-2.672 3.946l-15.007 6.003a6.25 6.25 0 0 1-4.642 0L6.672 36.665A4.25 4.25 0 0 1 4 32.719V15.28a4.25 4.25 0 0 1 2.672-3.946zm-7.426 10.273a1.25 1.25 0 0 0-1.005 2.29l9.502 4.171v9.184a1.25 1.25 0 1 0 2.5 0v-9.184l9.502-4.171a1.25 1.25 0 0 0-1.005-2.29L24 19.885z"/>`,
  'regular': `<path d="M14.253 15.605a1.25 1.25 0 0 0-1.005 2.29l9.502 4.171v9.184a1.25 1.25 0 0 0 2.5 0v-9.184l9.502-4.171a1.25 1.25 0 1 0-1.005-2.29L24 19.885zM26.32 5.332a6.25 6.25 0 0 0-4.642 0L6.672 11.335A4.25 4.25 0 0 0 4 15.281V32.72a4.25 4.25 0 0 0 2.672 3.946l15.007 6.003a6.25 6.25 0 0 0 4.642 0l15.007-6.003A4.25 4.25 0 0 0 44 32.72V15.281a4.25 4.25 0 0 0-2.672-3.946zm-3.714 2.321a3.75 3.75 0 0 1 2.786 0L40.4 13.657a1.75 1.75 0 0 1 1.1 1.624V32.72a1.75 1.75 0 0 1-1.1 1.625l-15.007 6.003a3.75 3.75 0 0 1-2.786 0L7.6 34.344a1.75 1.75 0 0 1-1.1-1.625V15.281a1.75 1.75 0 0 1 1.1-1.624z"/>`
} as const;

export default function CubeIcon({ 
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

  const gradientId = 'cubeicon_gradient';
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