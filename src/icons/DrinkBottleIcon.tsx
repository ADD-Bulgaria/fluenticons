
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.002 4.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 .875 4.842c.2 1.015.88 1.854 1.908 2.872a8.99 8.99 0 0 1 3.714 7.405v.027L25 17.2V26a4 4 0 0 1-6.5 3.122A4 4 0 0 1 16 30a4 4 0 0 1-2.5-.878A4 4 0 0 1 7 26v-9.001a8.97 8.97 0 0 1 2.19-5.884q.512-.592 1.118-1.087c1.215-1.176 2.024-2.08 2.235-3.218a2.5 2.5 0 0 1-1.541-2.31m2.5-.5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1zm-1.329 7h7.569c-1.02-1.022-2.027-2.202-2.332-3.8h-2.906c-.304 1.591-1.306 2.775-2.33 3.8M9 26a2 2 0 0 0 3.667 1.105 1 1 0 0 1 1.666 0 1.998 1.998 0 0 0 3.334 0 1 1 0 0 1 1.666 0A2 2 0 0 0 23 26v-2H9z"/>`,
  'regular': `<path d="M13.502 2a2.5 2.5 0 0 0-.959 4.81c-.21 1.138-1.02 2.042-2.235 3.218a9 9 0 0 0-1.18 1.16A8.97 8.97 0 0 0 7 17.2V26a4 4 0 0 0 6.5 3.122A4 4 0 0 0 16 30c.946 0 1.816-.33 2.5-.878A4 4 0 0 0 25 26v-9.001a8.99 8.99 0 0 0-3.715-7.285c-1.029-1.018-1.708-1.857-1.908-2.872A2.501 2.501 0 0 0 18.502 2zm-.5 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m6.74 6.5h-7.569c1.024-1.025 2.027-2.209 2.331-3.8h2.906c.305 1.598 1.312 2.778 2.332 3.8m-9.488 2h11.492a6.97 6.97 0 0 1 1.253 4.146L23 17.2V22H9v-5c0-1.488.463-2.866 1.254-4M9 24h14v2a2 2 0 0 1-3.667 1.105 1 1 0 0 0-1.666 0c-.36.541-.972.895-1.667.895a2 2 0 0 1-1.667-.895 1 1 0 0 0-1.666 0A2 2 0 0 1 9 26z"/>`
} as const;

export default function DrinkBottleIcon({ 
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

  const gradientId = 'drinkbottleicon_gradient';
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