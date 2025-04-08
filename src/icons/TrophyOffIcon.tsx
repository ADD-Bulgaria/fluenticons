
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m6.925 8.693-2.559-2.56a1.25 1.25 0 1 1 1.768-1.767l37.5 37.5a1.25 1.25 0 0 1-1.768 1.768L29.761 31.529a11.9 11.9 0 0 1-4.511 1.407V36.5H31a5 5 0 0 1 5 5v.5a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5h5.75v-3.564c-5.038-.522-9.15-4.16-10.377-8.954A6.876 6.876 0 0 1 6 17.125V10.75c0-.818.358-1.553.925-2.057M12 13.768 8.733 10.5a.25.25 0 0 0-.233.249v6.375a4.38 4.38 0 0 0 3.507 4.289A12 12 0 0 1 12 21zm23.627 10.214a12 12 0 0 1-2.068 4.274L12.215 6.912A4.25 4.25 0 0 1 16.25 4h15.5a4.25 4.25 0 0 1 4.243 4h3.257A2.75 2.75 0 0 1 42 10.75v6.375c0 3.628-2.81 6.6-6.373 6.857m.366-2.568c2-.403 3.507-2.17 3.507-4.289V10.75a.25.25 0 0 0-.25-.25H36V21q0 .208-.007.414"/>`,
  'regular': `<path d="m6.925 8.693-2.559-2.56a1.25 1.25 0 1 1 1.768-1.767l37.5 37.5a1.25 1.25 0 0 1-1.768 1.768L29.761 31.529a11.9 11.9 0 0 1-4.511 1.407V36.5H31a5 5 0 0 1 5 5v.5a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5h5.75v-3.564c-5.038-.522-9.15-4.16-10.377-8.954A6.876 6.876 0 0 1 6 17.125V10.75c0-.818.358-1.553.925-2.057m20.973 20.973L14.5 16.268V21a9.5 9.5 0 0 0 9.5 9.5c1.39 0 2.709-.298 3.898-.834M12 13.768 8.733 10.5a.25.25 0 0 0-.233.249v6.375a4.38 4.38 0 0 0 3.507 4.289A12 12 0 0 1 12 21zM33.5 21c0 2.035-.64 3.921-1.73 5.467l1.789 1.789a12 12 0 0 0 2.068-4.274A6.875 6.875 0 0 0 42 17.125V10.75A2.75 2.75 0 0 0 39.25 8h-3.257a4.25 4.25 0 0 0-4.243-4h-15.5a4.25 4.25 0 0 0-4.035 2.912L14.5 9.197V8.25c0-.966.784-1.75 1.75-1.75h15.5c.967 0 1.75.784 1.75 1.75zm2.493.414Q36 21.207 36 21V10.5h3.25a.25.25 0 0 1 .25.25v6.375a4.38 4.38 0 0 1-3.507 4.289M33.5 41.5A2.5 2.5 0 0 0 31 39H17a2.5 2.5 0 0 0-2.5 2.5z"/>`
} as const;

export default function TrophyOffIcon({ 
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

  const gradientId = 'trophyofficon_gradient';
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