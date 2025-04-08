
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.6 7.775A4.25 4.25 0 0 1 9.844 3.75h3.31a4.25 4.25 0 0 1 4.244 4.025l1.682 31.75A4.25 4.25 0 0 1 14.836 44H8.162a4.25 4.25 0 0 1-4.244-4.475zM19.42 44a6.23 6.23 0 0 0 1.658-4.58l-1.07-20.196 9.108-9.108A1.25 1.25 0 0 1 31.25 11v9.982l10.866-10.866a1.25 1.25 0 0 1 2.134.894l-.22 27.78A5.25 5.25 0 0 1 38.78 44zm18.08-2.5v-9.75A1.75 1.75 0 0 0 35.75 30h-8A1.75 1.75 0 0 0 26 31.75v9.75z"/>`,
  'regular': `<path d="M9.844 3.75A4.25 4.25 0 0 0 5.6 7.775l-1.682 31.75A4.25 4.25 0 0 0 8.162 44h6.674a4.25 4.25 0 0 0 4.244-4.475l-1.682-31.75a4.25 4.25 0 0 0-4.244-4.025zM8.097 7.907A1.75 1.75 0 0 1 9.844 6.25h3.31c.93 0 1.698.728 1.747 1.657l1.683 31.75a1.75 1.75 0 0 1-1.748 1.843H8.162a1.75 1.75 0 0 1-1.747-1.843zM19.419 44a6.25 6.25 0 0 0 1.42-2.5h2.66V31.25c0-.966.784-1.75 1.75-1.75h11c.967 0 1.75.784 1.75 1.75V41.5h.782a2.75 2.75 0 0 0 2.75-2.728l.194-24.73-10.842 10.842A1.25 1.25 0 0 1 28.749 24v-9.982l-8.564 8.564-.178-3.358 9.108-9.108A1.25 1.25 0 0 1 31.25 11v9.982l10.866-10.866a1.25 1.25 0 0 1 2.134.894l-.22 27.78A5.25 5.25 0 0 1 38.78 44zm6.58-2.5h9.5V32H26z"/>`
} as const;

export default function BuildingFactoryIcon({ 
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

  const gradientId = 'buildingfactoryicon_gradient';
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