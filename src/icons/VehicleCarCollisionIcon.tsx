
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.88 2.056a1.25 1.25 0 0 1 1.4.486l4.78 6.951 5.964-4.26a1.25 1.25 0 0 1 1.918 1.394L35.456 14.5h6.294a1.25 1.25 0 0 1 .954 2.058l-4.634 5.477 6.42 4.707A1.25 1.25 0 0 1 43.75 29h-7.5a1.25 1.25 0 0 1 0-2.5h3.682l-4.421-3.242a1.25 1.25 0 0 1-.215-1.815L39.055 17H33.75a1.25 1.25 0 0 1-1.192-1.626l1.873-5.931-3.954 2.824a1.25 1.25 0 0 1-1.757-.309L25.5 7.275v6.475a1.25 1.25 0 0 1-2.5 0V3.25c0-.547.356-1.031.88-1.194M6.381 27.258l.163-.758H5.25a1.25 1.25 0 0 1 0-2.5h1.836l.51-2.36a5.25 5.25 0 0 1 5.132-4.14h11.544a5.25 5.25 0 0 1 5.132 4.14l.52 2.403q.156-.042.326-.043h1.5a1.25 1.25 0 1 1 0 2.5h-1.295l.163.758A3.75 3.75 0 0 1 33 30.75v9q0 .063-.006.125.006.062.006.125v2.25a3.25 3.25 0 0 1-3.25 3.25h-2.5A3.25 3.25 0 0 1 24 42.25V41H13v1.25a3.25 3.25 0 0 1-3.25 3.25h-2.5A3.25 3.25 0 0 1 4 42.25V40q0-.063.006-.125A1 1 0 0 1 4 39.75v-9a3.75 3.75 0 0 1 2.382-3.492m3.658-5.09L8.995 27h19.01l-1.045-4.83A2.75 2.75 0 0 0 24.272 20H12.728a2.75 2.75 0 0 0-2.688 2.169M26.5 42.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V41h-4zM10.5 41h-4v1.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75zm.5-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m17-2a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-11.75 1a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 0 0 0-2.5z"/>`,
  'regular': `<path d="M23.88 2.056a1.25 1.25 0 0 1 1.4.486l4.78 6.951 5.964-4.26a1.25 1.25 0 0 1 1.918 1.394L35.456 14.5h6.294a1.25 1.25 0 0 1 .954 2.058l-4.634 5.477 6.42 4.707A1.25 1.25 0 0 1 43.75 29h-7.5a1.25 1.25 0 0 1 0-2.5h3.682l-4.421-3.242a1.25 1.25 0 0 1-.215-1.815L39.055 17H33.75a1.25 1.25 0 0 1-1.192-1.626l1.873-5.931-3.954 2.824a1.25 1.25 0 0 1-1.757-.309L25.5 7.275v6.475a1.25 1.25 0 0 1-2.5 0V3.25c0-.547.356-1.031.88-1.194M11 35a2 2 0 1 0 0-4 2 2 0 0 0 0 4m17-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11.75 1a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 0 0 0-2.5zm-9.868-6.742.163-.758H5.25a1.25 1.25 0 0 1 0-2.5h1.836l.51-2.36a5.25 5.25 0 0 1 5.132-4.14h11.544a5.25 5.25 0 0 1 5.132 4.14l.52 2.403q.156-.042.326-.043h1.5a1.25 1.25 0 1 1 0 2.5h-1.295l.163.758A3.75 3.75 0 0 1 33 30.75v9q0 .063-.006.125.006.062.006.125v2.25a3.25 3.25 0 0 1-3.25 3.25h-2.5A3.25 3.25 0 0 1 24 42.25V41H13v1.25a3.25 3.25 0 0 1-3.25 3.25h-2.5A3.25 3.25 0 0 1 4 42.25V40q0-.063.006-.125A1 1 0 0 1 4 39.75v-9a3.75 3.75 0 0 1 2.382-3.492m3.658-5.09L8.995 27h19.01l-1.045-4.83A2.75 2.75 0 0 0 24.272 20H12.728a2.75 2.75 0 0 0-2.688 2.169M26.5 42.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V41h-4zM10.5 41h-4v1.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75zm-4-10.25v7.75h24v-7.75c0-.69-.56-1.25-1.25-1.25H7.75c-.69 0-1.25.56-1.25 1.25"/>`
} as const;

export default function VehicleCarCollisionIcon({ 
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

  const gradientId = 'vehiclecarcollisionicon_gradient';
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