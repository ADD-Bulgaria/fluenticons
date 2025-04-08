
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.5 2.05A6.554 6.554 0 0 0 8.95 8.6c0 .387.05.76.11 1.104a.28.28 0 0 1-.07.244l-6.235 6.236a2.75 2.75 0 0 0-.806 1.944V20.3c0 .966.784 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75v-1.25H9.7c.69 0 1.25-.56 1.25-1.25v-1.75h.331q.155-.24.378-.417l-1.645-1.646a1.75 1.75 0 0 1 0-2.474l2-2A1.75 1.75 0 0 1 14.983 11H17a6 6 0 0 1 3.795 1.352A6.5 6.5 0 0 0 22.049 8.5c0-3.631-2.953-6.45-6.55-6.45m1.5 3.7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-3.22 5.53a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H17a3.5 3.5 0 1 1-3.5 3.5.75.75 0 0 0-1.5 0 5 5 0 1 0 5-5h-3.94z"/>`,
  'regular': `<path d="M17 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m-8.05.35a6.554 6.554 0 0 1 6.55-6.55c3.596 0 6.55 2.819 6.55 6.45a6.5 6.5 0 0 1-1.255 3.852 6 6 0 0 0-1.276-.798 5.03 5.03 0 0 0 1.03-3.054c0-2.769-2.247-4.95-5.05-4.95a5.054 5.054 0 0 0-5.05 5.05c0 .262.034.539.088.845a1.77 1.77 0 0 1-.486 1.564l-6.236 6.235a1.25 1.25 0 0 0-.366.884V20.3c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-1.5c0-.69.56-1.25 1.25-1.25h1.75V15.8c0-.65.497-1.185 1.132-1.245l1.077 1.078a1.8 1.8 0 0 0-.378.417h-.33v1.75c0 .69-.56 1.25-1.25 1.25H7.95v1.25a1.75 1.75 0 0 1-1.75 1.75H3.7a1.75 1.75 0 0 1-1.75-1.75v-2.172c0-.73.289-1.429.805-1.944L8.99 9.948a.28.28 0 0 0 .07-.244A6.4 6.4 0 0 1 8.95 8.6m4.83 2.68a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H17a3.5 3.5 0 1 1-3.5 3.5.75.75 0 0 0-1.5 0 5 5 0 1 0 5-5h-3.94z"/>`
} as const;

export default function KeyResetIcon({ 
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

  const gradientId = 'keyreseticon_gradient';
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