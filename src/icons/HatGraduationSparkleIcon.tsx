
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.171 6.829a3.16 3.16 0 0 1 .761 1.238l.498 1.53a.605.605 0 0 0 1.14 0l.498-1.53a3.15 3.15 0 0 1 1.998-1.996l1.53-.497a.605.605 0 0 0 0-1.14l-.03-.008-1.531-.497a3.15 3.15 0 0 1-1.998-1.996L20.54.403a.604.604 0 0 0-1.14 0l-.498 1.53-.013.038a3.15 3.15 0 0 1-1.955 1.958l-1.53.497a.605.605 0 0 0 0 1.14l1.53.497c.467.156.89.418 1.237.766m8.65 3.529.918.298.019.004a.362.362 0 0 1 0 .684l-.919.299a1.9 1.9 0 0 0-1.198 1.197l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.362.362 0 0 1 0-.684l.919-.299a1.9 1.9 0 0 0 1.18-1.197l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.197M11.768 3.496a4.25 4.25 0 0 1 4.036-.232l-.715.236a1.57 1.57 0 0 0-.79.59 1.58 1.58 0 0 0 0 1.85c.187.273.457.48.77.59l1.56.5c.312.11.595.287.83.52q.099.097.18.21a2 2 0 0 1 .34.64l.5 1.53a1.7 1.7 0 0 0 .59.8 1.64 1.64 0 0 0 1.86 0l.13-.11A1.3 1.3 0 0 0 21 11c.003.282.09.557.25.79a1.3 1.3 0 0 0 .66.49l.94.31a.85.85 0 0 1 .34.21l.013.012-6.876 4.497a4.25 4.25 0 0 1-4.652 0L3 11.637v6.113a.75.75 0 0 1-1.5 0V10.5q0-.065.01-.125a.75.75 0 0 1 .346-.763zM6 15.39l4.853 3.173a5.75 5.75 0 0 0 6.294 0L22 15.391v4.859c0 .299-.162.479-.353.666-.095.092-.231.22-.409.372a11.3 11.3 0 0 1-1.54 1.105C18.366 23.193 16.421 24 14 24c-2.42 0-4.366-.807-5.698-1.607a11.3 11.3 0 0 1-1.54-1.105 9 9 0 0 1-.41-.372c-.19-.187-.352-.367-.352-.666z"/>`,
  'regular': `<path d="M18.171 6.829a3.16 3.16 0 0 1 .761 1.238l.498 1.53a.605.605 0 0 0 1.14 0l.498-1.53a3.15 3.15 0 0 1 1.998-1.996l1.53-.497a.605.605 0 0 0 0-1.14l-.03-.008-1.531-.497a3.15 3.15 0 0 1-1.998-1.996L20.54.403a.604.604 0 0 0-1.14 0l-.498 1.53-.013.038a3.15 3.15 0 0 1-1.955 1.958l-1.53.497a.605.605 0 0 0 0 1.14l1.53.497c.467.156.89.418 1.237.766m8.65 3.529.918.298.019.004a.362.362 0 0 1 0 .684l-.919.299a1.9 1.9 0 0 0-1.198 1.197l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.362.362 0 0 1 0-.684l.919-.299a1.9 1.9 0 0 0 1.18-1.197l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.197M11.768 3.496a4.25 4.25 0 0 1 4.036-.232l-.715.236a1.57 1.57 0 0 0-.79.59q-.094.131-.16.276a2.75 2.75 0 0 0-1.583.406l-8.908 5.496 8.847 5.785a2.75 2.75 0 0 0 3.01 0l6.048-3.955a1.3 1.3 0 0 0 .356.181l.94.31a.85.85 0 0 1 .34.21l.013.013-1.202.786v6.652c0 .296-.162.48-.353.666-.095.092-.231.22-.409.372a11.3 11.3 0 0 1-1.54 1.105C18.366 23.193 16.421 24 14 24c-2.42 0-4.366-.807-5.698-1.607a11.3 11.3 0 0 1-1.54-1.105 9 9 0 0 1-.41-.372c-.19-.187-.352-.367-.352-.666v-6.652l-3-1.961v6.113a.75.75 0 0 1-1.5 0V10.5q0-.065.01-.125a.75.75 0 0 1 .346-.763zM7.5 14.579v5.358q.097.09.238.212c.302.26.752.608 1.335.958 1.168.7 2.848 1.393 4.927 1.393 2.08 0 3.76-.693 4.927-1.393a10 10 0 0 0 1.573-1.17v-5.358l-4.174 2.73a4.25 4.25 0 0 1-4.652 0z"/>`
} as const;

export default function HatGraduationSparkleIcon({ 
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

  const gradientId = 'hatgraduationsparkleicon_gradient';
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