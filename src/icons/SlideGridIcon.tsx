
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 12.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zm7.5 0c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zM6.25 7C5.56 7 5 7.56 5 8.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zm7.5 0c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2C19 7.56 18.44 7 17.75 7zM2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25z"/>`,
  'regular': `<path d="M5 13.75c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-4C5.56 17 5 16.44 5 15.75zm1.5.25v1.5H10V14zm7.25-1.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zm.25 3V14h3.5v1.5zM5 8.25C5 7.56 5.56 7 6.25 7h4c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25zm1.5.25V10H10V8.5zM13.75 7c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2C19 7.56 18.44 7 17.75 7zm.25 3V8.5h3.5V10zM2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25z"/>`
} as const;

export default function SlideGridIcon({ 
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

  const gradientId = 'slidegridicon_gradient';
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