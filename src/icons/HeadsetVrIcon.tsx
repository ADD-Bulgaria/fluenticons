
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 3.75A.75.75 0 0 1 9.75 3h4.5a.75.75 0 0 1 .75.75V5h3a4 4 0 0 1 4 4h.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H22v2.5a4 4 0 0 1-4 4h-1.546a4 4 0 0 1-2.163-.635l-2.156-1.386a.25.25 0 0 0-.27 0l-2.156 1.386a4 4 0 0 1-2.164.635H6a4 4 0 0 1-4-4V14h-.25a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 1.75 9H2a4 4 0 0 1 4-4h3zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 2.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75m8.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm7.25.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M9.75 3a.75.75 0 0 0-.75.75V5H6a4 4 0 0 0-4 4h-.25a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75H2v2.5a4 4 0 0 0 4 4h1.545a4 4 0 0 0 2.164-.635l2.156-1.386a.25.25 0 0 1 .27 0l2.156 1.386a4 4 0 0 0 2.163.635H18a4 4 0 0 0 4-4V14h.25a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75H22a4 4 0 0 0-4-4h-3V3.75a.75.75 0 0 0-.75-.75zM6 6.5h12A2.5 2.5 0 0 1 20.5 9v7.5A2.5 2.5 0 0 1 18 19h-1.546a2.5 2.5 0 0 1-1.351-.397l-2.157-1.386a1.75 1.75 0 0 0-1.892 0l-2.157 1.386A2.5 2.5 0 0 1 7.545 19H6a2.5 2.5 0 0 1-2.5-2.5V9A2.5 2.5 0 0 1 6 6.5"/>`
} as const;

export default function HeadsetVrIcon({ 
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

  const gradientId = 'headsetvricon_gradient';
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