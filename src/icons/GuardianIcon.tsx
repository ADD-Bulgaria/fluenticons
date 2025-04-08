
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.795 16.5a5.5 5.5 0 1 0-4.591-9.998 5.5 5.5 0 0 0 4.59 9.998m10.702 9.004.003.246V29l-.002.147A5.98 5.98 0 0 1 27 32.969V39.5a3.5 3.5 0 0 0 5.75 2.681A3.5 3.5 0 0 0 38.5 39.5v-5.738a3.5 3.5 0 0 0 2 0 3.5 3.5 0 0 0 2.5-3.355v-3.63A4.78 4.78 0 0 0 38.222 22H27.708a9.2 9.2 0 0 1 .789 3.504m2.32-6.004c.66.32 1.4.5 2.183.5a5 5 0 1 0-2.182-.5m-5.794 2.75c.62 1.02.977 2.218.977 3.5V29l-.001.083q-.005.212-.034.417a3.504 3.504 0 0 1-4.465 2.855v7.003a3.625 3.625 0 0 1-6 2.739 3.625 3.625 0 0 1-6-2.739v-7.003a3.5 3.5 0 0 1-2 0A3.5 3.5 0 0 1 5 29v-3.25A6.75 6.75 0 0 1 11.75 19h7.5a6.74 6.74 0 0 1 5.773 3.25"/>`,
  'regular': `<path d="M15.5 17a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-2.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 27.597a3.625 3.625 0 0 1-6-2.739v-7.003A3.5 3.5 0 0 1 5 29v-3.25A6.75 6.75 0 0 1 11.75 19h7.5a6.74 6.74 0 0 1 5.618 3.007A1 1 0 0 1 25 22h13.222A4.78 4.78 0 0 1 43 26.778v3.629a3.5 3.5 0 0 1-4.5 3.355V39.5a3.5 3.5 0 0 1-5.75 2.681A3.5 3.5 0 0 1 27 39.5v-10h-1.035a3.5 3.5 0 0 1-4.465 2.855v7.003a3.625 3.625 0 0 1-6 2.739m-8-16.347V29a1 1 0 1 0 2 0v-3.75a1.25 1.25 0 1 1 2.5 0v14.108a1.125 1.125 0 0 0 2.25 0V33.25a1.25 1.25 0 1 1 2.5 0v6.108a1.125 1.125 0 0 0 2.25 0V25.25a1.25 1.25 0 1 1 2.5 0V29a1 1 0 1 0 2 0v-3.25a4.25 4.25 0 0 0-4.25-4.25h-7.5a4.25 4.25 0 0 0-4.25 4.25m18.385-1.25q.114.608.115 1.25V27h2.207c.714 0 1.293.579 1.293 1.293V39.5a1 1 0 1 0 2 0v-5.053a1.25 1.25 0 1 1 2.5 0V39.5a1 1 0 1 0 2 0V28.06a1.25 1.25 0 0 1 2.5 0v2.347a1 1 0 1 0 2 0v-3.63a2.28 2.28 0 0 0-2.278-2.277zM38 15a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-2.5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>`
} as const;

export default function GuardianIcon({ 
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

  const gradientId = 'guardianicon_gradient';
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