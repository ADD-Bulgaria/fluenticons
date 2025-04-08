
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5.5a2.5 2.5 0 0 1 5 0v1h2.063a2 2 0 0 1 3.874 0H16v-1a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0V8h-2.268a2 2 0 0 1-.982.855v6.29c.415.168.76.471.982.855H16v-.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-1h-2.063a2 2 0 0 1-3.874 0H8v1a2.5 2.5 0 0 1-5 0v-3a2.5 2.5 0 0 1 5 0v.5h2.268c.221-.384.567-.687.982-.855v-6.29A2 2 0 0 1 10.268 8H8v.5a2.5 2.5 0 0 1-5 0z"/>`,
  'regular': `<path d="M5.5 3A2.5 2.5 0 0 0 3 5.5v3a2.5 2.5 0 0 0 5 0V8h2.268c.221.384.567.687.982.855v6.29c-.415.168-.76.471-.982.855H8v-.5a2.5 2.5 0 0 0-5 0v3a2.5 2.5 0 0 0 5 0v-1h2.063a2 2 0 0 0 3.874 0H16v1a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0v.5h-2.268a2 2 0 0 0-.982-.855v-6.29c.415-.168.76-.471.982-.855H16v.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0v1h-2.063a2 2 0 0 0-3.874 0H8v-1A2.5 2.5 0 0 0 5.5 3m-1 2.5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0zm1 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m12-9a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zm1 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"/>`
} as const;

export default function DriveTrainIcon({ 
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

  const gradientId = 'drivetrainicon_gradient';
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