
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 8.25A4.25 4.25 0 0 1 12.25 4h19a4.25 4.25 0 0 1 4.25 4.25V27h-4.154l-10.17-10.17A6.25 6.25 0 0 0 16.758 15H10.25c-.793 0-1.552.148-2.25.417zM37.5 27h.25c.793 0 1.552.148 2.25.417V13.25a4.25 4.25 0 0 0-2.5-3.874zM6 21.25A4.25 4.25 0 0 1 10.25 17h6.507a4.25 4.25 0 0 1 3.006 1.245l10.242 10.242a1.75 1.75 0 0 0 1.238.513h6.507A4.25 4.25 0 0 1 42 33.25v4.5A6.25 6.25 0 0 1 35.75 44h-23.5A6.25 6.25 0 0 1 6 37.75z"/>`,
  'regular': `<path d="M12.25 4A4.25 4.25 0 0 0 8 8.25v9.394c-1.201.75-2 2.085-2 3.606v16.5A6.25 6.25 0 0 0 12.25 44h23.5A6.25 6.25 0 0 0 42 37.75v-4.5c0-1.52-.799-2.855-2-3.606V13.25a4.25 4.25 0 0 0-2.5-3.874V29h-2V8.25A4.25 4.25 0 0 0 31.25 4zM33 29h-1.757a1.75 1.75 0 0 1-1.238-.513L19.763 18.245A4.25 4.25 0 0 0 16.757 17H10.5V8.25c0-.966.784-1.75 1.75-1.75h19c.967 0 1.75.784 1.75 1.75zM8.5 21.25c0-.966.784-1.75 1.75-1.75h6.507c.464 0 .91.184 1.238.513l10.242 10.242a4.25 4.25 0 0 0 3.006 1.245h6.507c.967 0 1.75.783 1.75 1.75v4.5a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75z"/>`
} as const;

export default function DocumentFolderIcon({ 
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

  const gradientId = 'documentfoldericon_gradient';
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