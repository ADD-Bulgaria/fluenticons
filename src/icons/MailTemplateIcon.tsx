
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5h-9a4 4 0 0 0-4 4v5q.001.519.126 1H5a3 3 0 0 1-3-3zm3.75-1a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm2 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm-.202 5.27A3 3 0 0 1 10 11h9a3 3 0 0 1 2.452 1.27L14.5 16.616zm-.534 1.436Q7 13.852 7 14v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5q0-.15-.014-.294l-7.088 4.43a.75.75 0 0 1-.796 0z"/>`,
  'regular': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h10.5A3.25 3.25 0 0 1 19 5.25v4.757a4 4 0 0 0-.25-.007H17.5V5.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 5.25v11.5c0 .966.784 1.75 1.75 1.75H6v.25c0 .435.065.855.187 1.25H5.25A3.25 3.25 0 0 1 2 16.75zM6.75 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM8 8.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 8.25m-1 6A3.25 3.25 0 0 1 10.25 11h8.5A3.25 3.25 0 0 1 22 14.25v4.5A3.25 3.25 0 0 1 18.75 22h-8.5A3.25 3.25 0 0 1 7 18.75zm3.25-1.75c-.504 0-.959.213-1.278.555l5.528 3.553 5.528-3.553a1.75 1.75 0 0 0-1.278-.555zM8.5 18.75c0 .966.784 1.75 1.75 1.75h8.5a1.75 1.75 0 0 0 1.75-1.75v-4.216l-5.594 3.597a.75.75 0 0 1-.812 0L8.5 14.534z"/>`
} as const;

export default function MailTemplateIcon({ 
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

  const gradientId = 'mailtemplateicon_gradient';
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