
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5-4.925 5-11 5S5 9.761 5 7m0 6.253v-2.377c.726.615 1.571 1.106 2.394 1.48a16 16 0 0 0 1.808.683Q8.61 13 8 13c-1.039 0-2.052.087-3 .253m19.606-.897C22.3 13.404 19.256 14 16 14a26 26 0 0 1-2.718-.142c.414.154.808.33 1.173.529 1.067.58 2.423 1.67 2.537 3.379L17 17.76V28c0 .784-.271 1.455-.648 1.997C22.266 29.914 27 27.708 27 25V10.876c-.726.615-1.571 1.106-2.394 1.48M1 28c0 .546.34 1.059.936 1.5C3.146 30.397 5.41 31 8 31c3.866 0 7-1.343 7-3v-7.327a7 7 0 0 1-1.46.827l-.04.017c-.6.254-1.274.463-2 .622A16.5 16.5 0 0 1 8 22.5c-2.086 0-4.046-.36-5.54-1A7 7 0 0 1 1 20.673zm10.5-7.401c.772-.192 1.45-.445 2-.743.94-.51 1.5-1.155 1.5-1.856 0-.7-.56-1.345-1.5-1.856-.55-.298-1.228-.551-2-.743A14.7 14.7 0 0 0 8 15c-3.866 0-7 1.343-7 3s3.134 3 7 3c1.275 0 2.47-.146 3.5-.401"/>`,
  'regular': `<path d="M27 7c0-2.761-4.925-5-11-5S5 4.239 5 7v6.253c.64-.112 1.312-.188 2-.226V9.876C8.99 11.16 12.28 12 16 12s7.01-.84 9-2.124V25c0 .114-.193.871-2.05 1.715-1.474.67-3.552 1.156-5.95 1.263V28c0 .784-.271 1.455-.648 1.997C22.266 29.914 27 27.708 27 25zm-2 0c0 .114-.193.871-2.05 1.715C21.276 9.477 18.82 10 16 10s-5.275-.523-6.95-1.285C7.192 7.87 7 7.115 7 7s.193-.871 2.05-1.715C10.724 4.523 13.18 4 16 4s5.275.523 6.95 1.285C24.808 6.13 25 6.885 25 7M1 28c0 .546.34 1.059.936 1.5C3.146 30.397 5.41 31 8 31c3.866 0 7-1.343 7-3v-7.327a7 7 0 0 1-1.46.827l-.04.017c-.6.254-1.274.463-2 .622A16.5 16.5 0 0 1 8 22.5c-2.086 0-4.046-.36-5.54-1A7 7 0 0 1 1 20.673zm10.5-7.401c.772-.192 1.45-.445 2-.743.94-.51 1.5-1.155 1.5-1.856 0-.7-.56-1.345-1.5-1.856-.55-.298-1.228-.551-2-.743A14.7 14.7 0 0 0 8 15c-3.866 0-7 1.343-7 3s3.134 3 7 3c1.275 0 2.47-.146 3.5-.401"/>`
} as const;

export default function DatabaseMultipleIcon({ 
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

  const gradientId = 'databasemultipleicon_gradient';
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