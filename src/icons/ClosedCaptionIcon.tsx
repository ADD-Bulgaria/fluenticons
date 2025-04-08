
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 8A6.5 6.5 0 0 0 4 14.5v19a6.5 6.5 0 0 0 6.5 6.5h27a6.5 6.5 0 0 0 6.5-6.5v-19A6.5 6.5 0 0 0 37.5 8zm3.524 8.983c2.308-1.65 6.09-1.359 7.786 1.354a1.25 1.25 0 0 1-2.12 1.326c-.804-1.287-2.871-1.605-4.214-.646-.838.599-1.976 1.862-1.976 4.983 0 3.159 1.083 4.391 1.94 4.958.632.418 1.522.62 2.388.529.867-.092 1.542-.456 1.905-.963a1.25 1.25 0 0 1 2.034 1.453c-.887 1.242-2.308 1.851-3.676 1.996-1.37.145-2.856-.153-4.03-.93C12.382 29.933 11 27.842 11 24c0-3.88 1.49-5.921 3.024-7.017m22.786 1.354a1.25 1.25 0 0 1-2.12 1.326c-.804-1.287-2.871-1.605-4.213-.646-.839.599-1.977 1.862-1.977 4.983 0 3.159 1.083 4.391 1.94 4.958.632.418 1.522.62 2.388.529.867-.092 1.542-.456 1.905-.963a1.25 1.25 0 0 1 2.034 1.453c-.887 1.242-2.308 1.851-3.676 1.996-1.37.145-2.856-.153-4.03-.93C27.382 29.933 26 27.842 26 24c0-3.88 1.49-5.921 3.023-7.017 2.31-1.65 6.091-1.359 7.787 1.354"/>`,
  'regular': `<path d="M14.024 16.983c2.308-1.65 6.09-1.36 7.786 1.354a1.25 1.25 0 0 1-2.12 1.326c-.804-1.287-2.871-1.605-4.214-.646-.838.599-1.976 1.862-1.976 4.983 0 3.158 1.083 4.391 1.94 4.958.632.418 1.522.62 2.388.529.867-.092 1.542-.456 1.905-.963a1.25 1.25 0 0 1 2.034 1.453c-.887 1.242-2.308 1.851-3.676 1.996-1.37.145-2.856-.153-4.03-.93C12.382 29.933 11 27.842 11 24c0-3.88 1.49-5.921 3.024-7.017m22.786 1.354c-1.696-2.713-5.478-3.003-7.787-1.354C27.49 18.079 26 20.12 26 24c0 3.842 1.383 5.933 3.06 7.043 1.175.777 2.66 1.075 4.03.93 1.369-.145 2.79-.754 3.677-1.996a1.25 1.25 0 0 0-2.034-1.454c-.363.508-1.038.872-1.905.964-.866.091-1.756-.11-2.388-.53-.857-.566-1.94-1.799-1.94-4.957 0-3.12 1.138-4.384 1.977-4.983 1.342-.959 3.409-.64 4.213.646a1.25 1.25 0 0 0 2.12-1.326M4 14.5A6.5 6.5 0 0 1 10.5 8h27a6.5 6.5 0 0 1 6.5 6.5v19a6.5 6.5 0 0 1-6.5 6.5h-27A6.5 6.5 0 0 1 4 33.5zm6.5-4a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h27a4 4 0 0 0 4-4v-19a4 4 0 0 0-4-4z"/>`
} as const;

export default function ClosedCaptionIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'closedcaptionicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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