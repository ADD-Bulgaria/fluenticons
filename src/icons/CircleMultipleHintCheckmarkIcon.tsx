
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.28 1.262a10 10 0 0 1 3.086 1.3 1 1 0 1 1-1.072 1.688 8 8 0 0 0-2.473-1.041 1 1 0 1 1 .458-1.947m4.84 4.142a1 1 0 0 1 1.376.324 10 10 0 0 1 1.264 3.101q.019.086.023.17h.014q.05.25.089.502-1.021.01-1.995.192a8 8 0 0 0-1.095-2.912 1 1 0 0 1 .323-1.377M9.69 18.894a8 8 0 0 1-1.798-.521 8 8 0 0 1-1.193-.624 1 1 0 1 0-1.072 1.689A10.1 10.1 0 0 0 9.5 20.889q.01-1.021.191-1.995m.329-16.899a1 1 0 0 1-.758 1.194 8 8 0 0 0-2.484 1.012 1 1 0 1 1-1.053-1.7 10 10 0 0 1 3.101-1.264 1 1 0 0 1 1.194.758M3.939 5.322a1 1 0 0 1 .309 1.38 8 8 0 0 0-1.041 2.474 1 1 0 1 1-1.947-.458 10 10 0 0 1 1.3-3.087 1 1 0 0 1 1.38-.309m-1.946 6.654a1 1 0 0 1 1.194.758A8 8 0 0 0 4.2 15.218a1 1 0 1 1-1.7 1.053 10 10 0 0 1-1.264-3.101 1 1 0 0 1 .758-1.194M31 21c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10m-4.793-1.793a1 1 0 0 0-1.414-1.414L20 22.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0z"/>`,
  'regular': `<path d="M13.28 1.262a10 10 0 0 1 3.086 1.3 1 1 0 1 1-1.072 1.688 8 8 0 0 0-2.473-1.041 1 1 0 1 1 .458-1.947m4.84 4.142a1 1 0 0 1 1.376.324 10 10 0 0 1 1.264 3.101q.019.086.023.17h.014q.05.25.089.502-1.021.01-1.995.192a8 8 0 0 0-1.095-2.912 1 1 0 0 1 .323-1.377M9.69 18.894a8 8 0 0 1-1.798-.521 8 8 0 0 1-1.193-.624 1 1 0 1 0-1.072 1.689A10.1 10.1 0 0 0 9.5 20.889q.01-1.021.191-1.995m.329-16.899a1 1 0 0 1-.758 1.194 8 8 0 0 0-2.484 1.012 1 1 0 1 1-1.053-1.7 10 10 0 0 1 3.101-1.264 1 1 0 0 1 1.194.758M3.939 5.322a1 1 0 0 1 .309 1.38 8 8 0 0 0-1.041 2.474 1 1 0 1 1-1.947-.458 10 10 0 0 1 1.3-3.087 1 1 0 0 1 1.38-.309m-1.946 6.654a1 1 0 0 1 1.194.758A8 8 0 0 0 4.2 15.218a1 1 0 1 1-1.7 1.053 10 10 0 0 1-1.264-3.101 1 1 0 0 1 .758-1.194m24.214 7.231a1 1 0 0 0-1.414-1.414L20 22.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0zM21 31c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10m0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>`
} as const;

export default function CircleMultipleHintCheckmarkIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'circlemultiplehintcheckmarkicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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