
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.55 1.443A1.49 1.49 0 0 0 6 2.49V5.5H4.624a.75.75 0 0 0-.746.83L5.36 19.994A2.25 2.25 0 0 0 7.596 22h8.808a2.25 2.25 0 0 0 2.237-2.008L20.118 6.33a.75.75 0 0 0-.745-.831H18V2.75A1.75 1.75 0 0 0 16.25 1h-3.5A1.75 1.75 0 0 0 11 2.75v1.17zM16.5 2.75V5.5h-4V2.75a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25M10.453 5.5H7.5V2.514zm1.34 4.91-.67 1a.75.75 0 1 1-1.246-.835l.669-1a1.75 1.75 0 0 1 2.909 0l.669 1a.75.75 0 0 1-1.247.834l-.669-1a.25.25 0 0 0-.415 0m-1.9 3.218-.364.607a.5.5 0 0 0 .43.757h.791a.75.75 0 0 1 0 1.5h-.792c-1.554 0-2.515-1.696-1.715-3.029l.364-.607a.75.75 0 1 1 1.287.772m4.474-1.03a.75.75 0 0 1 1.03.259l.363.607c.799 1.333-.162 3.028-1.716 3.028h-.794a.75.75 0 0 1 0-1.5h.794a.5.5 0 0 0 .43-.757l-.365-.607a.75.75 0 0 1 .258-1.03"/>`,
  'regular': `<path d="M7.49 1c.399 0 .78.16 1.06.443L11 3.92V2.75c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75V5.5h1.372a.75.75 0 0 1 .746.83l-1.477 13.662A2.25 2.25 0 0 1 16.404 22H7.596a2.25 2.25 0 0 1-2.236-2.008L3.878 6.332a.75.75 0 0 1 .746-.831H6V2.49C6 1.667 6.667 1 7.49 1m9.01 4.5V2.75a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25V5.5zm-9-2.986V5.5h2.953zM6.85 19.83a.75.75 0 0 0 .746.669h8.808a.75.75 0 0 0 .745-.67L18.537 7H5.46zm4.942-9.422a.25.25 0 0 1 .416 0l.669 1a.75.75 0 0 0 1.246-.834l-.668-1a1.75 1.75 0 0 0-2.91 0l-.668 1a.75.75 0 0 0 1.246.834zM9.636 12.6a.75.75 0 0 1 .257 1.03l-.364.606a.5.5 0 0 0 .429.757h.792a.75.75 0 0 1 0 1.5h-.792c-1.555 0-2.515-1.696-1.715-3.029l.364-.607a.75.75 0 0 1 1.029-.257m4.473 1.029a.75.75 0 1 1 1.287-.771l.364.607c.798 1.333-.162 3.028-1.716 3.028h-.794a.75.75 0 0 1 0-1.5h.794a.5.5 0 0 0 .429-.757z"/>`
} as const;

export default function BinRecycleFullIcon({ 
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

  const gradientId = 'binrecyclefullicon_gradient';
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