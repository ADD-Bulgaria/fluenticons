
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 15.232 11.232 8h3.536L4 18.768zm0 12.536v-3.536L20.232 8h3.536zm.1 8.9a4.3 4.3 0 0 1-.1-.918v-2.518L16.082 21.15c.137.95.44 1.845.88 2.656zm26.196-11.732q-.454.578-1.004 1.064h1.458c.605 0 1.186.102 1.727.29L44 14.769V12.25q0-.474-.1-.918zm.366-9.366a8 8 0 0 1 1.09 2.446l9.673-9.673A4.2 4.2 0 0 0 39.75 8h-1.518zM32.768 8l-4.962 4.962a8 8 0 0 0-2.656-.88L29.232 8zm-23 32H8.25a4.2 4.2 0 0 1-1.675-.343L12 34.232v3.536zM36 31.25v.518l8-8v-3.536l-8.593 8.593A5.2 5.2 0 0 1 36 31.25m.768 8.75H36v-2.768l8-8v3.536zM14 31.25V40h20v-8.75A3.25 3.25 0 0 0 30.75 28h-13.5A3.25 3.25 0 0 0 14 31.25M24 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/>`,
  'regular': `<path d="M4 15.232 11.232 8h3.536L4 18.768zm0 12.536v-3.536L20.232 8h3.536zm.1 8.9a4.3 4.3 0 0 1-.1-.918v-2.518L16.082 21.15c.137.95.44 1.845.88 2.656zm26.196-11.732q-.454.578-1.004 1.064h1.458c.605 0 1.186.102 1.727.29L44 14.769V12.25q0-.474-.1-.918zm.366-9.366a8 8 0 0 1 1.09 2.446l9.673-9.673A4.2 4.2 0 0 0 39.75 8h-1.518zM32.768 8l-4.962 4.962a8 8 0 0 0-2.656-.88L29.232 8zm-23 32H8.25a4.2 4.2 0 0 1-1.675-.343L12 34.232v3.536zM36 31.25v.518l8-8v-3.536l-8.593 8.593A5.2 5.2 0 0 1 36 31.25m.768 8.75H36v-2.768l8-8v3.536zM17.25 30.5a.75.75 0 0 0-.75.75V40H14v-8.75A3.25 3.25 0 0 1 17.25 28h13.5A3.25 3.25 0 0 1 34 31.25V40h-2.5v-8.75a.75.75 0 0 0-.75-.75zM27.5 20a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0m2.5 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/>`
} as const;

export default function VideoBackgroundEffectIcon({ 
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

  const gradientId = 'videobackgroundeffecticon_gradient';
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