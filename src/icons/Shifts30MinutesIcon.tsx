
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.5 5.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0M8.75 10a2.25 2.25 0 0 0-2.25 2.25v.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-.5A2.25 2.25 0 0 0 15.25 10zm-2.253 6.999a.999.999 0 1 1-1.997 0 .999.999 0 0 1 1.997 0M5.5 21.497a.999.999 0 1 0 0-1.997.999.999 0 0 0 0 1.997m4.613-4.97a1.8 1.8 0 0 0-.668.329.75.75 0 1 1-.924-1.182c.267-.209.71-.48 1.246-.606.553-.13 1.24-.113 1.887.327.782.53 1.044 1.469.919 2.236a2.1 2.1 0 0 1-.3.79c.174.2.306.429.392.672.248.704.133 1.581-.475 2.187-.595.591-1.393.766-2.08.73-.68-.036-1.377-.282-1.851-.7a.75.75 0 0 1 .991-1.125c.172.152.526.305.938.327.404.021.736-.089.944-.296a.6.6 0 0 0 .118-.623c-.07-.202-.225-.343-.5-.343h-.5a.75.75 0 1 1 0-1.5h.5c.117 0 .175-.036.214-.075a.52.52 0 0 0 .128-.287c.05-.307-.072-.611-.28-.752-.218-.148-.448-.168-.7-.108M16.5 15c-.869 0-1.56.372-1.987 1.083-.387.644-.514 1.497-.514 2.417s.127 1.773.514 2.418C14.94 21.628 15.63 22 16.5 22c.864 0 1.558-.365 1.986-1.076.388-.644.514-1.498.514-2.424s-.126-1.78-.514-2.423C18.058 15.365 17.364 15 16.5 15m-1.001 3.5c0-.83.124-1.352.3-1.645.136-.226.32-.355.7-.355.386 0 .568.128.702.35.175.291.299.812.299 1.65 0 .839-.124 1.36-.299 1.65-.134.222-.316.35-.701.35-.382 0-.565-.128-.701-.355-.176-.293-.3-.815-.3-1.645"/>`,
  'regular': `<path d="M15.5 5.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0m-5.5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0M8.75 10a2.25 2.25 0 0 0-2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 0 15.25 10zm-2.253 6.999a.999.999 0 1 1-1.997 0 .999.999 0 0 1 1.997 0M5.5 21.497a.999.999 0 1 0 0-1.997.999.999 0 0 0 0 1.997m4.613-4.97a1.8 1.8 0 0 0-.668.329.75.75 0 1 1-.924-1.182c.267-.209.71-.48 1.246-.606.553-.13 1.24-.113 1.887.327.782.53 1.044 1.469.919 2.236a2.1 2.1 0 0 1-.3.79c.174.2.306.429.392.672.248.704.133 1.581-.475 2.187-.595.591-1.393.766-2.08.73-.68-.036-1.377-.282-1.851-.7a.75.75 0 0 1 .991-1.125c.172.152.526.305.938.327.404.021.736-.089.944-.296a.6.6 0 0 0 .118-.623c-.07-.202-.225-.343-.5-.343h-.5a.75.75 0 1 1 0-1.5h.5c.117 0 .175-.036.214-.075a.52.52 0 0 0 .128-.287c.05-.307-.072-.611-.28-.752-.218-.148-.448-.168-.7-.108M16.5 15c-.869 0-1.56.372-1.987 1.083-.387.644-.514 1.497-.514 2.417s.127 1.773.514 2.418C14.94 21.628 15.63 22 16.5 22c.864 0 1.558-.365 1.986-1.076.388-.644.514-1.498.514-2.424s-.126-1.78-.514-2.423C18.058 15.365 17.364 15 16.5 15m-1.001 3.5c0-.83.124-1.352.3-1.645.136-.226.32-.355.7-.355.386 0 .568.128.702.35.175.291.299.812.299 1.65 0 .839-.124 1.36-.299 1.65-.134.222-.316.35-.701.35-.382 0-.565-.128-.701-.355-.176-.293-.3-.815-.3-1.645"/>`
} as const;

export default function Shifts30MinutesIcon({ 
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

  const gradientId = 'shifts30minutesicon_gradient';
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