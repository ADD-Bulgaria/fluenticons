
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M14.188 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l2 5 5 2v7.188z"/><path fill-opacity=".5" d="M14.188 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l2 5 5 2v7.188z"/><path d="M13 7.5V2l7 7h-5.5A1.5 1.5 0 0 1 13 7.5m7.585 6.956h-3.241l-4.142 4.146a3 3 0 0 0-.178.196v3.208h3.25a3 3 0 0 0 .171-.157l4.14-4.144z"/><path d="M16.28 21.998a2.7 2.7 0 0 1-1.087.556l-1.837.46a1.09 1.09 0 0 1-1.322-1.324l.459-1.84a2.7 2.7 0 0 1 .534-1.06 4.3 4.3 0 0 0 3.252 3.208m1.295-7.763 1.56-1.562a2.29 2.29 0 0 1 3.244 0c.896.896.896 2.35 0 3.246l-1.44 1.443z"/><path d="M21.824 16.477a4.3 4.3 0 0 1-3.262-3.249l-1.227 1.228a4.3 4.3 0 0 0 3.263 3.249z"/>`,
  'filled': `<path d="M12 2v6a2 2 0 0 0 2 2h4.92c-.596.22-1.144.554-1.558.97l-6.05 6.092a2.8 2.8 0 0 0-.728 1.279l-.525 2.03A2.08 2.08 0 0 0 10.3 22H5.5A1.5 1.5 0 0 1 4 20.5v-17A1.5 1.5 0 0 1 5.5 2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-1.304 15.072 5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.7 2.7 0 0 1-1.247.707l-1.831.457a1.087 1.087 0 0 1-1.318-1.318l.457-1.83c.118-.473.362-.904.707-1.248"/>`,
  'regular': `<path d="M6.25 3.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h3.78a2.08 2.08 0 0 0 .27 1.5H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h6.086c.464 0 .909.184 1.237.513l5.914 5.914c.329.328.513.773.513 1.237V10h-.13a3 3 0 0 0-.332 0H14a2 2 0 0 1-2-2V3.5zm7.25 1.06V8a.5.5 0 0 0 .5.5h3.44zM19.713 11h.002a2.286 2.286 0 0 1 1.615 3.902l-5.902 5.902a2.7 2.7 0 0 1-1.247.707l-1.831.457a1.087 1.087 0 0 1-1.318-1.318l.457-1.83c.118-.473.362-.904.707-1.248l5.902-5.902a2.28 2.28 0 0 1 1.615-.67"/>`
} as const;

export default function DocumentEditIcon({ 
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

  const gradientId = 'documentediticon_gradient';
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