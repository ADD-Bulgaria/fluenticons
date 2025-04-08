
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.199 3.808c-.434-.173-1.049.07-1.288.598a1 1 0 0 1-1.822-.825c.611-1.35 2.275-2.26 3.85-1.63 1.685.671 2.447 2.784 1.453 4.37-.316.506-.742.929-1.145 1.284-.232.204-.51.43-.764.638l-.426.35a9 9 0 0 0-.45.407h2.643a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1c0-1.372 1.035-2.316 1.767-2.934.189-.16.357-.297.518-.427.217-.176.42-.34.639-.533.351-.31.609-.584.773-.846.306-.488.072-1.224-.498-1.452M4 3a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V7.5h3v2.495a1 1 0 1 0 2 0V3.002a1 1 0 1 0-2 0V5.5H4zM3 19a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1-4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M14.198 3.583c-.65-.254-1.462.11-1.767.768a.75.75 0 1 1-1.361-.63c.595-1.285 2.194-2.112 3.673-1.536 1.605.626 2.352 2.617 1.391 4.116-.312.487-.739.903-1.157 1.264-.243.21-.524.433-.788.643-.167.133-.327.26-.467.376-.396.326-.71.62-.926.91l-.005.006h3.46a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75c0-.65.254-1.197.59-1.65.33-.443.762-.831 1.177-1.173.19-.157.365-.297.536-.432.235-.187.46-.365.694-.566.38-.328.678-.632.874-.938.415-.648.108-1.604-.674-1.908M3.5 2.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0V7h4v3.244a.75.75 0 0 0 1.5 0V2.752a.75.75 0 1 0-1.5 0V5.5h-4zm-1.5 17a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75M2.75 14a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function TextHeader2LinesIcon({ 
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

  const gradientId = 'textheader2linesicon_gradient';
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