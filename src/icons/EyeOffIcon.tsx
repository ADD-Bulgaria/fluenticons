
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m20.525 21.94 7.768 7.767a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 1 0-1.414 1.414l5.19 5.19c-3.99 3.15-5.424 7.75-5.444 7.823-.16.53.14 1.08.67 1.24s1.09-.14 1.25-.67c.073-.254 1.358-4.323 4.926-6.99l3.175 3.175a6 6 0 1 0 8.465 8.465m-4.972-9.924 6.43 6.431Q22 18.225 22 18a6 6 0 0 0-6.447-5.984M10.59 7.053 12.135 8.6a12.2 12.2 0 0 1 3.861-.6c9.105 0 11.915 8.903 12.038 9.29.13.43.53.71.96.71v-.01a.993.993 0 0 0 .96-1.28C29.923 16.61 26.613 6 15.995 6c-2.07 0-3.862.403-5.406 1.053"/>`,
  'light': `<path d="m20.523 21.937 7.77 7.77a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 1 0-1.414 1.414l5.156 5.157c-4.116 3.28-5.37 8.242-5.438 8.515l-.003.011a.503.503 0 0 0 .98.22c.068-.29 1.204-5.015 5.146-8.061l3.927 3.926A6 6 0 0 0 9.998 18c0 3.31 2.69 6 6 6 1.804 0 3.425-.8 4.525-2.063m-.708-.708A4.99 4.99 0 0 1 15.998 23c-2.76 0-5-2.24-5-5 0-1.53.688-2.9 1.77-3.816zm-4.262-9.213 1.016 1.016a5.005 5.005 0 0 1 4.397 4.397l1.016 1.016q.016-.22.016-.445a6.005 6.005 0 0 0-6.445-5.984m-4.99-4.99.76.761C12.669 7.295 14.218 7 15.999 7c10.46 0 12.91 10.18 13.01 10.61.06.23.26.39.49.39q.021 0 .047-.005.03-.004.063-.005c.27-.06.44-.33.38-.6v-.004C29.92 17.116 27.19 6 15.997 6c-2.096 0-3.895.39-5.436 1.026"/>`,
  'regular': `<path d="m20.525 21.94 7.768 7.767a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 1 0-1.414 1.414l5.19 5.19c-3.99 3.15-5.424 7.75-5.444 7.823-.16.53.14 1.08.67 1.24s1.09-.14 1.25-.67c.073-.254 1.358-4.323 4.926-6.99l3.175 3.175a6 6 0 1 0 8.465 8.465m-1.419-1.42a4 4 0 1 1-5.627-5.627zm-3.553-8.504 2.633 2.634c.464.303.86.7 1.164 1.163l2.634 2.634q.015-.222.016-.447a6 6 0 0 0-6.447-5.984M10.59 7.053 12.135 8.6a12.2 12.2 0 0 1 3.861-.6c9.105 0 11.915 8.903 12.038 9.29.13.43.53.71.96.71v-.01a.993.993 0 0 0 .96-1.28C29.923 16.61 26.613 6 15.995 6c-2.07 0-3.862.403-5.406 1.053"/>`
} as const;

export default function EyeOffIcon({ 
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

  const gradientId = 'eyeofficon_gradient';
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