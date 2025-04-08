
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M26 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V7h-3.5a.5.5 0 0 0 0 1H19v3.5a.5.5 0 0 0 1 0V8h3.5a.5.5 0 0 0 0-1H20zM23.5 16v-2.155A7.5 7.5 0 0 0 25 12.6v10.15A3.25 3.25 0 0 1 21.75 26H6.25A3.25 3.25 0 0 1 3 22.75V7.25A3.25 3.25 0 0 1 6.25 4h6.615a7.5 7.5 0 0 0-.595 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V16h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0 .75.75 0 0 1 .648-.743L17.5 16z"/>`,
  'regular': `<path d="M26 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V7h-3.5a.5.5 0 0 0 0 1H19v3.5a.5.5 0 0 0 1 0V8h3.5a.5.5 0 0 0 0-1H20zM23.5 16v-2.155A7.5 7.5 0 0 0 25 12.6v10.15A3.25 3.25 0 0 1 21.75 26H6.25A3.25 3.25 0 0 1 3 22.75V7.25A3.25 3.25 0 0 1 6.25 4h6.615a7.5 7.5 0 0 0-.595 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V16h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0 .75.75 0 0 1 .648-.743L17.5 16zm-19 6.75c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75V17.5h-5.316a4.25 4.25 0 0 1-3.969 3.495L14 21a4.25 4.25 0 0 1-4.142-3.296l-.042-.204H4.5z"/>`
} as const;

export default function MailInboxAddIcon({ 
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

  const gradientId = 'mailinboxaddicon_gradient';
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