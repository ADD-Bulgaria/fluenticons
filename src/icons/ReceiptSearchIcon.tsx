
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-3.879l-1.56-1.56A4.5 4.5 0 0 0 10 13.5 4.5 4.5 0 0 0 8.329 10H11.5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.447.275A4.5 4.5 0 0 0 5.5 9c-.526 0-1.03.09-1.5.256zm11 11a2 2 0 0 0 2-2v-1h-2zM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-2 11c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 5.5 17m0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>`,
  'regular': `<path d="M6 3a2 2 0 0 0-2 2v4.256q.478-.17 1-.229V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v11h-3.879l1 1H15a3 3 0 0 0 3-3v-2h-3V5a2 2 0 0 0-2-2zm2.329 7H11.5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.447.275c.466.172.897.418 1.276.725M15 16v-3h2v1a2 2 0 0 1-2 2M7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-2 11c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 5.5 17m0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>`
} as const;

export default function ReceiptSearchIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'receiptsearchicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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