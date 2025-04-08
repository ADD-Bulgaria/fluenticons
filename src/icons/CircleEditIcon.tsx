
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.715 11c.427 0 .855.084 1.257.25A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12c0 5.184 3.945 9.447 8.997 9.95a2 2 0 0 1 .064-.543l.458-1.83c.162-.648.497-1.24.97-1.712l5.902-5.903A3.28 3.28 0 0 1 20.713 11z"/><path d="M20.715 12h-.002c-.585 0-1.17.223-1.615.67l-5.902 5.902a2.7 2.7 0 0 0-.707 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.285 2.285 0 0 0 20.715 12"/>`,
  'regular': `<path d="M12 3.5a8.5 8.5 0 0 0-.705 16.971l-.234.936a2 2 0 0 0-.064.543C5.945 21.447 2 17.184 2 12 2 6.477 6.477 2 12 2c5.27 0 9.589 4.077 9.972 9.25a3.3 3.3 0 0 0-1.257-.25h-.002q-.135 0-.27.011A8.5 8.5 0 0 0 12 3.5"/><path d="M20.715 12h-.002c-.585 0-1.17.223-1.615.67l-5.902 5.902a2.7 2.7 0 0 0-.707 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.285 2.285 0 0 0 20.715 12"/>`
} as const;

export default function CircleEditIcon({ 
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

  const gradientId = 'circleediticon_gradient';
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