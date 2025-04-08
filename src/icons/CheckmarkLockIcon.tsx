
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2c5.523 0 10 4.477 10 10q0 .64-.078 1.26A3.501 3.501 0 0 0 15 14v.05a2.5 2.5 0 0 0-2 2.45v5q0 .229.04.447A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06m3.28 2.53A2.5 2.5 0 0 1 21 14v1h.542A1.5 1.5 0 0 1 23 16.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h.5v-1a2.5 2.5 0 0 1 2.5-2.5m-.393 8.42q.182.078.393.08a1 1 0 1 0-.393-.08M17.5 14v1h2v-1a1 1 0 1 0-2 0"/>`,
  'regular': `<path d="M12 2c5.523 0 10 4.477 10 10q0 .64-.078 1.26a3.5 3.5 0 0 0-1.47-2.165A8.501 8.501 0 0 0 3.5 12a8.5 8.5 0 0 0 9.5 8.442V21.5q0 .229.04.447A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m8.487 10.482A2.5 2.5 0 0 0 16 14v1h-.5a1.5 1.5 0 0 0-1.5 1.5v5q0 .15.029.294A1.5 1.5 0 0 0 15.5 23h6a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H21v-1a2.5 2.5 0 0 0-.513-1.518m-2.38 7.438a1 1 0 1 1 .787-1.84 1 1 0 0 1-.787 1.84M17.5 14a1 1 0 1 1 2 0v1h-2zm-6.75-.56 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073z"/>`
} as const;

export default function CheckmarkLockIcon({ 
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

  const gradientId = 'checkmarklockicon_gradient';
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