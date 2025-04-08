
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L3.94 5h-.19A1.75 1.75 0 0 0 2 6.75v8.5c0 .966.784 1.75 1.75 1.75h12.19l1.494 1.495a3 3 0 0 1-.184.005H4.401A3 3 0 0 0 7 20h10.25c.51 0 1-.08 1.46-.229l2.01 2.01a.75.75 0 1 0 1.06-1.061zm8.648 10.769a2.25 2.25 0 0 1-3.167-3.167zM5.19 6.25l1.292 1.292A2.25 2.25 0 0 1 4.25 9.5h-1V8h1A.75.75 0 0 0 5 7.25v-1zM4.25 14h-1v-1.5h1a2.25 2.25 0 0 1 2.25 2.25v1H5v-1a.75.75 0 0 0-.75-.75m13.5 0h-.57l1.748 1.748Q19 15.51 19 15.25v-8.5A1.75 1.75 0 0 0 17.25 5H8.18l7.683 7.682a2.2 2.2 0 0 1 .887-.182h1zM16 6.25v1c0 .414.336.75.75.75h1v1.5h-1a2.25 2.25 0 0 1-2.25-2.25v-1zm4.062 10.631 1.085 1.085c.538-.77.853-1.706.853-2.716V10a3 3 0 0 0-1.5-2.599v7.849c0 .594-.16 1.152-.438 1.631"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l1.738 1.74A2.25 2.25 0 0 0 2 7.25v7.5A2.25 2.25 0 0 0 4.25 17h11.69l1.494 1.495q-.09.005-.184.005H4.401A3 3 0 0 0 7 20h10.25c.51 0 1-.08 1.46-.229l2.01 2.01a.75.75 0 1 0 1.06-1.061zM14.44 15.5H6.5v-.75a2.25 2.25 0 0 0-2.25-2.25H3.5v-3h.75a2.25 2.25 0 0 0 2.231-1.958l1.636 1.636a3 3 0 0 0 4.206 4.206zm-5.243-5.243 2.046 2.047a1.5 1.5 0 0 1-2.046-2.046M3.5 7.25a.75.75 0 0 1 .75-.75H5v.75a.75.75 0 0 1-.75.75H3.5zm.75 8.25a.75.75 0 0 1-.75-.75V14h.75a.75.75 0 0 1 .75.75v.75zm12.5-3a2.2 2.2 0 0 0-.887.182L17.18 14h.319v.32l1.318 1.317a2.2 2.2 0 0 0 .182-.887v-7.5A2.25 2.25 0 0 0 16.75 5H8.18l1.5 1.5h4.82v.75a2.25 2.25 0 0 0 2.25 2.25h.75v3zm.75-5.25V8h-.75a.75.75 0 0 1-.75-.75V6.5h.75a.75.75 0 0 1 .75.75m2.562 9.631 1.085 1.085c.538-.77.853-1.706.853-2.716V10a3 3 0 0 0-1.5-2.599v7.849a3.24 3.24 0 0 1-.438 1.631"/>`
} as const;

export default function MoneyOffIcon({ 
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

  const gradientId = 'moneyofficon_gradient';
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