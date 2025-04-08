
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 10.4v.6h-3.5a.5.5 0 0 0-.5.498v.013l-.004.06a2.6 2.6 0 0 1-.256.955 1.7 1.7 0 0 1-.572.667c-.26.174-.63.307-1.168.307s-.907-.133-1.168-.307a1.7 1.7 0 0 1-.572-.667A2.6 2.6 0 0 1 8 11.511V11.5a.5.5 0 0 0-.5-.5H4V7a2 2 0 0 1 2-2h2.022a5.5 5.5 0 0 1 .185-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.743a5.5 5.5 0 0 1-1 .657m-2.5-.4a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m-2.354-4.146a.5.5 0 0 1 .708-.708L13 6.293V3.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.351.146h-.006a.5.5 0 0 1-.348-.144l-.003-.003z"/>`,
  'regular': `<path d="M8.022 5H6a2 2 0 0 0-2 2v4h3.5a.5.5 0 0 1 .5.5v.011l.004.06a2.6 2.6 0 0 0 .256.955c.126.254.308.492.572.667.26.174.63.307 1.168.307s.907-.133 1.168-.307c.264-.175.446-.413.572-.667.076-.152.13-.305.169-.448a3 3 0 0 0 .09-.566l.001-.013a.5.5 0 0 1 .5-.499H16v-.6a5.5 5.5 0 0 0 1-.657V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.207a5.5 5.5 0 0 0-.185 1m-.972 7H4v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-3.05a3.6 3.6 0 0 1-.315.974 2.7 2.7 0 0 1-.912 1.051c-.443.295-1.01.475-1.723.475-.712 0-1.28-.18-1.723-.475a2.7 2.7 0 0 1-.912-1.051A3.6 3.6 0 0 1 7.05 12m6.45-2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m-2.354-4.146a.5.5 0 0 1 .708-.708L13 6.293V3.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.351.146h-.006a.5.5 0 0 1-.348-.144l-.003-.003z"/>`
} as const;

export default function MailInboxArrowDownIcon({ 
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

  const gradientId = 'mailinboxarrowdownicon_gradient';
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