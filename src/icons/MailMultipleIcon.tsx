
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6.5 8.5H25a4.5 4.5 0 0 1 4.5 4.5v7a7.5 7.5 0 0 1-7.5 7.5H11A4.5 4.5 0 0 1 6.5 23z"/><path d="M6.5 8.5H25a4.5 4.5 0 0 1 4.5 4.5v7a7.5 7.5 0 0 1-7.5 7.5H11A4.5 4.5 0 0 1 6.5 23z"/><path d="M3 19.5V9.524l11.005 6.272a1 1 0 0 0 .992-.001L26 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5"/><path d="M3 19.5V9.524l11.005 6.272a1 1 0 0 0 .992-.001L26 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5"/><path d="M3 19.5V9.524l11.005 6.272a1 1 0 0 0 .992-.001L26 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5"/><path d="M3 19.5V9.524l11.005 6.272a1 1 0 0 0 .992-.001L26 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5"/><path fill-opacity=".75" d="M3 19.5V9.524l11.005 6.272a1 1 0 0 0 .992-.001L26 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5"/><path fill-opacity=".7" d="M3 19.5V9.524l11.005 6.272a1 1 0 0 0 .992-.001L26 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5"/><path d="M7.5 5A4.5 4.5 0 0 0 3 9.5v.101l11 6.269a1 1 0 0 0 .992 0l11.003-6.296L26 9.5q-.002-.595-.147-1.147A4.5 4.5 0 0 0 21.5 5z"/><path d="M7.5 5A4.5 4.5 0 0 0 3 9.5v.101l11 6.269a1 1 0 0 0 .992 0l11.003-6.296L26 9.5q-.002-.595-.147-1.147A4.5 4.5 0 0 0 21.5 5z"/>`,
  'filled': `<path d="M7.5 5a4.5 4.5 0 0 0-4.358 3.376l11.357 6.473 11.354-6.496A4.5 4.5 0 0 0 21.5 5zM3 19.5v-8.903l11.005 6.272a1 1 0 0 0 .992 0L26 10.572V19.5a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5m8 8a4.5 4.5 0 0 1-3.742-2H22a5.5 5.5 0 0 0 5.5-5.5V9.258c1.206.807 2 2.182 2 3.742v7a7.5 7.5 0 0 1-7.5 7.5z"/>`,
  'light': `<path d="M26 20a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h15a4 4 0 0 1 4 4zM7 6a3 3 0 0 0-3 3v.715l10.5 6.204L25 9.715V9a3 3 0 0 0-3-3zm18 4.876L14.754 16.93a.5.5 0 0 1-.508 0L4 10.876V20a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3zM7.354 26c.705.622 1.631 1 2.646 1h12a7 7 0 0 0 7-7v-7a4 4 0 0 0-1-2.646V20a6 6 0 0 1-6 6z"/>`,
  'regular': `<path d="M7.5 7a2.5 2.5 0 0 0-2.499 2.42l9.499 5.428 9.499-5.428A2.5 2.5 0 0 0 21.5 7zM3 9.5A4.5 4.5 0 0 1 7.5 5h14A4.5 4.5 0 0 1 26 9.5v10a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5zm21 10v-7.777l-9.004 5.145a1 1 0 0 1-.992 0L5 11.723V19.5A2.5 2.5 0 0 0 7.5 22h14a2.5 2.5 0 0 0 2.5-2.5m-13 8a4.5 4.5 0 0 1-3.742-2H22a5.5 5.5 0 0 0 5.5-5.5V9.258c1.206.807 2 2.182 2 3.742v7a7.5 7.5 0 0 1-7.5 7.5z"/>`
} as const;

export default function MailMultipleIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'mailmultipleicon_gradient';
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