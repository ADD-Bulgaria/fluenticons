
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v7.035A3.5 3.5 0 0 1 7 14.5v.025l2.013-2.012a1.75 1.75 0 1 1 2.474 2.474L9.475 17H9.5a3.5 3.5 0 0 1 3.163 5H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-6.873 8.398A2.5 2.5 0 0 1 3.5 17a2.5 2.5 0 1 1 1.627-.602M4 13.635a1 1 0 1 0-1 1.732 1 1 0 0 0 1-1.732m6.78.646a.75.75 0 1 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06zM7 20.5A2.496 2.496 0 0 0 9.5 23a2.496 2.496 0 0 0 2.5-2.5 2.5 2.5 0 0 0-5 0m3.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3-12.5V2.5l6 6H14a.5.5 0 0 1-.5-.5"/>`,
  'regular': `<path d="M18.5 20a.5.5 0 0 1-.5.5h-5c0 .537-.12 1.045-.337 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828-.049-.04-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6a2 2 0 0 0-2 2v7.035a3.5 3.5 0 0 1 1.5.592V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM6 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m7.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m.28-7.28a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06l7.5-7.5a.75.75 0 0 1 1.06 0"/>`
} as const;

export default function DocumentPercentIcon({ 
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

  const gradientId = 'documentpercenticon_gradient';
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