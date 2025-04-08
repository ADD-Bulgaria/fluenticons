
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-.5 6q.136 0 .273-.006l-3.654 2.387a3.88 3.88 0 0 1-4.238 0L3 10.886v5.364a.75.75 0 0 1-1.5 0V10q0-.133.043-.25a.75.75 0 0 1 .302-.881l8.064-5.17a3.87 3.87 0 0 1 2.058-.612A6.5 6.5 0 0 0 17.5 13M5 17.75v-3.766l4.06 2.653a5.38 5.38 0 0 0 5.88 0L19 13.984v3.766a.75.75 0 0 1-.15.45l-.001.001-.001.002-.003.004-.009.01-.012.016-.013.017-.086.101a5 5 0 0 1-.317.33c-.277.267-.69.614-1.25.958C16.037 20.329 14.339 21 12 21s-4.036-.67-5.159-1.361a7.4 7.4 0 0 1-1.25-.957 5 5 0 0 1-.427-.464l-.009-.01-.003-.005v-.002A.76.76 0 0 1 5 17.75"/>`,
  'regular': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-.5 6a6.5 6.5 0 0 0 1.5-.174v4.924a.75.75 0 0 1-.15.45l-.001.001-.001.002-.003.004-.009.01-.015.02-.01.013-.086.101a5 5 0 0 1-.317.33c-.277.267-.69.614-1.25.958C16.037 20.329 14.339 21 12 21s-4.036-.67-5.159-1.361a7.4 7.4 0 0 1-1.25-.957 5 5 0 0 1-.316-.33 3 3 0 0 1-.124-.15L5.15 18.2a.75.75 0 0 1-.15-.45v-5.557l-2-1.307v5.364a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .358-.64l8.05-5.16a3.87 3.87 0 0 1 2.059-.613 6.5 6.5 0 0 0-.717 1.621 2.4 2.4 0 0 0-.532.254L3.63 9.506l7.071 4.62c.79.515 1.809.515 2.598 0l2.202-1.44c.63.204 1.301.314 1.999.314m-3.38 2.381a3.88 3.88 0 0 1-4.24 0L6.5 13.173v4.296q.055.058.13.13c.211.203.54.481.997.762.909.56 2.337 1.139 4.373 1.139s3.464-.58 4.373-1.139a6 6 0 0 0 1.127-.892v-4.296z"/>`
} as const;

export default function HatGraduationAddIcon({ 
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

  const gradientId = 'hatgraduationaddicon_gradient';
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