
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7a6 6 0 1 1 2.996 5.195l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A6 6 0 0 1 2 7m4.5-1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1"/><path d="m12.276 14.947-2.402-1.2q.662-.185 1.263-.488l1.363.682 4.5-2.25V11a1 1 0 0 0-1-1h-1.674q.23-.481.384-1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.07q.49.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.191l-4.276 2.138a.5.5 0 0 1-.448 0"/>`,
  'regular': `<path d="M6 6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 6m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM8 1a6 6 0 0 0-5.27 8.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779A6 6 0 1 0 8 1M3 7a5 5 0 1 1 2.325 4.225.5.5 0 0 0-.426-.052l-1.658.553.51-1.781a.5.5 0 0 0-.052-.393A5 5 0 0 1 3 7m9.276 7.947-2.402-1.2q.662-.185 1.263-.488l1.363.682 4.5-2.25V11a1 1 0 0 0-1-1h-1.674q.23-.481.384-1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.07q.49.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.191l-4.276 2.138a.5.5 0 0 1-.448 0"/>`
} as const;

export default function ChatMailIcon({ 
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

  const gradientId = 'chatmailicon_gradient';
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