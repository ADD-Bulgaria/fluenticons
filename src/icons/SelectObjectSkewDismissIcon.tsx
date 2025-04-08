
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.586 6.414a2 2 0 0 0 1.9.527 2 2 0 1 0-1.923-.55zM2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.586 6.414a2 2 0 0 0 1.9.527A2.004 2.004 0 0 0 10 5a2 2 0 1 0-3.437 1.39zM6.26 7.445l-2.445 8.56Q3.906 16 4 16c.648 0 1.248.206 1.739.555l2.446-8.56a3 3 0 0 1-1.923-.55M17.171 6h-6.342a3 3 0 0 0 0-2h6.342a3 3 0 0 0 0 2m-5.673 14a6.5 6.5 0 0 1-.48-2H6.83a3 3 0 0 1 0 2zm8.687-12.006-.928 3.246a6.5 6.5 0 0 0-2.013-.235l1.017-3.56a3 3 0 0 0 1.924.55M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z"/>`,
  'regular': `<path d="M18.882 6.658a2 2 0 0 0 1.33.33 2 2 0 1 0-1.33-.33M2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.882 6.658a2 2 0 0 0 1.33.33A2.002 2.002 0 0 0 9.855 4.25a2 2 0 1 0-2.973 2.408m-2.805 9.343 2.404-8.414c.425.25.917.399 1.442.412L5.52 16.413A3 3 0 0 0 4.077 16M17.095 5.75h-6.19a3 3 0 0 0 0-1.5h6.19a3 3 0 0 0 0 1.5m-5.695 14a6.5 6.5 0 0 1-.357-1.5H6.905a3 3 0 0 1 0 1.5zm8.523-11.751-.908 3.179a6.5 6.5 0 0 0-1.51-.178l.976-3.413c.425.25.917.399 1.442.412M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z"/>`
} as const;

export default function SelectObjectSkewDismissIcon({ 
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

  const gradientId = 'selectobjectskewdismissicon_gradient';
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