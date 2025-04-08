
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 21.372V14H4.253a2.25 2.25 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22c1.51 0 2.847-.209 4-.629M10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10M21.255 10c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H16.75A1.75 1.75 0 0 1 15 21.25v-9.5c0-.966.784-1.75 1.75-1.75zm-2.002 8.997h-.5l-.102.007a.75.75 0 0 0 .102 1.493h.5l.101-.007a.75.75 0 0 0-.101-1.493"/>`,
  'regular': `<path d="M14 15.5V14H4.254a2.25 2.25 0 0 0-2.25 2.249v.578c0 .892.32 1.756.9 2.435 1.565 1.834 3.952 2.74 7.097 2.74q2.267 0 4-.63v-1.62c-1.081.498-2.41.75-4 .75-2.738 0-4.704-.747-5.957-2.214a2.25 2.25 0 0 1-.54-1.462v-.577a.75.75 0 0 1 .75-.75zM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M21.255 10c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H16.75A1.75 1.75 0 0 1 15 21.25v-9.5c0-.966.783-1.75 1.75-1.75zm-2.002 8.997h-.5l-.102.007a.75.75 0 0 0 .102 1.493h.5l.102-.007a.75.75 0 0 0-.102-1.493"/>`
} as const;

export default function PersonPhoneIcon({ 
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

  const gradientId = 'personphoneicon_gradient';
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