
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M23.398 1.213c.662-.527 1.593-.014 1.593.877v3.438l5.416-4.315C31.068.686 32 1.199 32 2.09v9.82c0 .891-.932 1.404-1.593.877L24.99 8.472v3.438c0 .891-.931 1.404-1.593.877l-5.887-4.69c-.681-.544-.681-1.65 0-2.194zM16.283 5H6.5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5v-8.214a2.5 2.5 0 0 1-.528-.325L29 13.585V22.5a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 22.5V11.35l12.757 7.087a.5.5 0 0 0 .486 0l7.198-3.999a2.5 2.5 0 0 1-.978-.477l-.09-.073L16 17.428 3 10.206V9.5A3.5 3.5 0 0 1 6.5 6h9.172a2.8 2.8 0 0 1 .611-1"/>`
} as const;

export default function MailRewindIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'mailrewindicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}