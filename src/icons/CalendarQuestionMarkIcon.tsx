
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25V7h18zm0 5.772V8.5H3v9.25A3.25 3.25 0 0 0 6.25 21h5.772A6.5 6.5 0 0 1 21 12.022m2 5.478a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.125 2.875a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0m-1.228-4.547c-.011-1.136.805-1.954 1.853-1.954 1.031 0 1.853.846 1.853 1.95 0 .509-.15.841-.528 1.292l-.134.155-.266.29-.101.116-.085.104c-.18.232-.239.387-.239.59a.5.5 0 1 1-1 0c0-.517.151-.853.535-1.31l.136-.157.265-.29.1-.113.093-.116c.17-.22.224-.37.224-.561 0-.558-.38-.95-.853-.95-.494 0-.859.366-.853.945a.5.5 0 1 1-1 .01"/>`,
  'regular': `<path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.5 6.5 0 0 1-.709-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v2.813a6.5 6.5 0 0 1 1.5.709zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.125 2.875a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0m-1.228-4.547c-.011-1.136.805-1.954 1.853-1.954 1.031 0 1.853.846 1.853 1.95 0 .509-.15.841-.528 1.292l-.134.155-.266.29-.101.116-.085.104c-.18.232-.239.387-.239.59a.5.5 0 1 1-1 0c0-.517.151-.853.535-1.31l.136-.157.265-.29.1-.113.093-.116c.17-.22.224-.37.224-.561 0-.558-.38-.95-.853-.95-.494 0-.859.366-.853.945a.5.5 0 1 1-1 .01"/>`
} as const;

export default function CalendarQuestionMarkIcon({ 
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

  const gradientId = 'calendarquestionmarkicon_gradient';
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