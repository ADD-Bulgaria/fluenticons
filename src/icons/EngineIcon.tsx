
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.75 3a.75.75 0 0 1 .75.75V5h2V3.75a.75.75 0 0 1 1.5 0V5h2.75a.75.75 0 0 1 .696.471l.812 2.029h.992A2.75 2.75 0 0 1 22 10.25v5.5a2.75 2.75 0 0 1-2.75 2.75h-.992l-.812 2.029a.75.75 0 0 1-.696.471h-7.5a.75.75 0 0 1-.548-.238L5.74 17.588A2.75 2.75 0 0 1 5 15.712V12.5H3.5v3.75a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V11H5V7.75A2.75 2.75 0 0 1 7.75 5H9V3.75A.75.75 0 0 1 9.75 3m.75 6.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 11.75 15h6.5a.75.75 0 0 0 0-1.5H14V9.75a.75.75 0 0 0-1.5 0v3.75h-.75c-.69 0-1.25-.56-1.25-1.25z"/>`,
  'regular': `<path d="M9.75 9a.75.75 0 0 1 .75.75v2.5c0 .69.56 1.25 1.25 1.25h.75V9.75a.75.75 0 0 1 1.5 0v3.75h4.25a.75.75 0 0 1 0 1.5h-6.5A2.75 2.75 0 0 1 9 12.25v-2.5A.75.75 0 0 1 9.75 9m0-6a.75.75 0 0 1 .75.75V5h2V3.75a.75.75 0 0 1 1.5 0V5h2.75a.75.75 0 0 1 .696.471l.812 2.029h.992A2.75 2.75 0 0 1 22 10.25v5.5a2.75 2.75 0 0 1-2.75 2.75h-.992l-.812 2.029a.75.75 0 0 1-.696.471h-7.5a.75.75 0 0 1-.548-.238L5.74 17.588A2.75 2.75 0 0 1 5 15.712V12.5H3.5v3.75a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V11H5V7.75A2.75 2.75 0 0 1 7.75 5H9V3.75A.75.75 0 0 1 9.75 3m-2 3.5c-.69 0-1.25.56-1.25 1.25v7.962c0 .316.12.621.336.853l2.74 2.935h6.666l.812-2.029A.75.75 0 0 1 17.75 17h1.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1-.696-.471L16.242 6.5z"/>`
} as const;

export default function EngineIcon({ 
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

  const gradientId = 'engineicon_gradient';
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