
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6 10a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path d="M38 23a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H24a1 1 0 0 1-1-1V24a1 1 0 0 1 1-1z"/><path d="M25 41a1 1 0 0 1-1 1H10a4 4 0 0 1-4-4V24a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1zm5.254-35.755a4.25 4.25 0 0 1 6.01.02l6.463 6.508a4.25 4.25 0 0 1-.02 6.01l-6.496 6.45a4.25 4.25 0 0 1-6.01-.02l-6.463-6.508a4.25 4.25 0 0 1 .021-6.01z"/>`,
  'filled': `<path d="M25 19.01 28.99 23H25zm5.245-13.765L25 10.49v-.24A4.25 4.25 0 0 0 20.75 6h-10.5A4.25 4.25 0 0 0 6 10.25v27.5A4.25 4.25 0 0 0 10.25 42h27.5A4.25 4.25 0 0 0 42 37.75v-10.5A4.25 4.25 0 0 0 37.75 23h-.24l5.245-5.244a4.25 4.25 0 0 0 0-6.01l-6.5-6.5a4.25 4.25 0 0 0-6.01 0M33.294 25.5h4.456c.967 0 1.75.784 1.75 1.75v10.5a1.75 1.75 0 0 1-1.75 1.75H25v-14zM10.25 8.5h10.5c.966 0 1.75.784 1.75 1.75V23h-14V10.25c0-.966.784-1.75 1.75-1.75m12.25 17v14H10.25a1.75 1.75 0 0 1-1.75-1.75V25.5z"/>`,
  'regular': `<path d="m32.013 7.013-6.5 6.5a1.75 1.75 0 0 0 0 2.475l6.5 6.5c.334.334.77.505 1.209.512h.056a1.74 1.74 0 0 0 1.21-.512l6.5-6.5a1.75 1.75 0 0 0 0-2.475l-6.5-6.5a1.75 1.75 0 0 0-2.475 0M28.989 23 25 19.01V23zM25 10.49l5.245-5.245a4.25 4.25 0 0 1 6.01 0l6.5 6.5a4.25 4.25 0 0 1 0 6.01L37.511 23h.239A4.25 4.25 0 0 1 42 27.25v10.5A4.25 4.25 0 0 1 37.75 42h-27.5A4.25 4.25 0 0 1 6 37.75v-27.5A4.25 4.25 0 0 1 10.25 6h10.5A4.25 4.25 0 0 1 25 10.25zm8.206 15.01H25v14h12.75a1.75 1.75 0 0 0 1.75-1.75v-10.5a1.75 1.75 0 0 0-1.75-1.75zM8.5 10.25V23h14V10.25a1.75 1.75 0 0 0-1.75-1.75h-10.5a1.75 1.75 0 0 0-1.75 1.75m0 15.25v12.25c0 .967.784 1.75 1.75 1.75H22.5v-14z"/>`
} as const;

export default function AppsIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'appsicon_gradient';
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