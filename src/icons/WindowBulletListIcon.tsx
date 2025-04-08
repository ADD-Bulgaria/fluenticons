
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.578 9.11a1 1 0 0 0-.078.39 1.2 1.2 0 0 0 .078.4.84.84 0 0 0 .211.31q.142.135.32.212a1 1 0 0 0 .391.078.8.8 0 0 0 .391-.078 1.1 1.1 0 0 0 .32-.22A.97.97 0 0 0 7.5 9.5a1 1 0 0 0-.078-.39.9.9 0 0 0-.219-.32 1.1 1.1 0 0 0-.32-.211A1 1 0 0 0 6.5 8.5a.86.86 0 0 0-.391.08 1 1 0 0 0-.531.529m0 4a1 1 0 0 0-.078.39 1.2 1.2 0 0 0 .078.399.84.84 0 0 0 .211.312q.142.133.32.21a1 1 0 0 0 .391.079.8.8 0 0 0 .391-.078q.18-.08.32-.218.135-.137.211-.313a1 1 0 0 0 0-.781.9.9 0 0 0-.219-.321 1.1 1.1 0 0 0-.32-.21.9.9 0 0 0-.383-.08.84.84 0 0 0-.391.08 1 1 0 0 0-.531.531M9.549 10a.56.56 0 0 1-.387-.148v-.004a.462.462 0 0 1 0-.7A.56.56 0 0 1 9.55 9h4.4a.56.56 0 0 1 .387.152.463.463 0 0 1 0 .7.56.56 0 0 1-.387.148zm-.387 3.852A.56.56 0 0 0 9.55 14h4.4a.56.56 0 0 0 .506-.305.46.46 0 0 0-.119-.543.56.56 0 0 0-.387-.152h-4.4a.56.56 0 0 0-.505.306.46.46 0 0 0 .118.542zM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 14V7h12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"/>`,
  'regular': `<path d="M5.578 9.11a1 1 0 0 0-.078.39 1.2 1.2 0 0 0 .078.4.84.84 0 0 0 .211.31q.142.135.32.212a1 1 0 0 0 .391.078.8.8 0 0 0 .391-.078 1.1 1.1 0 0 0 .32-.22A.97.97 0 0 0 7.5 9.5a1 1 0 0 0-.078-.39.9.9 0 0 0-.219-.32 1.1 1.1 0 0 0-.32-.211A1 1 0 0 0 6.5 8.5a.86.86 0 0 0-.391.08 1 1 0 0 0-.531.529m0 4a1 1 0 0 0-.078.39 1.2 1.2 0 0 0 .078.399.84.84 0 0 0 .211.312q.142.133.32.21a1 1 0 0 0 .391.079.8.8 0 0 0 .391-.078q.18-.08.32-.218.135-.137.211-.313a1 1 0 0 0 0-.781.9.9 0 0 0-.219-.321 1.1 1.1 0 0 0-.32-.21.9.9 0 0 0-.383-.08.84.84 0 0 0-.391.08 1 1 0 0 0-.531.531M9.549 10a.56.56 0 0 1-.387-.148v-.004a.462.462 0 0 1 0-.7A.56.56 0 0 1 9.55 9h4.4a.56.56 0 0 1 .387.152.463.463 0 0 1 0 .7.56.56 0 0 1-.387.148zm-.387 3.852A.56.56 0 0 0 9.55 14h4.4a.56.56 0 0 0 .506-.305.46.46 0 0 0-.119-.543.56.56 0 0 0-.387-.152h-4.4a.56.56 0 0 0-.505.306.46.46 0 0 0 .118.542zM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2zm10 3H4v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"/>`
} as const;

export default function WindowBulletListIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'windowbulletlisticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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