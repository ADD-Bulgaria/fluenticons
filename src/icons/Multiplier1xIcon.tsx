
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20 15.5a1.5 1.5 0 0 0-2.785-.774v.001l-.01.017a8 8 0 0 1-.277.416c-.203.29-.506.702-.901 1.168-.798.943-1.926 2.062-3.299 2.886a1.5 1.5 0 1 0 1.544 2.572A15.4 15.4 0 0 0 17 19.672V32.5a1.5 1.5 0 0 0 3 0zm6.56 8.94a1.5 1.5 0 0 0-2.12 2.12L26.878 29l-2.44 2.44a1.5 1.5 0 0 0 2.122 2.12L29 31.122l2.44 2.44a1.5 1.5 0 0 0 2.12-2.122L31.122 29l2.44-2.44a1.5 1.5 0 0 0-2.122-2.12L29 26.878z"/>`,
  'regular': `<path d="M19.5 15.25a1.25 1.25 0 0 0-2.322-.643l-.002.004-.015.025-.067.106a18 18 0 0 1-1.275 1.742c-.874 1.054-1.976 2.124-3.086 2.628a1.25 1.25 0 0 0 1.034 2.276c1.25-.568 2.36-1.535 3.233-2.465V32.75a1.25 1.25 0 0 0 2.5 0zm6.634 9.116a1.25 1.25 0 1 0-1.768 1.768L27.232 29l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768L29 30.768l2.866 2.866a1.25 1.25 0 0 0 1.768-1.768L30.768 29l2.866-2.866a1.25 1.25 0 0 0-1.768-1.768L29 27.232z"/>`
} as const;

export default function Multiplier1xIcon({ 
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

  const gradientId = 'multiplier1xicon_gradient';
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