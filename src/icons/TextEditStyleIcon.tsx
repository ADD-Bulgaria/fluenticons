
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 3a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-2v4.467l-2 2V4a1 1 0 0 1 1-1M4 15c-.46 0-.88-.32-.98-.79-.12-.54.23-1.07.77-1.19.24-.05 5.6-1.3 6.16-7.02H4c-.55 0-1-.45-1-1s.45-1 1-1h7c.55 0 1 .45 1 1 0 8.123-7.548 9.922-7.785 9.979l-.005.001C4.14 15 4.07 15 4 15m23.674-3.672a4.536 4.536 0 0 0-6.414 0l-9.42 9.42a4 4 0 0 0-1.017 1.73l-1.786 6.25a1 1 0 0 0 1.236 1.237l6.254-1.787a4 4 0 0 0 1.73-1.018l9.417-9.417a4.535 4.535 0 0 0 0-6.415"/>`,
  'light': `<path d="M10.427 2.625c-.337-.833-1.517-.833-1.854 0L3.037 16.312a.5.5 0 0 0 .927.375L5.859 12h7.282l1.736 4.293.768-.768zM12.737 11H6.263L9.5 3zm15.08.182a4.036 4.036 0 0 0-5.707 0L11.514 21.779c-.3.3-.52.672-.636 1.08l-1.859 6.504a.5.5 0 0 0 .619.618l6.5-1.858a2.5 2.5 0 0 0 1.081-.636L27.817 16.89a4.036 4.036 0 0 0 0-5.707m-5 .707a3.035 3.035 0 1 1 4.293 4.293L16.512 26.78c-.18.18-.404.312-.649.382l-5.635 1.61 1.611-5.638a1.5 1.5 0 0 1 .382-.648z"/>`,
  'regular': `<path d="M16 4a1 1 0 1 0-2 0v12.467l2-2V10h2a1 1 0 1 0 0-2h-2zm11.674 7.328a4.536 4.536 0 0 0-6.414 0l-9.42 9.42a4 4 0 0 0-1.017 1.73l-1.786 6.25a1 1 0 0 0 1.236 1.237l6.254-1.787a4 4 0 0 0 1.73-1.018l9.417-9.417a4.535 4.535 0 0 0 0-6.415m-5 1.415a2.536 2.536 0 0 1 3.586 3.585l-9.418 9.418c-.24.24-.538.416-.865.509l-4.523 1.292 1.292-4.52a2 2 0 0 1 .508-.865zM3.02 14.21c.1.47.52.79.98.79.07 0 .14 0 .21-.02l.005-.001C4.452 14.922 12 13.123 12 5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5.95c-.56 5.72-5.92 6.97-6.16 7.02-.54.12-.89.65-.77 1.19"/>`
} as const;

export default function TextEditStyleIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'texteditstyleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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