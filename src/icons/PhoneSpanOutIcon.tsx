
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 2A2.75 2.75 0 0 0 6 4.75v4.878A2.25 2.25 0 0 1 8.872 12.5h1.378a2.25 2.25 0 0 1 0 4.5H8.872A2.25 2.25 0 0 1 6 19.872v3.378A2.75 2.75 0 0 0 8.75 26h10.5A2.75 2.75 0 0 0 22 23.25v-3.378A2.25 2.25 0 0 1 19.128 17H17.75a2.25 2.25 0 0 1 0-4.5h1.378A2.25 2.25 0 0 1 22 9.628V4.75A2.75 2.75 0 0 0 19.25 2zM6.22 18.28l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06L5.56 14h4.69a.75.75 0 0 1 0 1.5H5.56l1.72 1.72a.75.75 0 1 1-1.06 1.06m15.56-7.06 3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72h-4.69a.75.75 0 0 1 0-1.5h4.69l-1.72-1.72a.75.75 0 1 1 1.06-1.06"/>`,
  'regular': `<path d="M8.75 2A2.75 2.75 0 0 0 6 4.75v4.878a2.26 2.26 0 0 1 1.5 0V4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v4.878a2.26 2.26 0 0 1 1.5 0V4.75A2.75 2.75 0 0 0 19.25 2zm13.03 9.22a.75.75 0 1 0-1.06 1.06L22.44 14h-4.69a.75.75 0 0 0 0 1.5h4.69l-1.72 1.72a.747.747 0 0 0 0 1.06.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06zm-1.28 8.652a2.26 2.26 0 0 0 1.5 0v3.378A2.75 2.75 0 0 1 19.25 26H8.75A2.75 2.75 0 0 1 6 23.25v-3.378a2.26 2.26 0 0 0 1.5 0v3.378c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25zM5.56 15.5h4.69a.75.75 0 0 0 0-1.5H5.56l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06z"/>`
} as const;

export default function PhoneSpanOutIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'phonespanouticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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