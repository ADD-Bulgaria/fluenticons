
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.707 3.293a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 0 0 1.414 1.414L11 6.414V15a1 1 0 1 0 2 0V6.414l1.793 1.793a1 1 0 1 0 1.414-1.414zM4 12.75a.75.75 0 0 1 .75-.75H9a1 1 0 1 0 0-2H4.75A2.75 2.75 0 0 0 2 12.75v4.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25v-4.5A2.75 2.75 0 0 0 19.25 10H15a1 1 0 1 0 0 2h4.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75z"/>`,
  'regular': `<path d="M4.794 9.997h4.698a.75.75 0 0 1 .102 1.493l-.102.007H4.794c-.672 0-1.203.45-1.267 1.001l-.006.112-.021 4.776c0 .561.49 1.046 1.14 1.104l.133.006h14.454c.672 0 1.203-.45 1.267-1.001l.006-.112.02-4.776c0-.561-.488-1.046-1.14-1.104l-.132-.006h-4.695a.75.75 0 0 1-.102-1.493l.102-.007h4.695c1.46 0 2.676 1.066 2.767 2.446l.006.167L22 17.386c0 1.4-1.16 2.52-2.599 2.605l-.174.005H4.773c-1.46 0-2.676-1.067-2.767-2.446L2 17.383l.02-4.776c0-1.4 1.16-2.521 2.6-2.605zh4.698zm7.652-6.85.084.073 3.925 3.925a.75.75 0 0 1-.976 1.133l-.084-.073-2.657-2.66.002 9.709a.75.75 0 0 1-1.5 0V5.569L8.606 8.205a.75.75 0 0 1-.976.073l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L11.47 3.22a.75.75 0 0 1 .976-.073"/>`
} as const;

export default function DockIcon({ 
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

  const gradientId = 'dockicon_gradient';
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