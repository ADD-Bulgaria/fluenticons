
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.5 7.5A9 9 0 0 0 17 22.726v.427a7.3 7.3 0 0 0-2.951-.1A11.45 11.45 0 0 1 12 16.5C12 10.149 17.149 5 23.5 5S35 10.149 35 16.5a11.5 11.5 0 0 1-.822 4.277q-.15-.039-.303-.072l-2.185-.469A9 9 0 0 0 23.5 7.5m0 4.5a4.5 4.5 0 0 0-4.5 4.5v9.468l-1.87-.688c-3.138-1.155-6.553.828-7.105 4.127a1.94 1.94 0 0 0 1.118 2.084c7.293 3.287 10.395 6.377 11.476 8.69.489 1.047 1.623 1.963 3.033 1.798l6.242-.731a4.25 4.25 0 0 0 3.604-3.094l2.295-8.347a5.75 5.75 0 0 0-4.338-7.146L28 21.49V16.5a4.5 4.5 0 0 0-4.5-4.5"/>`,
  'regular': `<path d="M23.5 7.5A9 9 0 0 0 17 22.726v.427a7.3 7.3 0 0 0-2.951-.1A11.45 11.45 0 0 1 12 16.5C12 10.149 17.149 5 23.5 5S35 10.149 35 16.5a11.5 11.5 0 0 1-.822 4.277q-.15-.039-.303-.072l-2.185-.469A9 9 0 0 0 23.5 7.5m-2 9a2 2 0 1 1 4 0v6c0 .59.412 1.099.988 1.222l6.443 1.383a3.25 3.25 0 0 1 2.451 4.04l-2.295 8.346a1.75 1.75 0 0 1-1.484 1.274l-6.242.731a.32.32 0 0 1-.216-.062.75.75 0 0 1-.261-.31c-1.435-3.072-5.096-6.414-12.292-9.72a2.837 2.837 0 0 1 3.675-1.778l3.551 1.307A1.25 1.25 0 0 0 21.5 27.76zm2-4.5a4.5 4.5 0 0 0-4.5 4.5v9.468l-1.87-.688c-3.138-1.155-6.553.828-7.105 4.127a1.94 1.94 0 0 0 1.118 2.084c7.293 3.287 10.395 6.377 11.476 8.69.489 1.047 1.623 1.963 3.033 1.798l6.242-.731a4.25 4.25 0 0 0 3.604-3.094l2.295-8.347a5.75 5.75 0 0 0-4.338-7.146L28 21.49V16.5a4.5 4.5 0 0 0-4.5-4.5"/>`
} as const;

export default function TapSingleIcon({ 
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

  const gradientId = 'tapsingleicon_gradient';
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