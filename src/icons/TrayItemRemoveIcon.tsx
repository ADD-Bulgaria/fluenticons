
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.75 2c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h4C18.44 7 19 6.44 19 5.75v-2.5C19 2.56 18.44 2 17.75 2zm2.53 6.72a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06L15 11.06v6.69a.75.75 0 0 0 1.5 0v-6.69l1.22 1.22a.75.75 0 1 0 1.06-1.06zM6.25 13.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zM3.5 16.75a.75.75 0 0 0-1.5 0v2a2.75 2.75 0 0 0 2.75 2.75h14.5A2.75 2.75 0 0 0 22 18.75v-2a.75.75 0 0 0-1.5 0v2c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25z"/>`,
  'regular': `<path d="M14 3.5v2h3.5v-2zm-1.5-.25c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.5C19 6.44 18.44 7 17.75 7h-4c-.69 0-1.25-.56-1.25-1.25zm2.72 5.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22v6.69a.75.75 0 0 1-1.5 0v-6.69l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM6.5 15v2H10v-2zM5 14.75c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25zM2.75 16a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 18.75v-2a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function TrayItemRemoveIcon({ 
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

  const gradientId = 'trayitemremoveicon_gradient';
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