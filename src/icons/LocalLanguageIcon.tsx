
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.001 2a1 1 0 1 0 0 2h5v2.5c0 .828-.317 1.417-.801 1.817-.505.417-1.264.683-2.2.683a1 1 0 1 0 0 2c1.296 0 2.537-.367 3.474-1.141C19.432 9.067 20 7.906 20 6.5V3a1 1 0 0 0-1-1zm-2.073 5.615a1 1 0 0 0-1.85 0L2.077 24.619a1 1 0 1 0 1.849.762l1.808-4.39h8.54l1.807 4.39a1 1 0 0 0 1.85-.762l-1.96-4.76a1 1 0 0 0-.195-.471zm2.521 11.377H6.556l3.447-8.37zM22 2a1 1 0 0 1 1 1v5h2a1 1 0 1 1 0 2h-2v9a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"/>`,
  'regular': `<path d="M12.75 2a.75.75 0 0 0 0 1.5h5.75v2.805c0 1.75-1.749 3.195-3.75 3.195a.75.75 0 0 0 0 1.5C17.314 11 20 9.126 20 6.305V2.75a.75.75 0 0 0-.75-.75zm-2.057 5.463a.75.75 0 0 0-1.386 0l-7.25 17.5a.75.75 0 0 0 1.386.574l2.088-5.039h8.942l2.088 5.04a.75.75 0 0 0 1.386-.575l-2.204-5.316a.75.75 0 0 0-.146-.353zm3.158 11.535H6.152L10 9.709zM22.25 2a.75.75 0 0 1 .75.75V8.5h2.25a.75.75 0 0 1 0 1.5H23v9.25a.75.75 0 0 1-1.5 0V9.3a1 1 0 0 1 0-.1V2.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function LocalLanguageIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'locallanguageicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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