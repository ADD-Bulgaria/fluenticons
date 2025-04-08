
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.8 1.8 0 0 0-.46-.275zM22 7.191l-9.25 3.574v6.841l5.643-5.643A3.29 3.29 0 0 1 22 11.261zm-10.75 3.574v9.897l-.187.747a2 2 0 0 0-.044.225 4 4 0 0 1-.428-.145l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.192zM2.633 5.828 12 9.447l3.917-1.514-9.543-3.71-3.281 1.33q-.256.104-.46.275M19.1 12.67l-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`,
  'regular': `<path d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.175v9.653a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04q.211.085.428.145.015-.112.044-.226l.458-1.83c.162-.648.497-1.24.97-1.712l.26-.26v-6.84L20.5 7.773v3.235a3.3 3.3 0 0 1 1.5.253V7.175a1.75 1.75 0 0 0-1.093-1.622zm-2.254 1.39a2.25 2.25 0 0 1 1.69 0l6.593 2.673-2.67 1.03L9.241 4.68zM7.215 5.5l7.477 2.908-2.69 1.039L4.59 6.565zM3.5 7.75l7.75 3.014v9.371l-.095-.036-7.499-3.04a.25.25 0 0 1-.156-.232zm15.6 4.92-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`
} as const;

export default function BoxEditIcon({ 
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

  const gradientId = 'boxediticon_gradient';
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