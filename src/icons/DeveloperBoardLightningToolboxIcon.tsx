
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 2.5a.5.5 0 0 0-1 0V4h-.5A2.5 2.5 0 0 0 4 6.5V7H2.5a.5.5 0 0 0 0 1H4v1.5H2.5a.5.5 0 0 0 0 1H4V12H2.5a.5.5 0 0 0 0 1H4v.5A2.5 2.5 0 0 0 6.5 16H7v1.5a.5.5 0 0 0 1 0V16h1v-2.5q0-.346.09-.667a.4.4 0 0 1-.067-.375L9.456 11H7.899a.4.4 0 0 1-.307-.657l2.668-3.188c.291-.348.85-.051.726.385L10.57 9h1.53c.167 0 .297.097.36.226A2.5 2.5 0 0 1 13.5 9h2q.257 0 .5.05V8h1.5a.5.5 0 0 0 0-1H16v-.5A2.5 2.5 0 0 0 13.5 4H13V2.5a.5.5 0 0 0-1 0V4h-1.5V2.5a.5.5 0 0 0-1 0V4H8zm4 9.5v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5m4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0"/>`,
  'regular': `<path d="M7.5 2a.5.5 0 0 1 .5.5V4h1.5V2.5a.5.5 0 0 1 1 0V4H12V2.5a.5.5 0 0 1 1 0V4h.5A2.5 2.5 0 0 1 16 6.5V7h1.5a.5.5 0 0 1 0 1H16v1.05a2.5 2.5 0 0 0-.5-.05H15V6.5A1.5 1.5 0 0 0 13.5 5h-7A1.5 1.5 0 0 0 5 6.5v7A1.5 1.5 0 0 0 6.5 15H9v1H8v1.5a.5.5 0 0 1-1 0V16h-.5A2.5 2.5 0 0 1 4 13.5V13H2.5a.5.5 0 0 1 0-1H4v-1.5H2.5a.5.5 0 0 1 0-1H4V8H2.5a.5.5 0 0 1 0-1H4v-.5A2.5 2.5 0 0 1 6.5 4H7V2.5a.5.5 0 0 1 .5-.5m3.542 9.042c.15-.81.69-1.482 1.417-1.816A.4.4 0 0 0 12.1 9h-1.53l.417-1.46c.124-.436-.435-.733-.726-.385l-2.668 3.188A.4.4 0 0 0 7.9 11h1.557l-.433 1.458a.4.4 0 0 0 .067.375 2.5 2.5 0 0 1 1.952-1.791M12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5m4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0"/>`
} as const;

export default function DeveloperBoardLightningToolboxIcon({ 
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

  const gradientId = 'developerboardlightningtoolboxicon_gradient';
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