
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.337 4.917a3 3 0 0 1 4.322.006l7.173 7.46A6 6 0 0 1 24.105 23a4 4 0 0 1-4 4H18v-2.5a4.5 4.5 0 0 0-4.5-4.5H12a1 1 0 1 0 0 2h1.5a2.5 2.5 0 0 1 2.5 2.5V27h-5a5 5 0 0 1-5-5v-2.1A5.002 5.002 0 0 1 7 10a4.99 4.99 0 0 1 4 2h6.6q.203-.398.466-.756l-1.904-2.35a3 3 0 0 1 .175-3.977"/>`,
  'regular': `<path d="M11 12h.844l.156-.002V12h5.6q.203-.398.466-.756l-1.904-2.35a3.002 3.002 0 0 1 4.497-3.97l7.173 7.46A6 6 0 0 1 24.105 23a4 4 0 0 1-4 4H11a5 5 0 0 1-5-5v-2.1A5.002 5.002 0 0 1 7 10a4.99 4.99 0 0 1 4 2m8.218-5.69a1.002 1.002 0 0 0-1.502 1.325l3.008 3.713-.658.636a3.5 3.5 0 0 0-.867 1.35l-.236.666h-7.09A4 4 0 0 0 8 17.998V22a3 3 0 0 0 3 3h5v-.5a2.5 2.5 0 0 0-2.5-2.5H12a1 1 0 1 1 0-2h1.5a4.5 4.5 0 0 1 4.5 4.5v.5h2.105a2 2 0 0 0 2-2v-2.277l1.178.213Q23.631 21 24 21a4 4 0 0 0 2.521-7.106l-.047-.038zM6.002 17.83a6 6 0 0 1 3.023-5.043 3 3 0 1 0-3.023 5.044"/>`
} as const;

export default function AnimalRabbitIcon({ 
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

  const gradientId = 'animalrabbiticon_gradient';
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