
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M9 36c0 4.418 6.716 8 15 8 8.208 0 14.876-3.516 14.998-7.878L39 32H9z"/><ellipse cx="24" cy="32" rx="15" ry="8"/><path d="M9 26c0 4.418 6.716 8 15 8 8.208 0 14.876-3.516 14.998-7.878L39 22H9z"/><ellipse cx="24" cy="22" rx="15" ry="8"/><path d="M9 16c0 4.418 6.716 8 15 8 8.208 0 14.876-3.516 14.998-7.878L39 12H9z"/><ellipse cx="24" cy="12" rx="15" ry="8"/>`,
  'filled': `<path d="M13.606 6.758C16.324 5.028 20.002 4 24 4s7.676 1.029 10.394 2.758C37.097 8.478 39 11.008 39 14s-1.903 5.522-4.606 7.242C31.676 22.972 27.998 24 24 24s-7.676-1.029-10.394-2.758C10.903 19.522 9 16.992 9 14s1.903-5.522 4.606-7.242m24.576 13.944c-.803.854-1.73 1.6-2.714 2.227C32.383 24.892 28.32 26 24 26s-8.383-1.108-11.468-3.07a14 14 0 0 1-2.714-2.228A7.14 7.14 0 0 0 9 24c0 2.992 1.903 5.522 4.606 7.242C16.324 32.972 20.002 34 24 34s7.676-1.029 10.394-2.758C37.097 29.522 39 26.992 39 24a7.14 7.14 0 0 0-.818-3.298m0 10c-.803.854-1.73 1.6-2.714 2.227C32.383 34.892 28.32 36 24 36s-8.383-1.108-11.468-3.07a14 14 0 0 1-2.714-2.228A7.14 7.14 0 0 0 9 34c0 2.992 1.903 5.522 4.606 7.242C16.324 42.972 20.002 44 24 44s7.676-1.029 10.394-2.758C37.097 39.522 39 36.992 39 34a7.14 7.14 0 0 0-.818-3.298"/>`,
  'regular': `<path d="M11.5 14c0-1.84 1.175-3.686 3.448-5.133C17.208 7.43 20.404 6.5 24 6.5s6.793.93 9.052 2.367C35.325 10.314 36.5 12.16 36.5 14s-1.175 3.686-3.448 5.133C30.792 20.57 27.596 21.5 24 21.5s-6.793-.93-9.052-2.367C12.675 17.686 11.5 15.84 11.5 14M24 4c-3.998 0-7.676 1.029-10.394 2.758C10.903 8.478 9 11.008 9 14s1.903 5.522 4.606 7.242C16.324 22.972 20.002 24 24 24s7.676-1.029 10.394-2.758C37.097 19.522 39 16.992 39 14s-1.903-5.522-4.606-7.242C31.676 5.028 27.998 4 24 4M11.5 24c0-.528.097-1.056.288-1.576a14 14 0 0 1-1.97-1.722A7.14 7.14 0 0 0 9 24c0 2.992 1.903 5.522 4.606 7.242C16.324 32.972 20.002 34 24 34s7.676-1.029 10.394-2.758C37.097 29.522 39 26.992 39 24a7.14 7.14 0 0 0-.818-3.298 14 14 0 0 1-1.97 1.722c.191.52.288 1.048.288 1.576 0 1.84-1.175 3.686-3.448 5.133C30.792 30.57 27.596 31.5 24 31.5s-6.793-.93-9.052-2.367C12.675 27.686 11.5 25.84 11.5 24m0 10q0-.794.288-1.576a14 14 0 0 1-1.97-1.722A7.14 7.14 0 0 0 9 34c0 2.992 1.903 5.522 4.606 7.242C16.324 42.972 20.002 44 24 44s7.676-1.029 10.394-2.758C37.097 39.522 39 36.992 39 34a7.14 7.14 0 0 0-.818-3.298 14 14 0 0 1-1.97 1.722q.287.782.288 1.576c0 1.84-1.175 3.686-3.448 5.133C30.792 40.57 27.596 41.5 24 41.5s-6.793-.93-9.052-2.367C12.675 37.686 11.5 35.84 11.5 34"/>`
} as const;

export default function CoinMultipleIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'coinmultipleicon_gradient';
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