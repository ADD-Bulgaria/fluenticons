
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 2A2.5 2.5 0 0 0 2 4.5V5h12v-.5A2.5 2.5 0 0 0 11.5 2zM14 6H2v5.5A2.5 2.5 0 0 0 4.5 14H5v-3a3 3 0 0 1 3-3h6zm-7.93 4.475A2 2 0 0 1 8 9h8a2 2 0 0 1 1.93 1.475L12 13.961zm6.31 4.423L18 11.594V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4.405l5.62 3.303a.75.75 0 0 0 .76 0"/>`,
  'regular': `<path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V8h-1V6H3v5.5A1.5 1.5 0 0 0 4.5 13H5v1h-.5A2.5 2.5 0 0 1 2 11.5zm11 0A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5V5h10zM8 9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.022l-5 2.94-5-2.94zm0 1.182 4.62 2.716a.75.75 0 0 0 .76 0L17 12.182V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>`
} as const;

export default function CalendarMailIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'calendarmailicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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