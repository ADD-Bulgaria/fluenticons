
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.75 2A2.75 2.75 0 0 0 2 4.75v10.5A2.75 2.75 0 0 0 4.75 18h1.5a.75.75 0 0 0 0-1.5h-1.5c-.69 0-1.25-.56-1.25-1.25V4.75c0-.69.56-1.25 1.25-1.25h1.5a.75.75 0 0 0 0-1.5zm7 5.25a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 0 1.5 0V10a4 4 0 1 0-4.238 3.993L9.757 14l.012-.007Q9.885 14 10 14c.377 0 .721-.043 1.05-.132.354-.097.75.05.885.39.172.43-.021.927-.467 1.051A5.4 5.4 0 0 1 10 15.5a5.5 5.5 0 1 1 5.5-5.5v.75c0 .456-.136.881-.37 1.236a5 5 0 0 1-.13.308v-.13a2.25 2.25 0 0 1-1.75.836 2.25 2.25 0 0 1-1.83-.942 2.5 2.5 0 1 1-.37-4.328.75.75 0 0 1 .7-.48M10 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8-4.25A2.75 2.75 0 0 0 15.25 2h-1.5a.75.75 0 0 0 0 1.5h1.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-1.5a.75.75 0 0 0 0 1.5h1.5A2.75 2.75 0 0 0 18 15.25z"/>`,
  'regular': `<path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 2 15.5v-11A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1zm11 14a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1zm-4-7a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M10 7.5c.563 0 1.082.186 1.5.5a.5.5 0 0 1 1 0v2.75a.75.75 0 0 0 1.5 0V10a4 4 0 1 0-4.239 3.993L9.758 14l.025-.006Q9.891 14 10 14c.45 0 .927-.084 1.36-.228.3-.098.64.11.64.424a.55.55 0 0 1-.361.53A5 5 0 1 1 15 10v.749a1.75 1.75 0 0 1-3.198.983A2.5 2.5 0 1 1 10 7.5"/>`
} as const;

export default function MentionBracketsIcon({ 
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

  const gradientId = 'mentionbracketsicon_gradient';
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