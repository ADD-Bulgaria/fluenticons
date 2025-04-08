
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 7H5v1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5m4.25 2H9v1h.75a.5.5 0 1 0 0-1m.104-1.146A.5.5 0 0 0 9.5 7H9v1h.5c.133 0 .26-.053.354-.146M12.25 3h-9.5C1.785 3 1 3.785 1 4.75v7.5c0 .965.785 1.75 1.75 1.75h9.5c.965 0 1.75-.785 1.75-1.75v-7.5C14 3.785 13.215 3 12.25 3m-5.034 7.685a.5.5 0 0 1-.464.315c-.476 0-.59-.459-.7-.9C5.962 9.745 5.776 9 5.5 9H5v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h1a1.497 1.497 0 0 1 1.453 1.824 1.5 1.5 0 0 1-.432.764c.237.393.406.823.5 1.272.027.108.048.204.073.277a.495.495 0 0 1 .12.547zm3.941-.664A1.5 1.5 0 0 1 9.75 11H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.227 2.361 1.49 1.49 0 0 1 .429 1.659z"/>`,
  'regular': `<path d="M10.996 7.6a1.5 1.5 0 0 1-.269.762A1.5 1.5 0 0 1 9.75 11H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.496 1.6M9.5 7H9v1h.5a.5.5 0 1 0 0-1M9 10h.75a.5.5 0 0 0 0-1H9zM6.522 8.588c.237.393.406.823.5 1.272l.019.077q.026.116.054.2a.5.5 0 0 1-.343.863c-.476 0-.59-.458-.7-.899V10.1l-.003-.01C5.96 9.73 5.773 9 5.5 9H5v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.022 2.588M5.5 7H5v1h.5a.5.5 0 1 0 0-1M2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3zM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"/>`
} as const;

export default function CodeRbRectangleIcon({ 
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

  const gradientId = 'coderbrectangleicon_gradient';
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