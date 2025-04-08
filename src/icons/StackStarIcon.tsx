
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm5.5 2.1a.5.5 0 0 1 .447.276l.88 1.761 1.735.217a.5.5 0 0 1 .258.88l-1.266 1.055.434 1.953a.5.5 0 0 1-.753.532L9.5 11.69l-1.735 1.084a.5.5 0 0 1-.753-.532l.434-1.953L6.18 9.234a.5.5 0 0 1 .258-.88l1.734-.217.88-1.76A.5.5 0 0 1 9.5 6.1m-3 11.4A2 2 0 0 1 4.563 16H15.5a2.5 2.5 0 0 0 2.5-2.5V6.563A2 2 0 0 1 19.5 8.5v5a4 4 0 0 1-4 4zM9 20a2 2 0 0 1-1.937-1.5h9.187a4.25 4.25 0 0 0 4.25-4.25V9.063A2 2 0 0 1 22 11v3.25A5.75 5.75 0 0 1 16.25 20z"/>`,
  'regular': `<path d="M9.5 5.85a.75.75 0 0 1 .67.415l.821 1.64 1.602.2a.75.75 0 0 1 .387 1.321l-1.149.957.401 1.804a.75.75 0 0 1-1.13.799L9.5 11.984l-1.602 1.002a.75.75 0 0 1-1.13-.799l.4-1.803-1.148-.958a.75.75 0 0 1 .387-1.32l1.602-.2.82-1.641A.75.75 0 0 1 9.5 5.85M4 4h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m11 1.5H4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5M4.563 16A2 2 0 0 0 6.5 17.5h9a4 4 0 0 0 4-4v-5A2 2 0 0 0 18 6.563V13.5a2.5 2.5 0 0 1-2.5 2.5zm2.5 2.5A2 2 0 0 0 9 20h7.25A5.75 5.75 0 0 0 22 14.25V11a2 2 0 0 0-1.5-1.937v5.187a4.25 4.25 0 0 1-4.25 4.25z"/>`
} as const;

export default function StackStarIcon({ 
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

  const gradientId = 'stackstaricon_gradient';
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