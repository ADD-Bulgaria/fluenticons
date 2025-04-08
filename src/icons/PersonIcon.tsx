
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.756 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.756 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"/><path d="M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.756 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.756 40 33v-.751A4.25 4.25 0 0 0 35.75 28zM24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4"/>`,
  'filled': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.755 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"/>`,
  'regular': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.755 40 33v-.751A4.25 4.25 0 0 0 35.75 28zm-1.75 4.249a1.75 1.75 0 0 1 1.75-1.749h23.5c.967 0 1.75.783 1.75 1.749V33c0 2.744-1.36 4.808-3.72 6.245C31.37 40.712 27.932 41.5 24 41.5s-7.37-.788-9.78-2.255c-2.36-1.437-3.72-3.5-3.72-6.245z"/>`
} as const;

export default function PersonIcon({ 
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

  const gradientId = 'personicon_gradient';
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