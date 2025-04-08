
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M14 3.5a.5.5 0 0 0-1 0v2.552a3.24 3.24 0 0 0-1.702.897l-5.346 5.347a3.25 3.25 0 0 0 0 4.596l4.153 4.153a3.25 3.25 0 0 0 4.596 0l5.346-5.347a3.25 3.25 0 0 0 0-4.596L15.895 6.95A3.24 3.24 0 0 0 14 6.023zm-1 3.578V9.5a.5.5 0 0 0 1 0V7.034a2.24 2.24 0 0 1 1.187.623l4.153 4.152A2.25 2.25 0 0 1 19.918 14H6.08c.1-.365.293-.71.58-.997l5.346-5.346c.287-.287.63-.48.995-.58M6.66 16.184A2.24 2.24 0 0 1 6.037 15H19.33l-5.337 5.338a2.25 2.25 0 0 1-3.182 0zm15.531.248a.974.974 0 0 1 1.62 0 28 28 0 0 1 1.342 2.19c.224.417.432.843.585 1.238.148.385.263.787.263 1.139a3 3 0 1 1-6 0c0-.352.115-.754.263-1.139.153-.395.36-.821.585-1.237.45-.833.986-1.662 1.342-2.191m.81.587a26 26 0 0 0-1.272 2.078c-.213.396-.4.782-.532 1.123-.136.353-.196.615-.196.779a2 2 0 1 0 4 0c0-.164-.06-.426-.196-.779a10 10 0 0 0-.532-1.123A26 26 0 0 0 23 17.02m5 5.23a2.24 2.24 0 0 0-.505-1.42c-.03-.573-.207-1.115-.359-1.509l-.005-.014A3.25 3.25 0 0 1 29 22.25v3.5A3.25 3.25 0 0 1 25.75 29H6.25A3.25 3.25 0 0 1 3 25.75v-3.5a3.25 3.25 0 0 1 2.952-3.236l.986.986H6.25A2.25 2.25 0 0 0 4 22.25v3.5A2.25 2.25 0 0 0 6.25 28h19.5A2.25 2.25 0 0 0 28 25.75z"/>`
} as const;

export default function ColorFillIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'colorfillicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}