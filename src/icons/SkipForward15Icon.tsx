import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 3.25a1 1 0 1 0-2 0v2.729c-1.068-1.08-2.378-1.971-3.954-2.46a11.44 11.44 0 0 0-7.394.197c-2.364.88-4.604 2.664-5.779 4.807a1 1 0 0 0 1.754.961c.911-1.662 2.74-3.156 4.722-3.893a9.44 9.44 0 0 1 6.106-.16c1.474.456 2.698 1.39 3.682 2.569H15.75a1 1 0 1 0 0 2H21a1 1 0 0 0 1-1zM9.75 12a1 1 0 0 0-1.762-.647l-.222.265c-.515.623-1.078 1.303-2.28 2.024a1 1 0 0 0 1.029 1.715c.483-.29.889-.58 1.235-.864V20a1 1 0 0 0 2 0zM17 13a1 1 0 1 0 0-2h-3.1a1 1 0 0 0-.99.868l-.4 3A1 1 0 0 0 13.5 16h2q.103 0 .21.015a1.5 1.5 0 1 1-1.559 2.14 1 1 0 0 0-1.798.875A3.5 3.5 0 1 0 15.5 14h-.857l.133-1z"/>`,
  'regular': `<path d="M22 3.25a.75.75 0 0 0-1.5 0v3.4c-1.154-1.388-2.65-2.563-4.528-3.145a11.2 11.2 0 0 0-7.233.192c-2.316.862-4.504 2.61-5.646 4.693a.75.75 0 1 0 1.315.72c.944-1.722 2.825-3.252 4.854-4.007a9.7 9.7 0 0 1 6.266-.165C17.23 5.465 18.6 6.602 19.658 8H15.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75zM8.953 11.028a.75.75 0 0 1 .547.722v8.5a.75.75 0 0 1-1.5 0v-6.417c-.382.369-.84.746-1.364 1.06a.75.75 0 1 1-.772-1.286c.676-.405 1.24-.965 1.642-1.44a8 8 0 0 0 .598-.798l.005-.009.001-.001a.75.75 0 0 1 .843-.331M17.2 12.5a.75.75 0 0 0 0-1.5h-3.548a.75.75 0 0 0-.743.65l-.4 3a.75.75 0 0 0 .743.85h2.169q.15-.002.307.02a2 2 0 1 1-2.06 2.89.75.75 0 1 0-1.334.684A3.5 3.5 0 1 0 15.407 14h-1.298l.2-1.5z"/>`
} as const;

export default function SkipForward15Icon({ 
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

  const gradientId = 'skipforward15icon_gradient';
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