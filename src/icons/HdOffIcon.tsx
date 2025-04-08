
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.227 2.227a.75.75 0 0 0 0 1.06l1.256 1.257A3.24 3.24 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5c.626 0 1.21-.177 1.706-.483l1.268 1.268a.75.75 0 0 0 1.061-1.06L3.287 2.226a.75.75 0 0 0-1.06 0m12.707 13.768a3 3 0 0 1-.184.005h-1a.75.75 0 0 1-.75-.75v-1.19zM11.5 12.56v2.689a.75.75 0 1 1-1.5 0V13H8v2.25a.75.75 0 1 1-1.5 0v-6.5a.75.75 0 0 1 .487-.702L8 9.06v2.44h2v-.44zm3-1.24 1.928 1.927a1.8 1.8 0 0 0 .072-.498v-1.5a1.75 1.75 0 0 0-1.75-1.75h-.25zm3.5 1.43c0 .595-.16 1.152-.439 1.632L21 17.819V6.25A3.25 3.25 0 0 0 17.75 3H6.18L13 9.82V8.75a.75.75 0 0 1 .75-.75h1A3.25 3.25 0 0 1 18 11.25z"/>`,
  'regular': `<path d="M2.227 2.227a.75.75 0 0 0 0 1.06l1.256 1.257A3.24 3.24 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5c.626 0 1.21-.177 1.706-.483l1.268 1.268a.75.75 0 0 0 1.061-1.06L3.287 2.226a.75.75 0 0 0-1.06 0m16.111 17.172a1.8 1.8 0 0 1-.588.101H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25q.002-.31.101-.588l2.386 2.386a.75.75 0 0 0-.487.702v6.5a.75.75 0 1 0 1.5 0V13h2v2.25a.75.75 0 1 0 1.5 0v-2.69l1.5 1.5v1.19c0 .414.336.75.75.75h1q.093 0 .184-.005zM8 9.06l2 2v.439H8zm10 3.689c0 .595-.16 1.152-.439 1.632l-1.133-1.134a1.8 1.8 0 0 0 .072-.498v-1.5a1.75 1.75 0 0 0-1.75-1.75h-.25v1.82L13 9.82V8.75a.75.75 0 0 1 .75-.75h1A3.25 3.25 0 0 1 18 11.25zm1.5-6.5v10.07l1.5 1.5V6.25A3.25 3.25 0 0 0 17.75 3H6.18l1.5 1.5h10.07c.966 0 1.75.784 1.75 1.75"/>`
} as const;

export default function HdOffIcon({ 
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

  const gradientId = 'hdofficon_gradient';
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