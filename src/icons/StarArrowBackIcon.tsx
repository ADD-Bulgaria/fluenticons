
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-.905.882a6.5 6.5 0 0 0-9.441 7.43l-3.96 2.082c-.99.52-2.147-.32-1.958-1.424l.9-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.302L8.43 7.88zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.646-2.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L15.707 17h2.043A2.25 2.25 0 0 1 20 19.25v.25a.5.5 0 0 0 1 0v-.25A3.25 3.25 0 0 0 17.75 16h-2.043z"/>`,
  'regular': `<path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-.905.882a6.5 6.5 0 0 0-1.517-.616l1.157-1.128-5.05-.734a1.35 1.35 0 0 1-1.016-.738l-2.259-4.576L9.74 8.615a1.35 1.35 0 0 1-1.016.738l-5.05.734 3.654 3.562c.318.31.463.757.388 1.195l-.862 5.03 4.149-2.182a6.5 6.5 0 0 0 .238 1.57l-3.958 2.08c-.99.521-2.148-.32-1.96-1.423l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.302L8.43 7.88zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.646-2.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L15.707 17h2.043A2.25 2.25 0 0 1 20 19.25v.25a.5.5 0 0 0 1 0v-.25A3.25 3.25 0 0 0 17.75 16h-2.043z"/>`
} as const;

export default function StarArrowBackIcon({ 
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

  const gradientId = 'stararrowbackicon_gradient';
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