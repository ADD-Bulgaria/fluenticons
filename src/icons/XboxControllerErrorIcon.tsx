
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.546 8.02c-1.06-.537-2.23-.623-3.302-.417L14 8.033a5.74 5.74 0 0 0-4.033 3.031c-2.734 5.383-4.788 9.773-5.59 13.51-.822 3.836-.349 7.102 2.045 10.082 1.6 1.991 4.403 1.595 5.86-.066a478 478 0 0 0 3.394-3.92A4.77 4.77 0 0 1 19.297 29h2.856C23.115 22.77 28.5 18 35 18c2.702 0 5.212.825 7.291 2.236-1.042-2.713-2.508-5.74-4.251-9.172a5.74 5.74 0 0 0-4.033-3.031l-2.243-.43c-1.072-.206-2.243-.12-3.303.417q-.308.156-.626.327c-.784.42-1.626.653-2.462.653h-2.738c-.837 0-1.679-.232-2.462-.653a29 29 0 0 0-.627-.327M24 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m22 13c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0zm-1 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'regular': `<path d="M19.546 8.02c-1.06-.537-2.23-.623-3.302-.417L14 8.033a5.74 5.74 0 0 0-4.033 3.031c-2.734 5.383-4.788 9.773-5.59 13.51-.822 3.836-.349 7.102 2.045 10.082 1.6 1.991 4.403 1.595 5.86-.066a478 478 0 0 0 3.394-3.92A4.77 4.77 0 0 1 19.297 29h2.858c.133-.864.352-1.7.647-2.5h-3.505a7.27 7.27 0 0 0-5.52 2.542 474 474 0 0 1-3.374 3.899c-.666.76-1.615.668-2.032.15-1.822-2.268-2.251-4.719-1.55-7.992.723-3.37 2.62-7.477 5.375-12.903a3.24 3.24 0 0 1 2.275-1.708l2.243-.43c.627-.12 1.22-.053 1.703.192q.278.141.573.3c1.099.59 2.344.95 3.645.95h2.738c1.3 0 2.545-.36 3.644-.95q.295-.159.573-.3c.484-.245 1.076-.312 1.703-.192l2.244.43c.981.188 1.823.82 2.274 1.708 1.203 2.368 2.242 4.485 3.09 6.4 1.217.381 2.356.937 3.39 1.638-1.042-2.712-2.509-5.74-4.251-9.17a5.74 5.74 0 0 0-4.033-3.031l-2.243-.43c-1.072-.206-2.243-.12-3.303.417q-.308.156-.626.327c-.784.42-1.626.653-2.462.653h-2.738c-.837 0-1.679-.232-2.462-.653a29 29 0 0 0-.627-.327M24 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m22 13c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0zm-1 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`
} as const;

export default function XboxControllerErrorIcon({ 
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

  const gradientId = 'xboxcontrollererroricon_gradient';
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