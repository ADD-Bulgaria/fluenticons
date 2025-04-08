
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 4.5V1.25L13.75 5H10.5c-.28 0-.5-.22-.5-.5m-1 0c0 .83.67 1.5 1.5 1.5H14v7.5c0 .83-.67 1.5-1.5 1.5H7.91c.06-.16.09-.32.09-.5V13l1.2-1.6c.24-.31.34-.72.28-1.11-.05-.4-.26-.75-.58-.99-.25-.19-.58-.3-.9-.3h-.15l-.07.02c-.39.05-.74.26-.98.58l-.3.4-.3-.4c-.24-.32-.58-.52-.99-.59L5.07 9H5c-.33 0-.65.11-.9.3-.04.03-.07.06-.1.09V2.5C4 1.67 4.67 1 5.5 1H9zM1.5 10h1a1.5 1.5 0 1 1 0 3H2v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5m.5 2h.5a.5.5 0 1 0 0-1H2zm5 .666L8.4 10.8a.5.5 0 0 0-.1-.7.5.5 0 0 0-.7.1l-1.1 1.467L5.4 10.2a.5.5 0 1 0-.8.6L6 12.666V14.5a.5.5 0 1 0 1 0z"/>`,
  'regular': `<path d="m9.65 1.44 2.91 2.91c.28.28.44.67.44 1.06V13c0 1.1-.9 2-2 2H7.91c.06-.16.09-.33.09-.5V14h3c.55 0 1-.45 1-1V6H9.5C8.67 6 8 5.33 8 4.5V2H5c-.55 0-1 .45-1 1v6.39c-.03.02-.05.04-.07.06-.28-.19-.6-.33-.93-.39V3c0-1.1.9-2 2-2h3.59c.39 0 .78.16 1.06.44M9 4.5c0 .28.22.5.5.5h2.29L9 2.21zM1.5 10h1a1.5 1.5 0 1 1 0 3H2v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5m.5 2h.5a.5.5 0 1 0 0-1H2zm5 .666L8.4 10.8a.5.5 0 0 0-.1-.7.5.5 0 0 0-.7.1l-1.1 1.467L5.4 10.2a.5.5 0 1 0-.8.6L6 12.666V14.5a.5.5 0 1 0 1 0z"/>`
} as const;

export default function DocumentPyIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documentpyicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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