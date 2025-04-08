
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.5 2c.502 0 .956.3 1.152.763l5.072 11.989-1.908 1.907L12.48 13.5H6.52l-1.37 3.237a1.25 1.25 0 0 1-2.302-.974l5.5-13A1.25 1.25 0 0 1 9.5 2m1.922 9L9.5 6.458 7.58 11zm9.838.328a4.536 4.536 0 0 1 6.414 6.415l-9.418 9.417a4 4 0 0 1-1.73 1.018l-6.253 1.787a1 1 0 0 1-1.236-1.236l1.785-6.251a4 4 0 0 1 1.018-1.73z"/>`,
  'regular': `<path d="M10.421 2.61a1 1 0 0 0-1.842 0l-5.5 13a1 1 0 1 0 1.842.78L6.355 13h6.29l1.434 3.39.002.004 1.526-1.526zm-.92 2.956L11.798 11H7.201zm18.173 5.762a4.536 4.536 0 0 0-6.414 0l-9.42 9.42a4 4 0 0 0-1.018 1.73l-1.785 6.25a1 1 0 0 0 1.236 1.237l6.254-1.787a4 4 0 0 0 1.73-1.018l9.417-9.417a4.536 4.536 0 0 0 0-6.415m-5 1.415a2.536 2.536 0 0 1 3.586 3.585l-9.418 9.418c-.24.24-.538.416-.865.509l-4.523 1.292 1.292-4.52a2 2 0 0 1 .508-.865z"/>`
} as const;

export default function TextEditStyleCharacterAIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'texteditstylecharacteraicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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