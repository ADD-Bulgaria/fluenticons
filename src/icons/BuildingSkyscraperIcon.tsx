
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 2.002a.75.75 0 0 0-.75.75V4h3V2.75a.75.75 0 0 0-.75-.749zM11 5H6.75a.75.75 0 0 0-.75.75V7h7V5.75a.75.75 0 0 0-.75-.75zm6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 10a2 2 0 0 1 1.965-2h7.07A2 2 0 0 1 15 10v.005a5.75 5.75 0 0 1 5.5 5.744v5a.75.75 0 0 1-.75.75h-8.5v-3a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5v3h-3a.75.75 0 0 1-.75-.75zm15 5.75a4.25 4.25 0 0 0-4-4.243V20h4zM12.25 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 4.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8.75 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 4.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M12 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8.25 2.002a.75.75 0 0 0-.75.75V5H6.25a.75.75 0 0 0-.75.75V7.8A2.75 2.75 0 0 0 4 10.25v10.5c0 .415.336.75.75.75h15a.75.75 0 0 0 .75-.75v-5a5.75 5.75 0 0 0-5.51-5.745 2.75 2.75 0 0 0-1.487-2.203V5.75a.75.75 0 0 0-.75-.75H11.5V2.752a.75.75 0 0 0-.75-.75zM12.003 7.5H7v-1h5.003zM13.5 20H12v-2.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75V20H5.5v-9.75C5.5 9.56 6.06 9 6.75 9h5.5c.69 0 1.25.56 1.25 1.25zm-5 0v-2h2v2zm6.5 0v-8.492a4.25 4.25 0 0 1 4 4.242V20zM10 5H9V3.502h1z"/>`
} as const;

export default function BuildingSkyscraperIcon({ 
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

  const gradientId = 'buildingskyscrapericon_gradient';
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