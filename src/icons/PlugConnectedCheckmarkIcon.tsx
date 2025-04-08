
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.446 2.445a4.04 4.04 0 0 0-5.128.481l-.3.3a1.49 1.49 0 0 0 0 2.108l2.465 2.464a5.51 5.51 0 0 1 4.552-.848 4.04 4.04 0 0 0-.528-3.444zM7.554 8.846l2.464 2.465a5.51 5.51 0 0 0-.848 4.552 4.04 4.04 0 0 1-3.444-.528L3.28 17.78a.75.75 0 0 1-1.06-1.06l2.446-2.446a4.04 4.04 0 0 1 .48-5.128l.3-.3a1.49 1.49 0 0 1 2.108 0M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="M17.854 2.854a.5.5 0 0 0-.708-.708l-2.668 2.669a4.036 4.036 0 0 0-5.332.331l-.3.3a1.49 1.49 0 0 0 0 2.108l2.465 2.464q.421-.3.895-.518L9.553 6.846a.49.49 0 0 1 0-.692l.3-.3a3.036 3.036 0 0 1 5.01 3.158q.514.034 1 .158a4.04 4.04 0 0 0-.678-3.648zm-10.3 5.992 2.464 2.465q-.3.421-.518.895L6.847 9.554a.49.49 0 0 0-.693 0l-.3.3a3.035 3.035 0 0 0 3.158 5.009q.034.515.158 1a4.04 4.04 0 0 1-3.648-.678l-2.668 2.669a.5.5 0 0 1-.708-.708l2.669-2.668a4.036 4.036 0 0 1 .332-5.332l.3-.3a1.49 1.49 0 0 1 2.107 0M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`
} as const;

export default function PlugConnectedCheckmarkIcon({ 
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

  const gradientId = 'plugconnectedcheckmarkicon_gradient';
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