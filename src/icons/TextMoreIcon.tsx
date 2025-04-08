
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 3a1 1 0 0 1 1 1v6h2a1 1 0 1 1 0 2h-2v8h-.05A2.5 2.5 0 0 0 16 18.05V4a1 1 0 0 1 1-1M3 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1c0 1.546-.445 4.221-1.751 6.545C9.92 14.906 7.634 17 4 17a1 1 0 1 1 0-2c2.704 0 4.417-1.5 5.505-3.435.86-1.53 1.285-3.27 1.432-4.565H4a1 1 0 0 1-1-1m7.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M17.5 3.75a.75.75 0 0 0-1.5 0v14.3a2.5 2.5 0 0 1 1.5.95v-7.5h2.25a.75.75 0 0 0 0-1.5H17.5zM3.75 5a.75.75 0 0 0 0 1.5h7.715c-.122 1.42-.58 3.458-1.591 5.237C8.682 13.83 6.774 15.5 3.75 15.5a.75.75 0 0 0 0 1.5c3.712 0 6.052-2.104 7.427-4.522C12.536 10.09 13 7.333 13 5.75a.75.75 0 0 0-.75-.75zM12 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`
} as const;

export default function TextMoreIcon({ 
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

  const gradientId = 'textmoreicon_gradient';
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