
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 9a7 7 0 0 1 14 0c0 2.025-.67 4.236-1.85 5.956-1.042 1.52-2.543 2.731-4.4 2.992v.302c0 .414.336.75.75.75h3.25A2.25 2.25 0 0 1 19 21.25v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 0-.75-.75H13.5a2.25 2.25 0 0 1-2.25-2.25v-.302c-1.857-.261-3.358-1.473-4.4-2.992C5.67 13.236 5 11.025 5 9m7.92-3.894a.75.75 0 0 0-.344 1.46 2.5 2.5 0 0 1 1.856 1.853.75.75 0 1 0 1.46-.347 4 4 0 0 0-2.972-2.966"/>`,
  'regular': `<path d="M12.018 5.665a.75.75 0 0 1 .902-.559 4 4 0 0 1 2.972 2.966.75.75 0 0 1-1.46.347 2.5 2.5 0 0 0-1.856-1.853.75.75 0 0 1-.558-.901M5 9a7 7 0 0 1 14 0c0 2.025-.67 4.236-1.85 5.956-1.042 1.52-2.543 2.731-4.4 2.992v.302c0 .414.336.75.75.75h3.25A2.25 2.25 0 0 1 19 21.25v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 0-.75-.75H13.5a2.25 2.25 0 0 1-2.25-2.25v-.302c-1.857-.261-3.358-1.473-4.4-2.992C5.67 13.236 5 11.025 5 9m7-5.5A5.5 5.5 0 0 0 6.5 9c0 1.725.58 3.64 1.586 5.107C9.094 15.575 10.453 16.5 12 16.5s2.906-.925 3.914-2.393C16.92 12.639 17.5 10.725 17.5 9A5.5 5.5 0 0 0 12 3.5"/>`
} as const;

export default function BalloonIcon({ 
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

  const gradientId = 'balloonicon_gradient';
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