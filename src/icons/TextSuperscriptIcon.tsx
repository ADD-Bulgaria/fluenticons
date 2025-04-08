
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.736 3.75c-.387 0-.736.365-.736.773a1 1 0 1 1-2 0c0-1.365 1.102-2.773 2.736-2.773.93 0 1.843.435 2.36 1.23.548.842.546 1.918-.052 2.936-.306.522-.722.908-1.105 1.21-.193.152-.39.292-.568.419l-.078.055c-.153.108-.292.206-.426.307a4 4 0 0 0-.41.343h1.994a1 1 0 0 1 0 2H17a1 1 0 0 1-1-1c0-1.517.902-2.367 1.664-2.941.161-.121.328-.238.48-.346l.073-.051c.177-.126.335-.24.482-.355.295-.233.494-.438.621-.654.27-.46.177-.714.1-.832-.108-.165-.352-.321-.684-.321M11.317 12l4.4-5.133q.201-.295.425-.537a2 2 0 0 1-1.14-1.703L10 10.463 4.76 4.35a1 1 0 1 0-1.52 1.302L8.684 12l-5.442 6.35a1 1 0 0 0 1.518 1.3L10 13.538l5.24 6.114a1 1 0 0 0 1.52-1.302z"/>`,
  'regular': `<path d="M18.736 3.5c-.543 0-.986.495-.986 1.023a.75.75 0 0 1-1.5 0C16.25 3.278 17.258 2 18.736 2c.855 0 1.684.4 2.15 1.117.49.751.5 1.724-.057 2.672-.285.484-.673.847-1.045 1.141-.187.148-.379.284-.557.41l-.078.056a18 18 0 0 0-.432.311c-.356.268-.619.511-.78.793h2.514a.75.75 0 0 1 0 1.5H17a.75.75 0 0 1-.75-.75c0-1.396.821-2.182 1.565-2.741.157-.119.32-.234.472-.341l.074-.052c.177-.126.34-.243.493-.363.306-.242.532-.47.682-.724.31-.53.229-.886.093-1.094-.158-.244-.486-.435-.893-.435M15.26 4.71a1.75 1.75 0 0 0 .847 1.318L10.987 12l5.583 6.512a.75.75 0 1 1-1.14.976L10 13.152l-5.43 6.336a.75.75 0 0 1-1.14-.976L9.013 12 3.431 5.488a.75.75 0 1 1 1.139-.976L10 10.848z"/>`
} as const;

export default function TextSuperscriptIcon({ 
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

  const gradientId = 'textsuperscripticon_gradient';
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