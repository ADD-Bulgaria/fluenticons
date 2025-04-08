
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 6a4 4 0 0 1 8-.013v.764a.75.75 0 0 1-1.5 0V4a.5.5 0 0 0-1 0 2.5 2.5 0 1 0 .302 3.733A1.75 1.75 0 0 0 23 6.75V6a5 5 0 1 0-5 5c1.025 0 1.98-.3 2.778-.835a.5.5 0 0 0-.556-.83A3.97 3.97 0 0 1 18 10a4 4 0 0 1-4-4m4 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.25 3h7.553A6 6 0 0 0 22 10.473v4.278A3.25 3.25 0 0 1 18.75 18H13l-5 3.75c-.824.619-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3"/>`,
  'regular': `<path d="M18 2a4 4 0 0 0 0 8.001c.826 0 1.588-.241 2.222-.666a.5.5 0 0 1 .556.831 4.97 4.97 0 0 1-2.778.835 5 5 0 1 1 5-5v.75a1.75 1.75 0 0 1-3.198.982A2.5 2.5 0 1 1 19.5 4a.5.5 0 0 1 1 0v2.75a.75.75 0 0 0 1.5 0v-.763A4 4 0 0 0 18 2m-1.5 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m5.5 8.75v-4.277a6 6 0 0 1-1.5.983v3.295a1.75 1.75 0 0 1-1.75 1.75h-6.236L7.5 20.25l-.001-3.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.5c0-.967.784-1.75 1.75-1.75h6.939a6 6 0 0 1 .614-1.5H5.25A3.25 3.25 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v2.75a1.25 1.25 0 0 0 1.999 1L13.013 18h5.737A3.25 3.25 0 0 0 22 14.75"/>`
} as const;

export default function CommentMentionIcon({ 
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

  const gradientId = 'commentmentionicon_gradient';
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