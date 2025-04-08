
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.5 2a7.5 7.5 0 0 1 7.179 5.321 7.5 7.5 0 1 1-9.357 9.358A7.5 7.5 0 0 1 9.5 2m7.498 7.599L17 9.5A7.5 7.5 0 0 1 9.6 17a5.5 5.5 0 1 0 7.399-7.4M9.5 4a5.5 5.5 0 0 0-2.498 10.401L7 14.5A7.5 7.5 0 0 1 14.4 7a5.5 5.5 0 0 0-4.9-3"/>`,
  'regular': `<path d="M9.5 2a7.5 7.5 0 0 1 7.179 5.321 7.5 7.5 0 1 1-9.357 9.358A7.5 7.5 0 0 1 9.5 2m7.486 7.038.01.22L17 9.5a7.5 7.5 0 0 1-7.962 7.486 6 6 0 1 0 7.947-7.948M9.5 3.5a6 6 0 0 0-2.486 11.463l-.01-.22L7 14.5a7.5 7.5 0 0 1 7.962-7.486A6 6 0 0 0 9.5 3.5"/>`
} as const;

export default function PhotoFilterIcon({ 
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

  const gradientId = 'photofiltericon_gradient';
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