
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.515 15.288A1.5 1.5 0 0 1 16 14h9a1.5 1.5 0 0 1 0 3h-7.699l-.548 3.834 3.125-.284a6.99 6.99 0 1 1 .633 13.95h-.565a7.55 7.55 0 0 1-5.615-2.5l-.446-.497a1.5 1.5 0 1 1 2.23-2.006l.446.495a4.55 4.55 0 0 0 3.385 1.508h.565a3.99 3.99 0 1 0-.361-7.962l-5.014.456a1.5 1.5 0 0 1-1.62-1.706zm14.924 9.151a1.5 1.5 0 0 1 2.122 0L34 26.88l2.44-2.44a1.5 1.5 0 0 1 2.12 2.122L36.122 29l2.44 2.44a1.5 1.5 0 0 1-2.122 2.12L34 31.122l-2.44 2.44a1.5 1.5 0 0 1-2.12-2.122L31.878 29l-2.44-2.44a1.5 1.5 0 0 1 0-2.12M10.25 34a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'regular': `<path d="M15.256 15.126A1.25 1.25 0 0 1 16.5 14h8.75a1.25 1.25 0 1 1 0 2.5h-7.619l-.482 4.825 2.905-.346c3.962-.472 7.446 2.622 7.446 6.612a6.66 6.66 0 0 1-6.659 6.659h-.484a7.14 7.14 0 0 1-5.285-2.338l-.747-.821a1.25 1.25 0 1 1 1.85-1.682l.746.821a4.64 4.64 0 0 0 3.436 1.52h.484a4.159 4.159 0 1 0-.492-8.289l-4.451.53a1.25 1.25 0 0 1-1.392-1.365zm14.11 9.24a1.25 1.25 0 0 1 1.768 0L34 27.232l2.866-2.866a1.25 1.25 0 0 1 1.768 1.768L35.768 29l2.866 2.866a1.25 1.25 0 0 1-1.768 1.768L34 30.768l-2.866 2.866a1.25 1.25 0 0 1-1.768-1.768L32.232 29l-2.866-2.866a1.25 1.25 0 0 1 0-1.768M10.25 34a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`
} as const;

export default function Multiplier5xIcon({ 
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

  const gradientId = 'multiplier5xicon_gradient';
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