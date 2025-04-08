
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M22.172 4.172a4 4 0 1 1 5.656 5.656c-.726.727-2.392 1.887-3.827 2.839a114 114 0 0 1-2.204 1.424l3.228 3.227a4.5 4.5 0 0 1 0 6.364l-3.464 3.464a1.5 1.5 0 0 1-2.122 0l-.94-.939-2.938 2.94a1.5 1.5 0 0 1-2.122 0L2.853 18.56a1.5 1.5 0 0 1 0-2.122l2.94-2.939-.94-.94a1.5 1.5 0 0 1 0-2.12l3.465-3.465a4.5 4.5 0 0 1 6.364 0l3.227 3.227A120 120 0 0 1 19.333 8c.952-1.435 2.112-3.101 2.839-3.827m-1.1 9.193a109 109 0 0 0 2.376-1.532c1.46-.969 3.033-2.071 3.673-2.712A3 3 0 1 0 22.88 4.88c-.641.64-1.744 2.212-2.713 3.673a114 114 0 0 0-1.532 2.376zm-7.097-5.683a3.5 3.5 0 0 0-4.95 0l-3.464 3.464a.5.5 0 0 0 0 .708L20.146 26.44a.5.5 0 0 0 .707 0l3.465-3.464a3.5 3.5 0 0 0 0-4.95zM3.56 17.146a.5.5 0 0 0 0 .708l10.585 10.585a.5.5 0 0 0 .707 0l2.94-2.939L6.5 14.207z"/>`
} as const;

export default function StampIcon({ 
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

  const gradientId = 'stampicon_gradient';
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