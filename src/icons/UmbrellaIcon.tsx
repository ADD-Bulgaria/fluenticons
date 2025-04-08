
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.248 10.913c.473-.4 1.077-.734 1.752-.734s1.28.335 1.752.733a4.6 4.6 0 0 1 .675.71l.036.05a.748.748 0 0 0 1.241-.001 4.6 4.6 0 0 1 .71-.758c.473-.4 1.077-.734 1.753-.734s1.279.335 1.751.733c.231.195.414.391.538.538l.173.22A.75.75 0 0 0 22 11.25C22 6.575 17.953 2 12 2S2 6.575 2 11.25a.75.75 0 0 0 1.37.42l.174-.22c.124-.147.307-.343.538-.537.472-.4 1.076-.734 1.751-.734.676 0 1.28.335 1.752.733a4.6 4.6 0 0 1 .71.759.752.752 0 0 0 1.242 0l.036-.05q.045-.06.138-.171a4.6 4.6 0 0 1 .537-.537m1.752.266c-.236 0-.49.082-.75.24V19a1.5 1.5 0 1 1-3 0v-.25a.75.75 0 0 0-1.5 0V19a3 3 0 1 0 6 0v-7.582c-.26-.157-.514-.24-.75-.24"/>`,
  'regular': `<path d="M10.248 10.913c.473-.4 1.077-.734 1.752-.734s1.28.335 1.752.733a4.6 4.6 0 0 1 .675.71l.036.05a.748.748 0 0 0 1.241-.001 4.6 4.6 0 0 1 .71-.758c.473-.4 1.077-.734 1.753-.734s1.279.335 1.751.733c.231.195.414.391.538.538l.173.22A.75.75 0 0 0 22 11.25C22 6.575 17.953 2 12 2S2 6.575 2 11.25a.75.75 0 0 0 1.37.42l.174-.22c.124-.147.307-.343.538-.537.472-.4 1.076-.734 1.751-.734.676 0 1.28.335 1.752.733a4.6 4.6 0 0 1 .71.759.752.752 0 0 0 1.242 0l.036-.05q.045-.06.138-.171a4.6 4.6 0 0 1 .537-.537M3.793 9.278C4.713 6.185 7.743 3.5 12 3.5s7.287 2.685 8.207 5.778c-.55-.332-1.24-.6-2.04-.6-1.175 0-2.113.576-2.72 1.088a6 6 0 0 0-.364.335 6 6 0 0 0-.364-.335C14.113 9.254 13.175 8.68 12 8.68s-2.112.575-2.72 1.087a6 6 0 0 0-.363.335 6 6 0 0 0-.365-.335C7.946 9.254 7.008 8.68 5.833 8.68c-.8 0-1.49.267-2.04.599m8.207 1.9c-.236 0-.49.083-.75.24V19a1.5 1.5 0 1 1-3 0v-.25a.75.75 0 0 0-1.5 0V19a3 3 0 1 0 6 0v-7.582c-.26-.157-.514-.24-.75-.24"/>`
} as const;

export default function UmbrellaIcon({ 
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

  const gradientId = 'umbrellaicon_gradient';
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