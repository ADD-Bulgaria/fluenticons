
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 3h-9.5C1.785 3 1 3.785 1 4.75v7.5c0 .965.785 1.75 1.75 1.75h9.5c.965 0 1.75-.785 1.75-1.75v-7.5C14 3.785 13.215 3 12.25 3M7.468 6.676l-1.5 4A.51.51 0 0 1 5.5 11a.5.5 0 0 1-.468-.324l-1.5-4a.5.5 0 0 1 .012-.382.502.502 0 0 1 .924.03L5.5 9.076l1.032-2.752a.5.5 0 0 1 .645-.292.5.5 0 0 1 .292.644zm3.688 3.345A1.5 1.5 0 0 1 9.749 11h-1.25a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.227 2.361 1.49 1.49 0 0 1 .429 1.659zM9.75 9H9v1h.75a.5.5 0 1 0 0-1m.104-1.146A.5.5 0 0 0 9.5 7H9v1h.5c.133 0 .26-.053.354-.146"/>`,
  'regular': `<path d="M10.727 8.362A1.5 1.5 0 0 0 9.5 6h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1.25a1.5 1.5 0 0 0 .977-2.638M9 7h.5a.5.5 0 1 1 0 1H9zm.75 3H9V9h.75a.5.5 0 0 1 0 1M7.468 6.676l-1.5 4a.5.5 0 0 1-.936 0l-1.5-4a.5.5 0 0 1 .936-.352L5.5 9.076l1.032-2.752a.5.5 0 0 1 .936.352M2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3zM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"/>`
} as const;

export default function CodeVbRectangleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'codevbrectangleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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