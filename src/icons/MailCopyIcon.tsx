
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 5a4.5 4.5 0 0 0-4.372 3.432l11.871 6.43 11.874-6.43A4.5 4.5 0 0 0 25.5 5zM6 19.5v-8.863l11.523 6.242a1 1 0 0 0 .953 0L30 10.637V19.5a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 6 19.5M4 9.758A4.5 4.5 0 0 0 2 13.5v6a8.5 8.5 0 0 0 8.5 8.5h11c1.56 0 2.935-.794 3.742-2H10.5A6.5 6.5 0 0 1 4 19.5z"/>`,
  'light': `<path d="M9.5 5A4.5 4.5 0 0 0 5 9.5v11A4.5 4.5 0 0 0 9.5 25h16a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 25.5 5zM6 9.5A3.5 3.5 0 0 1 9.5 6h16A3.5 3.5 0 0 1 29 9.5v.202l-11.5 6.23L6 9.701zm0 1.34 11.261 6.1a.5.5 0 0 0 .477 0L29 10.84v9.66a3.5 3.5 0 0 1-3.5 3.5h-16A3.5 3.5 0 0 1 6 20.5zM2 12.5c0-1.072.375-2.056 1-2.829v10.83A6.5 6.5 0 0 0 9.5 27h15.829a4.5 4.5 0 0 1-2.829 1h-13A7.5 7.5 0 0 1 2 20.5z"/>`,
  'regular': `<path d="M6 9.5A4.5 4.5 0 0 1 10.5 5h15A4.5 4.5 0 0 1 30 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 6 19.5zm2-.054 10 5.417 10-5.417A2.5 2.5 0 0 0 25.5 7h-15A2.5 2.5 0 0 0 8 9.446m20 2.274-9.524 5.16a1 1 0 0 1-.953 0L8 11.72v7.78a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5zM2 13.5c0-1.56.794-2.935 2-3.742V19.5a6.5 6.5 0 0 0 6.5 6.5h14.742a4.5 4.5 0 0 1-3.742 2h-11A8.5 8.5 0 0 1 2 19.5z"/>`
} as const;

export default function MailCopyIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'mailcopyicon_gradient';
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