
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.18 3.821a.76.76 0 0 1 .572-.027l.001-.002a.75.75 0 0 1 .453.959l-2.5 6.999a.74.74 0 0 1-.706.498.75.75 0 0 1-.707-.499L1.794 4.75a.76.76 0 0 1 .201-.807.752.752 0 0 1 1.211.306L5 9.269l1.794-5.021a.75.75 0 0 1 .386-.427m6.47 4.053a2.496 2.496 0 0 1-.17 3.89 2.5 2.5 0 0 1-1.48.486H9.5a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h2.255c.502 0 .987.15 1.403.433a2.49 2.49 0 0 1 1.028 2.625 2.5 2.5 0 0 1-.537 1.066m-3.4-2.624v2h1.5a1 1 0 0 0 1-1 1 1 0 0 0-.293-.706 1 1 0 0 0-.709-.294zm0 5.5H12a1.003 1.003 0 0 0 .707-1.707 1 1 0 0 0-.708-.293h-1.75z"/>`,
  'regular': `<path d="M13.278 7.9A2.248 2.248 0 0 0 11.75 4H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12a2.25 2.25 0 0 0 1.278-4.1M13 6.25a1.25 1.25 0 0 1-1.25 1.25H10V5h1.75A1.25 1.25 0 0 1 13 6.25M12 11h-2V8.5h2a1.25 1.25 0 1 1 0 2.5M7.971 4.668l-2.5 7a.5.5 0 0 1-.942 0l-2.5-7a.5.5 0 1 1 .942-.336l2.03 5.681 2.028-5.68a.5.5 0 0 1 .942.335"/>`
} as const;

export default function CodeVbIcon({ 
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

  const gradientId = 'codevbicon_gradient';
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