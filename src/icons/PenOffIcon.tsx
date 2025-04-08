
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m28 29.768 13.866 13.866a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L18.233 20 8.038 30.197a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.521l9.487-2.424a6 6 0 0 0 2.76-1.573zm9.971-9.971-6.435 6.436-9.768-9.768 10.438-10.44a6.907 6.907 0 1 1 9.768 9.768l-2.234 2.235.935.998a4.25 4.25 0 0 1-.095 5.912l-3.446 3.446a1.25 1.25 0 0 1-1.768-1.768l3.446-3.446a1.75 1.75 0 0 0 .04-2.434z"/>`,
  'regular': `<path d="m28 29.768 13.866 13.866a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L18.233 20 8.038 30.197a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.521l9.487-2.425a6 6 0 0 0 2.76-1.572zm-1.767-1.767L16.038 38.196a3.5 3.5 0 0 1-1.611.918l-7.443 1.903 1.904-7.442c.156-.61.473-1.166.917-1.61l10.196-10.197zm13.974-13.976-10.44 10.44 1.769 1.768 6.435-6.436.88.939a1.75 1.75 0 0 1-.039 2.434l-3.446 3.446a1.25 1.25 0 0 0 1.768 1.768l3.446-3.446a4.25 4.25 0 0 0 .095-5.912l-.935-.998 2.234-2.235a6.907 6.907 0 0 0-9.768-9.767l-10.438 10.44 1.768 1.767 10.438-10.44a4.407 4.407 0 0 1 6.233 6.232"/>`
} as const;

export default function PenOffIcon({ 
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

  const gradientId = 'penofficon_gradient';
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