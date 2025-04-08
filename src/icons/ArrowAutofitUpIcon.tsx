
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m12.952 5.898.084-.098 2.355-2.357c.179-.273.504-.443.86-.443.323 0 .619.14.805.368l.005.007.046.064L19.465 5.8l.085.098.005.008a1 1 0 0 1 .01 1.177l-.006.008-.099.117-.106.091-.007.006a1 1 0 0 1-1.177.01l-.009-.007-.11-.093-.801-.801v13.69l-.008.108-.002.01c-.072.463-.51.778-.99.778s-.918-.315-.99-.779l-.002-.01-.008-.108V6.414l-.8.8-.097.085-.008.006a1 1 0 0 1-1.399-1.4zM4 6.492a2.5 2.5 0 0 1 2.5-2.5h4a1 1 0 1 1 0 2h-4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h6a1 1 0 1 1 0 2h-6a2.5 2.5 0 0 1-2.5-2.5z"/>`,
  'regular': `<path d="M13.22 6.781a.75.75 0 0 1-.073-.976l.073-.085 2.367-2.37a.77.77 0 0 1 .664-.35c.252 0 .475.109.611.276l.053.075 2.367 2.37.073.084a.75.75 0 0 1 .007.882l-.08.094-.084.073a.75.75 0 0 1-.883.007l-.094-.08L17 5.56v14.784l-.007.089c-.05.32-.363.567-.743.567s-.694-.247-.743-.567l-.007-.09V5.56l-1.22 1.221-.084.073a.75.75 0 0 1-.976-.073M6.25 3.992A2.25 2.25 0 0 0 4 6.242v11.5a2.25 2.25 0 0 0 2.25 2.25h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 1-.75-.75v-11.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function ArrowAutofitUpIcon({ 
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

  const gradientId = 'arrowautofitupicon_gradient';
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