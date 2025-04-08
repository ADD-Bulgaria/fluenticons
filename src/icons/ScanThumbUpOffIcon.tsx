
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44 37.75q-.001.766-.176 1.478L41.5 36.904V32.25a1.25 1.25 0 1 1 2.5 0zm-2.803 5.215.67.669a1.25 1.25 0 0 0 1.767-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l.67.67A6.2 6.2 0 0 0 4 10.25v5.5a1.25 1.25 0 1 0 2.5 0v-5.5c0-.579.131-1.127.365-1.617l12.41 12.41-.1.154a4.6 4.6 0 0 1-2.242 1.815l-1.255.477a2.98 2.98 0 0 0-1.873 3.359l.685 3.508a3.49 3.49 0 0 0 2.601 2.717l8.234 2.005a6.01 6.01 0 0 0 6.021-1.964l8.02 8.02a3.7 3.7 0 0 1-1.616.366h-5.5a1.25 1.25 0 1 0 0 2.5h5.5a6.2 6.2 0 0 0 3.447-1.035m-7.072-18.321-.998 3.887-11.36-11.361.185-.29c.037-.15.077-.343.13-.594l.067-.327c.098-.467.225-1.032.4-1.575.17-.527.418-1.132.803-1.626.404-.518 1.044-1.008 1.94-1.008 1.357 0 2.34.825 2.919 1.847.567.999.826 2.283.826 3.614 0 .792-.147 1.657-.37 2.539H30c.17 0 .407.015.618.034.194.018.474.05.69.104 2.145.544 3.362 2.632 2.817 4.756M15.75 6.5h-4.654L8.772 4.176A6.3 6.3 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5m-5.5 35a3.75 3.75 0 0 1-3.75-3.75v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 1 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0z"/>`,
  'regular': `<path d="M44 37.75q-.001.766-.176 1.478L41.5 36.904V32.25a1.25 1.25 0 1 1 2.5 0zm-2.803 5.215.67.669a1.25 1.25 0 0 0 1.767-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l.67.67A6.2 6.2 0 0 0 4 10.25v5.5a1.25 1.25 0 1 0 2.5 0v-5.5c0-.579.131-1.127.365-1.617l12.41 12.41-.1.154a4.6 4.6 0 0 1-2.242 1.815l-1.255.477a2.98 2.98 0 0 0-1.873 3.359l.685 3.508a3.49 3.49 0 0 0 2.601 2.717l8.234 2.005a6.01 6.01 0 0 0 6.021-1.964l8.02 8.02a3.7 3.7 0 0 1-1.616.366h-5.5a1.25 1.25 0 1 0 0 2.5h5.5a6.2 6.2 0 0 0 3.447-1.035m-11.63-11.63a3.51 3.51 0 0 1-3.65 1.314l-8.234-2.005a.99.99 0 0 1-.739-.767l-.685-3.508a.48.48 0 0 1 .308-.543l1.255-.477a7.1 7.1 0 0 0 3.255-2.504zm4.558-6.691-.998 3.887-2.053-2.054.63-2.455c.204-.795-.219-1.51-1.01-1.71q-.012-.004-.084-.013a5 5 0 0 0-.61-.049h-3a1 1 0 0 1-.164-.01l-1.075-1.075a1.25 1.25 0 0 1 .05-.551c.456-1.401.726-2.546.726-3.403 0-1.047-.21-1.868-.5-2.38-.278-.49-.543-.581-.745-.581h-.022q-.024 0-.03.003t-.012.014l-.005.007-.007.01c-.084.114-.188.353-.288.798-.063.284-.105.545-.152.833-.03.181-.06.373-.1.589-.08.445-.212 1.093-.537 1.598l-.564.877-1.809-1.81.27-.42a1 1 0 0 0 .066-.177c.038-.131.075-.3.115-.516.021-.12.046-.266.072-.427.056-.341.122-.747.2-1.093.118-.527.312-1.192.718-1.74a2.52 2.52 0 0 1 2.085-1.046c1.357 0 2.34.825 2.919 1.847.567.999.826 2.283.826 3.614 0 .792-.147 1.657-.37 2.539H30c.17 0 .407.015.618.034.194.018.474.05.69.104 2.145.544 3.362 2.632 2.817 4.756M15.75 6.5h-4.654L8.772 4.176A6.3 6.3 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5m-5.5 35a3.75 3.75 0 0 1-3.75-3.75v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 1 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0z"/>`
} as const;

export default function ScanThumbUpOffIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'scanthumbupofficon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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