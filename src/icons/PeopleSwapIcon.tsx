
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m1.01 6.515-2.497 2.498a1.75 1.75 0 0 0 0 2.475l1.892 1.892C13.303 23.534 11.735 24 9.5 24 2 24 2 18.75 2 18.75v-.5A2.25 2.25 0 0 1 4.25 16h10.5q.132 0 .26.015M20 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-2.217 2.778a.75.75 0 0 0-1.06-1.06L13.22 19.22a.75.75 0 0 0 0 1.06l3.502 3.503a.75.75 0 0 0 1.06-1.06l-2.22-2.223h8.878l-2.222 2.222a.75.75 0 0 0 1.06 1.061l3.503-3.503a.75.75 0 0 0 0-1.06l-3.502-3.503a.75.75 0 0 0-1.06 1.06L24.438 19H15.56z"/>`,
  'regular': `<path d="M5 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m7 4a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M2 18.25A2.25 2.25 0 0 1 4.25 16h10.5q.132 0 .26.015L13.525 17.5H4.25a.75.75 0 0 0-.75.75v.513l.009.1c.01.094.03.235.074.408a3.6 3.6 0 0 0 .61 1.279c.674.897 2.115 1.95 5.307 1.95 1.724 0 2.937-.307 3.794-.73l1.106 1.105C13.276 23.543 11.698 24 9.5 24c-3.558 0-5.492-1.197-6.506-2.55a5.1 5.1 0 0 1-.866-1.815 4.5 4.5 0 0 1-.125-.797L2 18.781zm15.783-1.472a.75.75 0 0 0-1.06-1.06L13.22 19.22a.75.75 0 0 0 0 1.06l3.502 3.503a.75.75 0 0 0 1.06-1.06l-2.22-2.223h8.878l-2.222 2.222a.75.75 0 0 0 1.06 1.061l3.503-3.503a.75.75 0 0 0 0-1.06l-3.502-3.503a.75.75 0 0 0-1.06 1.06L24.438 19H15.56z"/>`
} as const;

export default function PeopleSwapIcon({ 
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

  const gradientId = 'peopleswapicon_gradient';
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