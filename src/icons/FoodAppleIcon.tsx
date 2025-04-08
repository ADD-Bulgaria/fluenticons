
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.471 3.42A5.18 5.18 0 0 0 6.89 7.301a5.12 5.12 0 0 0-3.66 4.216 10.46 10.46 0 0 0 1.37 6.797l.35.59.043.063 1.416 1.906a3.462 3.462 0 0 0 5.275.336.437.437 0 0 1 .63 0 3.462 3.462 0 0 0 5.275-.336l1.416-1.907.042-.063.351-.59a10.46 10.46 0 0 0 1.373-6.795 5.12 5.12 0 0 0-6.11-4.306l-1.901.394h-.003c.03-.78.152-1.62.391-2.338.29-.868.692-1.39 1.14-1.576a.75.75 0 1 0-.578-1.385c-1.052.439-1.65 1.48-1.985 2.486l-.046.142a5.2 5.2 0 0 0-.943-1.29 5.18 5.18 0 0 0-3.98-1.51A1.367 1.367 0 0 0 5.47 3.418m2.926 7.815c-.347.069-.665.313-.864.778-.203.474-.275 1.177-.056 2.054a.75.75 0 0 1-1.455.364c-.28-1.122-.227-2.17.132-3.009.363-.847 1.045-1.478 1.949-1.658a.75.75 0 1 1 .294 1.47"/>`,
  'regular': `<path d="M8.397 11.235a.75.75 0 0 0-.294-1.471c-.903.18-1.585.812-1.948 1.659-.36.838-.413 1.886-.132 3.008a.75.75 0 1 0 1.455-.363c-.22-.878-.148-1.58.055-2.054.2-.466.518-.71.864-.78M5.471 3.419A5.18 5.18 0 0 0 6.89 7.302a5.12 5.12 0 0 0-3.66 4.216 10.46 10.46 0 0 0 1.37 6.796l.35.59.043.063 1.416 1.906a3.462 3.462 0 0 0 5.275.336.437.437 0 0 1 .63 0 3.462 3.462 0 0 0 5.275-.336l1.416-1.907.042-.063.351-.59a10.46 10.46 0 0 0 1.373-6.795 5.12 5.12 0 0 0-6.11-4.306l-1.901.394h-.003c.03-.78.152-1.62.391-2.338.29-.868.692-1.39 1.14-1.576a.75.75 0 1 0-.578-1.385c-1.052.439-1.65 1.48-1.985 2.486l-.046.142a5.2 5.2 0 0 0-.943-1.29 5.18 5.18 0 0 0-3.98-1.51A1.367 1.367 0 0 0 5.47 3.418m1.493.207a3.68 3.68 0 0 1 2.712 1.08 3.68 3.68 0 0 1 1.08 2.712 4 4 0 0 1-.543-.025l-.617-.128a3.7 3.7 0 0 1-1.552-.927 3.68 3.68 0 0 1-1.08-2.712m2.07 5.055.202.042q.36.102.73.152l.97.2a5.25 5.25 0 0 0 2.13 0l1.902-.394a3.62 3.62 0 0 1 4.32 3.045 8.96 8.96 0 0 1-1.177 5.821l-.331.557-1.393 1.876a1.962 1.962 0 0 1-2.99.19 1.936 1.936 0 0 0-2.792 0 1.962 1.962 0 0 1-2.99-.19l-1.393-1.876-.331-.557a8.96 8.96 0 0 1-1.176-5.821A3.62 3.62 0 0 1 9.033 8.68"/>`
} as const;

export default function FoodAppleIcon({ 
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

  const gradientId = 'foodappleicon_gradient';
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