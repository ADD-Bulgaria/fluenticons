
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 2.905A3.24 3.24 0 0 0 2 5.25v8q0 .15.013.297a3.2 3.2 0 0 0 .542 1.52A3.25 3.25 0 0 0 5.25 16.5H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25A3.25 3.25 0 0 0 13.25 2h-8A3.24 3.24 0 0 0 3 2.905m6 7.845C9 9.784 9.784 9 10.75 9h8c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 9 18.75z"/>`,
  'regular': `<path d="M5.25 2A3.25 3.25 0 0 0 2 5.25v8q0 .15.013.297a3.2 3.2 0 0 0 .542 1.52c.258.382.596.707.989.95a3.2 3.2 0 0 0 1.409.47h.006a3 3 0 0 0 .291.013H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25q0-.15-.013-.297a3.2 3.2 0 0 0-.542-1.52 3.3 3.3 0 0 0-.989-.95 3.2 3.2 0 0 0-1.409-.47h-.006A3 3 0 0 0 13.25 2zm.69 1.5L3.5 5.94v-.69c0-.966.784-1.75 1.75-1.75zM3.5 8.06 8.06 3.5h1.88L3.5 9.94zm8.56-4.56h1.19q.31.002.588.101l-4.04 4.04a3.26 3.26 0 0 0-2.156 2.157l-4.04 4.04a1.8 1.8 0 0 1-.102-.588v-1.19zm2.84 1.162q.1.277.101.588v1.19L13.94 7.5h-1.88zm-7.4 7.399v1.879L6.44 15H5.25q-.31-.002-.588-.101zM9 10.75C9 9.784 9.784 9 10.75 9h8c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 9 18.75z"/>`
} as const;

export default function ShapeSubtractIcon({ 
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

  const gradientId = 'shapesubtracticon_gradient';
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