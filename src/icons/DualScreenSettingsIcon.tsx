
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.274 2.976a2 2 0 0 1-1.441 2.496l-.585.145a5.7 5.7 0 0 0 .007 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.7 1.485.922l.493-.519a2 2 0 0 1 2.9 0l.499.525a5.3 5.3 0 0 0 1.483-.912l-.198-.686a2 2 0 0 1 1.441-2.497l.584-.144a5.7 5.7 0 0 0-.006-1.807l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.631a5.3 5.3 0 0 0-1.485-.922l-.493.518a2 2 0 0 1-2.9 0l-.499-.525c-.544.22-1.044.53-1.483.913zM16.497 8c-.801 0-1.45-.671-1.45-1.5 0-.828.649-1.5 1.45-1.5s1.45.672 1.45 1.5c0 .829-.65 1.5-1.45 1.5m0 5A6.5 6.5 0 0 0 22 9.964V20.25A1.75 1.75 0 0 1 20.25 22H13q-.13 0-.255-.018V11.808A6.47 6.47 0 0 0 16.497 13m-.255 4.5h-1.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.102-.007a.75.75 0 0 0 0-1.486zm-6.247-11q0-.251.019-.499H3.75A1.75 1.75 0 0 0 2 7.751v12.496c0 .966.784 1.75 1.75 1.75H11q.125 0 .245-.017V10.334A6.47 6.47 0 0 1 9.995 6.5m-.75 11 .101.007a.75.75 0 0 1 0 1.486L9.245 19H7.743l-.102-.007a.75.75 0 0 1 0-1.486l.102-.007z"/>`,
  'regular': `<path d="M13.28 2.976a2 2 0 0 1-1.441 2.496l-.584.145a5.7 5.7 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.186.631c.439.386.94.7 1.484.922l.493-.519a2 2 0 0 1 2.9 0l.499.525a5.3 5.3 0 0 0 1.483-.912l-.198-.686a2 2 0 0 1 1.441-2.497l.584-.144a5.7 5.7 0 0 0-.006-1.807l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.631a5.3 5.3 0 0 0-1.485-.922l-.493.518a2 2 0 0 1-2.9 0l-.499-.525a5.3 5.3 0 0 0-1.483.913zM16.504 8c-.8 0-1.45-.671-1.45-1.5 0-.828.65-1.5 1.45-1.5s1.45.672 1.45 1.5c0 .829-.65 1.5-1.45 1.5m-6.501-1.5q0-.251.018-.498H3.75A1.75 1.75 0 0 0 2 7.751v12.495c0 .966.784 1.75 1.75 1.75h7.499v.002h9a1.75 1.75 0 0 0 1.75-1.75L22 9.972a6.5 6.5 0 0 1-1.5 1.655l-.001 8.622a.25.25 0 0 1-.25.25h-7.5v-8.69a6.5 6.5 0 0 1-1.5-1.48v10.168H3.75a.25.25 0 0 1-.25-.25V7.75a.25.25 0 0 1 .25-.25l6.328.001a6.5 6.5 0 0 1-.076-1.002m6.99 11.75a.75.75 0 0 0-.75-.75h-1.5l-.103.007A.75.75 0 0 0 14.742 19h1.5l.102-.007a.75.75 0 0 0 .649-.743m-6.997 0a.75.75 0 0 0-.75-.75H7.741l-.101.007A.75.75 0 0 0 7.742 19h1.502l.102-.007a.75.75 0 0 0 .649-.743"/>`
} as const;

export default function DualScreenSettingsIcon({ 
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

  const gradientId = 'dualscreensettingsicon_gradient';
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