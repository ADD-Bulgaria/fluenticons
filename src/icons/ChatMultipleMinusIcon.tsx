
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 12a9 9 0 1 1 4.96 8.045l-3.385.907a1.25 1.25 0 0 1-1.531-1.531l.908-3.389A9 9 0 0 1 2 12m5.5-.75a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5zm2.768 10.724A8.98 8.98 0 0 0 17 25a9 9 0 0 0 4.04-.955l3.385.907a1.25 1.25 0 0 0 1.531-1.531l-.908-3.388a9.004 9.004 0 0 0-5.122-12.546 10 10 0 0 1 .749 1.973A7.5 7.5 0 0 1 24.5 16c0 1.3-.33 2.52-.91 3.585a.75.75 0 0 0-.067.553l.872 3.253-3.25-.871a.75.75 0 0 0-.554.066A7.46 7.46 0 0 1 17 23.5a7.47 7.47 0 0 1-4.623-1.594 10 10 0 0 1-2.109.068"/>`,
  'regular': `<path d="M7.25 11a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 12a9 9 0 1 1 4.96 8.045l-3.385.907a1.25 1.25 0 0 1-1.531-1.531l.908-3.389A9 9 0 0 1 2 12m9-7.5a7.5 7.5 0 0 0-6.59 11.085.75.75 0 0 1 .067.553l-.872 3.253 3.25-.871a.75.75 0 0 1 .554.066A7.5 7.5 0 1 0 11 4.5m-.732 17.474A8.98 8.98 0 0 0 17 25a9 9 0 0 0 4.04-.955l3.385.907a1.25 1.25 0 0 0 1.531-1.531l-.908-3.388a9.004 9.004 0 0 0-5.122-12.546 10 10 0 0 1 .749 1.973A7.5 7.5 0 0 1 24.5 16c0 1.3-.33 2.52-.91 3.585a.75.75 0 0 0-.067.553l.872 3.253-3.25-.871a.75.75 0 0 0-.554.066A7.46 7.46 0 0 1 17 23.5a7.47 7.47 0 0 1-4.623-1.594 10 10 0 0 1-2.109.068"/>`
} as const;

export default function ChatMultipleMinusIcon({ 
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

  const gradientId = 'chatmultipleminusicon_gradient';
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