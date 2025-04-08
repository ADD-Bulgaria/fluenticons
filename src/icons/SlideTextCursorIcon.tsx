
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v9.312l-4.946-5.484a1.75 1.75 0 0 0-2.88.422H6.75a.75.75 0 0 0 0 1.5h7.254l-.003 7.5H4.75A2.75 2.75 0 0 1 2 17.25zM6.75 8a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6 14.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75m9.486-3.7a.75.75 0 0 1 .826.198l6.365 7.057a.75.75 0 0 1-.738 1.23l-3.537-.878-2.03 3.015a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7"/>`,
  'regular': `<path d="M6.75 8a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM6 11.75a.75.75 0 0 1 .75-.75h7.424c-.11.23-.17.484-.17.75v.75H6.75a.75.75 0 0 1-.75-.75m14.5-5v7.649l1.5 1.663V6.75A2.75 2.75 0 0 0 19.25 4H4.75A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20H14l.001-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25M6.75 14a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm8.736-2.95a.75.75 0 0 1 .826.198l6.365 7.057a.75.75 0 0 1-.738 1.23l-3.537-.878-2.03 3.015a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7"/>`
} as const;

export default function SlideTextCursorIcon({ 
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

  const gradientId = 'slidetextcursoricon_gradient';
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