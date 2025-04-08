
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h4.254v4.748a2.25 2.25 0 0 0 2.25 2.25H17.5v8.252a2.25 2.25 0 0 1-2.25 2.25h-2.395A3.5 3.5 0 0 0 9.5 17h-.025l2.012-2.013a1.75 1.75 0 1 0-2.474-2.474L7 14.525V14.5a3.5 3.5 0 0 0-3-3.465zm9 16.25c0 .537-.12 1.045-.337 1.5h2.588A4.75 4.75 0 0 0 20 17.25v-5.881a2.25 2.25 0 0 0-.66-1.591l-.84-.841v8.313a3.25 3.25 0 0 1-3.25 3.25zm-.996-13.752v-4.28q.115.087.218.191l4.619 4.619q.105.105.193.22h-4.28a.75.75 0 0 1-.75-.75M3.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1.28-5.22a.75.75 0 1 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06z"/>`,
  'regular': `<path d="M6.25 3.5a.75.75 0 0 0-.75.75v7.377a3.5 3.5 0 0 0-1.5-.592V4.25A2.25 2.25 0 0 1 6.25 2h4.381a2.25 2.25 0 0 1 1.591.659l4.619 4.619c.422.422.659.994.659 1.59v8.382a2.25 2.25 0 0 1-2.25 2.25h-2.395a3.5 3.5 0 0 0-.905-1.5h3.3a.75.75 0 0 0 .75-.75V8.998h-3.246a2.25 2.25 0 0 1-2.25-2.25V3.5zm5.754 1.062v2.186c0 .414.336.75.75.75h2.185zM15.25 22h-2.588c.216-.455.337-.963.337-1.5h2.25a3.25 3.25 0 0 0 3.25-3.25V8.937l.842.84c.422.423.659.995.659 1.592v5.881A4.75 4.75 0 0 1 15.25 22M3.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1.28-5.22a.75.75 0 1 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06z"/>`
} as const;

export default function DocumentMultiplePercentIcon({ 
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

  const gradientId = 'documentmultiplepercenticon_gradient';
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