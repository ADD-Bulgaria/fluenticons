
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.546 11.02c-1.06-.537-2.23-.623-3.302-.418l-2.244.43a5.74 5.74 0 0 0-4.033 3.032c-2.734 5.383-4.788 9.773-5.59 13.51-.822 3.836-.349 7.102 2.045 10.082 1.6 1.991 4.403 1.595 5.86-.066a478 478 0 0 0 3.394-3.92A4.77 4.77 0 0 1 19.297 32h9.413c1.39 0 2.713.61 3.622 1.67a478 478 0 0 0 3.393 3.92c1.457 1.66 4.261 2.057 5.86.066 2.394-2.98 2.867-6.246 2.045-10.081-.802-3.738-2.856-8.128-5.59-13.51a5.74 5.74 0 0 0-4.033-3.032l-2.243-.43c-1.072-.206-2.243-.12-3.303.417q-.308.156-.626.327c-.784.42-1.626.653-2.462.653h-2.738c-.837 0-1.679-.232-2.462-.653a30 30 0 0 0-.627-.327M24 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>`,
  'regular': `<path d="M19.544 11.02c-1.06-.537-2.23-.623-3.302-.418l-2.244.43a5.74 5.74 0 0 0-4.032 3.032c-2.734 5.383-4.789 9.773-5.59 13.51-.822 3.836-.35 7.102 2.044 10.082 1.6 1.991 4.403 1.595 5.86-.066a478 478 0 0 0 3.394-3.92A4.77 4.77 0 0 1 19.296 32h9.412a4.77 4.77 0 0 1 3.622 1.67 478 478 0 0 0 3.394 3.92c1.457 1.66 4.26 2.057 5.86.066 2.394-2.98 2.866-6.246 2.044-10.081-.801-3.738-2.856-8.128-5.59-13.51a5.74 5.74 0 0 0-4.032-3.032l-2.244-.43c-1.072-.206-2.243-.12-3.302.417q-.31.156-.627.327c-.784.42-1.626.653-2.462.653h-2.738c-.836 0-1.678-.232-2.462-.653q-.318-.171-.627-.327m-2.831 2.038c.626-.12 1.219-.053 1.702.192q.279.141.573.3c1.1.59 2.344.95 3.645.95h2.738c1.3 0 2.546-.36 3.645-.95q.294-.159.573-.3c.483-.245 1.076-.312 1.702-.192l2.244.43c.981.188 1.824.82 2.274 1.708 2.756 5.426 4.652 9.533 5.375 12.903.702 3.273.272 5.724-1.55 7.992-.416.518-1.365.61-2.031-.15a474 474 0 0 1-3.375-3.899 7.27 7.27 0 0 0-5.52-2.542h-9.412c-2.125 0-4.14.933-5.52 2.542a473 473 0 0 1-3.375 3.899c-.666.76-1.615.668-2.032.15-1.821-2.268-2.25-4.719-1.549-7.992.723-3.37 2.619-7.477 5.374-12.903a3.24 3.24 0 0 1 2.275-1.708zM23.998 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`
} as const;

export default function XboxControllerIcon({ 
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

  const gradientId = 'xboxcontrollericon_gradient';
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