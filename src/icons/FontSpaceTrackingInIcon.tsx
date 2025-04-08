
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.5 17a1 1 0 0 0 .921-.61l5.5-13a1 1 0 0 0-1.842-.78L18.5 13.435 13.921 2.61a1 1 0 1 0-1.842.779l5.5 13a1 1 0 0 0 .921.61M10.421 2.61a1 1 0 0 0-1.842 0l-5.5 13a1 1 0 1 0 1.842.78l1.433-3.387h6.292l1.433 3.387a1 1 0 1 0 1.842-.78zm1.38 8.393H7.2l2.3-5.436zm-2.16 8.229a1 1 0 0 0-1.28 1.537l.877.731H4a1 1 0 1 0 0 2h5.238l-.878.732a1 1 0 0 0 1.28 1.537l3-2.5a1 1 0 0 0 0-1.537zm10.127 6.408a1 1 0 0 1-1.408.128l-3-2.5a1 1 0 0 1 0-1.536l3-2.5a1 1 0 0 1 1.28 1.537l-.878.731h5.212a1 1 0 1 1 0 2h-5.212l.878.732a1 1 0 0 1 .128 1.408"/>`,
  'regular': `<path d="M18.5 17c.3 0 .572-.18.69-.456l5.75-13.5a.75.75 0 1 0-1.38-.588l-5.06 11.88-5.06-11.88a.75.75 0 1 0-1.38.588l5.75 13.5a.75.75 0 0 0 .69.456M10.186 2.456a.75.75 0 0 0-1.38 0L4.98 11.441l-.013.031-1.91 4.484a.75.75 0 0 0 1.38.588L6.16 12.5h6.675l1.722 4.044a.75.75 0 1 0 1.38-.588l-1.878-4.41a.8.8 0 0 0-.074-.174zM12.195 11H6.798l2.698-6.336zm-2.164 8.22a.75.75 0 0 0-1.061 1.06l1.468 1.47H3.75a.75.75 0 1 0 0 1.5h6.688L8.97 24.72a.75.75 0 1 0 1.06 1.06l2.748-2.75a.75.75 0 0 0 0-1.06zm9 6.56a.75.75 0 0 1-1.06 0l-2.748-2.75a.75.75 0 0 1 0-1.06l2.748-2.75a.75.75 0 1 1 1.061 1.06l-1.468 1.47h6.688a.75.75 0 1 1 0 1.5h-6.688l1.468 1.47a.75.75 0 0 1 0 1.06"/>`
} as const;

export default function FontSpaceTrackingInIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'fontspacetrackinginicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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