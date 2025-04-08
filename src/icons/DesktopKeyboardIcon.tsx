
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.075 25h-3.35a.75.75 0 0 1-.077-1.492l.102-.007H9.5v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3h19.499a2.25 2.25 0 0 1 2.25 2.25v9.182a3.7 3.7 0 0 0-1.749-.431h-9.5A3.75 3.75 0 0 0 11 17.75v6.5q0 .385.075.75m3.675-10A2.75 2.75 0 0 0 12 17.75v6.5A2.75 2.75 0 0 0 14.75 27h9.5A2.75 2.75 0 0 0 27 24.25v-6.5A2.75 2.75 0 0 0 24.25 15zm.75 9.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m0-5.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`,
  'regular': `<path d="M11.075 25h-3.35a.75.75 0 0 1-.077-1.492l.102-.007H9.5v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3h19.499a2.25 2.25 0 0 1 2.25 2.25v9.182a3.7 3.7 0 0 0-1.5-.423V5.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v13.502c0 .415.336.75.75.75H11v4.749q0 .385.075.75m3.675-10A2.75 2.75 0 0 0 12 17.75v6.5A2.75 2.75 0 0 0 14.75 27h9.5A2.75 2.75 0 0 0 27 24.25v-6.5A2.75 2.75 0 0 0 24.25 15zm.75 9.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m0-5.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`
} as const;

export default function DesktopKeyboardIcon({ 
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

  const gradientId = 'desktopkeyboardicon_gradient';
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