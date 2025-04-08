
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.994 4.345c.466-.519 1.314-.7 1.834-.533.316.1.526.315.617.535a.68.68 0 0 1-.076.666c-.28.417-.741.482-1.47.489h-.133a1 1 0 1 0 0 2h.133c.729.007 1.19.072 1.47.49a.68.68 0 0 1 .076.665.98.98 0 0 1-.617.536c-.52.166-1.368-.015-1.834-.534a1 1 0 0 0-1.488 1.337c1.002 1.116 2.676 1.503 3.931 1.101 1.677-.536 2.739-2.516 1.591-4.222a3 3 0 0 0-.295-.373q.156-.166.295-.373c1.148-1.706.086-3.686-1.59-4.222-1.256-.402-2.93-.015-3.932 1.102a1 1 0 0 0 1.488 1.336M3 2a1 1 0 0 1 1 1v2.5h3V3.002a1 1 0 0 1 2 0v6.993a1 1 0 1 1-2 0V7.5H4V10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m14.557 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M2 20a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M2.75 2a.75.75 0 0 1 .75.75V5.5h4V2.752a.75.75 0 1 1 1.5 0v7.492a.75.75 0 0 1-1.5 0V7h-4v3.25a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 2.75 2m14.807 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M2.75 19a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM2 14.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75m9.794-10.557c.572-.601 1.608-.822 2.291-.616.429.13.715.405.84.688.117.267.11.57-.105.871-.394.553-1.06.611-1.836.616h-.129a.75.75 0 0 0 0 1.5h.129c.776.005 1.442.064 1.836.616.214.301.222.605.104.87-.124.284-.41.56-.838.689-.684.207-1.72-.015-2.292-.616a.75.75 0 0 0-1.088 1.033c.983 1.034 2.616 1.38 3.813 1.019.812-.245 1.462-.802 1.778-1.52.324-.734.276-1.6-.255-2.345a2.8 2.8 0 0 0-.453-.496q.244-.206.453-.496c.53-.745.579-1.61.255-2.345-.316-.718-.966-1.275-1.778-1.52-1.197-.361-2.83-.015-3.813 1.019a.75.75 0 1 0 1.088 1.033"/>`
} as const;

export default function TextHeader3LinesCaretIcon({ 
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

  const gradientId = 'textheader3linescareticon_gradient';
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