
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.25 20a.75.75 0 0 0 .307-1.434l-.003-.002a2 2 0 0 1-.132-.067 4 4 0 0 1-.385-.238c-.312-.217-.662-.524-.901-.906a.75.75 0 1 0-1.272.794q.117.188.248.353H16.75a.75.75 0 0 0 0 1.5zM6 13V4.5l-.007-.117A1 1 0 0 0 4 4.5V13l.007.117A1 1 0 0 0 6 13m6.5 0V4.5l-.007-.117A1 1 0 0 0 10.5 4.5V13l.007.117A1 1 0 0 0 12.5 13m5.5 1a1 1 0 0 0 1-1V4.5l-.007-.117A1 1 0 0 0 17 4.5V13l.007.117A1 1 0 0 0 18 14m-4.52 5.15c.053-.3-.066-.676-.26-.87a.75.75 0 0 1 1.06-1.06c.556.556.812 1.43.677 2.192-.07.397-.254.805-.605 1.115-.358.316-.825.473-1.352.473-.62 0-1.08-.271-1.42-.606-.283-.278-.511-.63-.689-.906l-.051-.08a6 6 0 0 0-.34-.481v1.323a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75c1.313 0 1.953.984 2.337 1.575l.04.06c.205.318.345.533.504.69.136.134.238.175.369.175.223 0 .318-.061.36-.098a.42.42 0 0 0 .12-.251M2.72 16.97s-.084.093-.005.004l-.005.006-.013.013a2 2 0 0 0-.125.15 2.6 2.6 0 0 0-.243.397c-.17.341-.33.83-.33 1.46 0 .64.182 1.196.54 1.601.36.408.858.61 1.36.595a1.78 1.78 0 0 0 1.1-.426c.306.259.686.412 1.102.425a1.73 1.73 0 0 0 1.36-.594C7.818 20.196 8 19.64 8 19c0-.63-.158-1.119-.33-1.46a2.6 2.6 0 0 0-.334-.51l-.033-.037-.013-.013-.005-.006-.003-.002v-.001l-.002-.001a.75.75 0 0 0-1.072 1.048l.02.026c.023.03.06.086.101.166.08.159.17.42.17.79 0 .36-.099.536-.163.608a.23.23 0 0 1-.187.088.33.33 0 0 1-.23-.123c-.077-.088-.17-.263-.17-.573a.75.75 0 0 0-1.5 0c0 .31-.09.485-.167.573a.33.33 0 0 1-.231.123.23.23 0 0 1-.187-.088C3.6 19.536 3.5 19.361 3.5 19c0-.37.092-.631.17-.79a1 1 0 0 1 .122-.192.75.75 0 0 0-1.072-1.048m4.562.002v-.001c.005.007.166.2 0 0"/>`,
  'regular': `<path d="M21.25 20a.75.75 0 0 0 .307-1.434l-.003-.002a2 2 0 0 1-.132-.067 4 4 0 0 1-.385-.238c-.312-.217-.662-.524-.901-.906a.75.75 0 1 0-1.272.794q.117.188.248.353H16.75a.75.75 0 0 0 0 1.5zm-16-6a.75.75 0 0 0 .75-.75v-9a.75.75 0 1 0-1.5 0v9c0 .414.336.75.75.75m6.506 0a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9c0 .414.336.75.75.75m6.494 0a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9c0 .414.336.75.75.75m-4.77 5.15c.053-.3-.066-.676-.26-.87a.75.75 0 0 1 1.06-1.06c.556.556.812 1.43.677 2.192-.07.397-.254.805-.605 1.115-.358.316-.825.473-1.352.473-.62 0-1.08-.271-1.42-.606-.283-.278-.511-.63-.689-.906l-.051-.08a6 6 0 0 0-.34-.481v1.323a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75c1.313 0 1.953.984 2.337 1.575l.04.06c.205.318.345.533.504.69.136.134.238.175.369.175.223 0 .318-.061.36-.098a.42.42 0 0 0 .12-.251M2.72 16.97s-.084.093-.005.004l-.005.006-.013.013a2 2 0 0 0-.125.15 2.6 2.6 0 0 0-.243.397c-.17.341-.33.83-.33 1.46 0 .64.182 1.196.54 1.601.36.408.858.61 1.36.595a1.78 1.78 0 0 0 1.1-.426c.306.259.686.412 1.102.425a1.73 1.73 0 0 0 1.36-.594C7.818 20.196 8 19.64 8 19c0-.63-.158-1.119-.33-1.46a2.6 2.6 0 0 0-.334-.51l-.033-.037-.013-.013-.005-.006-.003-.002v-.001l-.002-.001a.75.75 0 0 0-1.072 1.048l.02.026c.023.03.06.086.101.166.08.159.17.42.17.79 0 .36-.099.536-.163.608a.23.23 0 0 1-.187.088.33.33 0 0 1-.23-.123c-.077-.088-.17-.263-.17-.573a.75.75 0 0 0-1.5 0c0 .31-.09.485-.167.573a.33.33 0 0 1-.231.123.23.23 0 0 1-.187-.088C3.6 19.536 3.5 19.361 3.5 19c0-.37.092-.631.17-.79a1 1 0 0 1 .122-.192.75.75 0 0 0-1.072-1.048m4.562.002v-.001c.005.007.166.2 0 0"/>`
} as const;

export default function TextNumberListRotate90Icon({ 
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

  const gradientId = 'textnumberlistrotate90icon_gradient';
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