
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.834 28.42a6.25 6.25 0 0 1 0-8.839L19.583 5.833a6.25 6.25 0 0 1 8.839 0L42.17 19.58a6.25 6.25 0 0 1 0 8.839L28.422 42.168a6.25 6.25 0 0 1-8.84 0zm13.3-11.054a1.25 1.25 0 0 0-1.768 1.768L22.232 24l-4.866 4.866a1.25 1.25 0 0 0 1.768 1.768L24 25.768l4.866 4.866a1.25 1.25 0 0 0 1.768-1.768L25.768 24l4.866-4.866a1.25 1.25 0 0 0-1.768-1.768L24 22.232z"/>`,
  'regular': `<path d="M5.83 19.581a6.25 6.25 0 0 0 0 8.839l13.75 13.748a6.25 6.25 0 0 0 8.839 0L42.166 28.42a6.25 6.25 0 0 0 0-8.839L28.418 5.833a6.25 6.25 0 0 0-8.839 0zm1.768 7.071a3.75 3.75 0 0 1 0-5.303L21.347 7.6a3.75 3.75 0 0 1 5.303 0L40.4 21.35a3.75 3.75 0 0 1 0 5.303L26.65 40.4a3.75 3.75 0 0 1-5.303 0zm11.536-9.286a1.25 1.25 0 0 0-1.768 1.768L22.232 24l-4.866 4.866a1.25 1.25 0 0 0 1.768 1.768L24 25.768l4.866 4.866a1.25 1.25 0 0 0 1.768-1.768L25.768 24l4.866-4.866a1.25 1.25 0 0 0-1.768-1.768L24 22.232z"/>`
} as const;

export default function DiamondDismissIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'diamonddismissicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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