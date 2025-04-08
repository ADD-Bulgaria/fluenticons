
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.658 5.78a1.25 1.25 0 0 0-2.316 0l-3.25 8a1.25 1.25 0 0 0 2.316.94l.496-1.22h3.192l.496 1.22a1.25 1.25 0 0 0 2.316-.94zM7.5 9.57 8.08 11H6.92zM2.75 20.25c0-.69.56-1.25 1.25-1.25h24a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25m0 6c0-.69.56-1.25 1.25-1.25h24a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25M14.25 5C13.56 5 13 5.56 13 6.25v8c0 .69.56 1.25 1.25 1.25H17a3.25 3.25 0 0 0 2.28-5.566A3.25 3.25 0 0 0 16.5 5zm1.25 8v-1.5H17a.75.75 0 0 1 0 1.5zm1-4h-1V7.5h1a.75.75 0 0 1 0 1.5m7 1.25c0-1.13.289-1.82.607-2.203.301-.364.704-.547 1.195-.547.56 0 1.014.237 1.347.847a1.25 1.25 0 1 0 2.194-1.199C28.086 5.761 26.805 5 25.303 5c-1.195 0-2.319.483-3.122 1.453-.787.95-1.181 2.26-1.181 3.797s.394 2.848 1.181 3.797c.803.97 1.927 1.453 3.121 1.453 1.506 0 2.79-.765 3.546-2.158a1.25 1.25 0 0 0-2.196-1.193c-.333.613-.788.851-1.35.851-.491 0-.894-.183-1.195-.547-.318-.384-.607-1.073-.607-2.203"/>`,
  'regular': `<path d="M7.5 5a1 1 0 0 1 .916.6l3.5 8a1 1 0 1 1-1.832.8L9.471 13H5.53l-.613 1.4a1 1 0 0 1-1.832-.8l3.5-8A1 1 0 0 1 7.5 5m1.096 6L7.5 8.495 6.404 11zM4 19a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2zm0 6a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2zm9-19a1 1 0 0 1 1-1h2.5a3 3 0 0 1 2.455 4.725A3 3 0 0 1 17 15h-3a1 1 0 0 1-1-1zm2 5v2h2a1 1 0 0 0 0-2zm0-2h1.5a1 1 0 0 0 0-2H15zm8 1c0-1.176.294-1.93.65-2.371A1.64 1.64 0 0 1 24.98 7c.66 0 1.23.32 1.604 1.178a1 1 0 1 0 1.833-.8C27.757 5.866 26.514 5 24.979 5a3.64 3.64 0 0 0-2.884 1.371C21.373 7.264 21 8.51 21 10s.373 2.736 1.095 3.629A3.64 3.64 0 0 0 24.98 15c1.535 0 2.778-.866 3.438-2.378a1 1 0 1 0-1.833-.8C26.21 12.681 25.64 13 24.98 13a1.64 1.64 0 0 1-1.329-.629c-.356-.44-.65-1.195-.65-2.371"/>`
} as const;

export default function TextAbcUnderlineDoubleIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'textabcunderlinedoubleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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