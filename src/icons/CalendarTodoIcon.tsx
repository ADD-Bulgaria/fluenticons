
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M7.5 28h5.968l1 1H7.5A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v6.966a3.7 3.7 0 0 0-1-.655V11H4v13.5A3.5 3.5 0 0 0 7.5 28m0-24A3.5 3.5 0 0 0 4 7.5V10h24V7.5A3.5 3.5 0 0 0 24.5 4zm8.141 20.94a2 2 0 0 0-.135.149l-1.447-1.448a.2.2 0 0 1 0-.282l1.302-1.303a.2.2 0 0 1 .283 0l1.44 1.441zm4.153 1.853-1.15 1.15a.2.2 0 0 1-.282.001l-1.306-1.306a.2.2 0 0 1 0-.283l9.302-9.303a.2.2 0 0 1 .283 0l1.304 1.306a.2.2 0 0 1 0 .283l-8.15 8.153zm-2.847 2.565a2.2 2.2 0 0 0 3.113 0l9.3-9.303a2.2 2.2 0 0 0 0-3.11l-1.304-1.306a2.2 2.2 0 0 0-3.112-.001l-6.445 6.445-1.44-1.44a2.2 2.2 0 0 0-3.112-.001l-1.303 1.302a2.2 2.2 0 0 0 0 3.112z"/>`
} as const;

export default function CalendarTodoIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'calendartodoicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}