
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M28.227 1.989c-1.648-.49-2.956.716-3.383 1.88-.245.667-.468 1.285-.678 1.865-.834 2.306-1.449 4.005-2.289 5.715-2.65 5.399-6.033 9.624-12.357 12.526-2.414 1.108-3.964 3.798-3.205 6.525l1.234 4.432a7.25 7.25 0 0 0 5.295 5.107l14.07 3.37a9.25 9.25 0 0 0 11.079-6.56l3.334-12.217c.911-3.34-1.603-6.632-5.065-6.632h-5.04c.714-2.44 1.262-5.43 1.24-8.15-.014-1.689-.248-3.368-.871-4.764-.639-1.43-1.713-2.608-3.364-3.097"/>`,
  'regular': `<path d="M24.844 3.87c.427-1.165 1.735-2.37 3.383-1.881 1.651.489 2.726 1.668 3.364 3.097.624 1.396.857 3.075.87 4.764.023 2.72-.525 5.71-1.24 8.15h5.04c3.463 0 5.977 3.292 5.066 6.632L37.993 36.85a9.25 9.25 0 0 1-11.079 6.56l-14.07-3.37a7.25 7.25 0 0 1-5.295-5.107L6.315 30.5c-.759-2.727.79-5.417 3.205-6.525 6.324-2.902 9.707-7.127 12.357-12.526.84-1.71 1.455-3.409 2.289-5.715.21-.58.433-1.198.678-1.864m2.583.544a.65.65 0 0 0-.236.317c-.231.63-.447 1.225-.652 1.793-.84 2.325-1.512 4.182-2.417 6.027-2.831 5.766-6.578 10.493-13.56 13.696-1.46.67-2.222 2.203-1.838 3.582l1.233 4.433a4.75 4.75 0 0 0 3.47 3.346l14.07 3.37a6.75 6.75 0 0 0 8.084-4.787l3.334-12.217a2.75 2.75 0 0 0-2.653-3.474H29.5a1.25 1.25 0 0 1-1.175-1.677c.884-2.432 1.662-5.935 1.637-8.953-.012-1.511-.226-2.806-.654-3.765-.414-.926-.996-1.484-1.791-1.72-.013-.003-.017-.003-.022-.002a.2.2 0 0 0-.068.03"/>`
} as const;

export default function ThumbLikeIcon({ 
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

  const gradientId = 'thumblikeicon_gradient';
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