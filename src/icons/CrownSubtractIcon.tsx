
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.457 6.37a2 2 0 1 0-2.913 0L7.918 9.65a.25.25 0 0 1-.307.068l-2.65-1.326A2 2 0 1 0 2.556 9.95l1.804 9.623A1.75 1.75 0 0 0 6.08 21h5.942a6.5 6.5 0 0 1 9.028-8.946l.394-2.104a2 2 0 1 0-2.405-1.558l-2.651 1.326a.25.25 0 0 1-.307-.068zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9 0a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"/>`,
  'regular': `<path d="M13.457 6.37a2 2 0 1 0-2.914 0L7.92 9.65a.25.25 0 0 1-.307.068l-2.65-1.326A2 2 0 1 0 2.556 9.95l1.804 9.623A1.75 1.75 0 0 0 6.08 21h5.942a6.5 6.5 0 0 1-.709-1.5H6.08a.25.25 0 0 1-.246-.204L4.037 9.711l.09-.059 2.815 1.407a1.75 1.75 0 0 0 2.149-.472L11.96 7h.078l2.87 3.587c.256.32.604.529.98.614a6.5 6.5 0 0 1 1.27-.192l2.714-1.357.09.059-.31 1.654q.746.263 1.397.689l.394-2.104a2 2 0 1 0-2.405-1.558l-2.651 1.326a.25.25 0 0 1-.307-.068zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9 0a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"/>`
} as const;

export default function CrownSubtractIcon({ 
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

  const gradientId = 'crownsubtracticon_gradient';
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