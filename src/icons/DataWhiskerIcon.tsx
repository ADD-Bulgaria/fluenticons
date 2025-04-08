
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.75 2a.75.75 0 0 0 0 1.5h1V5h-.5A2.25 2.25 0 0 0 4 7.25V11h7V7.25A2.25 2.25 0 0 0 8.75 5h-.5V3.5h1a.75.75 0 0 0 0-1.5zm0 16a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.5h.5A2.25 2.25 0 0 0 11 14.25V12.5H4v1.75a2.25 2.25 0 0 0 2.25 2.25h.5V18zM14 4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-1V7h.5A2.25 2.25 0 0 1 20 9.25V11h-7V9.25A2.25 2.25 0 0 1 15.25 7h.5V5.5h-1a.75.75 0 0 1-.75-.75m-1 11.5V12.5h7v3.75a2.25 2.25 0 0 1-2.25 2.25h-.5V20h1a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h1v-1.5h-.5A2.25 2.25 0 0 1 13 16.25"/>`,
  'regular': `<path d="M14.75 4a.75.75 0 0 0 0 1.5h1V7h-.5A2.25 2.25 0 0 0 13 9.25v7a2.25 2.25 0 0 0 2.25 2.25h.5V20h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.5h.5A2.25 2.25 0 0 0 20 16.25v-7A2.25 2.25 0 0 0 17.75 7h-.5V5.5h1a.75.75 0 0 0 0-1.5zm-.25 5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75V11h-4zm0 3.25h4v3.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75zM5.75 2a.75.75 0 0 0 0 1.5h1V5h-.5A2.25 2.25 0 0 0 4 7.25v7a2.25 2.25 0 0 0 2.25 2.25h.5V18h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.5h.5A2.25 2.25 0 0 0 11 14.25v-7A2.25 2.25 0 0 0 8.75 5h-.5V3.5h1a.75.75 0 0 0 0-1.5zm.5 13a.75.75 0 0 1-.75-.75V12.5h4v1.75a.75.75 0 0 1-.75.75zm3.25-4h-4V7.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75z"/>`
} as const;

export default function DataWhiskerIcon({ 
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

  const gradientId = 'datawhiskericon_gradient';
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