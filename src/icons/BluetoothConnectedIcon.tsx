
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.617 2.076a1 1 0 0 1 1.09.217l5 5a1 1 0 0 1-.082 1.488L13.6 12l4.024 3.22a1 1 0 0 1 .082 1.487l-5 5A1 1 0 0 1 11 21v-6.92l-3.375 2.7a1 1 0 0 1-1.25-1.56L10.4 12 6.375 8.78a1 1 0 0 1 1.25-1.56L11 9.92V3a1 1 0 0 1 .617-.924M13 14.081v4.505l2.503-2.503zm0-4.162 2.503-2.002L13 5.414zM20 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M11.463 2.057a.75.75 0 0 1 .817.163l5 5a.75.75 0 0 1-.044 1.101L12.908 12l4.328 3.679a.75.75 0 0 1 .044 1.101l-5 5a.75.75 0 0 1-1.28-.53v-7.628l-3.764 3.2a.75.75 0 0 1-.972-1.143L10.592 12 6.264 8.321a.75.75 0 0 1 .972-1.142l3.764 3.2V2.75a.75.75 0 0 1 .463-.693M12.5 13.622v5.817l3.145-3.144zm0-3.244 3.145-2.673L12.5 4.561zM20 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function BluetoothConnectedIcon({ 
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

  const gradientId = 'bluetoothconnectedicon_gradient';
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