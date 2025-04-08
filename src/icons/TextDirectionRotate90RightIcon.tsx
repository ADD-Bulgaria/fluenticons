
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.293 17.293a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L8 17.586V4a1 1 0 0 0-2 0v13.586l-.293-.293a1 1 0 0 0-1.414 0m9 1.414a1 1 0 0 1 1.414-1.414l.293.293V16a1 1 0 1 1 2 0v1.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0zM20 12a1 1 0 1 0 0-2h-9.25a1 1 0 1 0 0 2H15v1a1 1 0 1 0 2 0v-1zm0-8a1 1 0 1 0-2 0v3h-.25c-.895 0-1.87-.184-2.586-.642C14.511 5.939 14 5.255 14 4a1 1 0 1 0-2 0c0 1.945.864 3.26 2.086 4.042 1.158.742 2.56.958 3.664.958H19a1 1 0 0 0 1-1z"/>`,
  'regular': `<path d="M18.78 17.72a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.186a.75.75 0 0 1 1.5 0v3.185l.72-.72a.75.75 0 0 1 1.06 0m-9.5 1.06a.75.75 0 1 0-1.06-1.06l-.72.72V3.75a.75.75 0 0 0-1.5 0v14.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0zM20 10.75a.75.75 0 0 1-.75.75h-3v1.25a.75.75 0 0 1-1.5 0V11.5h-4.5a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75M18.5 3a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-1.25c-1.078 0-2.426-.212-3.53-.918-1.15-.737-1.97-1.973-1.97-3.832a.75.75 0 0 1 1.5 0c0 1.341.555 2.105 1.28 2.568.771.494 1.798.682 2.72.682h.5V3.75A.75.75 0 0 1 18.5 3"/>`
} as const;

export default function TextDirectionRotate90RightIcon({ 
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

  const gradientId = 'textdirectionrotate90righticon_gradient';
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