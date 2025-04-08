
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.999 6c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365l-1.723.001-.004.009h-.586l-1.971 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13-4.259.001-.003.009h-.85l-1.971 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13-3.995.001-.003.009h-1.113l-1.972 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13h-.029C9.306 29.99 6 26.693 6 22.625s3.306-7.365 7.384-7.365h.16C14.07 10.161 17.662 6 24 6m-6.37 28.67a1.25 1.25 0 0 1 .45 1.71l-1.75 3a1.25 1.25 0 1 1-2.159-1.26l1.75-3a1.25 1.25 0 0 1 1.71-.45m8.45 1.71a1.25 1.25 0 1 0-2.159-1.26l-1.75 3a1.25 1.25 0 1 0 2.16 1.26z"/>`,
  'regular': `<path d="M23.999 6c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365l-1.723.001-.004.009h-.586l-1.971 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13-4.259.001-.003.009h-.85l-1.971 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13-3.995.001-.003.009h-1.113l-1.972 3.38a1.25 1.25 0 1 1-2.16-1.26l1.243-2.13h-.029C9.306 29.99 6 26.693 6 22.625s3.306-7.365 7.384-7.365h.16C14.07 10.161 17.662 6 24 6m0 2.495c-4.261 0-7.975 3.448-7.975 8.21 0 .755-.656 1.348-1.408 1.348h-1.42c-2.594 0-4.697 2.113-4.697 4.72 0 2.608 2.103 4.722 4.697 4.722h21.606c2.594 0 4.697-2.114 4.697-4.721s-2.103-4.722-4.697-4.722h-1.42c-.752 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.21-7.975-8.21m-6.37 26.175a1.25 1.25 0 0 1 .45 1.71l-1.75 3a1.25 1.25 0 1 1-2.159-1.26l1.75-3a1.25 1.25 0 0 1 1.71-.45m8.45 1.71a1.25 1.25 0 1 0-2.159-1.26l-1.75 3a1.25 1.25 0 1 0 2.16 1.26z"/>`
} as const;

export default function WeatherDrizzleIcon({ 
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

  const gradientId = 'weatherdrizzleicon_gradient';
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