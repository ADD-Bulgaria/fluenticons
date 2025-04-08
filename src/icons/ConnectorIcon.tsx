
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.252 4a.75.75 0 0 1 .75.75v2.773l1.874 2.815a.75.75 0 0 1 .126.416v4.496a.75.75 0 0 1-.75.75H8.998v3.254a.75.75 0 0 1-1.492.101l-.007-.101L7.498 16l-1.995-.001v3.258a.75.75 0 0 1-1.493.101l-.006-.101-.001-3.258-1.25.001a.75.75 0 0 1-.75-.75v-4.496a.75.75 0 0 1 .127-.416l1.874-2.815V4.75a.75.75 0 0 1 .75-.75zm7.004.001h4.496a.75.75 0 0 1 .743.649l.007.101L20.5 8h.75a.75.75 0 0 1 .75.75v4.496a.75.75 0 0 1-.125.416l-1.874 2.815v2.773a.75.75 0 0 1-.75.75h-3.498a.75.75 0 0 1-.75-.75v-2.773l-1.874-2.815a.75.75 0 0 1-.126-.416V8.75a.75.75 0 0 1 .75-.75h.752V4.751a.75.75 0 0 1 .648-.743zh4.496zm3.746 1.5h-2.996V8H19z"/>`,
  'regular': `<path d="M8.252 4a.75.75 0 0 1 .743.648l.007.102v2.773l1.874 2.815a.75.75 0 0 1 .117.306l.009.11v4.496a.75.75 0 0 1-.649.743l-.101.007H8.998v3.254a.75.75 0 0 1-1.492.101l-.007-.101L7.498 16l-1.995-.001v3.258a.75.75 0 0 1-1.493.101l-.006-.101-.001-3.258-1.25.001a.75.75 0 0 1-.742-.648l-.007-.102v-4.496a.75.75 0 0 1 .071-.32l.055-.096 1.874-2.815V4.75a.75.75 0 0 1 1.493-.102l.007.102v3a.75.75 0 0 1-.072.32l-.054.096-1.874 2.815V14.5h5.998v-3.52L7.627 8.167a.75.75 0 0 1-.117-.306l-.008-.11v-3a.75.75 0 0 1 .75-.75m7.004.001h4.496a.75.75 0 0 1 .743.649l.007.101L20.5 8h.75a.75.75 0 0 1 .744.648l.007.102v4.496a.75.75 0 0 1-.072.32l-.054.096-1.874 2.815v2.773a.75.75 0 0 1-1.494.102l-.006-.102v-3c0-.11.024-.22.071-.32l.054-.096 1.875-2.815V9.5h-5.998v3.52l1.874 2.814a.75.75 0 0 1 .118.306l.008.11v3a.75.75 0 0 1-1.493.102l-.007-.102v-2.773l-1.874-2.815a.75.75 0 0 1-.118-.306l-.008-.11V8.75a.75.75 0 0 1 .648-.743L13.754 8h.752V4.751a.75.75 0 0 1 .648-.743zh4.496zm3.746 1.5h-2.996V8H19z"/>`
} as const;

export default function ConnectorIcon({ 
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

  const gradientId = 'connectoricon_gradient';
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