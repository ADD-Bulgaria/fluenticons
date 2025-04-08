
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h10.5A3.25 3.25 0 0 1 19 5.25v6.033A2.75 2.75 0 0 0 17.785 11H17.5V5.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 5.25v11.5c0 .966.784 1.75 1.75 1.75h3.37L7.357 20H5.25A3.25 3.25 0 0 1 2 16.75zM6.75 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm.32 6.434A.75.75 0 0 1 7.75 12h10.035a1.75 1.75 0 0 1 1.338.623l3.7 4.394a.75.75 0 0 1 0 .966l-3.7 4.394a1.75 1.75 0 0 1-1.338.623H7.75a.75.75 0 0 1-.574-1.233L10.77 17.5l-3.594-4.267a.75.75 0 0 1-.106-.8M6.75 9a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h10.5A3.25 3.25 0 0 1 19 5.25v6.033A2.75 2.75 0 0 0 17.785 11H17.5V5.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 5.25v11.5c0 .966.784 1.75 1.75 1.75h3.37L7.357 20H5.25A3.25 3.25 0 0 1 2 16.75zM6.75 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm.32 6.434A.75.75 0 0 1 7.75 12h10.035a1.75 1.75 0 0 1 1.338.623l3.7 4.394a.75.75 0 0 1 0 .966l-3.7 4.394a1.75 1.75 0 0 1-1.338.623H7.75a.75.75 0 0 1-.574-1.233L10.77 17.5l-3.594-4.267a.75.75 0 0 1-.106-.8M9.362 13.5l2.962 3.517a.75.75 0 0 1 0 .966L9.362 21.5h8.423a.25.25 0 0 0 .191-.089L21.27 17.5l-3.294-3.911a.25.25 0 0 0-.191-.089zM6.75 9a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function DiagramIcon({ 
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

  const gradientId = 'diagramicon_gradient';
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