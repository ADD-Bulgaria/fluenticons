
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.421 16.39a1 1 0 0 1-1.842 0l-5.5-13a1 1 0 0 1 1.842-.78l4.58 10.824L24.078 2.61a1 1 0 0 1 1.842.779zM8.501 2a1 1 0 0 1 .92.61l5.5 13a1 1 0 1 1-1.842.78l-1.433-3.387H5.354L3.921 16.39a1 1 0 0 1-1.842-.78l5.5-13A1 1 0 0 1 8.5 2m-2.3 9.003h4.6L8.5 5.567zm15.031 8.357a1 1 0 0 1 1.409-.128l3 2.5a1 1 0 0 1 0 1.537l-3 2.5a1 1 0 0 1-1.28-1.537l.877-.732H5.762l.878.732a1 1 0 0 1-1.28 1.537l-3-2.5a1 1 0 0 1 0-1.537l3-2.5a1 1 0 0 1 1.28 1.537l-.878.731h16.476l-.878-.732a1 1 0 0 1-.128-1.408"/>`,
  'regular': `<path d="M20.19 16.544a.75.75 0 0 1-1.38 0l-5.75-13.5a.75.75 0 1 1 1.38-.588l5.06 11.88 5.06-11.88a.75.75 0 1 1 1.38.588zM8.496 2c.3 0 .572.18.69.456l3.798 8.916a.8.8 0 0 1 .074.174l1.878 4.41a.75.75 0 0 1-1.38.588L11.834 12.5H5.159l-1.723 4.044a.75.75 0 1 1-1.38-.588l1.91-4.484.013-.031 3.827-8.985A.75.75 0 0 1 8.496 2m-2.698 9h5.397L8.496 4.664zm16.172 8.22a.75.75 0 0 1 1.06 0l2.748 2.75a.75.75 0 0 1 0 1.06l-2.747 2.75a.75.75 0 1 1-1.061-1.06l1.468-1.47H4.564l1.468 1.47a.75.75 0 0 1-1.061 1.06l-2.747-2.75a.75.75 0 0 1 0-1.06l2.747-2.75a.75.75 0 1 1 1.061 1.06l-1.468 1.47h18.874l-1.468-1.47a.75.75 0 0 1 0-1.06"/>`
} as const;

export default function FontSpaceTrackingOutIcon({ 
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

  const gradientId = 'fontspacetrackingouticon_gradient';
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