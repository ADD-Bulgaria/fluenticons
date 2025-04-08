
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 8A4.75 4.75 0 0 0 4 12.75v18.5A4.75 4.75 0 0 0 8.75 36h20.552A4.8 4.8 0 0 1 29 34.334V27.75c0-1.6.79-3.013 2-3.873V20.75A4.75 4.75 0 0 1 35.75 16h5.5c1.025 0 1.974.325 2.75.877V12.75A4.75 4.75 0 0 0 39.25 8zm25.212 32.033-2.57-4.284A2.75 2.75 0 0 1 31 34.334V27.75a2.75 2.75 0 0 1 2-2.646V20.75A2.75 2.75 0 0 1 35.75 18h5.5A2.75 2.75 0 0 1 44 20.75v4.354a2.75 2.75 0 0 1 2 2.646v6.584c0 .499-.136.988-.392 1.415l-2.572 4.288a.25.25 0 0 0-.036.129v3.084A2.75 2.75 0 0 1 40.25 46h-3.5A2.75 2.75 0 0 1 34 43.25v-3.084a.25.25 0 0 0-.036-.13l-.007.005zM31.31 39.5l.69 1.15V42H11.25a1.25 1.25 0 1 1 0-2.5zM41.5 25v-4.25a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V25z"/>`,
  'regular': `<path d="M8.75 8A4.75 4.75 0 0 0 4 12.75v18.5A4.75 4.75 0 0 0 8.75 36h20.552A4.8 4.8 0 0 1 29 34.334V33.5H8.75a2.25 2.25 0 0 1-2.25-2.25v-18.5a2.25 2.25 0 0 1 2.25-2.25h30.5a2.25 2.25 0 0 1 2.25 2.25v3.256a4.7 4.7 0 0 1 2.5.87V12.75A4.75 4.75 0 0 0 39.25 8zm2.5 31.5h20.06l.69 1.15V42H11.25a1.25 1.25 0 1 1 0-2.5m22.714.537a.25.25 0 0 1 .036.129v3.084A2.75 2.75 0 0 0 36.75 46h3.5A2.75 2.75 0 0 0 43 43.25v-3.084a.25.25 0 0 1 .036-.13l2.572-4.287A2.75 2.75 0 0 0 46 34.334V27.75a2.75 2.75 0 0 0-2-2.646V20.75A2.75 2.75 0 0 0 41.25 18h-5.5A2.75 2.75 0 0 0 33 20.75v4.354a2.75 2.75 0 0 0-2 2.646v6.584c0 .499.136.988.392 1.415l2.57 4.284-.005.008zM41.5 25h-6v-4.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25z"/>`
} as const;

export default function TvUsbIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'tvusbicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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