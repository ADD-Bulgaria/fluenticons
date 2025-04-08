
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m17.402 4.723 2.718 10.142a2.75 2.75 0 0 1-1.945 3.368l-6.278 1.682a2.75 2.75 0 0 1-3.368-1.944L5.81 7.828A2.75 2.75 0 0 1 7.756 4.46l6.278-1.682a2.75 2.75 0 0 1 3.368 1.945m-6.438 3.019a1 1 0 1 0-1.932.517 1 1 0 0 0 1.932-.517m-5.163 3.917 1.762 6.57a3.73 3.73 0 0 0 1.002 1.713l-.443-.023a2.75 2.75 0 0 1-2.602-2.89zm-.925-1.479-.355 6.796c-.037.699.12 1.363.424 1.94l-.414-.16a2.75 2.75 0 0 1-1.582-3.553z"/>`,
  'regular': `<path d="M14.034 2.778a2.75 2.75 0 0 1 3.368 1.945l2.718 10.142a2.75 2.75 0 0 1-1.945 3.368l-6.278 1.682a2.75 2.75 0 0 1-3.368-1.944L5.81 7.828A2.75 2.75 0 0 1 7.756 4.46zm-8.233 8.88 1.762 6.571a3.73 3.73 0 0 0 1.002 1.713l-.443-.023a2.75 2.75 0 0 1-2.602-2.89zm8.621-7.431L8.144 5.909A1.25 1.25 0 0 0 7.26 7.44l2.718 10.142a1.25 1.25 0 0 0 1.53.884l6.279-1.682a1.25 1.25 0 0 0 .884-1.531L15.953 5.111a1.25 1.25 0 0 0-1.53-.884M4.876 10.18l-.355 6.796c-.037.699.12 1.363.424 1.94l-.414-.16a2.75 2.75 0 0 1-1.582-3.553zM9.74 7.035a1 1 0 1 1 .518 1.932 1 1 0 0 1-.518-1.932"/>`
} as const;

export default function StyleGuideIcon({ 
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

  const gradientId = 'styleguideicon_gradient';
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