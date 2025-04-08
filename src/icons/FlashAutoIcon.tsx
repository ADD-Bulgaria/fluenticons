
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.425 2.83A1.25 1.25 0 0 1 8.603 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.79 8h3.96c1.103 0 1.665 1.327.897 2.12l-.672.693c-.732-1.17-2.564-1.081-3.107.294l-1.941 4.916-5.341 5.513c-1.054 1.088-2.872.106-2.541-1.372l1.27-5.668-1.57-.006a1.75 1.75 0 0 1-1.641-2.337zm10.769 8.645 3.75 9.495a.75.75 0 0 1-1.352.643l-.044-.092-.998-2.525h-4.11l-.996 2.525a.75.75 0 0 1-.876.453l-.097-.03a.75.75 0 0 1-.453-.876l.03-.098 3.75-9.495a.73.73 0 0 1 .45-.434.77.77 0 0 1 .546.02c.14.058.264.162.349.309zm-2.162 6.021h2.926l-1.463-3.705z"/>`,
  'regular': `<path d="M7.424 2.83A1.25 1.25 0 0 1 8.602 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.79 8h3.958c1.104 0 1.666 1.327.898 2.12l-.67.692a1.73 1.73 0 0 0-1.311-.803l.493-.509h-4.41a.75.75 0 0 1-.71-.987l1.67-5.013h-5.93l-3.262 9.157a.25.25 0 0 0 .234.333l2.502.01a.75.75 0 0 1 .729.914l-1.473 6.578 7.858-8.11-1.437 3.638-5.344 5.516c-1.054 1.088-2.872.106-2.541-1.372l1.27-5.668-1.57-.006a1.75 1.75 0 0 1-1.641-2.337zm10.77 8.645 3.75 9.495a.75.75 0 0 1-1.351.643l-.044-.092-.998-2.525h-4.11l-.996 2.525a.75.75 0 0 1-.876.453l-.097-.03a.75.75 0 0 1-.453-.876l.03-.098 3.75-9.495a.73.73 0 0 1 .45-.434.77.77 0 0 1 .546.02c.14.058.264.162.349.309zm-2.161 6.021h2.926l-1.463-3.705z"/>`
} as const;

export default function FlashAutoIcon({ 
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

  const gradientId = 'flashautoicon_gradient';
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