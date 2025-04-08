
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h2.482c.464 0 .91.184 1.238.513l1.28 1.28-2.06 2.06A.5.5 0 0 1 7.085 7H2zM2 8v6.5A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.743V7.5A2.5 2.5 0 0 0 15.5 5h-4.793l-2.56 2.56A1.5 1.5 0 0 1 7.085 8zm11.55 3.15c-.29.727-.493 1.722-.54 2.85h2.98c-.047-1.128-.25-2.123-.54-2.85-.167-.417-.353-.722-.535-.914-.18-.19-.32-.236-.415-.236s-.235.046-.415.236c-.182.192-.368.497-.535.914m-.72-.83a5 5 0 0 0-.209.459c-.344.862-.565 1.987-.612 3.221h-1.982a4.5 4.5 0 0 1 2.802-3.68m3.34 0q.112.218.208.459c.345.862.565 1.987.612 3.221h1.982a4.5 4.5 0 0 0-2.802-3.68M18.972 15H16.99c-.047 1.234-.267 2.36-.612 3.221q-.096.24-.208.459A4.5 4.5 0 0 0 18.972 15M14.5 19c.094 0 .235-.046.415-.236.182-.192.368-.497.535-.914.29-.727.493-1.722.54-2.85h-2.98c.047 1.128.25 2.123.54 2.85.167.417.353.722.535.913.18.191.32.237.415.237m-1.67-.32A4.5 4.5 0 0 1 10.026 15h1.982c.047 1.234.268 2.36.612 3.221q.096.24.208.459"/>`,
  'regular': `<path d="M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1-.393-1H4.5A1.5 1.5 0 0 1 3 14.5V8h4.086a1.5 1.5 0 0 0 1.06-.44L9.707 6H15.5A1.5 1.5 0 0 1 17 7.5v2.1q.538.276 1 .657V7.5A2.5 2.5 0 0 0 15.5 5H9.707L8.22 3.513A1.75 1.75 0 0 0 6.982 3zM3 5.5A1.5 1.5 0 0 1 4.5 4h2.482a.75.75 0 0 1 .53.22l1.28 1.28L7.44 6.854A.5.5 0 0 1 7.086 7H3zm10.55 5.65c-.29.727-.493 1.722-.54 2.85h2.98c-.047-1.128-.25-2.123-.54-2.85-.167-.417-.353-.722-.535-.914-.18-.19-.32-.236-.415-.236s-.235.046-.415.236c-.182.192-.368.497-.535.914m-.72-.83a5 5 0 0 0-.209.459c-.344.862-.565 1.987-.612 3.221h-1.982a4.5 4.5 0 0 1 2.802-3.68m3.34 0q.112.218.208.459c.345.862.565 1.987.612 3.221h1.982a4.5 4.5 0 0 0-2.802-3.68M18.972 15H16.99c-.047 1.234-.267 2.36-.612 3.221q-.096.24-.208.459A4.5 4.5 0 0 0 18.972 15M14.5 19c.094 0 .235-.046.415-.236.182-.192.368-.497.535-.914.29-.727.493-1.722.54-2.85h-2.98c.047 1.128.25 2.123.54 2.85.167.417.353.722.535.913.18.191.32.237.415.237m-1.67-.32A4.5 4.5 0 0 1 10.026 15h1.982c.047 1.234.268 2.36.612 3.221q.096.24.208.459"/>`
} as const;

export default function FolderGlobeIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'folderglobeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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