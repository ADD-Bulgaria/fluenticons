
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.519 4.25a4.5 4.5 0 0 1 3.07.037l5.914 2.1c.376.132.712.335.997.59v-.415a2 2 0 0 0-1.331-1.885l-5.162-1.832a6 6 0 0 0-4.013 0L4.83 4.677A2 2 0 0 0 3.5 6.562v.415c.285-.255.621-.458.997-.59l5.915-2.1zm2.735.979a3.75 3.75 0 0 0-2.508 0L4.831 7.328A2 2 0 0 0 3.5 9.212v8.235a2 2 0 0 0 1.331 1.885l5.915 2.098a3.75 3.75 0 0 0 2.508 0l5.915-2.098a2 2 0 0 0 1.331-1.885V9.212a2 2 0 0 0-1.331-1.884zM6.449 10.11a.75.75 0 0 1 .958-.456L12 11.285l4.593-1.63a.75.75 0 0 1 .502 1.414l-4.345 1.542v4.72a.75.75 0 0 1-1.5 0v-4.72l-4.345-1.542a.75.75 0 0 1-.456-.958"/>`,
  'regular': `<path d="M10.519 4.25a4.5 4.5 0 0 1 3.07.037l5.914 2.1c.376.132.712.335.997.59v-.415a2 2 0 0 0-1.331-1.885l-5.162-1.832a6 6 0 0 0-4.013 0L4.83 4.677A2 2 0 0 0 3.5 6.562v.415c.285-.255.621-.458.997-.59l5.915-2.1zm-4.07 5.861a.75.75 0 0 1 .958-.456L12 11.285l4.593-1.63a.75.75 0 0 1 .502 1.414L12.75 12.61v4.72a.75.75 0 0 1-1.5 0v-4.72l-4.345-1.54a.75.75 0 0 1-.456-.958m4.297-4.881a3.75 3.75 0 0 1 2.508 0l5.915 2.098A2 2 0 0 1 20.5 9.213v8.235a2 2 0 0 1-1.331 1.884l-5.915 2.1a3.75 3.75 0 0 1-2.508 0l-5.915-2.1A2 2 0 0 1 3.5 17.448V9.213a2 2 0 0 1 1.331-1.885zm2.006 1.413a2.25 2.25 0 0 0-1.504 0L5.333 8.742A.5.5 0 0 0 5 9.213v8.235a.5.5 0 0 0 .333.47l5.915 2.1a2.25 2.25 0 0 0 1.504 0l5.915-2.1a.5.5 0 0 0 .333-.47V9.213a.5.5 0 0 0-.333-.471z"/>`
} as const;

export default function CubeMultipleIcon({ 
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

  const gradientId = 'cubemultipleicon_gradient';
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