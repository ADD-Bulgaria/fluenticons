
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m10.405 29.692 4.221-3.192A6 6 0 0 1 19.5 17h6q.252 0 .5.02V11.5A4.5 4.5 0 0 0 21.5 7h-14A4.5 4.5 0 0 0 3 11.5v9A4.5 4.5 0 0 0 7.5 25H8v3.495c0 1.239 1.417 1.944 2.405 1.197M27.5 17.014v.327a6 6 0 0 1 1.794 1.01c.134-.426.206-.88.206-1.351v-5.5a8 8 0 0 0-8-8H11a4.5 4.5 0 0 0-3.746 2.005Q7.377 5.5 7.5 5.5h14q.53 0 1.036.09A6 6 0 0 1 27.5 11.5zM21 19.5a1 1 0 0 0-1-1h-.5a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2h-.5a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1m4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5H25a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9zM20 22a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M27.5 17.014v.327a6 6 0 0 1 1.794 1.01c.134-.426.206-.88.206-1.351v-5.5a8 8 0 0 0-8-8H11a4.5 4.5 0 0 0-3.746 2.005Q7.377 5.5 7.5 5.5h14q.53 0 1.036.09A6 6 0 0 1 27.5 11.5zM26 11.5v5.52a6 6 0 0 0-.5-.02H24v-5.5A2.5 2.5 0 0 0 21.5 9h-14A2.5 2.5 0 0 0 5 11.5v9A2.5 2.5 0 0 0 7.5 23H10v4.49l3.735-2.823c.192.666.496 1.284.891 1.833l-4.221 3.192C9.417 30.439 8 29.734 8 28.495V25h-.5A4.5 4.5 0 0 1 3 20.5v-9A4.5 4.5 0 0 1 7.5 7h14a4.5 4.5 0 0 1 4.5 4.5m-5 8a1 1 0 0 0-1-1h-.5a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2h-.5a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1m4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5H25a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9zM20 22a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"/>`
} as const;

export default function CommentMultipleLinkIcon({ 
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'commentmultiplelinkicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}