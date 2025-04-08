
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m9.97 16.168 4.59-12.511c.306-.835 1.446-.873 1.829-.114l.049.114 5.501 14.996a1 1 0 0 1-1.83.796l-.047-.107L18.65 15.5h-6.305l-1.442 3.92-.04.079-.073.108-.077.09-.085.077-.083.06-.05.032-.084.043-.104.04-.105.028-.133.02-.107.001-.071-.005-.103-.016-.15-.044-.069-.03-.1-.055-.111-.08-.092-.086-.064-.076-.061-.09-.054-.102-.746-1.913H4.655l-.723 1.86a1 1 0 0 1-1.183.606l-.111-.036a1 1 0 0 1-.606-1.184l.036-.11L5.567 9.64c.315-.81 1.42-.848 1.81-.116l.054.116zl4.59-12.511zm-3.471-3.407L5.433 15.5h2.131zm9-5.856-2.42 6.594h4.838z"/>`,
  'regular': `<path d="M10.212 17.11 15.043 3.5c.223-.627 1.07-.664 1.365-.111l.049.11 5.5 15.5a.75.75 0 0 1-1.373.596l-.04-.094L18.945 15h-6.394l-1.58 4.452a.75.75 0 0 1-.354.452l-.093.044a.75.75 0 0 1-.929-.33l-.044-.092L8.556 17H4.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876l.03-.098 3.754-9.495a.75.75 0 0 1 1.345-.104l.05.105zL15.043 3.5zm-3.71-5.318L5.037 15.5h2.928zm9.248-5.8L13.084 13.5h5.33z"/>`
} as const;

export default function TextFontSizeIcon({ 
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

  const gradientId = 'textfontsizeicon_gradient';
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