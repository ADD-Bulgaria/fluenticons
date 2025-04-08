
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.72 5c-2.165 0-3.708.656-4.817 1.76-1.081 1.078-1.677 2.514-2.106 3.932l-.698 2.31H2.752a.75.75 0 0 0-.75.75c0 1.343.763 2.483 1.872 3.1l-.588 1.432A1.968 1.968 0 0 0 5.103 21h2.194c.762 0 1.455-.441 1.779-1.13l.706-1.504c1.97.273 3.969.276 5.94.01l.701 1.493A1.97 1.97 0 0 0 18.202 21h2.172a1.965 1.965 0 0 0 1.817-2.716L21.663 17H24c1.012 0 2-.783 2-1.886V14c0-1.705-1.48-2.997-3.182-2.997h-2.95l-.093-.31c-.433-1.432-1.064-2.866-2.179-3.94C16.457 5.654 14.886 5 12.72 5m8.51 10.5-.907-2.998h2.495c.985 0 1.682.728 1.682 1.497v1.114c0 .136-.17.386-.5.386zm-3.975 2.613a22 22 0 0 0 2.907-.819l.642 1.56a.468.468 0 0 1-.43.646h-2.172a.47.47 0 0 1-.421-.268zM5.53 17.336q1.343.471 2.72.762l-.532 1.134a.47.47 0 0 1-.42.268H5.102a.468.468 0 0 1-.43-.645l.633-1.54q.111.014.224.021m-.884-2.835-.271.897a2.14 2.14 0 0 1-.72-.897z"/>`,
  'regular': `<path d="M12.72 5c-2.165 0-3.708.656-4.817 1.76-1.081 1.078-1.677 2.514-2.106 3.932l-.698 2.31H2.752a.75.75 0 0 0-.75.75c0 1.343.763 2.483 1.872 3.1l-.588 1.432A1.968 1.968 0 0 0 5.103 21h2.194c.762 0 1.455-.441 1.779-1.13l.706-1.504c1.97.273 3.969.276 5.94.01l.701 1.493A1.97 1.97 0 0 0 18.202 21h2.172a1.965 1.965 0 0 0 1.817-2.716L21.663 17H24c1.012 0 2-.783 2-1.886V14c0-1.705-1.48-2.997-3.182-2.997h-2.95l-.093-.31c-.433-1.432-1.064-2.866-2.179-3.94C16.457 5.654 14.886 5 12.72 5m8.51 10.5-.907-2.998h2.495c.985 0 1.682.728 1.682 1.497v1.114c0 .136-.17.386-.5.386zm-1.068 1.794.642 1.56a.468.468 0 0 1-.43.646h-2.172a.47.47 0 0 1-.421-.268l-.526-1.12a22 22 0 0 0 2.907-.818m-11.911.804-.533 1.134a.47.47 0 0 1-.42.268H5.102a.468.468 0 0 1-.43-.645l.633-1.54q.111.014.225.021 1.341.471 2.72.762m-3.605-3.597-.271.897a2.14 2.14 0 0 1-.72-.897zm2.587-3.375c.408-1.349.916-2.493 1.729-3.303C9.747 7.04 10.888 6.5 12.72 6.5c1.836 0 3.015.542 3.835 1.332.844.813 1.38 1.958 1.784 3.294l1.427 4.716a20.4 20.4 0 0 1-13.958 0z"/>`
} as const;

export default function AnimalTurtleIcon({ 
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

  const gradientId = 'animalturtleicon_gradient';
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