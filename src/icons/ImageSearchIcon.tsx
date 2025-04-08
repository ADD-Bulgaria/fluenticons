
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.504 8.252a.752.752 0 1 0-1.504 0 .752.752 0 0 0 1.504 0M3 10.757V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5c0 .627-.178 1.213-.485 1.71l-6.939-6.812-.128-.117a2.25 2.25 0 0 0-2.244-.383A5.5 5.5 0 0 0 6.5 9.5c-1.33 0-2.55.472-3.5 1.257m10.5-2.505a2.252 2.252 0 1 0 4.504 0 2.252 2.252 0 0 0-4.504 0M13.982 21a1.74 1.74 0 0 0-.495-.987l-2.237-2.238a5.52 5.52 0 0 0 .551-4.245.75.75 0 0 1 .631.11l.093.078 6.928 6.8A3.24 3.24 0 0 1 17.75 21zM9.95 17.89a4.5 4.5 0 1 0-1.145.976l2.915 2.914a.75.75 0 1 0 1.06-1.06zM6.5 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v4.507a5.5 5.5 0 0 1 1.5-.882V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5q-.002.315-.104.595l-5.822-5.702-.128-.116a2.25 2.25 0 0 0-2.243-.38c.259.425.461.889.598 1.38a.75.75 0 0 1 .724.188L18.33 19.4a1.8 1.8 0 0 1-.581.099h-4.775l.512.513c.278.277.443.626.495.987h3.768A3.25 3.25 0 0 0 21 17.75zm-3.496 2.502a2.252 2.252 0 1 0-4.504 0 2.252 2.252 0 0 0 4.504 0m-3.004 0a.752.752 0 1 1 1.504 0 .752.752 0 0 1-1.504 0M9.95 17.89a4.5 4.5 0 1 0-1.145.976l2.915 2.915a.75.75 0 1 0 1.06-1.06zM6.5 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function ImageSearchIcon({ 
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

  const gradientId = 'imagesearchicon_gradient';
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