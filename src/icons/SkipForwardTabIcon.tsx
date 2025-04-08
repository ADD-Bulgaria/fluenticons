import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 3.25a1 1 0 1 0-2 0v2.729c-1.068-1.08-2.378-1.971-3.954-2.46a11.44 11.44 0 0 0-7.394.197c-2.364.88-4.604 2.664-5.779 4.807a1 1 0 0 0 1.754.961c.911-1.662 2.74-3.156 4.722-3.893a9.44 9.44 0 0 1 6.106-.16c1.474.456 2.698 1.39 3.682 2.569H15.75a1 1 0 1 0 0 2H21a1 1 0 0 0 1-1zM6 15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2 .5v3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5"/>`,
  'regular': `<path d="M21.5 3.75a.75.75 0 0 0-1.5 0v3.4c-1.154-1.388-2.65-2.563-4.528-3.145a11.2 11.2 0 0 0-7.233.192c-2.316.862-4.504 2.61-5.646 4.693a.75.75 0 1 0 1.315.72c.944-1.722 2.825-3.252 4.854-4.007a9.7 9.7 0 0 1 6.266-.165c1.702.527 3.071 1.664 4.13 3.062H15.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75zM8 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm-2 .5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/>`
} as const;

export default function SkipForwardTabIcon({ 
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

  const gradientId = 'skipforwardtabicon_gradient';
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