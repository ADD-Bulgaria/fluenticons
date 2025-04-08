
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M42 35.75A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75V16l18-1 18 1z"/><path d="M42 35.75A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75V16l18-1 18 1z"/><g filter="url(#a)"><path d="M15.5 26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m11-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m6 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M18 31.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m6 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></g><path d="M12.25 6A6.25 6.25 0 0 0 6 12.25V16h36v-3.75A6.25 6.25 0 0 0 35.75 6z"/><defs><filter id="a" width="24.667" height="15.667" x="11.667" y="20.333" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy=".667"/><feGaussianBlur stdDeviation=".667"/><feColorMatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_378174_9807"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_378174_9807" result="shape"/></filter></defs>`,
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V14H6zm0 4.25v19.25A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75V16.5zm12 7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m6 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m11-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M15.5 34a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m11-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>`,
  'regular': `<path d="M15.5 26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m11-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m6 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M18 31.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m6 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75V14h31v-1.75a3.75 3.75 0 0 0-3.75-3.75zM8.5 35.75a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75V16.5h-31z"/>`
} as const;

export default function CalendarIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'calendaricon_gradient';
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