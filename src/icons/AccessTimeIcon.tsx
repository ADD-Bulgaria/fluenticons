
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M7.5 8.744C7.847 8.362 8.415 8 9.25 8c1.152 0 1.894.792 2.155 1.661.253.847.1 1.895-.62 2.618a8 8 0 0 1-.793.67l-.04.031c-.28.216-.53.412-.75.63-.255.256-.464.535-.585.89h2.133a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.247.524-2.083 1.144-2.701.296-.296.618-.545.89-.756l.003-.002c.286-.221.508-.393.685-.57.272-.274.367-.725.246-1.13-.115-.381-.37-.591-.718-.591-.353 0-.535.137-.64.253a.8.8 0 0 0-.148.229v.003a.75.75 0 0 1-1.428-.462l.035-.096a2.3 2.3 0 0 1 .43-.683M13.25 8a.75.75 0 0 1 .75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75"/>`,
  'regular': `<path d="M7.5 8.744C7.847 8.362 8.415 8 9.25 8c1.152 0 1.894.792 2.155 1.661.253.847.1 1.895-.62 2.618a8 8 0 0 1-.793.67l-.04.031c-.28.216-.53.412-.75.63-.255.256-.464.535-.585.89h2.133a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.247.524-2.083 1.144-2.701.296-.296.618-.545.89-.756l.003-.002c.286-.221.508-.393.685-.57.272-.274.367-.725.246-1.13-.115-.381-.37-.591-.718-.591-.353 0-.535.137-.64.253a.8.8 0 0 0-.148.229v.003a.75.75 0 0 1-1.428-.462l.035-.096a2.3 2.3 0 0 1 .43-.683M13.25 8a.75.75 0 0 1 .75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0"/>`
} as const;

export default function AccessTimeIcon({ 
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

  const gradientId = 'accesstimeicon_gradient';
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