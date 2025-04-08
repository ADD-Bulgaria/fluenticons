
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.267a1.98 1.98 0 0 1-.044-1.92l.564-1.088H6.5A.5.5 0 0 1 6.41 11l.09-.008h2.805l.58-1.122a1 1 0 0 0 .113-.46V8.047a.5.5 0 0 1-.408.445L9.5 8.5h-3a.5.5 0 0 1-.09-.992L6.5 7.5h2.882A1.5 1.5 0 0 1 10.5 5H13V3a2 2 0 0 0-2-2zm4.998 6.914v.038l-.006-.04zM9.59 4.992 9.5 5h-3a.5.5 0 0 1-.09-.992L6.5 4h3a.5.5 0 0 1 .09.992m4.406 4.413a2 2 0 0 0 .224.92l.35.675h-4.143l.347-.67a2 2 0 0 0 .224-.92V7H10.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-.504zM9.909 12l-.798 1.54A1 1 0 0 0 10 15h4.998a1 1 0 0 0 .888-1.46L15.087 12z"/>`,
  'regular': `<path d="M9.59 4.992A.5.5 0 0 0 9.5 4h-3l-.09.008A.5.5 0 0 0 6.5 5h3zm0 3.5a.5.5 0 0 0 .408-.445v-.095l-.006-.04a1.5 1.5 0 0 1-.61-.412H6.5l-.09.008a.5.5 0 0 0 .09.992h3zM12 3v2h1V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.267c-.173-.3-.27-.645-.27-1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1m-5.5 7.992h2.805l-.518 1H6.5A.5.5 0 0 1 6.41 11zm7.496-1.587a2 2 0 0 0 .224.92l.35.675h-4.143l.347-.67a2 2 0 0 0 .224-.92V7H10.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-.504zM9.909 12l-.798 1.54A1 1 0 0 0 10 15h4.998a1 1 0 0 0 .888-1.46L15.087 12z"/>`
} as const;

export default function DocumentOnePageBeakerIcon({ 
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

  const gradientId = 'documentonepagebeakericon_gradient';
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