
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.5 2a2 2 0 0 1 1.79 1.105 3.5 3.5 0 0 0-.231 2.037A4 4 0 0 0 15 5H9a4 4 0 0 0-1.5.29V4a2 2 0 0 1 2-2zm.5 4c.589 0 1.138.17 1.602.463.25.368.567.686.935.935A3 3 0 0 1 18 9v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zM9 19a4 4 0 0 1-1.5-.29V20a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1.29A4 4 0 0 1 15 19zM22 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>`,
  'regular': `<path d="M14.5 2a2 2 0 0 1 1.79 1.105c-.187.427-.29.9-.29 1.395 0 .66.183 1.277.5 1.804V6.4l.102.062c.25.368.567.686.935.935C17.83 7.862 18 8.411 18 9v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a3 3 0 0 1-1.5 2.599V20a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2.401A3 3 0 0 1 6 15V9a3 3 0 0 1 1.5-2.599V4a2 2 0 0 1 2-2zm-5 1.5A.5.5 0 0 0 9 4v2h6V4a.5.5 0 0 0-.5-.5zm7 11.5V9A1.5 1.5 0 0 0 15 7.5H9A1.5 1.5 0 0 0 7.5 9v6A1.5 1.5 0 0 0 9 16.5h6a1.5 1.5 0 0 0 1.5-1.5M9 20a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2H9zM22 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>`
} as const;

export default function SmartwatchDotIcon({ 
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

  const gradientId = 'smartwatchdoticon_gradient';
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