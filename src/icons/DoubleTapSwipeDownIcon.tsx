
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.707 21.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 18.586V9a1 1 0 1 1 2 0v9.586l1.293-1.293a1 1 0 0 1 1.414 1.414zM4.5 9a7.5 7.5 0 0 0 5.5 7.23v-2.105A5.502 5.502 0 0 1 12 3.5a5.5 5.5 0 0 1 2 10.625v2.105A7.5 7.5 0 1 0 4.5 9m3 0a4.5 4.5 0 0 0 2.5 4.032V10.5a2.5 2.5 0 1 1 4 0v2.532A4.5 4.5 0 1 0 7.5 9"/>`,
  'regular': `<path d="M12.53 21.78a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V8.75a.75.75 0 0 1 1.5 0v10.69l2.22-2.22a.75.75 0 1 1 1.06 1.06zM5 9a7 7 0 0 0 5.25 6.78v-1.564A5.502 5.502 0 0 1 12 3.5a5.5 5.5 0 0 1 1.75 10.716v1.564A7 7 0 1 0 5 9m2.5 0a4.5 4.5 0 0 0 2.75 4.147v-1.71a3 3 0 1 1 3.5 0v1.71A4.501 4.501 0 1 0 7.5 9"/>`
} as const;

export default function DoubleTapSwipeDownIcon({ 
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

  const gradientId = 'doubletapswipedownicon_gradient';
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