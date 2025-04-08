
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.75A4.75 4.75 0 0 1 6.75 3h10A2.25 2.25 0 0 1 19 5.25v.25H7.75A3.25 3.25 0 0 0 4.5 8.75v2.34A5.5 5.5 0 0 0 2 12.258zm8.425 11.2 1.55 1.55h7.775A2.25 2.25 0 0 0 22 18.25v-9.5a2.25 2.25 0 0 0-2.25-2.25h-12A2.25 2.25 0 0 0 5.5 8.75V11a5.5 5.5 0 0 1 4.925 7.95M5.5 21a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M6.75 3A4.75 4.75 0 0 0 2 7.75v4.507a5.5 5.5 0 0 1 1.5-.882V7.75A3.25 3.25 0 0 1 6.75 4.5h10a.75.75 0 0 1 .75.75v.25H19v-.25A2.25 2.25 0 0 0 16.75 3zm13 17.5h-7.775l-1.5-1.5h9.275a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75h-12a.75.75 0 0 0-.75.75v2.457A5.5 5.5 0 0 0 5.5 11V8.75A2.25 2.25 0 0 1 7.75 6.5h12A2.25 2.25 0 0 1 22 8.75v9.5a2.25 2.25 0 0 1-2.25 2.25M5.5 21a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function SlideMultipleSearchIcon({ 
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

  const gradientId = 'slidemultiplesearchicon_gradient';
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