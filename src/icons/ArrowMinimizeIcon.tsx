
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 15h8a1 1 0 0 1 .993.883L13 16v8a1 1 0 0 1-1.993.117L11 24v-5.587l-7.293 7.294a1 1 0 0 1-1.497-1.32l.083-.094L9.585 17H4a1 1 0 0 1-.993-.883L3 16a1 1 0 0 1 .883-.993zh8zM25.707 2.293a1 1 0 0 1 .083 1.32l-.083.094L18.413 11H24a1 1 0 0 1 .993.883L25 12a1 1 0 0 1-.883.993L24 13h-8a1 1 0 0 1-.993-.883L15 12V4a1 1 0 0 1 1.993-.117L17 4v5.585l7.293-7.292a1 1 0 0 1 1.414 0"/>`,
  'regular': `<path d="M4.25 15h8a.75.75 0 0 1 .743.648l.007.102v8a.75.75 0 0 1-1.493.102l-.007-.102v-6.19l-7.97 7.97a.75.75 0 0 1-1.133-.976l.073-.084 7.968-7.97H4.25a.75.75 0 0 1-.743-.648L3.5 15.75a.75.75 0 0 1 .648-.743zh8zM25.53 2.47a.75.75 0 0 1 .073.976l-.073.084-7.97 7.97h6.19a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L23.75 13h-8a.75.75 0 0 1-.743-.648L15 12.25v-8a.75.75 0 0 1 1.493-.102l.007.102v6.188l7.97-7.968a.75.75 0 0 1 1.06 0"/>`
} as const;

export default function ArrowMinimizeIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'arrowminimizeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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