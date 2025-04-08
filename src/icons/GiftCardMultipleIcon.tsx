
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 4h3v2.708A2.5 2.5 0 0 0 4.708 10H2V7a3 3 0 0 1 3-3M2 14.5v-3h4.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06L8 12.56v4.94H5a3 3 0 0 1-3-3m7.5 3h7a3 3 0 0 0 3-3v-3h-8.94l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 12.56zm3.292-7.5H19.5V7a3 3 0 0 0-3-3h-7v2.708A2.5 2.5 0 0 1 12.792 10M10.5 10h-1V9a1 1 0 1 1 1 1M7 10h1V8.992A1 1 0 1 0 7 10m.5 10a3 3 0 0 1-2.599-1.5H16.5a4 4 0 0 0 4-4V6.901A3 3 0 0 1 22 9.5v5a5.5 5.5 0 0 1-5.5 5.5z"/>`,
  'regular': `<path d="M5 4a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h11.5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM3.5 7A1.5 1.5 0 0 1 5 5.5h3v1.208A2.5 2.5 0 0 0 4.708 10H3.5zm6-.292V5.5h7A1.5 1.5 0 0 1 18 7v3h-5.208A2.5 2.5 0 0 0 9.5 6.708m1.06 4.792H18v3a1.5 1.5 0 0 1-1.5 1.5h-7v-3.44l1.72 1.72a.75.75 0 1 0 1.06-1.06zM8 12.56V16H5a1.5 1.5 0 0 1-1.5-1.5v-3h3.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06zM11.5 9a1 1 0 0 1-1 1h-1V9a1 1 0 0 1 2 0M7 8a1 1 0 0 1 1 .996V10H7a1 1 0 1 1 0-2m.5 12a3 3 0 0 1-2.599-1.5H16.5a4 4 0 0 0 4-4V6.901A3 3 0 0 1 22 9.5v5a5.5 5.5 0 0 1-5.5 5.5z"/>`
} as const;

export default function GiftCardMultipleIcon({ 
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

  const gradientId = 'giftcardmultipleicon_gradient';
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