
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.001 21.25a1 1 0 0 1-.205-.021c-.542-.113-5.296-1.197-5.296-4.358 0-1.815 1.603-2.684 2.773-3.318C8.347 12.97 9 12.574 9 11.992s-.652-.976-1.727-1.557C6.101 9.8 4.5 8.932 4.5 7.12c0-3.159 4.755-4.237 5.297-4.349a1.002 1.002 0 0 1 1.039 1.526 1 1 0 0 1-.632.432c-1.161.244-3.705 1.184-3.705 2.391 0 .58.652.975 1.726 1.556 1.172.634 2.774 1.502 2.774 3.315s-1.603 2.684-2.773 3.318c-1.074.583-1.727.979-1.727 1.561 0 1.229 2.496 2.148 3.704 2.4.539.113.887.644.775 1.183a1.01 1.01 0 0 1-.979.796zm8.978-.796a1.003 1.003 0 0 0-.775-1.183c-1.208-.252-3.704-1.171-3.704-2.4 0-.582.652-.978 1.727-1.561C17.398 14.676 19 13.807 19 11.992s-1.603-2.681-2.774-3.315c-1.073-.582-1.726-.976-1.726-1.556 0-1.208 2.544-2.147 3.705-2.391a.997.997 0 0 0 .774-1.183 1.004 1.004 0 0 0-1.181-.775c-.542.112-5.297 1.19-5.297 4.349 0 1.812 1.602 2.68 2.773 3.315 1.074.581 1.727.976 1.727 1.557s-.652.978-1.727 1.561c-1.171.634-2.773 1.503-2.773 3.318 0 3.162 4.754 4.245 5.296 4.358a1.006 1.006 0 0 0 1.184-.775z"/>`,
  'regular': `<path d="M10.251 21a.7.7 0 0 1-.154-.016C9.576 20.875 5 19.834 5 16.87c0-1.667 1.465-2.46 2.643-3.099 1.155-.626 1.857-1.059 1.857-1.78 0-.72-.701-1.15-1.857-1.776C6.466 9.577 5 8.785 5 7.12c0-2.96 4.575-3.996 5.098-4.104a.75.75 0 0 1 .306 1.469c-1.013.212-3.903 1.152-3.903 2.636 0 .72.701 1.15 1.856 1.776 1.178.638 2.644 1.431 2.644 3.096s-1.465 2.46-2.643 3.1c-1.155.625-1.857 1.058-1.857 1.78 0 1.493 2.891 2.433 3.903 2.644a.751.751 0 0 1-.152 1.485zm8.733-.597a.75.75 0 0 0-.581-.888c-1.013-.21-3.903-1.15-3.903-2.645 0-.72.702-1.154 1.857-1.78C17.535 14.452 19 13.658 19 11.991s-1.466-2.458-2.644-3.096C15.201 8.27 14.5 7.838 14.5 7.12c0-1.483 2.891-2.423 3.903-2.636a.75.75 0 0 0-.306-1.469c-.522.108-5.098 1.145-5.098 4.104 0 1.665 1.466 2.458 2.643 3.095 1.156.625 1.857 1.057 1.857 1.776s-.702 1.154-1.857 1.78c-1.178.638-2.643 1.432-2.643 3.1 0 2.963 4.575 4.004 5.097 4.113a.746.746 0 0 0 .887-.58z"/>`
} as const;

export default function HapticStrongIcon({ 
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

  const gradientId = 'hapticstrongicon_gradient';
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