
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 3a2 2 0 0 0-2 2v8c1.393 0 2.265-.402 2.862-.96.614-.572.987-1.354 1.292-2.208.105-.293.196-.58.288-.867l.132-.406c.136-.413.282-.826.463-1.189s.414-.708.738-.963A1.93 1.93 0 0 1 10 6c.482 0 .889.144 1.225.407.324.255.556.6.738.963s.328.776.463 1.189q.067.204.131.406c.092.288.184.574.289.867.305.854.678 1.636 1.292 2.209.597.557 1.47.959 2.862.959V5a2 2 0 0 0-2-2zm12 11c-1.607 0-2.735-.473-3.544-1.228-.793-.74-1.232-1.708-1.552-2.604-.11-.308-.21-.622-.305-.917l-.123-.38a8 8 0 0 0-.408-1.054c-.146-.293-.297-.495-.46-.623A.93.93 0 0 0 10 7a.93.93 0 0 0-.608.194c-.163.128-.314.33-.46.623a8 8 0 0 0-.408 1.054l-.123.38c-.094.295-.195.609-.305.917-.32.896-.76 1.864-1.552 2.604C5.735 13.527 4.607 14 3 14v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"/>`,
  'regular': `<path d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm11 9.92c-.835-.143-1.423-.47-1.862-.88-.614-.572-.987-1.354-1.292-2.208-.105-.293-.197-.58-.289-.867l-.13-.406a9 9 0 0 0-.464-1.189c-.182-.363-.414-.708-.738-.963A1.93 1.93 0 0 0 10 6c-.482 0-.889.144-1.225.407-.324.255-.556.6-.738.963a9 9 0 0 0-.463 1.189l-.132.406c-.092.287-.183.574-.288.867-.305.854-.678 1.636-1.292 2.209-.44.41-1.027.736-1.862.88V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zM4 13.932c1.092-.156 1.915-.573 2.544-1.16.793-.74 1.232-1.708 1.552-2.604.11-.308.21-.622.305-.917l.123-.38a8 8 0 0 1 .408-1.054c.146-.293.297-.495.46-.623A.93.93 0 0 1 10 7c.268 0 .455.075.607.194.164.128.315.33.461.623s.274.647.408 1.054l.123.38c.095.295.195.609.305.917.32.896.76 1.864 1.552 2.604.63.587 1.452 1.004 2.544 1.16V15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/>`
} as const;

export default function BezierCurveSquareIcon({ 
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

  const gradientId = 'beziercurvesquareicon_gradient';
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