
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M10 34c0-7.732 6.268-14 14-14s14 6.268 14 14q0 .255-.01.508c-.09 2.551-1.478 4.464-3.353 5.694C32.789 41.415 30.433 42 28.169 42h-8.338c-2.264 0-4.62-.585-6.468-1.798-1.875-1.23-3.263-3.143-3.354-5.694Q10 34.255 10 34m8.25-28c-2.84 0-4.75 2.7-4.75 5.5s1.91 5.5 4.75 5.5S23 14.3 23 11.5 21.09 6 18.25 6M3 17.5C3 14.7 4.91 12 7.75 12s4.75 2.7 4.75 5.5S10.59 23 7.75 23 3 20.3 3 17.5m22.5-6c0-2.8 1.91-5.5 4.75-5.5S35 8.7 35 11.5 33.09 17 30.25 17s-4.75-2.7-4.75-5.5m10 6c0-2.8 1.91-5.5 4.75-5.5S45 14.7 45 17.5 43.09 23 40.25 23s-4.75-2.7-4.75-5.5"/>`,
  'filled': `<path d="M18.25 6c-2.84 0-4.75 2.7-4.75 5.5s1.91 5.5 4.75 5.5S23 14.3 23 11.5 21.09 6 18.25 6M3 17.5C3 14.7 4.91 12 7.75 12s4.75 2.7 4.75 5.5S10.59 23 7.75 23 3 20.3 3 17.5m22.5-6c0-2.8 1.91-5.5 4.75-5.5S35 8.7 35 11.5 33.09 17 30.25 17s-4.75-2.7-4.75-5.5m10 6c0-2.8 1.91-5.5 4.75-5.5S45 14.7 45 17.5 43.09 23 40.25 23s-4.75-2.7-4.75-5.5M10 34c0-7.732 6.268-14 14-14s14 6.268 14 14q0 .255-.01.508c-.09 2.551-1.478 4.464-3.353 5.694C32.789 41.415 30.433 42 28.169 42h-8.338c-2.264 0-4.62-.585-6.468-1.798-1.875-1.23-3.263-3.143-3.354-5.694Q10 34.255 10 34"/>`,
  'regular': `<path d="M18.25 8.5c-1.027 0-2.25 1.105-2.25 3s1.223 3 2.25 3 2.25-1.105 2.25-3-1.223-3-2.25-3m-4.75 3c0-2.8 1.91-5.5 4.75-5.5S23 8.7 23 11.5 21.09 17 18.25 17s-4.75-2.7-4.75-5.5m-5.75 3c-1.027 0-2.25 1.105-2.25 3s1.223 3 2.25 3 2.25-1.105 2.25-3-1.223-3-2.25-3M3 17.5C3 14.7 4.91 12 7.75 12s4.75 2.7 4.75 5.5S10.59 23 7.75 23 3 20.3 3 17.5m25-6c0-1.895 1.223-3 2.25-3s2.25 1.105 2.25 3-1.223 3-2.25 3-2.25-1.105-2.25-3M30.25 6c-2.84 0-4.75 2.7-4.75 5.5s1.91 5.5 4.75 5.5S35 14.3 35 11.5 33.09 6 30.25 6m10 8.5c-1.027 0-2.25 1.105-2.25 3s1.223 3 2.25 3 2.25-1.105 2.25-3-1.223-3-2.25-3m-4.75 3c0-2.8 1.91-5.5 4.75-5.5S45 14.7 45 17.5 43.09 23 40.25 23s-4.75-2.7-4.75-5.5M12.5 34c0-6.351 5.149-11.5 11.5-11.5S35.5 27.649 35.5 34q0 .21-.008.42c-.056 1.582-.886 2.813-2.226 3.692-1.367.897-3.224 1.388-5.097 1.388h-8.338c-1.873 0-3.73-.491-5.096-1.388-1.34-.88-2.17-2.11-2.227-3.693Q12.5 34.21 12.5 34M24 20c-7.732 0-14 6.268-14 14q0 .255.01.508c.09 2.551 1.478 4.464 3.353 5.694C15.211 41.415 17.567 42 19.831 42h8.338c2.264 0 4.62-.585 6.468-1.798 1.875-1.23 3.263-3.143 3.354-5.694Q38 34.255 38 34c0-7.732-6.268-14-14-14"/>`
} as const;

export default function AnimalPawPrintIcon({ 
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

  const gradientId = 'animalpawprinticon_gradient';
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