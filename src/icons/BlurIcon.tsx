
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 14C3 7.925 7.925 3 14 3c2.024 0 3.92.547 5.549 1.5H14v1h6.983c.547.45 1.051.953 1.503 1.5H14v1h9.221q.466.715.82 1.5H14v1h10.432q.244.73.387 1.5H14v1h10.955a11 11 0 0 1 .034 1.5H14v1h10.899q-.106.769-.313 1.5H14v1h10.25q-.305.782-.722 1.5H14v1h8.875q-.596.812-1.325 1.5H14v1h6.326A10.95 10.95 0 0 1 14 25C7.925 25 3 20.075 3 14"/>`,
  'regular': `<path d="M3 14C3 7.925 7.925 3 14 3c2.024 0 3.92.547 5.549 1.5H14a9.5 9.5 0 1 0 0 19V23h6.326A10.95 10.95 0 0 1 14 25C7.925 25 3 20.075 3 14m17.983-8.5c.547.45 1.051.953 1.503 1.5H14V5.5zm3.057 4a11 11 0 0 0-.819-1.5H14v1.5zm.392 1q.244.73.387 1.5H14v-1.5zM25 14q0-.505-.045-1H14v1.5h10.989q.01-.249.011-.5m-.101 1.5q-.106.769-.313 1.5H14v-1.5zm-1.37 4q.415-.718.721-1.5H14v1.5zm-.654 1q-.596.812-1.325 1.5H14v-1.5z"/>`
} as const;

export default function BlurIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'bluricon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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