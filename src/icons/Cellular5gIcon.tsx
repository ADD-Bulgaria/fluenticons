
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m12.897 3.62-.002-.002-.002-.004-.006-.01a1 1 0 0 0-.056-.081 2 2 0 0 0-.134-.161 2.1 2.1 0 0 0-.514-.397c-.476-.266-1.155-.425-2.068-.258-1.091.2-1.63.97-1.875 1.597A3.6 3.6 0 0 0 8 5.459V6.75a2.5 2.5 0 0 0 2.5 2.5h.25a2.5 2.5 0 0 0 2.5-2.5v-.5a.75.75 0 0 0-.75-.75h-1.25a.75.75 0 0 0 0 1.5h.469a1 1 0 0 1-.969.75h-.25a1 1 0 0 1-1-1V5.501l.002-.034q.002-.05.015-.148a2 2 0 0 1 .119-.471c.13-.333.341-.592.75-.667.597-.11.917.01 1.064.091a.6.6 0 0 1 .17.134.75.75 0 0 0 1.277-.786M4 2.75a.75.75 0 0 0-.745.667l-.25 2.25a.75.75 0 0 0 .88.82l1.006-.182a.728.728 0 1 1 .13 1.445h-.218a.75.75 0 0 1-.624-.334l-.055-.082a.75.75 0 0 0-1.248.832l.055.082A2.25 2.25 0 0 0 4.803 9.25h.219a2.228 2.228 0 1 0-.399-4.421l-.016.003.064-.582h1.83a.75.75 0 0 0 0-1.5zM21 7a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0zm-4 2.995A1 1 0 0 0 16 9c-.552 0-1 .446-1 .995v10.01c0 .55.448.995 1 .995s1-.446 1-.995zM13 13a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm-4 2.994A.997.997 0 0 0 8 15c-.552 0-1 .445-1 .994v4.012c0 .549.448.994 1 .994s1-.445 1-.994zm-4 2.99A.99.99 0 0 0 4 18c-.552 0-1 .44-1 .984v1.032c0 .544.448.984 1 .984s1-.44 1-.984z"/>`,
  'regular': `<path d="M12.896 3.619a.75.75 0 0 1-1.277.787l-.015-.018a.6.6 0 0 0-.154-.116c-.147-.082-.467-.2-1.065-.091-.408.075-.619.334-.749.667A2.1 2.1 0 0 0 9.5 5.5v1.25a1 1 0 0 0 1 1h.25a1 1 0 0 0 .969-.75h-.469a.75.75 0 0 1 0-1.5h1.25a.75.75 0 0 1 .75.75v.5a2.5 2.5 0 0 1-2.5 2.5h-.25A2.5 2.5 0 0 1 8 6.75V5.459l.004-.08q.005-.1.026-.263a3.6 3.6 0 0 1 .209-.814c.245-.627.784-1.396 1.875-1.597.913-.167 1.592-.008 2.068.258.23.129.399.275.514.397a2 2 0 0 1 .19.242l.006.01.002.004zm-9.641-.202A.75.75 0 0 1 4 2.75h2.5a.75.75 0 0 1 0 1.5H4.671l-.064.582.016-.003a2.228 2.228 0 1 1 .399 4.421h-.22a2.25 2.25 0 0 1-1.871-1.002l-.055-.082a.75.75 0 0 1 1.248-.832l.055.082a.75.75 0 0 0 .624.334h.219a.728.728 0 1 0-.13-1.445l-1.008.183a.75.75 0 0 1-.88-.82zM11.75 12a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102L11 20.25v-7.5a.75.75 0 0 1 .75-.75m4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102L15 20.25V9.75a.75.75 0 0 1 .75-.75m-12 9a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102L3 20.25v-1.5a.75.75 0 0 1 .75-.75M19.743 6a.75.75 0 0 1 .75.64l.007.102v13.501a.75.75 0 0 1-1.492.116L19 20.258V6.757A.75.75 0 0 1 19.743 6M7.75 15a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.102L7 20.249V15.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function Cellular5gIcon({ 
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

  const gradientId = 'cellular5gicon_gradient';
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