
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M19.646 3.31a.5.5 0 0 1 .652-.273C25.402 5.125 29 10.142 29 16q0 .788-.085 1.555a.5.5 0 0 1-.994-.11q.078-.711.079-1.445c0-5.438-3.34-10.097-8.08-12.037a.5.5 0 0 1-.274-.652m-6.21 1.338c-.324-.864-1.546-.864-1.871 0L3.032 27.322a.5.5 0 1 0 .936.352L6.856 20h11.29l2.888 7.674a.5.5 0 0 0 .936-.352zM17.77 19H7.232l5.269-14zm1.968-11.809a.5.5 0 0 0-.474.88q.493.267.947.59a8.99 8.99 0 0 1 3.778 6.865.5.5 0 0 0 .998-.052 9.99 9.99 0 0 0-5.249-8.283"/>`
} as const;

export default function ReadAloudIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'readaloudicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}