
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M18.067 27h12v16h-12z"/><path d="M26.461 7.855a3.78 3.78 0 0 0-4.787 0L8.499 18.597a3.91 3.91 0 0 0-1.432 3.031v17.485C7.067 41.26 8.78 43 10.892 43h8.175V30.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5V43h8.175c2.113 0 3.825-1.74 3.825-3.887V21.628a3.91 3.91 0 0 0-1.43-3.031z"/><path fill-rule="evenodd" d="m24.068 9.329-16 13.215a2.054 2.054 0 0 1-2.852-.262 1.956 1.956 0 0 1 .267-2.794L22.28 5.628a2.83 2.83 0 0 1 3.523-.024l16.805 13.588a1.957 1.957 0 0 1 .307 2.79 2.054 2.054 0 0 1-2.848.3z" clip-rule="evenodd"/>`,
  'filled': `<path d="M26.394 5.855a3.78 3.78 0 0 0-4.788 0L8.431 16.597A3.91 3.91 0 0 0 7 19.628v19.485C7 41.26 8.713 43 10.825 43h4.35C17.288 43 19 41.26 19 39.113V30.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v8.613C29 41.26 30.712 43 32.825 43h4.35C39.288 43 41 41.26 41 39.113V19.628a3.91 3.91 0 0 0-1.431-3.031z"/>`,
  'regular': `<path d="M21.606 5.855a3.78 3.78 0 0 1 4.788 0l13.175 10.742A3.91 3.91 0 0 1 41 19.628v19.485C41 41.26 39.288 43 37.175 43h-5.35C29.712 43 28 41.26 28 39.113v-9.226c0-.716-.57-1.296-1.275-1.296h-5.45c-.704 0-1.275.58-1.275 1.296v9.226C20 41.26 18.288 43 16.175 43h-5.35C8.713 43 7 41.26 7 39.113V19.628a3.91 3.91 0 0 1 1.431-3.031zm3.192 2.021a1.26 1.26 0 0 0-1.596 0L10.027 18.617a1.3 1.3 0 0 0-.477 1.011v19.485c0 .716.57 1.296 1.275 1.296h5.35c.704 0 1.275-.58 1.275-1.296v-9.226c0-2.147 1.713-3.887 3.825-3.887h5.45c2.112 0 3.825 1.74 3.825 3.887v9.226c0 .716.57 1.296 1.275 1.296h5.35c.704 0 1.275-.58 1.275-1.296V19.628a1.3 1.3 0 0 0-.477-1.01z"/>`
} as const;

export default function HomeIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'homeicon_gradient';
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