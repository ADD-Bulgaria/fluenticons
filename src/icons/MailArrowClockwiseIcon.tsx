
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30.5 2a1 1 0 1 0-2 0v1a7.5 7.5 0 1 0 3 6 1 1 0 1 0-2 0 5.5 5.5 0 1 1-2.337-4.5H26a1 1 0 1 0 0 2h3.5a1 1 0 0 0 1-1zM15 9a8.98 8.98 0 0 0 3.055 6.758L16 16.864 3.48 10.123l-1.476-.82A4.5 4.5 0 0 1 6.5 5h9.436A8.96 8.96 0 0 0 15 9m1.474 9.88 3.447-1.855A8.96 8.96 0 0 0 24 18a8.97 8.97 0 0 0 6-2.292V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5V11.588l.514.286 13.012 7.007a1 1 0 0 0 .948 0"/>`,
  'light': `<path d="M30.5 2a1 1 0 1 0-2 0v1a7.5 7.5 0 1 0 3 6 1 1 0 1 0-2 0 5.5 5.5 0 1 1-2.337-4.5H26a1 1 0 1 0 0 2h3.5a1 1 0 0 0 1-1zM30 22.5v-6.792q-.472.422-1 .776V22.5a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 22.5V11.35l12.757 7.087a.5.5 0 0 0 .486 0l3.11-1.728a9 9 0 0 1-.917-.634L16 17.428 3 10.206V9.5A3.5 3.5 0 0 1 6.5 6h9.012q.182-.515.423-1H6.5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5"/>`,
  'regular': `<path d="M30.5 2a1 1 0 1 0-2 0v1a7.5 7.5 0 1 0 3 6 1 1 0 1 0-2 0 5.5 5.5 0 1 1-2.337-4.5H26a1 1 0 1 0 0 2h3.5a1 1 0 0 0 1-1zm-24 3h9.436a9 9 0 0 0-.713 2H6.5A2.5 2.5 0 0 0 4 9.5v.903l12 6.461 2.055-1.106c.564.496 1.19.923 1.866 1.267l-3.447 1.856a1 1 0 0 1-.948 0L4 12.674V22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5v-5.436a9 9 0 0 0 2-1.356V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5"/>`
} as const;

export default function MailArrowClockwiseIcon({ 
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

  const gradientId = 'mailarrowclockwiseicon_gradient';
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