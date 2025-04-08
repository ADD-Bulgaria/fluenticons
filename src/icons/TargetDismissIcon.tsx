
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 12a8 8 0 0 0 7.492 7.984 6.5 6.5 0 0 0 1.289 1.986Q12.394 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .395-.03.78a6.5 6.5 0 0 0-1.986-1.288A8 8 0 0 0 4 12m7.194 3.919a4.001 4.001 0 1 1 4.725-4.725 6.5 6.5 0 0 1 2-.18A6.002 6.002 0 0 0 6 12a6 6 0 0 0 5.013 5.92 6.6 6.6 0 0 1 .18-2.001M12 14h.022A6.5 6.5 0 0 1 14 12.022V12a2 2 0 1 0-2 2m5.5-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-2.407 2.966-.07.058-.057.07a.5.5 0 0 0 0 .568l.058.07 1.77 1.769-1.768 1.766-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057 1.766-1.767 1.77 1.769.069.058a.5.5 0 0 0 .568 0l.07-.058.057-.07a.5.5 0 0 0 0-.568l-.057-.07-1.77-1.768 1.772-1.77.058-.069a.5.5 0 0 0 0-.569l-.058-.069-.069-.058a.5.5 0 0 0-.569 0l-.069.058-1.772 1.77-1.77-1.77-.068-.058a.5.5 0 0 0-.493-.043z"/>`,
  'regular': `<path d="M3.496 12a8.5 8.5 0 0 0 8.235 8.498c.281.54.636 1.036 1.052 1.474q-.389.03-.785.03C6.474 22.002 1.996 17.524 1.996 12S6.474 1.998 11.998 1.998 22 6.476 22 12q0 .394-.03.781a6.5 6.5 0 0 0-1.474-1.05 8.502 8.502 0 0 0-17 .269m7.595 4.409a4.502 4.502 0 0 1 .907-8.91 4.5 4.5 0 0 1 4.409 3.593 6.6 6.6 0 0 1 1.51-.079A6.002 6.002 0 0 0 5.998 12c0 2.978 2.17 5.45 5.015 5.92a6.6 6.6 0 0 1 .078-1.512m.931-2.41h-.024a2 2 0 1 1 2-2v.024A6.5 6.5 0 0 0 12.022 14M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-7.976-2.476.069-.058.076-.043a.5.5 0 0 1 .493.043l.069.058 1.77 1.77 1.771-1.77.07-.058a.5.5 0 0 1 .568 0l.07.058.057.07a.5.5 0 0 1 0 .568l-.058.07-1.772 1.769 1.77 1.769.057.069a.5.5 0 0 1 0 .569l-.057.069-.07.058a.5.5 0 0 1-.568 0l-.07-.058-1.769-1.77-1.767 1.768-.069.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.057-.07 1.767-1.766-1.77-1.77-.057-.069a.5.5 0 0 1 0-.569z"/>`
} as const;

export default function TargetDismissIcon({ 
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

  const gradientId = 'targetdismissicon_gradient';
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