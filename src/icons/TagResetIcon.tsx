
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 4.25A2.25 2.25 0 0 0 19.75 2h-5.466a3.25 3.25 0 0 0-2.299.953l-8.5 8.51a3.25 3.25 0 0 0 .004 4.596l4.462 4.455a3.255 3.255 0 0 0 4.596-.001l.003-.003A6 6 0 0 1 12 18c0-.553.257-1.047.658-1.367l-1.645-1.646a1.75 1.75 0 0 1 0-2.474l2-2A1.75 1.75 0 0 1 15.983 12H18c.87 0 1.725.189 2.509.55l.54-.54a3.25 3.25 0 0 0 .95-2.298zm-6.5 2.752a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-.72 5.278a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H18a3.5 3.5 0 1 1-3.5 3.5.75.75 0 0 0-1.5 0 5 5 0 1 0 5-5h-3.94z"/>`,
  'regular': `<path d="M22 4.25A2.25 2.25 0 0 0 19.75 2h-5.466a3.25 3.25 0 0 0-2.299.953l-8.5 8.51a3.25 3.25 0 0 0 .004 4.596l4.462 4.455a3.255 3.255 0 0 0 4.596-.001l.003-.003a6 6 0 0 1-.486-1.636l-.577.578a1.755 1.755 0 0 1-2.477 0l-4.46-4.454a1.75 1.75 0 0 1-.015-2.462l8.512-8.523a1.75 1.75 0 0 1 1.239-.513h5.465a.75.75 0 0 1 .75.75v5.462c0 .464-.184.91-.513 1.237l-1.114 1.115a6 6 0 0 1 1.636.486l.54-.54A3.25 3.25 0 0 0 22 9.712zm-3.5 2.752a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-3.72 5.278a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H18a3.5 3.5 0 1 1-3.5 3.5.75.75 0 0 0-1.5 0 5 5 0 1 0 5-5h-3.94z"/>`
} as const;

export default function TagResetIcon({ 
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

  const gradientId = 'tagreseticon_gradient';
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