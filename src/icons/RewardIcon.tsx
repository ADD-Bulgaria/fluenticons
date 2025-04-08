
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 5v8.154l4.88 2.644a.25.25 0 0 0 .24 0L21 13.154V5zM3 6.25A3.25 3.25 0 0 1 6.25 3h19.5A3.25 3.25 0 0 1 29 6.25v2.314a4.25 4.25 0 0 1-2.226 3.737l-7.986 4.326a6.5 6.5 0 1 1-5.577 0L5.226 12.3A4.25 4.25 0 0 1 3 8.564zm8.5 16.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"/>`,
  'regular': `<path d="M5 6.25C5 5.56 5.56 5 6.25 5H9v7.071l-2.822-1.528A2.25 2.25 0 0 1 5 8.564zm6 6.904V5h10v8.154l-4.88 2.644a.25.25 0 0 1-.24 0zm12-1.083V5h2.75c.69 0 1.25.56 1.25 1.25v2.314a2.25 2.25 0 0 1-1.178 1.979zM6.25 3A3.25 3.25 0 0 0 3 6.25v2.314a4.25 4.25 0 0 0 2.226 3.737l7.985 4.326a6.5 6.5 0 1 0 5.577 0l7.986-4.326A4.25 4.25 0 0 0 29 8.564V6.25A3.25 3.25 0 0 0 25.75 3zm5.25 19.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`
} as const;

export default function RewardIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'rewardicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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