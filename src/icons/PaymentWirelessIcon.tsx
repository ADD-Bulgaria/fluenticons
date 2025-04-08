
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m5.142-31.635a16.364 16.364 0 0 1 0 23.268 1.26 1.26 0 0 1-1.774 0 1.24 1.24 0 0 1 0-1.76 13.887 13.887 0 0 0 0-19.747 1.24 1.24 0 0 1 0-1.761 1.26 1.26 0 0 1 1.774 0m-7.766 2.99a1.343 1.343 0 0 1 1.82 0c5.068 4.774 5.068 12.515 0 17.29a1.343 1.343 0 0 1-1.82 0 1.163 1.163 0 0 1 0-1.715c4.063-3.827 4.063-10.033 0-13.86a1.163 1.163 0 0 1 0-1.715m-5.508 3.01a1.263 1.263 0 0 1 1.775 0 7.92 7.92 0 0 1 0 11.27 1.263 1.263 0 0 1-1.775 0 1.237 1.237 0 0 1 0-1.761 5.447 5.447 0 0 0 0-7.749 1.237 1.237 0 0 1 0-1.76"/>`,
  'regular': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24 33.665 41.5 24 41.5 6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m5.142 8.365a1.26 1.26 0 0 0-1.774 0 1.24 1.24 0 0 0 0 1.76 13.887 13.887 0 0 1 0 19.747 1.24 1.24 0 0 0 0 1.761c.49.486 1.284.486 1.774 0a16.364 16.364 0 0 0 0-23.268m-7.765 2.99a1.344 1.344 0 0 1 1.82 0c5.068 4.774 5.068 12.515 0 17.29a1.343 1.343 0 0 1-1.82 0 1.163 1.163 0 0 1 0-1.715c4.063-3.827 4.063-10.033 0-13.86a1.163 1.163 0 0 1 0-1.715m-5.51 3.01a1.263 1.263 0 0 1 1.776 0 7.92 7.92 0 0 1 0 11.27 1.263 1.263 0 0 1-1.775 0 1.24 1.24 0 0 1 0-1.761 5.447 5.447 0 0 0 0-7.749 1.24 1.24 0 0 1 0-1.76"/>`
} as const;

export default function PaymentWirelessIcon({ 
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

  const gradientId = 'paymentwirelessicon_gradient';
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