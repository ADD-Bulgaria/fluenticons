
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 4a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2h-1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m-8 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.25c0 1.105-.216 2.506-.958 3.664C14.261 12.136 12.945 13 11 13a1 1 0 1 1 0-2c1.255 0 1.94-.51 2.358-1.164.458-.717.642-1.69.642-2.586V7h-3a1 1 0 0 1-1-1m-4.707 8.293a1 1 0 0 1 1.414 1.414L6.414 16H20a1 1 0 1 1 0 2H6.414l.293.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414zm1.414-8a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L6.414 10H7.5a1 1 0 1 0 0-2H6.414l.293-.293a1 1 0 0 0 0-1.414"/>`,
  'regular': `<path d="M18.25 4a.75.75 0 0 1 .75.75V8h1.25a.75.75 0 0 1 0 1.5H19v3.75a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75M9.5 5.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .747.682c.194 2.135-1.141 5.97-5.531 7.286a.75.75 0 0 1-.431-1.436c3.132-.94 4.298-3.398 4.46-5.032H10.25a.75.75 0 0 1-.75-.75m-4.28.47a.75.75 0 0 1 1.06 1.06L5.56 8h2.19a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 8a.75.75 0 0 1 1.06 1.06l-.72.72h14.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z"/>`
} as const;

export default function TextDirectionHorizontalLeftIcon({ 
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

  const gradientId = 'textdirectionhorizontallefticon_gradient';
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