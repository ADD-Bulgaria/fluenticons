
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.586 6.414a2 2 0 0 0 1.9.527 2 2 0 1 0-1.923-.55zM2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.586 6.414a2 2 0 0 0 1.9.527A2.004 2.004 0 0 0 10 5a2 2 0 1 0-3.437 1.39zM6.26 7.445l-2.445 8.56Q3.906 16 4 16c.648 0 1.248.206 1.739.555l2.446-8.56a3 3 0 0 1-1.923-.55M17.171 6h-6.342a3 3 0 0 0 0-2h6.342a3 3 0 0 0 0 2m-5.65 13.577A3.7 3.7 0 0 1 12.36 18H6.83a3 3 0 0 1 0 2h4.586zm8.664-11.583-.961 3.364c-.3.152-.58.354-.831.604l-1.991 1.991 1.86-6.508a3 3 0 0 0 1.922.55M19.1 12.67l-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`,
  'regular': `<path d="M18.882 6.658a2 2 0 0 0 1.33.33 2 2 0 1 0-1.33-.33M2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.882 6.658a2 2 0 0 0 1.33.33A2.002 2.002 0 0 0 9.855 4.25a2 2 0 1 0-2.973 2.408m-2.805 9.343 2.404-8.414c.425.25.917.399 1.442.412L5.52 16.413A3 3 0 0 0 4.077 16M17.095 5.75h-6.19a3 3 0 0 0 0-1.5h6.19a3 3 0 0 0 0 1.5M11.52 19.577c.12-.482.337-.933.634-1.327h-5.25a3 3 0 0 1 0 1.5h4.573zm8.402-11.578-1.011 3.54q-.277.18-.52.423l-1.626 1.627 1.715-6.002c.425.25.917.399 1.442.412m-.823 4.67-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`
} as const;

export default function SelectObjectSkewEditIcon({ 
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

  const gradientId = 'selectobjectskewediticon_gradient';
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