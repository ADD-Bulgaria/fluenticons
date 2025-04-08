
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24.003 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.385 7.365h-2.704q.087.24.089.51a1.5 1.5 0 1 1-2.912-.51H18.557l-4.306 7.17a1.75 1.75 0 0 1-3.077-1.66l.076-.141 3.224-5.369h-1.085c-4.078 0-7.384-3.297-7.384-7.365s3.306-7.365 7.384-7.365h.16C14.074 11.161 17.666 7 24.003 7m-.416 27.27a1.75 1.75 0 0 1 .648 2.27l-.078.14-.918 1.489a1.75 1.75 0 0 1-3.057-1.698l.078-.14.918-1.49a1.75 1.75 0 0 1 2.409-.57m4.915.73a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/>`,
  'regular': `<path d="M29.068 35.12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M24.001 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-2.661q.111.267.113.573a1.5 1.5 0 1 1-2.887-.573l-11.76.001-.04.094-.066.128-3.5 6.063a1.5 1.5 0 0 1-2.664-1.372l.066-.129 2.762-4.785h-.592c-4.079 0-7.385-3.297-7.385-7.365s3.306-7.365 7.385-7.365h.16C14.072 11.161 17.664 7 24 7m-.646 26.317a1.5 1.5 0 0 1 .615 1.92l-.066.129-1.084 1.89a1.5 1.5 0 0 1-2.664-1.371l.066-.129 1.084-1.89a1.5 1.5 0 0 1 2.049-.55m10.712.303a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M24 9.495c-4.26 0-7.975 3.448-7.975 8.21 0 .755-.656 1.348-1.407 1.348h-1.42c-2.595 0-4.698 2.113-4.698 4.72 0 2.608 2.103 4.722 4.697 4.722h21.606c2.594 0 4.697-2.114 4.697-4.721s-2.102-4.722-4.697-4.722h-1.42c-.751 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.21-7.975-8.21"/>`
} as const;

export default function WeatherRainSnowIcon({ 
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

  const gradientId = 'weatherrainsnowicon_gradient';
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