
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.268 21.001h-6.536A2 2 0 1 1 9 18.267V15l-3.27.001a2 2 0 0 1-1.582.994L4 16a2 2 0 0 1-1-3.732V5.732A2 2 0 1 1 5.732 3h6.536A2 2 0 1 1 15 5.732V9h3.268a2 2 0 0 1 1.583-.995L20 8a2 2 0 0 1 1.002 3.731v6.538A2 2 0 1 1 18.268 21h-6.536zm0-10L15 11l.001 1.268a2 2 0 0 1 .994 1.583L16 14a2 2 0 0 1-3.732 1.001L11.001 15l.001 3.269c.303.175.555.428.73.73h6.536a2 2 0 0 1 .733-.732v-6.534a2 2 0 0 1-.639-.585zM13 11l-1.268.001a2 2 0 0 1-.73.73L11.001 13h1.267a2 2 0 0 1 .732-.732zm-.732-5.999H5.732a2 2 0 0 1-.73.73v6.537c.302.176.555.429.73.732h3.269v-1.267a2 2 0 0 1-.996-1.584L8 10a2 2 0 0 1 3.732-1H13V5.732a2 2 0 0 1-.638-.584z"/>`,
  'regular': `<path d="M18.669 21H11.33a1.75 1.75 0 1 1-2.325-2.334v-3.671H5.334a1.76 1.76 0 0 1-1.44 1L3.75 16A1.75 1.75 0 0 1 3 12.668V5.331A1.75 1.75 0 1 1 5.332 3h7.337a1.75 1.75 0 1 1 2.327 2.335l-.001 3.67h3.671a1.75 1.75 0 0 1 1.44-.998L20.25 8a1.75 1.75 0 0 1 .752 3.33v7.34A1.75 1.75 0 1 1 18.669 21H11.33zm.002-10.495-3.676-.001v2.16c.55.261.943.801.994 1.438l.006.143a1.75 1.75 0 0 1-3.331.75h-2.158v3.677c.362.173.654.466.826.828h7.336c.173-.364.469-.66.833-.832v-7.336a1.76 1.76 0 0 1-.749-.676zm-5.176-.001h-2.166c-.172.36-.463.652-.822.824l-.001 2.167h2.157a1.76 1.76 0 0 1 .832-.832zM12.668 4.5H5.333a1.76 1.76 0 0 1-.832.832v7.337c.362.172.655.465.828.826h3.677v-2.16a1.75 1.75 0 0 1-1-1.441L8 9.75a1.75 1.75 0 0 1 3.334-.746h2.161V5.329a1.76 1.76 0 0 1-.746-.678z"/>`
} as const;

export default function PairIcon({ 
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

  const gradientId = 'pairicon_gradient';
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