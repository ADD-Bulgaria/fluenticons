
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 15a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14m15.126 6.07C23.267 16.123 22 19.353 22 24s1.267 7.878 3.126 9.93C26.976 35.97 29.55 37 32.5 37s5.524-1.03 7.374-3.07c.713-.788 1.34-1.749 1.84-2.897.265-.607.845-1.033 1.507-1.033 1.02 0 1.764.975 1.376 1.92-.637 1.552-1.478 2.896-2.5 4.024C39.603 38.695 36.177 40 32.5 40s-7.103-1.305-9.597-4.056C20.42 33.203 19 29.183 19 24s1.42-9.203 3.903-11.944C25.397 9.305 28.823 8 32.5 8s7.103 1.305 9.597 4.056c1.022 1.128 1.863 2.472 2.5 4.024.387.945-.355 1.92-1.376 1.92-.662 0-1.242-.426-1.506-1.033-.502-1.148-1.128-2.109-1.841-2.896C38.024 12.03 35.45 11 32.5 11s-5.524 1.03-7.374 3.07"/>`,
  'regular': `<path d="M6.5 14.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m14.134 5.697C22.758 15.847 21.5 19.21 21.5 24s1.258 8.154 3.134 10.303C26.496 36.44 29.074 37.5 32 37.5s5.504-1.062 7.367-3.197c.796-.913 1.482-2.046 2.006-3.414.2-.522.69-.889 1.25-.889.837 0 1.45.796 1.16 1.582-.626 1.702-1.48 3.159-2.532 4.365C38.86 38.687 35.564 40 32 40s-6.86-1.313-9.25-4.053C20.372 33.22 19 29.21 19 24s1.372-9.221 3.75-11.947C25.14 9.313 28.436 8 32 8s6.86 1.314 9.25 4.053c1.052 1.206 1.907 2.663 2.534 4.365.29.786-.324 1.582-1.162 1.582-.56 0-1.048-.367-1.249-.89-.524-1.367-1.21-2.5-2.006-3.413C37.504 11.562 34.926 10.5 32 10.5s-5.504 1.062-7.366 3.197"/>`
} as const;

export default function TemperatureDegreeCelsiusIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'temperaturedegreecelsiusicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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