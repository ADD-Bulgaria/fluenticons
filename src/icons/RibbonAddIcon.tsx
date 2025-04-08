
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .501.001 2.504a.5.5 0 1 1-1 0V7.001h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 1 1 1 0V6h2.497a.5.5 0 0 1 0 1.001zm-7-.5c0-1.653.617-3.162 1.633-4.31A7 7 0 0 0 4 9.002a7 7 0 0 0 12.773 3.96A6.5 6.5 0 0 1 11 6.502m5.002 8.746L16 21.249a.75.75 0 0 1-1.182.613L11 19.174l-3.817 2.688a.75.75 0 0 1-1.181-.613l-.002-6a7.97 7.97 0 0 0 5 1.753 7.97 7.97 0 0 0 5.002-1.757"/>`,
  'regular': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.503a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-7-5c.562 0 1.11.066 1.633.191a6.5 6.5 0 0 0-.924 1.354 5.5 5.5 0 1 0 3.472 9.028 6.5 6.5 0 0 0 1.592.386q-.346.504-.772.938l-.002 7.352a.75.75 0 0 1-1.092.668l-.09-.055L11 19.174l-3.816 2.688a.75.75 0 0 1-1.175-.509L6 21.25l-.002-7.352A7 7 0 0 1 11 2m3.5 17.804v-4.741a6.97 6.97 0 0 1-3.5.936c-1.275 0-2.47-.34-3.5-.936v4.74l3.067-2.159a.75.75 0 0 1 .763-.06l.1.06z"/>`
} as const;

export default function RibbonAddIcon({ 
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

  const gradientId = 'ribbonaddicon_gradient';
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