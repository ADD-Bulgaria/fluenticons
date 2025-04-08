
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 12.75A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v5.923l-.47-.218c-2.64-1.228-5.711.122-6.651 2.852l-.696 2.02a4.25 4.25 0 0 0 .95 4.322l1.49 1.553c-.219 1.378-.831 2.47-1.864 3.348l-2.011-.532a4.14 4.14 0 0 0-4.23 1.348l-1.363 1.627A4.98 4.98 0 0 0 28.341 40H8.75A4.75 4.75 0 0 1 4 35.25zm9.25 9.75a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5zM12 30.25c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25M13.25 16a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5zm24.824 7.978.696-2.02c.56-1.628 2.37-2.409 3.917-1.69l.75.35c1.221.567 2.245 1.585 2.444 2.937.976 6.621-4.192 15.779-10.286 18.224-1.243.5-2.617.102-3.708-.696l-.67-.49c-1.382-1.01-1.627-3.005-.529-4.315l1.363-1.627a2.13 2.13 0 0 1 2.186-.699l2.94.777q3.334-2.197 3.526-6.247l-2.128-2.218a2.25 2.25 0 0 1-.501-2.286"/>`,
  'regular': `<path d="M12 17.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25m1.25 5.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5zm0 6.5a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5zM8.75 8A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h19.591a5.04 5.04 0 0 1-.295-2.5H8.75a2.25 2.25 0 0 1-2.25-2.25v-22.5a2.25 2.25 0 0 1 2.25-2.25h30.5a2.25 2.25 0 0 1 2.25 2.25v5.248a4.8 4.8 0 0 1 2.03.457l.47.218V12.75A4.75 4.75 0 0 0 39.25 8zm29.324 15.978.696-2.02c.56-1.628 2.37-2.409 3.917-1.69l.75.35c1.221.567 2.245 1.585 2.444 2.937.976 6.621-4.192 15.779-10.286 18.224-1.243.5-2.617.102-3.708-.696l-.67-.49c-1.382-1.01-1.627-3.005-.529-4.315l1.363-1.627a2.13 2.13 0 0 1 2.186-.699l2.94.777q3.334-2.197 3.526-6.247l-2.128-2.218a2.25 2.25 0 0 1-.501-2.286"/>`
} as const;

export default function SlideTextCallIcon({ 
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

  const gradientId = 'slidetextcallicon_gradient';
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