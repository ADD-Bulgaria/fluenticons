
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 2A3.25 3.25 0 0 0 2 5.25v8a3.25 3.25 0 0 0 3.25 3.25H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25A3.25 3.25 0 0 0 13.25 2zM16.5 7.5v5.75a3.25 3.25 0 0 1-3.25 3.25H7.5v-5.75a3.25 3.25 0 0 1 3.25-3.25z"/>`,
  'regular': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h8q.15 0 .297.013a3.2 3.2 0 0 1 1.52.542 3.24 3.24 0 0 1 1.42 2.398v.006a3 3 0 0 1 .013.291V7.5h2.25a3.24 3.24 0 0 1 3.085 2.226c.107.322.165.666.165 1.024v8A3.25 3.25 0 0 1 18.75 22h-8a3.246 3.246 0 0 1-3.25-3.25V16.5H5.25q-.15 0-.297-.013a3.2 3.2 0 0 1-1.409-.47l-.01-.006a3.3 3.3 0 0 1-1.05-1.055 3.2 3.2 0 0 1-.47-1.409l-.001-.006A3 3 0 0 1 2 13.25zm1.5 2.81v1.88L9.94 3.5H8.06zM5.94 3.5h-.69A1.75 1.75 0 0 0 3.5 5.25v.69zm6.12 0L3.5 12.06v1.19q.002.31.101.588l4.04-4.04a3.26 3.26 0 0 1 2.157-2.156l4.04-4.04a1.8 1.8 0 0 0-.588-.102zm2.84 1.162L12.06 7.5h1.879L15 6.44V5.25q-.002-.31-.101-.588M7.5 12.061l-2.838 2.838q.277.1.588.101h1.19l1.06-1.06zm1.5 6.5v.189c0 .468.184.893.483 1.207L12.94 16.5h-1.88zm7.5-5.621 3.457-3.457A1.74 1.74 0 0 0 18.75 9h-.19l-2.06 2.06zm4-1.88-9.44 9.44h1.88l7.56-7.56zm0 4-5.44 5.44h1.88l3.56-3.56zm-.034 4.035a1.75 1.75 0 0 1-1.371 1.371zM9 10.75V15h4.25A1.75 1.75 0 0 0 15 13.25V9h-4.25A1.75 1.75 0 0 0 9 10.75"/>`
} as const;

export default function ShapeExcludeIcon({ 
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

  const gradientId = 'shapeexcludeicon_gradient';
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