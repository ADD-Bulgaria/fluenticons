
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2.004c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 11.493A6 6 0 0 0 7.712 15.3a.75.75 0 1 0 1.071 1.05A4.5 4.5 0 0 1 12 14.997c1.225 0 2.37.49 3.211 1.347a.75.75 0 1 0 1.07-1.051A5.98 5.98 0 0 0 12 13.497M8.219 6.664 8.127 6.6A.75.75 0 0 0 7.2 7.759l.081.076 1.257 1.004a1.25 1.25 0 1 0 1.712 1.16.749.749 0 0 0 .55-1.26l-.082-.075zL8.128 6.6zm8.617.117a.75.75 0 0 0-.963-.18l-.092.063-2.498 2-.082.075a.75.75 0 0 0 .44 1.251l.11.008a1.25 1.25 0 1 0 1.825-1.108l-.113-.051 1.256-1.004.081-.076a.75.75 0 0 0 .035-.978"/>`,
  'regular': `<path d="M12 2.004c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m0 9.993c1.631 0 3.16.655 4.281 1.796a.75.75 0 1 1-1.07 1.051A4.5 4.5 0 0 0 12 14.997a4.5 4.5 0 0 0-3.217 1.352.75.75 0 1 1-1.071-1.049A6 6 0 0 1 12 13.497M7.164 6.781a.75.75 0 0 1 .963-.18l.092.063 2.5 2a.75.75 0 0 1-.47 1.335 1.25 1.25 0 1 1-1.712-1.16L7.28 7.835a.75.75 0 0 1-.117-1.054m6.119 1.883 2.498-2a.75.75 0 0 1 1.02 1.095l-.082.076-1.256 1.004a1.25 1.25 0 1 1-1.705 1.288l-.007-.13a.75.75 0 0 1-.55-1.258zl2.498-2z"/>`
} as const;

export default function EmojiAngryIcon({ 
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

  const gradientId = 'emojiangryicon_gradient';
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