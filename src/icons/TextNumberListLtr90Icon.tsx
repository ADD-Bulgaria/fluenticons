
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.25 6a.75.75 0 0 0 .307-1.434l-.003-.002a2 2 0 0 1-.132-.067 4 4 0 0 1-.384-.238c-.313-.217-.663-.524-.902-.906a.75.75 0 0 0-1.272.794q.117.188.248.353H16.75a.75.75 0 0 0 0 1.5zM6 19.5V11l-.007-.117A1 1 0 0 0 4 11v8.5l.007.116A1 1 0 0 0 6 19.5m6.5 0V11l-.007-.117A1 1 0 0 0 10.5 11v8.5l.007.116A1 1 0 0 0 12.5 19.5m6.5 0V11l-.007-.117A1 1 0 0 0 17 11v8.5l.007.116A1 1 0 0 0 19 19.5M13.48 5.15c.053-.3-.066-.676-.26-.87a.75.75 0 1 1 1.06-1.06c.556.556.812 1.43.677 2.192-.07.397-.254.805-.605 1.115C13.994 6.843 13.527 7 13 7c-.62 0-1.08-.271-1.42-.606-.283-.278-.511-.63-.689-.906l-.051-.08a6 6 0 0 0-.34-.481V6.25a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 9.75 3c1.314 0 1.953.984 2.337 1.575l.04.06c.205.318.345.533.504.69.136.134.238.175.369.175.223 0 .318-.061.36-.098a.42.42 0 0 0 .12-.251M2.72 2.97s-.084.093-.005.004l-.005.006-.013.013a2 2 0 0 0-.125.15c-.07.095-.158.227-.243.397A3.26 3.26 0 0 0 2 5c0 .64.181 1.196.54 1.601.36.408.857.61 1.359.595A1.78 1.78 0 0 0 5 6.77a1.78 1.78 0 0 0 1.101.426c.502.016 1-.187 1.36-.595C7.818 6.196 8 5.64 8 5c0-.63-.158-1.119-.33-1.46a2.6 2.6 0 0 0-.334-.51l-.033-.037-.013-.013-.005-.006-.003-.002V2.97H7.28a.75.75 0 0 0-1.072 1.048l.02.026c.023.03.061.086.101.166.08.159.171.42.171.79 0 .36-.1.536-.164.608a.23.23 0 0 1-.187.088.33.33 0 0 1-.23-.123C5.841 5.484 5.75 5.31 5.75 5a.75.75 0 0 0-1.5 0c0 .31-.092.484-.168.573a.33.33 0 0 1-.231.123.23.23 0 0 1-.187-.088C3.6 5.536 3.5 5.361 3.5 5c0-.37.092-.631.17-.79a1 1 0 0 1 .122-.192A.75.75 0 0 0 2.72 2.97m4.563.002-.001-.001c.005.007.167.2 0 0"/>`,
  'regular': `<path d="M21.25 6a.75.75 0 0 0 .307-1.434l-.003-.002a2 2 0 0 1-.132-.067 4 4 0 0 1-.384-.238c-.313-.217-.663-.524-.902-.906a.75.75 0 0 0-1.272.794q.117.188.248.353H16.75a.75.75 0 0 0 0 1.5zm-16 14.5a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9c0 .414.336.75.75.75m6.506 0a.75.75 0 0 0 .75-.75v-9a.75.75 0 1 0-1.5 0v9c0 .414.336.75.75.75m6.494 0a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9c0 .414.336.75.75.75M13.48 5.15c.053-.3-.066-.676-.26-.87a.75.75 0 1 1 1.06-1.06c.556.556.812 1.43.677 2.192-.07.397-.254.805-.605 1.115C13.994 6.843 13.527 7 13 7c-.62 0-1.08-.271-1.42-.606-.283-.278-.511-.63-.689-.906l-.051-.08a6 6 0 0 0-.34-.481V6.25a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 9.75 3c1.314 0 1.953.984 2.337 1.575l.04.06c.205.318.345.533.504.69.136.134.238.175.369.175.223 0 .318-.061.36-.098a.42.42 0 0 0 .12-.251M2.72 2.97s-.084.093-.005.004l-.005.006-.013.013a2 2 0 0 0-.125.15c-.07.095-.158.227-.243.397A3.26 3.26 0 0 0 2 5c0 .64.181 1.196.54 1.601.36.408.857.61 1.359.595A1.78 1.78 0 0 0 5 6.77a1.78 1.78 0 0 0 1.101.426c.502.016 1-.187 1.36-.595C7.818 6.196 8 5.64 8 5c0-.63-.158-1.119-.33-1.46a2.6 2.6 0 0 0-.334-.51l-.033-.037-.013-.013-.005-.006-.003-.002V2.97H7.28a.75.75 0 0 0-1.072 1.048l.02.026c.023.03.061.086.101.166.08.159.171.42.171.79 0 .36-.1.536-.164.608a.23.23 0 0 1-.187.088.33.33 0 0 1-.23-.123C5.841 5.484 5.75 5.31 5.75 5a.75.75 0 0 0-1.5 0c0 .31-.092.484-.168.573a.33.33 0 0 1-.231.123.23.23 0 0 1-.187-.088C3.6 5.536 3.5 5.361 3.5 5c0-.37.092-.631.17-.79a1 1 0 0 1 .122-.192A.75.75 0 0 0 2.72 2.97m4.563.002-.001-.001c.005.007.167.2 0 0"/>`
} as const;

export default function TextNumberListLtr90Icon({ 
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

  const gradientId = 'textnumberlistltr90icon_gradient';
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