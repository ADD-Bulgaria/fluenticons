
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.007 8c.13-2.23 1.98-4 4.243-4h15.5a4.25 4.25 0 0 1 4.243 4h3.257A2.75 2.75 0 0 1 42 10.75v6.375a6.86 6.86 0 0 1-2.526 5.325 7 7 0 0 0-9.415 5.639 5 5 0 0 0-4.056 4.745q-.374.062-.753.102V36.5H26V43q0 .515.1 1H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5h5.75v-3.564c-5.038-.522-9.15-4.16-10.377-8.954A6.876 6.876 0 0 1 6 17.125V10.75A2.75 2.75 0 0 1 8.75 8zM12 10.5H8.75a.25.25 0 0 0-.25.25v6.375a4.38 4.38 0 0 0 3.507 4.289A12 12 0 0 1 12 21zm23.993 10.914c2-.403 3.507-2.17 3.507-4.289V10.75a.25.25 0 0 0-.25-.25H36V21q0 .208-.007.414M32 30v-1a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H31a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3zm2.5-1v1h5v-1a2.5 2.5 0 0 0-5 0m5.5 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>`,
  'regular': `<path d="M12 10.5H8.75a.25.25 0 0 0-.25.25v6.375a4.38 4.38 0 0 0 3.507 4.289A12 12 0 0 1 12 21zm.373 13.482A6.876 6.876 0 0 1 6 17.125V10.75A2.75 2.75 0 0 1 8.75 8h3.257c.13-2.23 1.98-4 4.243-4h15.5a4.25 4.25 0 0 1 4.243 4h3.257A2.75 2.75 0 0 1 42 10.75v6.375a6.86 6.86 0 0 1-2.526 5.325A7 7 0 0 0 37 22c-1.37 0-2.648.393-3.727 1.074A9.5 9.5 0 0 0 33.5 21V8.25a1.75 1.75 0 0 0-1.75-1.75h-15.5a1.75 1.75 0 0 0-1.75 1.75V21a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 2.983-.478 5 5 0 0 0-.98 2.812q-.374.062-.753.102V36.5H26V39h-9a2.5 2.5 0 0 0-2.5 2.5H26V43q0 .515.1 1H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5h5.75v-3.564c-5.038-.522-9.15-4.16-10.377-8.954m23.62-2.568c2-.403 3.507-2.17 3.507-4.289V10.75a.25.25 0 0 0-.25-.25H36V21q0 .208-.007.414M32 30v-1a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H31a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3zm2.5-1v1h5v-1a2.5 2.5 0 0 0-5 0m5.5 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>`
} as const;

export default function TrophyLockIcon({ 
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

  const gradientId = 'trophylockicon_gradient';
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