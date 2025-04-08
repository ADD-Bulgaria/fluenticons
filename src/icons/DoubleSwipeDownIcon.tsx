
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.207 21.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.293 1.293V7a1 1 0 1 1 2 0v11.586l1.293-1.293a1 1 0 1 1 1.414 1.414zM12.5 7a5 5 0 0 0 3 4.584V9.236a3 3 0 1 1 4 0v2.348A5.001 5.001 0 0 0 17.5 2a5 5 0 0 0-5 5m-8 4.584A5.001 5.001 0 0 1 6.5 2a5 5 0 0 1 2 9.584V9.236a3 3 0 1 0-4 0zm2.707 10.123a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L5.5 18.586V7a1 1 0 0 1 2 0v11.586l1.293-1.293a1 1 0 1 1 1.414 1.414z"/>`,
  'regular': `<path d="M6.75 6a.75.75 0 0 1 .743.648l.007.102v12.689l2.22-2.22a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084-3.5 3.5a.75.75 0 0 1-.976.073l-.084-.073-3.5-3.5a.75.75 0 0 1 .976-1.133l.084.073L6 19.439V6.75A.75.75 0 0 1 6.75 6m10.498 0a.75.75 0 0 1 .743.648l.007.102v12.689l2.22-2.22a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084-3.5 3.5a.75.75 0 0 1-.976.073l-.085-.073-3.5-3.5a.75.75 0 0 1 .977-1.133l.084.073 2.22 2.219V6.75a.75.75 0 0 1 .75-.75M6.75 2a4.75 4.75 0 0 1 1.751 9.167V9.488a3.25 3.25 0 1 0-3.502 0v1.68A4.752 4.752 0 0 1 6.75 2m10.498 0a4.75 4.75 0 0 1 1.75 9.167L19 9.488a3.25 3.25 0 1 0-3.502 0v1.68A4.752 4.752 0 0 1 17.248 2"/>`
} as const;

export default function DoubleSwipeDownIcon({ 
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

  const gradientId = 'doubleswipedownicon_gradient';
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