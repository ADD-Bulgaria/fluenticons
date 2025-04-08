
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M11.25 31 10 32a8.25 8.25 0 0 0 8.25 8.25H20v-2.5h-1.75A5.75 5.75 0 0 1 12.5 32z"/><path d="M29 39a5 5 0 1 1-10 0 5 5 0 0 1 10 0M12.5 18c0-6.351 5.149-11.5 11.5-11.5S35.5 11.649 35.5 18v2l1 1.5L38 20v-2c0-7.732-6.268-14-14-14s-14 6.268-14 14v2l1.5 1.5 1-1.5z"/><path d="M12.5 20h5.25A2.25 2.25 0 0 1 20 22.25v7.5A2.25 2.25 0 0 1 17.75 32H12.5L11 26zm23 11.624 1.5-5.812L35.5 20h-5.25A2.25 2.25 0 0 0 28 22.25v7.5A2.25 2.25 0 0 0 30.25 32h3.5c.624 0 1.216-.134 1.75-.376"/><path d="M12.5 20H10v12h2.5zm23 11.624A4.25 4.25 0 0 0 38 27.75V20h-2.5z"/>`,
  'filled': `<path d="M12.5 18c0-6.351 5.149-11.5 11.5-11.5S35.5 11.649 35.5 18v2h-5.25A2.25 2.25 0 0 0 28 22.25v7.5A2.25 2.25 0 0 0 30.25 32h3.5A4.25 4.25 0 0 0 38 27.75v-6.5q0-.063-.006-.125Q38 21.063 38 21v-3c0-7.732-6.268-14-14-14s-14 6.268-14 14v14a8.25 8.25 0 0 0 8.25 8.25h.907a5 5 0 1 0 0-2.5h-.907A5.75 5.75 0 0 1 12.5 32v-.376a4.2 4.2 0 0 0 1.75.376h3.5A2.25 2.25 0 0 0 20 29.75v-7.5A2.25 2.25 0 0 0 17.75 20H12.5z"/>`,
  'regular': `<path d="M12.5 18c0-6.351 5.149-11.5 11.5-11.5S35.5 11.649 35.5 18v2h-5.25A2.25 2.25 0 0 0 28 22.25v7.5A2.25 2.25 0 0 0 30.25 32h3.5A4.25 4.25 0 0 0 38 27.75v-6.5q0-.063-.006-.125Q38 21.063 38 21v-3c0-7.732-6.268-14-14-14s-14 6.268-14 14v14a8.25 8.25 0 0 0 8.25 8.25h.907a5 5 0 1 0 0-2.5h-.907A5.75 5.75 0 0 1 12.5 32v-.376a4.2 4.2 0 0 0 1.75.376h3.5A2.25 2.25 0 0 0 20 29.75v-7.5A2.25 2.25 0 0 0 17.75 20H12.5zm0 4.5h5v7h-3.25a1.75 1.75 0 0 1-1.75-1.75zm9 16.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m9-16.5h5v5.25a1.75 1.75 0 0 1-1.75 1.75H30.5z"/>`
} as const;

export default function HeadsetIcon({ 
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

  const gradientId = 'headseticon_gradient';
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