
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.032 2.336a1.75 1.75 0 0 0-2.064 0L3.547 7.75c-.977.712-.474 2.256.734 2.258H16V10h3v.007h.719c1.208-.002 1.71-1.546.734-2.258zM12 5.26a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-.75 10.149q-.137.28-.2.594h-1.8v-4.997h2zm3.5-3.972A2.75 2.75 0 0 0 13 14v.05a3 3 0 0 0-.25.064v-3.108h2zM11 17.003V20.5H3.75a.75.75 0 0 1-.75-.75v-.5a2.25 2.25 0 0 1 2.25-2.248zm-5.5-1h2.25v-4.996H5.5zM14 15h-.5a1.5 1.5 0 0 0-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zm-2 9a1.5 1.5 0 0 1-1.5-1.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5z"/>`,
  'regular': `<path d="M13 6.26a1 1 0 1 1-2-.001 1 1 0 0 1 2 0m.032-3.924a1.75 1.75 0 0 0-2.064 0L3.547 7.75c-.978.712-.473 2.258.736 2.258H4.5v5.796c-.89.455-1.5 1.38-1.5 2.448v1.5a.75.75 0 0 0 .75.749H11v-1.499H4.5v-.75c0-.69.56-1.249 1.25-1.249H11V16.5c0-.354.074-.691.207-.997H9.5v-5.496h1.75v5.402a2.5 2.5 0 0 1 1.5-1.295v-4.107h1.75v1.543c.375-.192.8-.3 1.25-.3H16v-1.243h2v1.243h1.25q.127 0 .25.011v-1.254h.217c1.21 0 1.713-1.546.736-2.258zm-1.18 1.211a.25.25 0 0 1 .295 0l6.803 4.96H5.05zM6 15.503v-5.496h2v5.496zM14 15h-.5a1.5 1.5 0 0 0-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zm-2 9a1.5 1.5 0 0 1-1.5-1.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5z"/>`
} as const;

export default function BuildingBankToolboxIcon({ 
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

  const gradientId = 'buildingbanktoolboxicon_gradient';
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