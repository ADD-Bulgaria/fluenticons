
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M43.969 9.851c.383-3.36-2.464-6.2-5.823-5.81L14.76 6.763c-3.528.41-5.026 4.712-2.515 7.226l2.749 2.751-9.452 9.452a5.25 5.25 0 0 0-.004 7.421l8.833 8.85a5.25 5.25 0 0 0 7.428.003l9.464-9.46 2.843 2.787c2.526 2.478 6.797.962 7.198-2.553z"/>`,
  'regular': `<path d="M38.146 4.042c3.359-.39 6.206 2.45 5.823 5.81l-2.665 23.387c-.4 3.516-4.672 5.03-7.198 2.553l-2.843-2.787-9.465 9.46a5.25 5.25 0 0 1-7.427-.004l-8.833-8.849a5.25 5.25 0 0 1 .004-7.42l9.452-9.453-2.75-2.751c-2.51-2.514-1.012-6.815 2.516-7.226zm3.339 5.526a2.75 2.75 0 0 0-3.05-3.043l-23.386 2.72c-1.453.17-2.07 1.94-1.036 2.976l3.632 3.635a1.25 1.25 0 0 1 0 1.768L7.309 27.959a2.75 2.75 0 0 0-.001 3.887l8.833 8.849a2.75 2.75 0 0 0 3.89.002l10.34-10.335a1.25 1.25 0 0 1 1.759-.009l3.726 3.654c1.04 1.02 2.799.396 2.964-1.051z"/>`
} as const;

export default function ArrowOutlineUpRightIcon({ 
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

  const gradientId = 'arrowoutlineuprighticon_gradient';
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