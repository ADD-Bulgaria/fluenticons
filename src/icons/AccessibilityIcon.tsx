
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 14.5A5.25 5.25 0 1 0 24 4a5.25 5.25 0 0 0 0 10.5m-12.292-4.242a4.25 4.25 0 0 0-2.907 7.987l7.872 2.865a.5.5 0 0 1 .329.47v4.438c0 .353-.068.703-.2 1.03l-4.49 11.112a4.25 4.25 0 1 0 7.882 3.184l3.343-8.274a.5.5 0 0 1 .928 0l3.343 8.274a4.25 4.25 0 0 0 7.883-3.184l-4.488-11.104a2.8 2.8 0 0 1-.2-1.03v-4.447a.5.5 0 0 1 .33-.47l7.872-2.864a4.25 4.25 0 1 0-2.908-7.988l-3.812 1.388c-.82.298-1.422.896-1.805 1.544a7.75 7.75 0 0 1-6.677 3.81 7.75 7.75 0 0 1-6.677-3.81c-.384-.648-.986-1.246-1.806-1.544z"/>`,
  'regular': `<path d="M20.002 10.5a4 4 0 0 0 2.226 3.586l.492.179a3.75 3.75 0 0 0 2.566 0l.491-.179a4 4 0 1 0-5.775-3.586m-2.194 1.977A6.5 6.5 0 0 1 24.003 4a6.5 6.5 0 0 1 6.194 8.477l6.1-2.22a4.25 4.25 0 0 1 2.908 7.988l-8.201 2.985v4.796c0 .353.067.703.2 1.03L35.69 38.16a4.25 4.25 0 1 1-7.882 3.185l-3.807-9.422-3.807 9.421a4.25 4.25 0 0 1-7.882-3.184l4.49-11.112c.132-.327.2-.677.2-1.03V21.23L8.8 18.245a4.25 4.25 0 1 1 2.907-7.987zm3.444 3.914-10.399-3.784a1.75 1.75 0 0 0-1.197 3.289l8.365 3.044a2.25 2.25 0 0 1 1.481 2.114v4.964c0 .674-.13 1.342-.382 1.967l-4.49 11.112a1.75 1.75 0 1 0 3.245 1.311l4.04-9.995c.758-1.877 3.414-1.877 4.172 0l4.04 9.995a1.75 1.75 0 0 0 3.245-1.311l-4.487-11.105a5.3 5.3 0 0 1-.382-1.966v-4.972c0-.945.592-1.79 1.481-2.114l8.365-3.044a1.75 1.75 0 1 0-1.197-3.29l-10.398 3.785a6.5 6.5 0 0 1-2.751.609 6.5 6.5 0 0 1-2.751-.609"/>`
} as const;

export default function AccessibilityIcon({ 
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

  const gradientId = 'accessibilityicon_gradient';
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