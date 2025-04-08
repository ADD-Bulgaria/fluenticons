
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.5 1A1.5 1.5 0 0 1 15 2.5v3c0 .66-.26 1.3-.73 1.77S13.16 8 12.5 8s-1.3-.26-1.77-.73S10 6.16 10 5.5v-3A1.5 1.5 0 0 1 11.5 1zm-.65 2.85c.1-.09.15-.22.15-.35V2h-1v1.5c0 .13.05.26.15.35.09.1.22.15.35.15s.26-.05.35-.15M12.5 9c.936 0 1.815-.364 2.475-1.025l.013-.015.012-.016v3.306A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25v-6.5C1 3.784 1.784 3 2.75 3H9v2.5c0 .934.364 1.813 1.025 2.474A3.47 3.47 0 0 0 12.5 9M9 8.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m-2-2a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m-1 2a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M3.25 5.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M3.5 11h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1"/>`,
  'regular': `<path d="M12.5 10h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1M8.25 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-2-2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-1 2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M4 6.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m10 2.4v2.6a.755.755 0 0 1-.75.75H2.75a.755.755 0 0 1-.75-.75v-6.5A.755.755 0 0 1 2.75 4H9V3H2.75A1.746 1.746 0 0 0 1 4.75v6.5A1.746 1.746 0 0 0 2.75 13h10.5A1.747 1.747 0 0 0 15 11.25V7.94a3.1 3.1 0 0 1-1 .71M3 10.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5m6-2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m-2-2a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m-2.5 2a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m-.5-2a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M8.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-3 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m1-2a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-3 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M12.5 10h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1m1-9h-2A1.5 1.5 0 0 0 10 2.5v3a2.5 2.5 0 0 0 5 0v-3A1.5 1.5 0 0 0 13.5 1m.5 4.5a1.5 1.5 0 1 1-3 0v-3a.5.5 0 0 1 .5-.5h.5v1.5a.5.5 0 0 0 1 0V2h.5a.5.5 0 0 1 .5.5z"/>`
} as const;

export default function KeyboardMouseIcon({ 
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

  const gradientId = 'keyboardmouseicon_gradient';
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