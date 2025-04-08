
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-7 9.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m2.478 3.731-1.77 1.77 1.77 1.769a.5.5 0 1 1-.707.707l-1.77-1.77-1.769 1.768a.5.5 0 1 1-.707-.708L5.794 17.5l-1.769-1.77a.5.5 0 1 1 .707-.707l1.77 1.769 1.77-1.769a.5.5 0 0 1 .706.707"/>`,
  'regular': `<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m5.629-10a2.25 2.25 0 0 1 1.59.659l2.812 2.81 2.808 2.812c.421.422.658.994.658 1.59v9.879a2.25 2.25 0 0 1-2.25 2.25H11.19a6.5 6.5 0 0 0 1.077-1.499l5.48-.001a.75.75 0 0 0 .75-.75l-.001-9.747H14.25a2.25 2.25 0 0 1-2.245-2.095L12 7.754 11.999 3.5H6.25a.75.75 0 0 0-.75.75v6.827a6.5 6.5 0 0 0-1.5.422V4.25A2.25 2.25 0 0 1 6.25 2zM4.093 14.966l-.07.058-.057.07a.5.5 0 0 0 0 .568l.058.07 1.77 1.769-1.768 1.766-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057L6.5 18.208l1.77 1.769.069.058a.5.5 0 0 0 .568 0l.07-.058.057-.07a.5.5 0 0 0 0-.568l-.058-.07-1.769-1.768 1.772-1.77.058-.069a.5.5 0 0 0 0-.569l-.058-.069-.069-.058a.5.5 0 0 0-.569 0l-.069.058-1.772 1.77-1.77-1.77-.068-.058a.5.5 0 0 0-.569 0M13.5 4.56l.001 3.195c0 .38.282.693.648.743l.102.007 3.191-.001z"/>`
} as const;

export default function DocumentDismissIcon({ 
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

  const gradientId = 'documentdismissicon_gradient';
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