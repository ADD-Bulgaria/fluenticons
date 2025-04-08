
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v2.102a3.5 3.5 0 0 0-6 2.45v.5c-.114-.56-.627-.984-1.217-1h-3.566A1.25 1.25 0 0 0 9 15.25v4.003a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 3 19.253V9.947c0-.663.292-1.292.8-1.72zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M13.45 2.532a2.25 2.25 0 0 0-2.9 0L3.8 8.224a2.25 2.25 0 0 0-.8 1.72v9.31c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75v-5.007a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.393a2.76 2.76 0 0 1 1.5-.627v-.71A3.5 3.5 0 0 1 15 14.5c0-.426.076-.833.215-1.21a1.75 1.75 0 0 0-1.465-.793h-3.5a1.75 1.75 0 0 0-1.75 1.75v5.007a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25v-9.31a.75.75 0 0 1 .267-.573l6.75-5.692a.75.75 0 0 1 .966 0l6.75 5.692a.75.75 0 0 1 .267.573v1.2c.576.172 1.09.488 1.5.906V9.945a2.25 2.25 0 0 0-.8-1.72zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function HomePersonIcon({ 
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

  const gradientId = 'homepersonicon_gradient';
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