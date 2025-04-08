
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.105 2.777a3.25 3.25 0 0 0-4.21 0l-9.75 8.287A3.25 3.25 0 0 0 3 13.54V26.5A2.5 2.5 0 0 0 5.5 29h12.61l-3.986-4.293c-2.247-2.42-2.152-6.246.22-8.545a5.83 5.83 0 0 1 8.153.002A5.84 5.84 0 0 1 29 15.026v-1.485a3.25 3.25 0 0 0-1.145-2.477zm4.392 15.726-.646-.818a4.338 4.338 0 0 0-6.463-.446c-1.784 1.73-1.858 4.623-.165 6.447l6.459 6.955a1.106 1.106 0 0 0 1.63 0l6.462-6.949c1.698-1.826 1.623-4.726-.167-6.457a4.34 4.34 0 0 0-6.464.449z"/>`,
  'regular': `<path d="M15.19 4.3a1.25 1.25 0 0 1 1.62 0l9.75 8.288c.279.238.44.586.44.953v.974a5.8 5.8 0 0 1 2 .511v-1.485a3.25 3.25 0 0 0-1.145-2.477l-9.75-8.287a3.25 3.25 0 0 0-4.21 0l-9.75 8.287A3.25 3.25 0 0 0 3 13.54V26.5A2.5 2.5 0 0 0 5.5 29h12.61l-1.857-2H5.5a.5.5 0 0 1-.5-.5V13.54c0-.366.161-.714.44-.952zm7.307 14.203-.646-.818a4.338 4.338 0 0 0-6.463-.446c-1.784 1.73-1.858 4.623-.165 6.447l6.459 6.955a1.106 1.106 0 0 0 1.63 0l6.462-6.949c1.698-1.826 1.623-4.726-.167-6.457a4.34 4.34 0 0 0-6.464.449z"/>`
} as const;

export default function HomeHeartIcon({ 
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

  const gradientId = 'homehearticon_gradient';
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