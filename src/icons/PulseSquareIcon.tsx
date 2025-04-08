
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.749 3a2.25 2.25 0 0 1 2.25 2.25v13.502a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.752V5.25A2.25 2.25 0 0 1 5.25 3zM9.812 7.95 8.255 11.5H6.75a.75.75 0 0 0 0 1.5h1.995a.75.75 0 0 0 .687-.448l1.035-2.362 2.337 5.834a.75.75 0 0 0 1.367.057l1.542-3.08h1.537a.75.75 0 1 0 0-1.5h-2a.75.75 0 0 0-.67.414l-1.004 2.003-2.381-5.946a.75.75 0 0 0-1.383-.023"/>`,
  'regular': `<path d="M18.749 3a2.25 2.25 0 0 1 2.25 2.25v13.502a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.752V5.25A2.25 2.25 0 0 1 5.25 3zm0 1.5H5.25a.75.75 0 0 0-.75.75v13.502c0 .415.336.75.75.75h13.499a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75m-10.494 7 1.557-3.55a.75.75 0 0 1 1.333-.081l.05.103 2.381 5.946 1.003-2.003a.75.75 0 0 1 .566-.407l.105-.008h2a.75.75 0 0 1 .102 1.494L17.25 13h-1.537l-1.542 3.081a.75.75 0 0 1-1.319.044l-.048-.1-2.337-5.835-1.035 2.362a.75.75 0 0 1-.577.44l-.11.008H6.75a.75.75 0 0 1-.102-1.493l.102-.007zl1.557-3.55z"/>`
} as const;

export default function PulseSquareIcon({ 
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

  const gradientId = 'pulsesquareicon_gradient';
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