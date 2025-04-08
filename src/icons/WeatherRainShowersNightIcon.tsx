
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M26.001 12c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-.069l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14 3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14 3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14 3.217-5.357h-1.078c-4.078 0-7.384-3.297-7.384-7.365s3.306-7.365 7.384-7.365h.16c.526-5.099 4.118-9.26 10.455-9.26M13.178 4.002c1.59.086 3.134.544 4.526 1.348a10.1 10.1 0 0 1 4.418 5.193c-4.016 1.144-6.877 4.083-8.027 8.049l-.092.332-.115.476-.413.077a9.35 9.35 0 0 0-5.616 3.632l-.31-.172a10.1 10.1 0 0 1-3.284-3.028 1.5 1.5 0 0 1 .731-2.265c3.285-1.176 5.055-2.5 6.067-4.432 1.105-2.11 1.31-4.348.576-7.354a1.502 1.502 0 0 1 1.539-1.856"/>`,
  'regular': `<path d="M26.001 12c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365l-1.723.001-.039.094-.066.128-3.5 6.063a1.5 1.5 0 0 1-2.665-1.372l.067-.129 2.762-4.785-4.296.001-.038.094-.067.128-3.5 6.063a1.5 1.5 0 0 1-2.664-1.372l.066-.129 2.763-4.785-4.296.001-.039.094-.066.128-3.5 6.063a1.5 1.5 0 0 1-2.665-1.372l.067-.129 2.762-4.785h-.593c-4.078 0-7.384-3.297-7.384-7.365s3.306-7.365 7.384-7.365h.16c.526-5.099 4.118-9.26 10.455-9.26m0 2.495c-4.26 0-7.975 3.448-7.975 8.21 0 .755-.656 1.348-1.407 1.348h-1.42c-2.595 0-4.698 2.113-4.698 4.72 0 2.608 2.103 4.722 4.697 4.722h21.606c2.594 0 4.697-2.114 4.697-4.721s-2.103-4.722-4.697-4.722h-1.42c-.752 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.21-7.975-8.21M13.178 4.002c1.59.086 3.134.544 4.526 1.348a10.1 10.1 0 0 1 4.418 5.193 12 12 0 0 0-2.189.855c-.64-1.741-2.06-3.156-3.992-4.262a6.4 6.4 0 0 0-1.425-.59c.364 3.04.247 5.108-1.057 7.578l-.268.479c-1.295 2.197-3.207 3.497-6.125 4.84.322.318.812.692 1.212.974q.681.48 1.403.818a9.4 9.4 0 0 0-1.822 1.874l-.31-.172a10.1 10.1 0 0 1-3.284-3.028 1.5 1.5 0 0 1 .731-2.265c3.285-1.176 5.055-2.5 6.067-4.432 1.105-2.11 1.31-4.348.576-7.354a1.502 1.502 0 0 1 1.539-1.856"/>`
} as const;

export default function WeatherRainShowersNightIcon({ 
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

  const gradientId = 'weatherrainshowersnighticon_gradient';
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