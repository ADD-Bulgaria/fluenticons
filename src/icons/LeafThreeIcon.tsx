
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.5 2a5.5 5.5 0 0 0-4.905 3.008 7 7 0 0 1 5.49 3.125q.69-.132 1.415-.133h3.478q.021-.247.022-.5V3.44A1.44 1.44 0 0 0 17.56 2zM8.426 17.997 8.25 18a6 6 0 0 1-6-6V7.514C2.25 6.678 2.928 6 3.764 6H8.25c1.966 0 3.712.946 4.806 2.407a7.52 7.52 0 0 0-3.938 3.15L7.53 9.97a.75.75 0 0 0-1.06 1.06l1.96 1.96A7.5 7.5 0 0 0 8 15.5c0 .876.15 1.716.426 2.497M9 15.5A6.5 6.5 0 0 1 15.5 9h4.914C21.29 9 22 9.71 22 10.586V15.5a6.5 6.5 0 0 1-10.535 5.096L10.28 21.78a.75.75 0 1 1-1.06-1.06l1.184-1.185A6.47 6.47 0 0 1 9 15.5m3.177 4.383 4.603-4.603a.75.75 0 1 0-1.06-1.06l-4.603 4.603c.303.4.66.757 1.06 1.06"/>`,
  'regular': `<path d="M19 7.5a5.5 5.5 0 0 1-.207 1.5h1.62C21.29 9 22 9.71 22 10.586V15.5a6.5 6.5 0 0 1-10.535 5.096L10.28 21.78a.75.75 0 1 1-1.06-1.06l1.184-1.185a6.5 6.5 0 0 1-.954-1.655q-.584.12-1.2.12a6 6 0 0 1-6-6V7.514C2.25 6.678 2.928 6 3.764 6h4.443A5.5 5.5 0 0 1 13.5 2h4.06c.795 0 1.44.645 1.44 1.44zM9.722 6.182a6 6 0 0 1 3.879 3.1A6.5 6.5 0 0 1 15.5 9h1.71a4 4 0 0 0 .29-1.5v-4h-4a4 4 0 0 0-3.778 2.682m2.813 13.344A5 5 0 0 0 20.5 15.5v-4.914a.086.086 0 0 0-.086-.086H15.5a5 5 0 0 0-4.026 7.965l4.246-4.245a.75.75 0 1 1 1.06 1.06zM9 15.5c0-.592.08-1.166.228-1.711L6.47 11.03a.75.75 0 1 1 1.06-1.06l2.318 2.317a6.53 6.53 0 0 1 2.375-2.402A4.5 4.5 0 0 0 8.25 7.5H3.759l-.005.004-.003.005-.001.005V12a4.5 4.5 0 0 0 5.316 4.426A7 7 0 0 1 9 15.5"/>`
} as const;

export default function LeafThreeIcon({ 
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

  const gradientId = 'leafthreeicon_gradient';
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