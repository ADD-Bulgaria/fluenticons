
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 8.5A4.5 4.5 0 0 1 6.5 4h3.964a3.5 3.5 0 0 1 2.475 1.025L15 7.085l-3.475 3.476a1.5 1.5 0 0 1-1.06.439H2zM2 13v10.5A4.5 4.5 0 0 0 6.5 28h7.111a4.5 4.5 0 0 1-.111-1v-8a4.5 4.5 0 0 1 4.5-4.5h10c.718 0 1.398.168 2 .468V12a4.5 4.5 0 0 0-4.5-4.5h-8.086l-4.475 4.475A3.5 3.5 0 0 1 10.464 13zm13 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v.198l-8 4.444-8-4.444zm8.364 6.156L31 20.914V27a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3v-6.087l7.636 4.243a.75.75 0 0 0 .728 0"/>`,
  'light': `<path d="M3 12h7.592a2.5 2.5 0 0 0 1.882-.854L15.227 8H25.5a3.5 3.5 0 0 1 3.5 3.5v3.111q.527.12 1 .357V11.5A4.5 4.5 0 0 0 25.5 7H14.707L12.44 4.732A2.5 2.5 0 0 0 10.672 4H6.5A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h7.111a4.5 4.5 0 0 1-.111-1h-7A3.5 3.5 0 0 1 3 23.5zm0-3.5A3.5 3.5 0 0 1 6.5 5h4.172a1.5 1.5 0 0 1 1.06.44l2.35 2.35-2.36 2.698a1.5 1.5 0 0 1-1.13.512H3zM15 19a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v.198l-8 4.444-8-4.444zm8.364 6.156L31 20.914V27a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3v-6.087l7.636 4.243a.75.75 0 0 0 .728 0"/>`,
  'regular': `<path d="M4 8.5V11h6.464a1.5 1.5 0 0 0 1.061-.44l2.06-2.06-2.06-2.06a1.5 1.5 0 0 0-1.06-.44H6.5A2.5 2.5 0 0 0 4 8.5m-2 0A4.5 4.5 0 0 1 6.5 4h3.964a3.5 3.5 0 0 1 2.475 1.025L15.414 7.5H25.5A4.5 4.5 0 0 1 30 12v2.968a4.5 4.5 0 0 0-2-.468V12a2.5 2.5 0 0 0-2.5-2.5H15.414l-2.475 2.475A3.5 3.5 0 0 1 10.464 13H4v10.5A2.5 2.5 0 0 0 6.5 26h7v1q.002.517.111 1H6.5A4.5 4.5 0 0 1 2 23.5zM15 19a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v.198l-8 4.444-8-4.444zm8.364 6.156L31 20.914V27a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3v-6.087l7.636 4.243a.75.75 0 0 0 .728 0"/>`
} as const;

export default function FolderMailIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'foldermailicon_gradient';
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