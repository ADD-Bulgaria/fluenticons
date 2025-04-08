
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.25 8a1.25 1.25 0 1 0 0 2.5h3.35c.677 0 1.293.39 1.582 1.002l3.213 6.79A4.7 4.7 0 0 0 28.75 18h-3.174a8.25 8.25 0 0 0-7.379 4.56L16.977 25H9.5a7.5 7.5 0 1 0 7.23 9.5h4.43a6.25 6.25 0 0 0 5.59-3.455l.773-1.545h-2.796l-.006.014a2 2 0 0 0-.221-.014h-8q-.062 0-.122.004A7.5 7.5 0 0 0 15.09 27.5h13.66a4.75 4.75 0 0 0 4.49-3.195l.967 2.044a7.5 7.5 0 1 0 2.26-1.07l-1.097-2.318q.309.039.63.039h3.75c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25H36c-1.784 0-3.35.935-4.235 2.341l-2.323-4.909A4.25 4.25 0 0 0 25.601 8zM4.5 32.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0m30.8-3.842 2.07 4.377a1.25 1.25 0 1 0 2.26-1.07l-2.07-4.377q.457-.087.94-.088a5 5 0 1 1-3.2 1.158M33.5 18a2.5 2.5 0 0 1 2.5-2.5h2.5v5H36a2.5 2.5 0 0 1-2.5-2.5"/>`,
  'regular': `<path d="M22.25 8a1.25 1.25 0 1 0 0 2.5h3.35c.677 0 1.293.39 1.582 1.002l3.213 6.79A4.7 4.7 0 0 0 28.75 18h-5.174a8.25 8.25 0 0 0-7.379 4.56L14.977 25H9.5a7.5 7.5 0 1 0 7.23 9.5h4.43a6.25 6.25 0 0 0 5.59-3.455l1.773-3.545h.227a4.75 4.75 0 0 0 4.49-3.195l.967 2.044a7.5 7.5 0 1 0 2.26-1.07l-1.097-2.318q.309.039.63.039h3.75c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25H36c-1.784 0-3.35.935-4.235 2.341l-2.323-4.909A4.25 4.25 0 0 0 25.601 8zm-5.266 24a7.47 7.47 0 0 0-1.894-4.5h10.638l-1.214 2.427A3.75 3.75 0 0 1 21.16 32zM9.5 27.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m24 5c0-1.544.7-2.924 1.8-3.842l2.07 4.377a1.25 1.25 0 1 0 2.26-1.07l-2.07-4.377q.457-.087.94-.088a5 5 0 1 1-5 5M27.777 25H17.773l.66-1.322a5.75 5.75 0 0 1 5.143-3.178h5.174a2.25 2.25 0 0 1 0 4.5zM36 15.5h2.5v5H36a2.5 2.5 0 0 1 0-5"/>`
} as const;

export default function VehicleMotorcycleIcon({ 
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

  const gradientId = 'vehiclemotorcycleicon_gradient';
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