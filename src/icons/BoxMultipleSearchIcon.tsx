
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v9.292a5.5 5.5 0 0 0-5.63-3.843 2.75 2.75 0 0 0-1.167-.829l-4.306-1.592a4.75 4.75 0 0 0-2.397-.235V5.563a1.75 1.75 0 0 1 1.143-1.641zm-2.395 3.924a.75.75 0 0 0 .464.954l2.659.919c.37.128.774.128 1.144 0l2.65-.919a.75.75 0 0 0-.49-1.417l-2.65.918a.25.25 0 0 1-.164 0l-2.659-.919a.75.75 0 0 0-.954.464m3.566 4.99a2 2 0 0 0-.264-.123L10.3 9.529a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l2.639-.976A5.49 5.49 0 0 1 11 16.5c0-.512.07-1.007.2-1.478l-1.45.503v2.7a.75.75 0 0 1-1.5 0v-2.7l-2.48-.857a.75.75 0 0 1 .49-1.418l2.74.948 2.732-.947a.76.76 0 0 1 .355-.034 5.5 5.5 0 0 1 2.784-1.972m5.297 7.862a4.5 4.5 0 1 0-1.06 1.06l2.612 2.613a.75.75 0 0 0 1.06-1.06zM19.5 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`,
  'regular': `<path d="M14.22 3.737a2.25 2.25 0 0 1 1.56 0l4.307 1.592a.25.25 0 0 1 .163.234v6.913a5.5 5.5 0 0 1 1.5 2.379V5.563a1.75 1.75 0 0 0-1.143-1.641L16.3 2.33a3.75 3.75 0 0 0-2.6 0L9.393 3.922A1.75 1.75 0 0 0 8.25 5.563v2.793a4.8 4.8 0 0 1 1.5 0V5.563a.25.25 0 0 1 .163-.234zm.65 7.507a2 2 0 0 0-.263-.123L10.3 9.529a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l2.639-.976a5.5 5.5 0 0 1-1.06-1.207l-2.099.776a2.25 2.25 0 0 1-1.56 0l-4.307-1.592a.25.25 0 0 1-.163-.235v-5.67a.25.25 0 0 1 .163-.234l4.307-1.592a2.25 2.25 0 0 1 1.56 0l3.33 1.231a5.5 5.5 0 0 1 1.76-.923m-2.783 1.972a.75.75 0 0 0-.355.034L9 14.197l-2.74-.948a.75.75 0 1 0-.49 1.418l2.48.857v2.7a.75.75 0 0 0 1.5 0v-2.7l1.45-.503a5.5 5.5 0 0 1 .887-1.805m-.782-6.503a.75.75 0 0 0 .464.954l2.659.919c.37.128.774.128 1.144 0l2.65-.919a.75.75 0 0 0-.49-1.417l-2.65.918a.25.25 0 0 1-.164 0l-2.659-.919a.75.75 0 0 0-.954.464m8.863 12.393a4.5 4.5 0 1 0-1.06 1.06l2.612 2.613a.75.75 0 0 0 1.06-1.06zM19.5 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`
} as const;

export default function BoxMultipleSearchIcon({ 
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

  const gradientId = 'boxmultiplesearchicon_gradient';
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