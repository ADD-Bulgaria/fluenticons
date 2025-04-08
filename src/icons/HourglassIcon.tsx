import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.25 4.5H6.75a.25.25 0 0 0-.25.25v.6A3.24 3.24 0 0 0 7.92 8L10 9.48c.42.278.77.65 1.02 1.089a2.8 2.8 0 0 1 0 2.862c-.25.438-.6.811-1.02 1.089L7.92 16a3.24 3.24 0 0 0-1.42 2.65v.6a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25v-.6A3.24 3.24 0 0 0 16.08 16L14 14.52a3.2 3.2 0 0 1-1.02-1.089 2.8 2.8 0 0 1 0-2.862c.25-.438.6-.811 1.02-1.089L16.08 8a3.24 3.24 0 0 0 1.42-2.65v-.6a.25.25 0 0 0-.25-.25"/>`,
  'regular': `<path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v.42a5.75 5.75 0 0 1-2.792 4.93l-1.81 1.086a.75.75 0 0 0-.036 1.263l2.121 1.443A5.75 5.75 0 0 1 20 18.647v.603A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25v-.604a5.75 5.75 0 0 1 2.517-4.754l2.121-1.443a.75.75 0 0 0-.036-1.263L6.792 10.1A5.75 5.75 0 0 1 4 5.17zM6.75 3.5c-.69 0-1.25.56-1.25 1.25v.42a4.25 4.25 0 0 0 2.063 3.643L9.373 9.9c1.41.845 1.467 2.866.108 3.79l-2.12 1.442A4.25 4.25 0 0 0 5.5 18.647v.603c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-.604a4.25 4.25 0 0 0-1.86-3.514l-2.121-1.442c-1.359-.924-1.302-2.945.107-3.79l1.81-1.087A4.25 4.25 0 0 0 18.5 5.17v-.42c0-.69-.56-1.25-1.25-1.25z"/>`
} as const;

export default function HourglassIcon({ 
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

  const gradientId = 'hourglassicon_gradient';
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