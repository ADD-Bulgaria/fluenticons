
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3.163-4H4.5a2.5 2.5 0 0 0-2.485 2.223L9 8.92l3.264-1.727A3.5 3.5 0 0 1 11 4.5c0-.537.12-1.045.337-1.5m1.972 4.792L9.254 9.931a.5.5 0 0 1-.507 0L2 6.373V12.5A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V7.663A3.5 3.5 0 0 1 14.5 8a3.5 3.5 0 0 1-1.19-.208M6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-5c.607.456 1 1.182 1 2v3a4.5 4.5 0 0 1-4.5 4.5z"/>`,
  'regular': `<path d="M14.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3.163-4H4.5A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V7.663c-.31.148-.647.251-1 .302V12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 12.5V6.963l5.746 2.968.082.038a.5.5 0 0 0 .426-.038l4.104-2.121a3.5 3.5 0 0 1-1.071-.599L9 8.92 3 5.802V5.5A1.5 1.5 0 0 1 4.5 4h6.535c.05-.353.154-.69.302-1M6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-5c.607.456 1 1.182 1 2v3a4.5 4.5 0 0 1-4.5 4.5z"/>`
} as const;

export default function MailAllUnreadIcon({ 
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

  const gradientId = 'mailallunreadicon_gradient';
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