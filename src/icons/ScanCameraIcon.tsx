
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12.5A6.5 6.5 0 0 1 12.5 6h5.343a1.5 1.5 0 0 1 0 3H12.5A3.5 3.5 0 0 0 9 12.5v5.343a1.5 1.5 0 0 1-3 0zm22.657-5a1.5 1.5 0 0 1 1.5-1.5H35.5a6.5 6.5 0 0 1 6.5 6.5v5.343a1.5 1.5 0 0 1-3 0V12.5A3.5 3.5 0 0 0 35.5 9h-5.343a1.5 1.5 0 0 1-1.5-1.5M7.5 28.657a1.5 1.5 0 0 1 1.5 1.5V35.5a3.5 3.5 0 0 0 3.5 3.5h5.343a1.5 1.5 0 0 1 0 3H12.5A6.5 6.5 0 0 1 6 35.5v-5.343a1.5 1.5 0 0 1 1.5-1.5m33 0a1.5 1.5 0 0 1 1.5 1.5V35.5a6.5 6.5 0 0 1-6.5 6.5h-5.343a1.5 1.5 0 0 1 0-3H35.5a3.5 3.5 0 0 0 3.5-3.5v-5.343a1.5 1.5 0 0 1 1.5-1.5M27 24.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0m.865-8.887a2.25 2.25 0 0 0-1.94-1.11h-3.803a2.25 2.25 0 0 0-1.917 1.073L19.33 17h-2.08A3.25 3.25 0 0 0 14 20.25v9.5A3.25 3.25 0 0 0 17.25 33h13.5A3.25 3.25 0 0 0 34 29.75v-9.5A3.25 3.25 0 0 0 30.75 17h-2.07zM19.5 24.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`,
  'regular': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h5.5a1.25 1.25 0 1 1 0 2.5h-5.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0zm23-5c0-.69.56-1.25 1.25-1.25h5.5A6.25 6.25 0 0 1 42 12.25v5.5a1.25 1.25 0 1 1-2.5 0v-5.5a3.75 3.75 0 0 0-3.75-3.75h-5.5c-.69 0-1.25-.56-1.25-1.25M7.25 29c.69 0 1.25.56 1.25 1.25v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a1.25 1.25 0 1 1 0 2.5h-5.5A6.25 6.25 0 0 1 6 35.75v-5.5c0-.69.56-1.25 1.25-1.25m33.5 0c.69 0 1.25.56 1.25 1.25v5.5A6.25 6.25 0 0 1 35.75 42h-5.5a1.25 1.25 0 1 1 0-2.5h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5c0-.69.56-1.25 1.25-1.25M27 24.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0m.865-8.887a2.25 2.25 0 0 0-1.94-1.11h-3.803a2.25 2.25 0 0 0-1.917 1.073L19.33 17h-2.08A3.25 3.25 0 0 0 14 20.25v9.5A3.25 3.25 0 0 0 17.25 33h13.5A3.25 3.25 0 0 0 34 29.75v-9.5A3.25 3.25 0 0 0 30.75 17h-2.07zM19.5 24.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`
} as const;

export default function ScanCameraIcon({ 
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

  const gradientId = 'scancameraicon_gradient';
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