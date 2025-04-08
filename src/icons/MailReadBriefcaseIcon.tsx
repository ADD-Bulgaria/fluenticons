
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.151 4.69a6.25 6.25 0 0 1 5.698 0l13.75 7.042a6.25 6.25 0 0 1 2.605 2.51L24.002 24.349 4.834 14.175a6.25 6.25 0 0 1 2.567-2.443zM4.041 16.584q-.04.353-.041.71V33.75A6.25 6.25 0 0 0 10.25 40H23v-8a5 5 0 0 1 5-5h.022a5.5 5.5 0 0 1 .772-2.347l-4.212 2.216a1.25 1.25 0 0 1-1.168-.002zm39.959.71V27h-.022a5.5 5.5 0 0 0-5.478-5h-4.667l10.135-5.335q.032.312.032.63M30 27.5V29h-2a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V32a3 3 0 0 0-3-3h-2v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5a3.5 3.5 0 0 0-3.5 3.5m3.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5V29h-8v-1.5a1.5 1.5 0 0 1 1.5-1.5"/>`,
  'regular': `<path d="M22.29 6.915a3.75 3.75 0 0 1 3.42 0l13.75 7.042a3.75 3.75 0 0 1 1.53 1.451L24.003 24.35l-16.96-9a3.75 3.75 0 0 1 1.498-1.394zM6.5 17.893l16.914 8.974a1.25 1.25 0 0 0 1.168.002l4.211-2.216A5.5 5.5 0 0 1 33.5 22h.334l7.666-4.035v4.925A5.5 5.5 0 0 1 43.978 27H44v-9.705a6.25 6.25 0 0 0-3.401-5.563L26.849 4.69a6.25 6.25 0 0 0-5.698 0l-13.75 7.042A6.25 6.25 0 0 0 4 17.295V33.75A6.25 6.25 0 0 0 10.25 40H23v-2.5H10.25a3.75 3.75 0 0 1-3.75-3.75zM30 27.5V29h-2a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V32a3 3 0 0 0-3-3h-2v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5a3.5 3.5 0 0 0-3.5 3.5m3.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5V29h-8v-1.5a1.5 1.5 0 0 1 1.5-1.5"/>`
} as const;

export default function MailReadBriefcaseIcon({ 
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

  const gradientId = 'mailreadbriefcaseicon_gradient';
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