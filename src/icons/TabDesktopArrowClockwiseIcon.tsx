
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v5.351A6.98 6.98 0 0 1 8 9c.983 0 1.92.203 2.768.569A1.749 1.749 0 0 1 14 10.5v1.892A6.97 6.97 0 0 1 15 16a6.98 6.98 0 0 1-2.101 5h5.351A2.75 2.75 0 0 0 21 18.25V8h-7.75A2.25 2.25 0 0 1 11 5.75V3zm6.75 0v2.75c0 .414.336.75.75.75H21v-.75A2.75 2.75 0 0 0 18.25 3zm.5 10.25a.75.75 0 0 1-.75.75H9.5a.75.75 0 0 1 0-1.5h1.33l-.018-.013A4.5 4.5 0 1 0 12.5 16a.75.75 0 0 1 1.5 0 6 6 0 1 1-2.5-4.874V10.5a.747.747 0 0 1 .75-.75.75.75 0 0 1 .75.75z"/>`,
  'regular': `<path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v5.351a7 7 0 0 1 1.5-1.165V5.75c0-.69.56-1.25 1.25-1.25H11v1.25A2.25 2.25 0 0 0 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.187A7 7 0 0 1 12.9 21h5.351A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zM19.5 6.5h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25zm-7.25 3.25a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-.75.75H9.5a.75.75 0 0 1 0-1.5h1.33l-.018-.013A4.5 4.5 0 1 0 12.5 16a.75.75 0 0 1 1.5 0 6 6 0 1 1-2.5-4.874V10.5a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function TabDesktopArrowClockwiseIcon({ 
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

  const gradientId = 'tabdesktoparrowclockwiseicon_gradient';
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