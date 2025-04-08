
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m23.576 24.99 4.717 4.717a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.415 1.414l6.711 6.71A5 5 0 1 0 6 19.9v2.101a5 5 0 0 0 5 5h5v-2.5a2.5 2.5 0 0 0-2.5-2.5H12a1 1 0 1 1 0-2h1.5a4.5 4.5 0 0 1 4.5 4.5V27h2.105c1.485 0 2.78-.809 3.47-2.01M30 17a6 6 0 0 1-3.857 5.605L15.538 12h2.061q.204-.398.467-.756l-1.904-2.35a3.002 3.002 0 0 1 4.497-3.971l7.173 7.46A5.99 5.99 0 0 1 30 17"/>`,
  'regular': `<path d="m23.576 24.99 4.717 4.717a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.415 1.414l6.711 6.71A5 5 0 1 0 6 19.9v2.101a5 5 0 0 0 5 5h9.105c1.485 0 2.78-.809 3.47-2.01m-1.525-1.525A2 2 0 0 1 20.105 25H18v-.5a4.5 4.5 0 0 0-4.5-4.5H12a1 1 0 1 0 0 2h1.5a2.5 2.5 0 0 1 2.5 2.5v.5h-5a3 3 0 0 1-3-3v-4.002A4 4 0 0 1 11.86 14h.725zM6.002 17.83a3.001 3.001 0 1 1 3.023-5.044 6 6 0 0 0-3.023 5.044M28 17a4 4 0 0 1-3.494 3.968l1.637 1.637a6.002 6.002 0 0 0 1.69-10.222l-7.174-7.46a3.002 3.002 0 0 0-4.497 3.97l1.904 2.351q-.263.357-.467.756h-2.061l2 2h1.425l.235-.667c.182-.515.482-.975.868-1.349l.658-.637-3.008-3.712a1.002 1.002 0 0 1 1.502-1.326l7.255 7.546.048.039A3.99 3.99 0 0 1 28 17"/>`
} as const;

export default function AnimalRabbitOffIcon({ 
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

  const gradientId = 'animalrabbitofficon_gradient';
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