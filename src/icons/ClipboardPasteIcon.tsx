
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.17 6H7.5A1.5 1.5 0 0 0 6 7.5v19A1.5 1.5 0 0 0 7.5 28H12a1 1 0 1 1 0 2H7.5A3.5 3.5 0 0 1 4 26.5v-19A3.5 3.5 0 0 1 7.5 4h1.67A3 3 0 0 1 12 2h6c1.306 0 2.418.835 2.83 2h1.67A3.5 3.5 0 0 1 26 7.5a1 1 0 1 1-2 0A1.5 1.5 0 0 0 22.5 6h-1.67A3 3 0 0 1 18 8h-6a3 3 0 0 1-2.83-2M11 5a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2h-6a1 1 0 0 0-1 1m3 8.5a3.5 3.5 0 0 1 3.5-3.5h8a3.5 3.5 0 0 1 3.5 3.5v13a3.5 3.5 0 0 1-3.5 3.5h-8a3.5 3.5 0 0 1-3.5-3.5z"/>`,
  'light': `<path d="M9.05 4a2.5 2.5 0 0 1 2.45-2h7a2.5 2.5 0 0 1 2.45 2h1.8A3.25 3.25 0 0 1 26 7.25v1.256a5 5 0 0 0-.25-.006H25V7.25A2.25 2.25 0 0 0 22.75 5h-1.8v.004A2.5 2.5 0 0 1 18.5 7h-7a2.5 2.5 0 0 1-2.45-2h-1.8A2.25 2.25 0 0 0 5 7.25v19.5A2.25 2.25 0 0 0 7.25 29h5.816c.196.365.439.7.72 1H7.25A3.25 3.25 0 0 1 4 26.75V7.25A3.25 3.25 0 0 1 7.25 4zM20 4.5A1.5 1.5 0 0 0 18.5 3h-7a1.5 1.5 0 0 0 0 3h7A1.5 1.5 0 0 0 20 4.5m-6 8.75A3.25 3.25 0 0 1 17.25 10h8.5A3.25 3.25 0 0 1 29 13.25v13.5A3.25 3.25 0 0 1 25.75 30h-8.5A3.25 3.25 0 0 1 14 26.75zM17.25 11A2.25 2.25 0 0 0 15 13.25v13.5A2.25 2.25 0 0 0 17.25 29h8.5A2.25 2.25 0 0 0 28 26.75v-13.5A2.25 2.25 0 0 0 25.75 11z"/>`,
  'regular': `<path d="M7.5 6h1.67A3 3 0 0 0 12 8h6a3 3 0 0 0 2.83-2h1.67A1.5 1.5 0 0 1 24 7.5a1 1 0 1 0 2 0A3.5 3.5 0 0 0 22.5 4h-1.67A3 3 0 0 0 18 2h-6a3 3 0 0 0-2.83 2H7.5A3.5 3.5 0 0 0 4 7.5v19A3.5 3.5 0 0 0 7.5 30H12a1 1 0 1 0 0-2H7.5A1.5 1.5 0 0 1 6 26.5v-19A1.5 1.5 0 0 1 7.5 6M12 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2m5.5 6a3.5 3.5 0 0 0-3.5 3.5v13a3.5 3.5 0 0 0 3.5 3.5h8a3.5 3.5 0 0 0 3.5-3.5v-13a3.5 3.5 0 0 0-3.5-3.5zM16 13.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5z"/>`
} as const;

export default function ClipboardPasteIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'clipboardpasteicon_gradient';
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