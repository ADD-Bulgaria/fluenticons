
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.25 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M7 4.75A.75.75 0 0 1 7.75 4h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75M7.75 9a.75.75 0 0 0 0 1.5h5.456A5.5 5.5 0 0 1 15.5 10c.743 0 1.452.147 2.098.414A.75.75 0 0 0 17.25 9zm0 5h2.457A5.5 5.5 0 0 0 10 15.5H7.75a.75.75 0 0 1 0-1.5M4.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M3.25 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-3.793 0 1.147-1.146a.5.5 0 0 0-.708-.708L15.5 14.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147 1.146 1.147a.5.5 0 0 0 .708-.708z"/>`,
  'regular': `<path d="M3 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4.022 5.5q.047-.516.185-1H6.5a.5.5 0 0 0 0 1zM4 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m17 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-3.793 0 1.147-1.146a.5.5 0 0 0-.708-.708L15.5 14.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147 1.146 1.147a.5.5 0 0 0 .708-.708z"/>`
} as const;

export default function TextBulletListDismissIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'textbulletlistdismissicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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