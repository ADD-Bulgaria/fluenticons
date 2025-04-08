
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.354 12.573c-.684 1.899-.775 3.874.438 5.1l.234.237a630 630 0 0 0 3.023 3.04c1.28 1.28 3.305 1.3 5.289.66 2.027-.655 4.25-2.062 6.226-4.038 1.976-1.975 3.382-4.2 4.037-6.226.64-1.984.62-4.008-.66-5.288a757 757 0 0 1-2.891-2.912l-.363-.367-.002.003c-1.225-1.215-3.201-1.124-5.1-.44-1.965.708-4.149 2.143-6.119 4.113s-3.404 4.153-4.112 6.118M17.49 6.871v.003l-.001.004-.002.012-.007.037-.026.127c-.023.107-.058.26-.11.45-.105.38-.276.913-.545 1.541a14.3 14.3 0 0 1-3.05 4.486 15.6 15.6 0 0 1-6.185 3.77 10 10 0 0 1-.6.17l-.038.009-.011.002-.004.001h-.003s-.749.084-.891-.574a.75.75 0 0 1 .573-.891h.001l.003-.001.022-.005.099-.025q.137-.035.398-.116a14.1 14.1 0 0 0 5.575-3.4 12.8 12.8 0 0 0 2.732-4.015c.239-.56.388-1.027.477-1.35a7 7 0 0 0 .11-.457c.073-.405.446-.707.864-.639a.75.75 0 0 1 .62.861"/>`,
  'regular': `<path d="M17.49 6.871a.75.75 0 0 0-.62-.86c-.418-.069-.79.233-.865.638l-.018.09a7 7 0 0 1-.091.367c-.089.323-.238.79-.477 1.35a12.8 12.8 0 0 1-2.732 4.014 14.1 14.1 0 0 1-5.575 3.401 8 8 0 0 1-.497.14l-.022.006H6.59a.75.75 0 0 0-.574.892c.142.659.891.575.891.575l.003-.001h.004l.011-.003.037-.01q.048-.01.132-.032.169-.044.47-.136a15.6 15.6 0 0 0 6.185-3.771 14.3 14.3 0 0 0 3.049-4.486c.269-.628.44-1.16.544-1.541a8 8 0 0 0 .137-.577l.007-.037.002-.012v-.005zM2.351 12.573c-.684 1.899-.775 3.874.438 5.1l.234.237a628 628 0 0 0 3.023 3.04c1.28 1.28 3.305 1.3 5.289.66 2.026-.655 4.25-2.062 6.226-4.038 1.976-1.975 3.382-4.2 4.037-6.226.64-1.984.62-4.008-.66-5.288a757 757 0 0 1-2.892-2.912l-.362-.367-.002.002c-1.225-1.214-3.201-1.123-5.1-.44-1.965.709-4.149 2.144-6.119 4.114s-3.404 4.153-4.112 6.118m1.41.509c.619-1.715 1.914-3.717 3.763-5.567 1.85-1.85 3.852-3.144 5.566-3.762 1.777-.64 2.97-.473 3.54.099l.003-.002.348.351.876.885c.685.69 1.5 1.512 2.02 2.032.675.675.875 1.967.293 3.767-.567 1.757-1.826 3.783-3.67 5.627s-3.87 3.102-5.626 3.67c-1.8.581-3.093.381-3.767-.293a836 836 0 0 1-3.018-3.034l-.23-.232.002-.001c-.572-.572-.74-1.764-.1-3.54"/>`
} as const;

export default function SportHockeyIcon({ 
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

  const gradientId = 'sporthockeyicon_gradient';
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