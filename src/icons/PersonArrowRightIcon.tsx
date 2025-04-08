
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-7.77a2.25 2.25 0 0 0-2.248 2.25v.919c0 .572.178 1.13.51 1.596C4.056 20.929 6.58 22 10 22q1.397 0 2.593-.238A6.48 6.48 0 0 1 11 17.5M10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.646-2.853a.5.5 0 0 0-.707.707L19.293 17H15a.5.5 0 1 0 0 1h4.293l-1.646 1.647a.5.5 0 0 0 .707.707l2.5-2.5A.5.5 0 0 0 21 17.51v-.01a.5.5 0 0 0-.15-.357z"/>`,
  'regular': `<path d="M11.314 15.5a6.5 6.5 0 0 1 .708-1.5h-7.77a2.25 2.25 0 0 0-2.248 2.25v.577c0 .892.318 1.756.898 2.435 1.566 1.834 3.952 2.74 7.098 2.74q1.398 0 2.593-.24a6.5 6.5 0 0 1-.914-1.366A13 13 0 0 1 10 20.5c-2.738 0-4.704-.745-5.957-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.646-2.853a.5.5 0 0 0-.707.707L19.293 17H15a.5.5 0 1 0 0 1h4.293l-1.646 1.647a.5.5 0 0 0 .707.707l2.5-2.5A.5.5 0 0 0 21 17.51v-.01a.5.5 0 0 0-.15-.357z"/>`
} as const;

export default function PersonArrowRightIcon({ 
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

  const gradientId = 'personarrowrighticon_gradient';
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