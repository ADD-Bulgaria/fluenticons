
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.004 4a1 1 0 0 1 2 0v.512A9 9 0 0 1 9.88 3.25c.588-.142 1.117.334 1.117.94 0 .505-.375.926-.862 1.06A7 7 0 0 0 8.39 6h.614a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1zm9.11-.75c-.588-.142-1.116.334-1.116.94 0 .505.375.926.862 1.06a7 7 0 0 1 1.593.66c.44.25 1.002.218 1.36-.14.427-.428.39-1.138-.127-1.454a9 9 0 0 0-2.571-1.066M4.188 13c.506 0 .927.374 1.06.862.156.563.38 1.098.662 1.594.25.44.217 1.002-.14 1.36-.429.427-1.14.39-1.455-.127a9 9 0 0 1-1.066-2.573c-.142-.588.334-1.117.94-1.117m5.949 5.75c.487.135.862.556.862 1.061 0 .606-.529 1.081-1.117.94a9 9 0 0 1-2.573-1.067c-.516-.316-.554-1.026-.126-1.454.358-.358.92-.39 1.36-.14a7 7 0 0 0 1.594.66m5.319-.66c.44-.25 1.002-.218 1.359.14.428.428.39 1.138-.126 1.454a9 9 0 0 1-2.573 1.067c-.589.141-1.117-.334-1.117-.94 0-.505.375-.926.862-1.06a7 7 0 0 0 1.595-.662m3.293-4.228c.134-.488.555-.863 1.06-.863.606 0 1.082.529.94 1.117a9 9 0 0 1-1.066 2.573c-.316.516-1.026.554-1.454.126-.358-.358-.39-.92-.14-1.36a7 7 0 0 0 .66-1.593m-.662-5.318c-.25-.439-.217-1.001.14-1.359.429-.428 1.139-.39 1.455.126.48.786.844 1.651 1.066 2.571.142.589-.334 1.117-.94 1.117-.505 0-.926-.374-1.06-.861a7 7 0 0 0-.66-1.594"/>`,
  'regular': `<path d="M13.838 3.187c-.443-.091-.837.263-.837.715 0 .38.283.697.654.78a7.5 7.5 0 0 1 2.35.975c.321.203.745.179 1.014-.09.32-.32.292-.849-.086-1.097a9 9 0 0 0-3.095-1.283M11 3.902c0 .38-.282.697-.653.78A7.5 7.5 0 0 0 6.902 6.5H8.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 1 1 1.5 0v1.042a9 9 0 0 1 4.165-2.105c.442-.091.836.263.836.715m-7.098 9.097c.38 0 .697.282.78.653a7.5 7.5 0 0 0 .975 2.352c.203.321.179.745-.09 1.014-.32.32-.849.291-1.097-.087a9 9 0 0 1-1.283-3.096c-.091-.443.263-.837.715-.837m6.445 6.318c.37.084.653.4.653.781 0 .452-.394.806-.836.715a9 9 0 0 1-3.097-1.284c-.377-.248-.405-.777-.086-1.097.269-.268.693-.293 1.014-.09a7.5 7.5 0 0 0 2.352.975m5.659-.975c.321-.203.745-.179 1.014.09.32.32.291.849-.086 1.097a9 9 0 0 1-3.097 1.284c-.443.091-.837-.263-.837-.715 0-.38.283-.697.654-.781a7.5 7.5 0 0 0 2.352-.975m3.312-4.69c.083-.37.4-.653.78-.653.453 0 .807.393.715.836a9 9 0 0 1-1.282 3.096c-.248.378-.778.406-1.097.086-.269-.268-.294-.692-.09-1.014.45-.711.783-1.504.974-2.35m-.976-5.657c-.203-.321-.178-.745.09-1.014.32-.32.85-.292 1.097.086a9 9 0 0 1 1.283 3.095c.092.443-.262.836-.714.836-.38 0-.698-.282-.781-.653a7.5 7.5 0 0 0-.975-2.35"/>`
} as const;

export default function ArrowCounterclockwiseDashesIcon({ 
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

  const gradientId = 'arrowcounterclockwisedashesicon_gradient';
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