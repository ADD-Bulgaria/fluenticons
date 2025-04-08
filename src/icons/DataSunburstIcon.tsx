
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 3.51c0 .322.2.607.493.74a8.53 8.53 0 0 1 4.258 4.257.82.82 0 0 0 .739.494c.521 0 .892-.508.684-.986a10.04 10.04 0 0 0-5.188-5.189c-.479-.208-.986.163-.986.685m-6.986-.684c.479-.208.986.163.986.685a.82.82 0 0 1-.494.738A8.53 8.53 0 0 0 4.25 8.507a.82.82 0 0 1-.739.494c-.522 0-.892-.508-.684-.986a10.04 10.04 0 0 1 5.188-5.189M15 20.49c0-.321.2-.606.493-.738a8.53 8.53 0 0 0 4.258-4.258.82.82 0 0 1 .739-.493c.521 0 .892.507.684.985a10.04 10.04 0 0 1-5.188 5.189c-.479.208-.986-.163-.986-.685M4.249 15.494a.82.82 0 0 0-.739-.493c-.522 0-.892.507-.684.985a10.04 10.04 0 0 0 5.188 5.189c.479.208.986-.163.986-.685a.82.82 0 0 0-.494-.738 8.53 8.53 0 0 1-4.257-4.258m7.75-8.993q-.29 0-.571.029a.75.75 0 1 1-.154-1.492Q11.633 5 12 5a7 7 0 0 1 6.826 5.443.75.75 0 0 1-1.463.332A5.5 5.5 0 0 0 12 6.501m-2.878-.1a.75.75 0 0 1-.2 1.042A5.5 5.5 0 0 0 6.5 12a5.47 5.47 0 0 0 .942 3.08.75.75 0 0 1-1.242.84A6.97 6.97 0 0 1 5 12a7 7 0 0 1 3.08-5.8.75.75 0 0 1 1.041.2m9.11 6.505a.75.75 0 0 1 .529.919 7.003 7.003 0 0 1-10.01 4.377.75.75 0 0 1 .697-1.328 5.503 5.503 0 0 0 7.864-3.44.75.75 0 0 1 .92-.528M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>`,
  'regular': `<path d="M15.494 4.25A.82.82 0 0 1 15 3.51c0-.52.507-.892.986-.684a10.04 10.04 0 0 1 5.188 5.189c.208.478-.162.986-.684.986a.82.82 0 0 1-.739-.494 8.53 8.53 0 0 0-4.257-4.258M9 3.51c0-.52-.507-.892-.986-.684a10.04 10.04 0 0 0-5.188 5.189c-.208.478.163.986.684.986a.82.82 0 0 0 .739-.494 8.53 8.53 0 0 1 4.258-4.258A.82.82 0 0 0 9 3.511m6.494 16.242a.82.82 0 0 0-.494.738c0 .522.507.893.986.685a10.04 10.04 0 0 0 5.188-5.189c.208-.478-.162-.985-.684-.985a.82.82 0 0 0-.739.493 8.53 8.53 0 0 1-4.257 4.258M3.51 15c.322 0 .607.2.739.493a8.53 8.53 0 0 0 4.258 4.258.82.82 0 0 1 .493.738c0 .522-.507.893-.986.685a10.04 10.04 0 0 1-5.188-5.189c-.208-.478.163-.985.684-.985M12 6.5q-.29 0-.572.029a.75.75 0 0 1-.154-1.492Q11.633 5 12 5a7 7 0 0 1 6.826 5.443.75.75 0 0 1-1.463.332A5.5 5.5 0 0 0 12 6.501m-2.879-.1a.75.75 0 0 1-.2 1.042A5.5 5.5 0 0 0 6.5 12c0 1.142.346 2.2.941 3.08a.75.75 0 1 1-1.242.84 6.97 6.97 0 0 1-1.2-3.92 7 7 0 0 1 3.08-5.8.75.75 0 0 1 1.041.2m9.11 6.505a.75.75 0 0 1 .529.919 7.003 7.003 0 0 1-10.01 4.377.75.75 0 1 1 .698-1.328 5.503 5.503 0 0 0 7.864-3.439.75.75 0 0 1 .919-.53M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2.5 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"/>`
} as const;

export default function DataSunburstIcon({ 
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

  const gradientId = 'datasunbursticon_gradient';
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