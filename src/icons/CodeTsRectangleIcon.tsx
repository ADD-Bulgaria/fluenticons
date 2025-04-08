
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 3h-9.5C1.785 3 1 3.785 1 4.75v7.5c0 .965.785 1.75 1.75 1.75h9.5c.965 0 1.75-.785 1.75-1.75v-7.5C14 3.785 13.215 3 12.25 3M7.354 6.854A.5.5 0 0 1 7 7H6v3.5a.5.5 0 1 1-1 0V7H4a.5.5 0 0 1-.5-.5A.5.5 0 0 1 4 6h3a.5.5 0 0 1 .354.854m2.521.273a.43.43 0 0 0-.3-.125h-.146a.427.427 0 0 0-.362.649.4.4 0 0 0 .172.157l.976.489c.286.145.515.381.65.672A1.42 1.42 0 0 1 9.58 11h-.146c-.378 0-.741-.151-1.009-.418A1.43 1.43 0 0 1 8 9.573a.535.535 0 0 1 .5-.537.46.46 0 0 1 .349.127A.47.47 0 0 1 9 9.5a.45.45 0 0 0 .427.5h.146a.427.427 0 0 0 .362-.649.4.4 0 0 0-.172-.157l-.976-.492a1.424 1.424 0 0 1-.744-1.601A1.434 1.434 0 0 1 9.427 6h.146A1.43 1.43 0 0 1 11 7.427a.53.53 0 0 1-.5.537.46.46 0 0 1-.349-.127A.47.47 0 0 1 10 7.5v-.073a.43.43 0 0 0-.125-.3"/>`,
  'regular': `<path d="M10.865 8.969a1.425 1.425 0 0 1-.4 1.723A1.43 1.43 0 0 1 9.58 11h-.146c-.378 0-.741-.15-1.009-.418A1.43 1.43 0 0 1 8 9.573a.533.533 0 0 1 .5-.537.46.46 0 0 1 .349.127A.47.47 0 0 1 9 9.5a.45.45 0 0 0 .427.5h.146a.428.428 0 0 0 .362-.649.4.4 0 0 0-.172-.157l-.976-.492a1.424 1.424 0 0 1-.744-1.601A1.426 1.426 0 0 1 9.427 6h.146A1.43 1.43 0 0 1 11 7.427a.535.535 0 0 1-.5.537.465.465 0 0 1-.459-.281A.5.5 0 0 1 10 7.5v-.073a.43.43 0 0 0-.425-.425h-.146a.428.428 0 0 0-.362.649q.063.103.172.157l.976.489c.286.145.515.381.65.672M4 6a.5.5 0 1 0 0 1h1v3.5a.5.5 0 0 0 1 0V7h1a.5.5 0 1 0 0-1zM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3zM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"/>`
} as const;

export default function CodeTsRectangleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'codetsrectangleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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