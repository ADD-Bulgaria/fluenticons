
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 12a8 8 0 1 1 16 0v10.996a13.03 13.03 0 0 0-7.65 8.997A8 8 0 0 1 14 24zm8.002 23.25H22c-6.351 0-11.5-5.149-11.5-11.5a1.25 1.25 0 1 0-2.5 0c0 7.225 5.473 13.172 12.5 13.92v5.08a1.25 1.25 0 1 0 2.5 0v-2.741a13 13 0 0 1-.998-4.759M35 46c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11m0-2a9 9 0 0 0 7.032-14.618l-12.65 12.65A8.96 8.96 0 0 0 35 44m-7.032-3.382 12.65-12.65a9 9 0 0 0-12.65 12.65"/>`,
  'regular': `<path d="M22 4a8 8 0 0 0-8 8v12a8 8 0 0 0 8.35 7.993c.218-.924.536-1.81.94-2.645q-.623.151-1.29.152a5.5 5.5 0 0 1-5.5-5.5V12a5.5 5.5 0 1 1 11 0v12q0 .197-.014.39A13 13 0 0 1 30 22.996V12a8 8 0 0 0-8-8m.002 31.25c.032 1.684.384 3.29.998 4.759v2.741a1.25 1.25 0 1 1-2.5 0v-5.08C13.473 36.923 8 30.976 8 23.75a1.25 1.25 0 1 1 2.5 0c0 6.351 5.149 11.5 11.5 11.5zM35 46c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11m0-2a9 9 0 0 0 7.032-14.618l-12.65 12.65A8.96 8.96 0 0 0 35 44m-7.032-3.382 12.65-12.65a9 9 0 0 0-12.65 12.65"/>`
} as const;

export default function MicProhibitedIcon({ 
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

  const gradientId = 'micprohibitedicon_gradient';
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