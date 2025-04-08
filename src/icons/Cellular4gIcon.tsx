
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.896 3.619a.75.75 0 0 1-1.277.787l-.015-.018a.6.6 0 0 0-.154-.116c-.147-.082-.468-.2-1.065-.091-.408.075-.62.334-.75.667A2.1 2.1 0 0 0 9.5 5.5v1.25a1 1 0 0 0 1 1h.25a1 1 0 0 0 .968-.75h-.468a.75.75 0 1 1 0-1.5h1.25a.75.75 0 0 1 .75.75v.5a2.5 2.5 0 0 1-2.5 2.5h-.25A2.5 2.5 0 0 1 8 6.75V5.459l.004-.08q.005-.1.026-.263c.029-.212.087-.504.209-.814.245-.627.783-1.396 1.875-1.597.913-.167 1.592-.008 2.068.258.23.129.399.275.513.397a2 2 0 0 1 .19.242l.006.01.003.004zm-8.168-.558c.596-.724 1.772-.302 1.772.636V6.5h.25a.75.75 0 0 1 0 1.5H6.5v.5a.75.75 0 1 1-1.5 0V8H3.203c-1.014 0-1.57-1.18-.926-1.963zM5 6.5V5.09L3.839 6.5zM20 6a1 1 0 0 1 1 1v13a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1m-4 3c.552 0 1 .446 1 .995v10.01c0 .55-.448.995-1 .995-.553 0-1-.446-1-.995V9.995c0-.55.447-.995 1-.995m-4 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m-4 3c.552 0 1 .445 1 .994v4.012A.997.997 0 0 1 8 21c-.553 0-1-.445-1-.994v-4.012A.997.997 0 0 1 8 15m-4 3c.552 0 1 .44 1 .984v1.032A.99.99 0 0 1 4 21c-.553 0-1-.44-1-.984v-1.032A.99.99 0 0 1 4 18"/>`,
  'regular': `<path d="M12.896 3.619a.75.75 0 0 1-1.277.787l-.015-.018a.6.6 0 0 0-.154-.116c-.147-.082-.468-.2-1.065-.091-.408.075-.62.334-.75.667A2.1 2.1 0 0 0 9.5 5.5v1.25a1 1 0 0 0 1 1h.25a1 1 0 0 0 .968-.75h-.468a.75.75 0 1 1 0-1.5h1.25a.75.75 0 0 1 .75.75v.5a2.5 2.5 0 0 1-2.5 2.5h-.25A2.5 2.5 0 0 1 8 6.75V5.459l.004-.08q.005-.1.026-.263c.029-.212.087-.504.209-.814.245-.627.783-1.396 1.875-1.597.913-.167 1.592-.008 2.068.258.23.129.399.275.513.397a2 2 0 0 1 .19.242l.006.01.003.004zm-8.168-.558c.596-.724 1.772-.302 1.772.636V6.5h.25a.75.75 0 0 1 0 1.5H6.5v.5a.75.75 0 1 1-1.5 0V8H3.203c-1.014 0-1.57-1.18-.926-1.963zM5 6.5V5.09L3.839 6.5zm6.75 5.5a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102L11 20.25v-7.5a.75.75 0 0 1 .75-.75m4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102L15 20.25V9.75a.75.75 0 0 1 .75-.75m-12 9a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102L3 20.25v-1.5a.75.75 0 0 1 .75-.75M19.743 6a.75.75 0 0 1 .749.64l.008.102v13.501a.75.75 0 0 1-1.492.116L19 20.258V6.757A.75.75 0 0 1 19.742 6M7.75 15a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.102L7 20.249V15.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function Cellular4gIcon({ 
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

  const gradientId = 'cellular4gicon_gradient';
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