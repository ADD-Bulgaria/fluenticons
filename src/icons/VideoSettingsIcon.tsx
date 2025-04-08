
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 14.25A6.25 6.25 0 0 1 10.25 8h14.5A6.25 6.25 0 0 1 31 14.25v15.5a6.25 6.25 0 0 1-5.03 6.13q.03-.436.03-.88c0-7.18-5.82-13-13-13a12.96 12.96 0 0 0-9 3.62zm34.907 19.168L33 29.339v-14.68l5.907-4.078c2.156-1.488 5.097.055 5.097 2.675v17.487c0 2.62-2.941 4.163-5.097 2.675M6.894 29.783l-.982-3.195a11 11 0 0 1 3.095-1.84l2.484 2.566a2 2 0 0 0 2.876-.001l2.518-2.607c1.13.426 2.17 1.033 3.087 1.785l-.998 3.482a2 2 0 0 0 1.437 2.49l3.463.868a11.1 11.1 0 0 1-.043 3.601l-3.26.748a2 2 0 0 0-1.464 2.537l.981 3.195a11 11 0 0 1-3.095 1.84l-2.484-2.566a2 2 0 0 0-2.876.001l-2.518 2.607a11 11 0 0 1-3.086-1.785l.997-3.482a2 2 0 0 0-1.436-2.49l-3.464-.868a11.1 11.1 0 0 1 .043-3.601l3.26-.748a2 2 0 0 0 1.465-2.537M13 38a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>`,
  'regular': `<path d="M10.25 8A6.25 6.25 0 0 0 4 14.25v11.37a13 13 0 0 1 2.5-1.88v-9.49a3.75 3.75 0 0 1 3.75-3.75h15.5a3.75 3.75 0 0 1 3.75 3.75v15.5a3.75 3.75 0 0 1-3.586 3.746 13 13 0 0 1 .048 2.5A6.25 6.25 0 0 0 32 29.75v-1.101l6.907 4.769c2.156 1.488 5.096-.055 5.096-2.675V13.256c0-2.62-2.94-4.163-5.096-2.675L32 15.351V14.25A6.25 6.25 0 0 0 25.75 8zM32 18.388l8.327-5.75a.75.75 0 0 1 1.176.618v17.487a.75.75 0 0 1-1.176.617L32 25.61zM6.894 29.783a2 2 0 0 1-1.465 2.537l-3.26.748a11 11 0 0 0-.043 3.6l3.464.868a2 2 0 0 1 1.436 2.491l-.997 3.482a11 11 0 0 0 3.086 1.785l2.518-2.607a2 2 0 0 1 2.876-.001l2.484 2.567a11 11 0 0 0 3.095-1.841l-.981-3.195a2 2 0 0 1 1.464-2.537l3.26-.748a11 11 0 0 0 .043-3.6l-3.463-.868a2 2 0 0 1-1.437-2.491l.998-3.482a11 11 0 0 0-3.087-1.785l-2.518 2.607a2 2 0 0 1-2.876 0l-2.484-2.566a11 11 0 0 0-3.095 1.84zM13 38a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function VideoSettingsIcon({ 
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

  const gradientId = 'videosettingsicon_gradient';
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