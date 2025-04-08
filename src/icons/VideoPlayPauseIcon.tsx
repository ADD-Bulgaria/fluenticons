
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 7.75c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 15.25 18h-1.5A1.75 1.75 0 0 1 12 16.25v-4.13a1.73 1.73 0 0 1-.84 1.417l-6.5 3.952C3.493 18.197 2 17.358 2 15.993V8.004c0-1.372 1.507-2.21 2.673-1.486l6.502 4.037c.526.327.8.862.825 1.408zm6 0c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 21.25 18h-1.5A1.75 1.75 0 0 1 18 16.25z"/>`,
  'regular': `<path d="M12 7.75c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 15.25 18h-1.5A1.75 1.75 0 0 1 12 16.25v-4.13a1.73 1.73 0 0 1-.84 1.417l-6.5 3.952C3.493 18.197 2 17.358 2 15.993V8.004c0-1.372 1.507-2.21 2.673-1.486l6.502 4.037c.526.327.8.862.825 1.408zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25zm4.25.25c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 21.25 18h-1.5A1.75 1.75 0 0 1 18 16.25zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25zM3.5 8.004v7.99a.25.25 0 0 0 .38.213l6.502-3.952a.25.25 0 0 0 .002-.426L3.882 7.792a.25.25 0 0 0-.382.212"/>`
} as const;

export default function VideoPlayPauseIcon({ 
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

  const gradientId = 'videoplaypauseicon_gradient';
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