
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M28.293 2.293a1 1 0 1 1 1.414 1.414l-9.34 9.34a7.336 7.336 0 0 1-.66 9.66l-.793.793-10.39-10.39.781-.73c2.633-2.62 6.742-2.952 9.647-.746zM6.773 14.187 2.586 16.09a1 1 0 0 0-.293 1.617l12 12a1 1 0 0 0 1.617-.293l1.903-4.187z"/>`,
  'light': `<path d="M29.853 2.854a.5.5 0 1 0-.707-.708l-9.794 9.795a7.3 7.3 0 0 0-4.786-1.783c-2.07 0-3.94.86-5.27 2.242-.772.802-1.51 1.522-2.42 1.904l-4.254 1.784a1 1 0 0 0-.32 1.629l11.98 11.98a1 1 0 0 0 1.626-.313l1.815-4.235c.385-.898 1.1-1.625 1.896-2.386a7.3 7.3 0 0 0 2.263-5.29c0-1.85-.687-3.54-1.82-4.828zm-15.287 8.304a6.316 6.316 0 0 1 4.362 10.882 16 16 0 0 0-1.077 1.104l-8.961-8.96c.407-.35.778-.729 1.126-1.09a6.3 6.3 0 0 1 4.55-1.936m-7.304 4.068c.29-.121.563-.27.821-.435l9.157 9.156a5.3 5.3 0 0 0-.436.808l-1.815 4.235-11.98-11.98z"/>`,
  'regular': `<path d="M29.707 2.293a1 1 0 0 0-1.414 0l-9.341 9.34c-2.905-2.205-7.014-1.873-9.647.747l-1.368 1.277-5.35 2.433a1 1 0 0 0-.294 1.617l12 12a1 1 0 0 0 1.617-.293l2.425-5.335 1.372-1.372a7.336 7.336 0 0 0 .66-9.66l9.34-9.34a1 1 0 0 0 0-1.414M8.283 15.697l8.02 8.02-1.616 3.555-9.96-9.959zm9.217 6.389-7.561-7.561.743-.694.025-.024c2.13-2.13 5.497-2.188 7.586-.1a5.34 5.34 0 0 1 0 7.586z"/>`
} as const;

export default function BroomIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'broomicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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