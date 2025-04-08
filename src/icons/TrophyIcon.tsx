
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M22.75 37.5V32h2.5v5.5z"/><path d="M22.75 37.5V32h2.5v5.5z"/><path d="M31 36.5a5 5 0 0 1 5 5v.5a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5z"/><path d="M31 36.5a5 5 0 0 1 5 5v.5a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5z"/><path fill-rule="evenodd" d="M28 10.75A2.75 2.75 0 0 1 30.75 8h8.5A2.75 2.75 0 0 1 42 10.75V17a7 7 0 1 1-14 0zm2.75-.25a.25.25 0 0 0-.25.25V17a4.5 4.5 0 1 0 9 0v-6.25a.25.25 0 0 0-.25-.25z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M28 10.75A2.75 2.75 0 0 1 30.75 8h8.5A2.75 2.75 0 0 1 42 10.75V17a7 7 0 1 1-14 0zm2.75-.25a.25.25 0 0 0-.25.25V17a4.5 4.5 0 1 0 9 0v-6.25a.25.25 0 0 0-.25-.25zM6 10.75A2.75 2.75 0 0 1 8.75 8h8.5A2.75 2.75 0 0 1 20 10.75V17a7 7 0 1 1-14 0zm2.75-.25a.25.25 0 0 0-.25.25V17a4.5 4.5 0 1 0 9 0v-6.25a.25.25 0 0 0-.25-.25z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6 10.75A2.75 2.75 0 0 1 8.75 8h8.5A2.75 2.75 0 0 1 20 10.75V17a7 7 0 1 1-14 0zm2.75-.25a.25.25 0 0 0-.25.25V17a4.5 4.5 0 1 0 9 0v-6.25a.25.25 0 0 0-.25-.25z" clip-rule="evenodd"/><path d="M16 4a4 4 0 0 0-4 4v13c0 6.627 5.373 12 12 12s12-5.373 12-12V8a4 4 0 0 0-4-4z"/><path d="M16 4a4 4 0 0 0-4 4v13c0 6.627 5.373 12 12 12s12-5.373 12-12V8a4 4 0 0 0-4-4z"/>`,
  'filled': `<path d="M12.007 8c.13-2.23 1.98-4 4.243-4h15.5a4.25 4.25 0 0 1 4.243 4h3.257A2.75 2.75 0 0 1 42 10.75v6.375c0 3.628-2.81 6.6-6.373 6.857-1.226 4.794-5.339 8.432-10.377 8.954V36.5H31a5 5 0 0 1 5 5v.5a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5h5.75v-3.564c-5.038-.522-9.15-4.16-10.377-8.954A6.876 6.876 0 0 1 6 17.125V10.75A2.75 2.75 0 0 1 8.75 8zM12 10.5H8.75a.25.25 0 0 0-.25.25v6.375a4.38 4.38 0 0 0 3.507 4.289A12 12 0 0 1 12 21zm23.993 10.914c2-.403 3.507-2.17 3.507-4.289V10.75a.25.25 0 0 0-.25-.25H36V21q0 .208-.007.414"/>`,
  'regular': `<path d="M12 10.5H8.75a.25.25 0 0 0-.25.25v6.375a4.38 4.38 0 0 0 3.507 4.289A12 12 0 0 1 12 21zm.373 13.482A6.876 6.876 0 0 1 6 17.125V10.75A2.75 2.75 0 0 1 8.75 8h3.257c.13-2.23 1.98-4 4.243-4h15.5a4.25 4.25 0 0 1 4.243 4h3.257A2.75 2.75 0 0 1 42 10.75v6.375c0 3.628-2.81 6.6-6.373 6.857-1.226 4.794-5.339 8.432-10.377 8.954V36.5H31a5 5 0 0 1 5 5v.5a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-.5a5 5 0 0 1 5-5h5.75v-3.564c-5.038-.522-9.15-4.16-10.377-8.954m23.62-2.568c2-.403 3.507-2.17 3.507-4.289V10.75a.25.25 0 0 0-.25-.25H36V21q0 .208-.007.414M14.5 8.25V21a9.5 9.5 0 0 0 19 0V8.25a1.75 1.75 0 0 0-1.75-1.75h-15.5a1.75 1.75 0 0 0-1.75 1.75m0 33.25h19A2.5 2.5 0 0 0 31 39H17a2.5 2.5 0 0 0-2.5 2.5"/>`
} as const;

export default function TrophyIcon({ 
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

  const gradientId = 'trophyicon_gradient';
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