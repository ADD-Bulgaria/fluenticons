
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24.001 14.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5M11.71 10.258a4.25 4.25 0 0 0-2.907 7.987l7.872 2.865a.5.5 0 0 1 .329.47v4.438c0 .353-.068.703-.2 1.03l-4.49 11.112a4.25 4.25 0 1 0 7.882 3.184l1.229-3.04A13 13 0 0 1 21 35c0-6.149 4.269-11.3 10.005-12.653v-.768a.5.5 0 0 1 .329-.47l7.872-2.864a4.25 4.25 0 1 0-2.908-7.988l-3.812 1.388c-.82.298-1.422.896-1.805 1.544a7.75 7.75 0 0 1-6.677 3.81 7.75 7.75 0 0 1-6.677-3.81c-.384-.648-.986-1.246-1.806-1.544zM45 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-4.293-4.707a1 1 0 0 0-1.414 0L32 37.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414"/>`,
  'regular': `<path d="M20.003 10.5a4 4 0 0 0 2.226 3.586l.492.179a3.75 3.75 0 0 0 2.566 0l.491-.179a4 4 0 1 0-5.775-3.586m-2.194 1.977A6.5 6.5 0 0 1 24.004 4a6.5 6.5 0 0 1 6.195 8.477l6.1-2.22a4.25 4.25 0 0 1 2.907 7.988l-8.201 2.985v1.117a13 13 0 0 0-2.5.868v-2.16a2.25 2.25 0 0 1 1.48-2.115l8.366-3.044a1.75 1.75 0 1 0-1.197-3.29l-10.4 3.785a6.5 6.5 0 0 1-2.75.609 6.5 6.5 0 0 1-2.751-.609l-10.399-3.784a1.75 1.75 0 0 0-1.197 3.289l8.366 3.044a2.25 2.25 0 0 1 1.48 2.114v4.964a5.3 5.3 0 0 1-.382 1.967l-4.49 11.112a1.75 1.75 0 1 0 3.246 1.311l3.6-8.91A13 13 0 0 0 21 35c0 1.142.147 2.249.424 3.304l-1.229 3.04a4.25 4.25 0 0 1-7.882-3.184l4.49-11.112c.132-.327.2-.677.2-1.03V21.23l-8.201-2.985a4.25 4.25 0 1 1 2.908-7.987zM45 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-4.293-4.707a1 1 0 0 0-1.414 0L32 37.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414"/>`
} as const;

export default function AccessibilityCheckmarkIcon({ 
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

  const gradientId = 'accessibilitycheckmarkicon_gradient';
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