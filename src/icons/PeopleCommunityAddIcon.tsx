
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M2 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M22.5 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-11.75 7A1.75 1.75 0 0 0 9 14.75V20a5 5 0 0 0 5.482 4.977 7.503 7.503 0 0 1 3.797-11.643A1.74 1.74 0 0 0 17.25 13zM8 14.752l-4.703 1.26a1.75 1.75 0 0 0-1.237 2.144l.841 3.139a5 5 0 0 0 7.088 3.168A6 6 0 0 1 8 20zM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"/>`,
  'regular': `<path d="M11.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M5.5 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M2 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m20.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3.5 2a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M9 14.75c0-.966.784-1.75 1.75-1.75h6.5c.385 0 .74.124 1.029.334a7.5 7.5 0 0 0-2.28 1.166H10.75a.25.25 0 0 0-.25.25V20a3.5 3.5 0 0 0 3.115 3.48c.232.534.524 1.036.867 1.497Q14.244 25 14 25a5 5 0 0 1-5-5zm-1 .002-4.703 1.26a1.75 1.75 0 0 0-1.237 2.144l.841 3.139a5 5 0 0 0 7.088 3.168 6 6 0 0 1-1.018-1.189q-.163.062-.334.108a3.5 3.5 0 0 1-4.287-2.475l-.841-3.14a.25.25 0 0 1 .177-.306L8 16.305zM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"/>`
} as const;

export default function PeopleCommunityAddIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'peoplecommunityaddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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