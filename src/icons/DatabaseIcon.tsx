
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M8 12c1.206 1.173 2.677 2.049 4.01 2.659 3.262 1.492 7.505 2.317 11.99 2.317s8.728-.825 11.99-2.317c1.333-.61 2.804-1.486 4.01-2.659v24.25h-.007c-.139 2.527-2.373 4.438-5.043 5.66C32.083 43.222 28.21 44 24 44s-8.083-.779-10.95-2.09c-2.67-1.222-4.904-3.133-5.043-5.66H8z"/><path fill-opacity=".7" d="M8 12c1.206 1.173 2.677 2.049 4.01 2.659 3.262 1.492 7.505 2.317 11.99 2.317s8.728-.825 11.99-2.317c1.333-.61 2.804-1.486 4.01-2.659v24.25h-.007c-.139 2.527-2.373 4.438-5.043 5.66C32.083 43.222 28.21 44 24 44s-8.083-.779-10.95-2.09c-2.67-1.222-4.904-3.133-5.043-5.66H8z"/><path d="M13.05 6.09C15.917 4.778 19.79 4 24 4s8.083.778 10.95 2.09C37.707 7.352 40 9.35 40 12s-2.293 4.648-5.05 5.91C32.083 19.22 28.21 20 24 20s-8.083-.779-10.95-2.09C10.293 16.648 8 14.65 8 12s2.293-4.648 5.05-5.91"/>`,
  'filled': `<path d="M13.05 6.09C15.917 4.778 19.79 4 24 4s8.083.778 10.95 2.09C37.707 7.352 40 9.35 40 12s-2.293 4.648-5.05 5.91C32.083 19.22 28.21 20 24 20s-8.083-.779-10.95-2.09C10.293 16.648 8 14.65 8 12s2.293-4.648 5.05-5.91M8 17.524c1.206 1.174 2.677 2.05 4.01 2.659C15.272 21.676 19.515 22.5 24 22.5s8.728-.824 11.99-2.317c1.333-.61 2.804-1.485 4.01-2.659V36.25h-.007c-.139 2.527-2.373 4.438-5.043 5.66C32.083 43.222 28.21 44 24 44s-8.083-.779-10.95-2.09c-2.67-1.222-4.904-3.133-5.043-5.66H8z"/>`,
  'regular': `<path d="M40 12c0-2.651-2.293-4.648-5.05-5.91C32.083 4.778 28.21 4 24 4s-8.083.778-10.95 2.09C10.293 7.352 8 9.35 8 12v24.25h.007c.139 2.527 2.373 4.438 5.043 5.66C15.917 43.222 19.79 44 24 44s8.083-.779 10.95-2.09c2.67-1.222 4.904-3.133 5.043-5.66H40zm-29.5 0c0-1.077 1.009-2.455 3.59-3.636C16.562 7.233 20.064 6.5 24 6.5s7.438.733 9.91 1.864c2.58 1.181 3.59 2.56 3.59 3.636s-1.009 2.455-3.59 3.636C31.438 16.767 27.936 17.5 24 17.5s-7.438-.733-9.91-1.864c-2.58-1.181-3.59-2.56-3.59-3.636m27 24c0 1.077-1.009 2.455-3.59 3.636C31.438 40.767 27.936 41.5 24 41.5s-7.438-.733-9.91-1.864c-2.58-1.181-3.59-2.56-3.59-3.636V16.394c.752.586 1.625 1.092 2.55 1.516C15.917 19.22 19.79 20 24 20s8.083-.779 10.95-2.09c.925-.424 1.798-.93 2.55-1.516z"/>`
} as const;

export default function DatabaseIcon({ 
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

  const gradientId = 'databaseicon_gradient';
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