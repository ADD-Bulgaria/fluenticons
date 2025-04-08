
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zm1.723 8.151C9.913 10.431 11.868 10 14 10s4.087.431 5.527 1.151c1.41.705 2.473 1.772 2.473 3.099l-.001.036-.136 1.857a2 2 0 0 1-2.228 1.84l-1.632-.192a2 2 0 0 1-1.72-1.558l-.435-1.982c-.03-.133-.095-.194-.145-.213-.306-.123-.873-.288-1.703-.288s-1.397.165-1.703.288c-.05.02-.116.08-.145.213l-.435 1.983a2 2 0 0 1-1.72 1.557l-1.632.192a2 2 0 0 1-2.228-1.84l-.136-1.857L6 14.25c0-1.327 1.063-2.394 2.473-3.099"/>`,
  'regular': `<path d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25zm3.973 4.401C9.913 10.431 11.868 10 14 10s4.087.431 5.527 1.151c1.41.705 2.473 1.772 2.473 3.099l-.001.036-.136 1.857a2 2 0 0 1-2.228 1.84l-1.632-.192a2 2 0 0 1-1.72-1.558l-.435-1.982c-.03-.133-.095-.194-.145-.213-.306-.123-.873-.288-1.703-.288s-1.397.165-1.703.288c-.05.02-.116.08-.145.213l-.435 1.983a2 2 0 0 1-1.72 1.557l-1.632.192a2 2 0 0 1-2.228-1.84l-.136-1.857L6 14.25c0-1.327 1.063-2.394 2.473-3.099"/>`
} as const;

export default function CallSquareIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'callsquareicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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