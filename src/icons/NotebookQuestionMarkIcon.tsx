
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M18.5 15h1.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743l-.102.007H18.5zh1.75zm0-4h1.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743l-.102.007H18.5zh1.75zm0-4h1.75a.75.75 0 0 1 .743.648L21 7.75v1.498a.75.75 0 0 1-.648.743l-.102.007H18.5zh1.75z"/><path d="M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2z"/><path fill-opacity=".5" d="M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2z"/><path d="M15.249 5a.75.75 0 0 1 .75.75v2.499a.75.75 0 0 1-.75.75H7.75a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 7.75 5z"/><path d="M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2z"/><path d="M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2z"/><path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"/><path d="M6.5 19.88a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249m0-5.877c-1.048 0-1.864.817-1.853 1.954a.5.5 0 0 0 1-.01c-.006-.578.36-.944.853-.944.472 0 .853.392.853.95 0 .224-.075.39-.318.677l-.099.113-.265.29c-.484.542-.671.892-.671 1.468a.5.5 0 0 0 1 0c0-.233.076-.403.324-.695l.1-.115.266-.29c.478-.535.663-.882.663-1.448 0-1.104-.822-1.95-1.853-1.95"/>`,
  'filled': `<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25h-5.56A6.5 6.5 0 0 0 4 11.498V4.251A2.25 2.25 0 0 1 6.251 2zM6.5 19.88a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249m0-5.877c-1.048 0-1.864.817-1.853 1.954a.5.5 0 0 0 1-.01c-.006-.578.36-.944.853-.944.472 0 .853.392.853.95 0 .224-.075.39-.317.677l-.1.113-.265.29c-.484.542-.671.892-.671 1.468a.5.5 0 0 0 1 0c0-.233.076-.403.324-.695l.1-.115.266-.29c.478-.535.663-.882.663-1.448 0-1.104-.822-1.95-1.853-1.95m14.25.999a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 18H20v-2.998zm0-4a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 14H20v-2.998zm0-4a.75.75 0 0 1 .743.648l.007.102V9.25a.75.75 0 0 1-.648.743L20.75 10H20V7.002zm-6.002-1.505H8.252a.75.75 0 0 0-.743.648l-.007.102v1.504c0 .38.283.693.649.743l.101.007h6.496a.75.75 0 0 0 .743-.648l.007-.102V6.247a.75.75 0 0 0-.75-.75"/>`,
  'regular': `<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25h-5.56a6.5 6.5 0 0 0 1.078-1.499l4.482-.001a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.826a6.5 6.5 0 0 0-1.5.422V4.25A2.25 2.25 0 0 1 6.25 2zM6.5 19.88a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249m0-5.877c-1.048 0-1.864.817-1.853 1.954a.5.5 0 0 0 1-.01c-.006-.578.36-.944.853-.944.472 0 .853.392.853.95 0 .224-.075.39-.317.677l-.1.113-.265.29c-.484.542-.671.892-.671 1.468a.5.5 0 0 0 1 0c0-.233.076-.403.324-.695l.1-.115.266-.29c.478-.535.663-.882.663-1.448 0-1.104-.822-1.95-1.853-1.95m14.25.999a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 18H20v-2.998zm0-4a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 14H20v-2.998zm0-4a.75.75 0 0 1 .743.648l.007.102V9.25a.75.75 0 0 1-.648.743L20.75 10H20V7.002zM15.249 5a.75.75 0 0 1 .75.75v2.499a.75.75 0 0 1-.75.75H7.75a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 7.75 5zm-.75 1.5H8.5v.999h5.999z"/>`
} as const;

export default function NotebookQuestionMarkIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'notebookquestionmarkicon_gradient';
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