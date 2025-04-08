
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.939 16.446a1.501 1.501 0 1 1 2.122 2.123 1.501 1.501 0 0 1-2.123-2.123m-2.604-2.742a5.233 5.233 0 0 1 7.4 0c.46.461.838 1.025 1.101 1.625a1 1 0 0 1-1.832.803 3.4 3.4 0 0 0-.683-1.013 3.233 3.233 0 0 0-4.572 0 3.3 3.3 0 0 0-.672 1 1 1 0 1 1-1.832-.802 5.3 5.3 0 0 1 1.09-1.613"/>`,
  'regular': `<path d="M10.94 16.44a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12m-2.498-2.62a5.09 5.09 0 0 1 7.201 0c.448.447.816.997 1.072 1.582a.75.75 0 1 1-1.373.602 3.7 3.7 0 0 0-.76-1.124 3.59 3.59 0 0 0-5.08 0c-.31.31-.562.689-.746 1.11a.75.75 0 1 1-1.375-.6 5.1 5.1 0 0 1 1.061-1.57"/>`
} as const;

export default function Wifi3Icon({ 
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

  const gradientId = 'wifi3icon_gradient';
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