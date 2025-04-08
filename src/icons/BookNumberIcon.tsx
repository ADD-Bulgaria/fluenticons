
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.978 9.98h1.49l-.362 1.586H11.59zM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm7.024 3.07-.223.91H9.73l-.102.007a.75.75 0 0 0-.648.743l.007.102a.75.75 0 0 0 .743.648h.703l-.388 1.586-.796.001-.102.007a.75.75 0 0 0-.648.743l.007.102a.75.75 0 0 0 .743.648h.429l-.123.506-.018.1a.75.75 0 0 0 .568.807l.1.018a.75.75 0 0 0 .807-.568l.21-.864h1.539l-.118.518-.016.1a.75.75 0 0 0 .58.799l.1.016a.75.75 0 0 0 .799-.58l.194-.853.94.001.102-.007a.75.75 0 0 0 .649-.743l-.007-.102a.75.75 0 0 0-.743-.648h-.597l.363-1.587h.72l.102-.007a.75.75 0 0 0 .648-.743l-.007-.101a.75.75 0 0 0-.743-.649h-.376l.13-.564.016-.1a.75.75 0 0 0-.58-.798l-.1-.016a.75.75 0 0 0-.798.58l-.207.898h-1.468l.136-.553.018-.1a.75.75 0 0 0-1.475-.256"/>`,
  'regular': `<path d="m11.024 7.57-.223.91H9.73l-.102.007a.75.75 0 0 0-.648.743l.007.102a.75.75 0 0 0 .743.648h.703l-.388 1.586-.796.001-.102.007a.75.75 0 0 0-.648.743l.007.102a.75.75 0 0 0 .743.648h.429l-.123.506-.018.1a.75.75 0 0 0 .568.807l.1.018a.75.75 0 0 0 .807-.568l.21-.864h1.539l-.118.518-.016.1a.75.75 0 0 0 .58.799l.1.016a.75.75 0 0 0 .799-.58l.194-.853.94.001.102-.007a.75.75 0 0 0 .649-.743l-.007-.102a.75.75 0 0 0-.743-.648h-.597l.363-1.587h.72l.102-.007a.75.75 0 0 0 .648-.743l-.007-.101a.75.75 0 0 0-.743-.649h-.376l.13-.564.016-.1a.75.75 0 0 0-.58-.798l-.1-.016a.75.75 0 0 0-.798.58l-.207.898h-1.468l.136-.553.018-.1a.75.75 0 0 0-1.475-.256m.954 2.41h1.49l-.362 1.586H11.59zM6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"/>`
} as const;

export default function BookNumberIcon({ 
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

  const gradientId = 'booknumbericon_gradient';
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